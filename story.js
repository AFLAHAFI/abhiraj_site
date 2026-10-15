/* Scroll choreography for the home page.
   Every [data-fx] element is scrubbed by scroll position (so it also reverses when you scroll back up):
   - enters from its side ("left" / "right") or from below ("up"); data-s staggers siblings
   - never overlaps the fixed header: anything crossing the header line is cropped and faded out
   Also drives the progress bar and the active link in the navigation. */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width:1100px)');
  const header = document.querySelector('header');
  const bar = document.querySelector('.progress');
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const ease = t => 1 - Math.pow(1 - t, 3);

  const items = [...document.querySelectorAll('[data-fx]')].map(el => ({
    el,
    dir: el.dataset.fx || 'up',
    stagger: parseFloat(el.dataset.s || '0'),
    o: '', x: '', y: '', cut: null
  }));

  // which nav link belongs to which scene (null = none; Projects/Contact are not in-page links)
  const navFor = { home: '#home', about: '#about', services: '#about', process: '#about', work: null, experience: '#experience', tools: '#tools', contact: null };
  const scenes = Object.keys(navFor).map(id => document.getElementById(id)).filter(Boolean);
  const links = new Map([...document.querySelectorAll('#main-nav a[href^="#"]:not(.pill)')].map(a => [a.getAttribute('href'), a]));

  // decorative outline ribbons: repeat the phrase to fill any screen, slide sideways as you scroll past
  const ribbons = [...document.querySelectorAll('[data-ribbon]')].map(el => {
    const unit = el.innerHTML;
    el.innerHTML = unit + unit + unit;
    return { el, wrap: el.parentElement, dir: parseFloat(el.dataset.ribbon) || 1 };
  });

  let queued = false, activeLink = null;

  function update() {
    queued = false;
    const vh = innerHeight;
    const headLine = (header ? header.offsetHeight : 80) + 4;
    const still = reduced.matches;
    const dist = (narrow.matches ? 0 : Math.min(70, innerWidth * 0.035)) * (document.documentElement.dir === 'rtl' ? -1 : 1);

    for (const it of items) {
      const r = it.el.getBoundingClientRect();
      let o = 1, x = 0, y = 0;

      if (!still && it.dir !== 'none') {
        // 0 as the top edge enters the bottom of the viewport, 1 once it is ~20% up the screen (minus a small stagger)
        const raw = (vh - r.top) / (vh * 0.22) - it.stagger * 0.07;
        const p = ease(clamp(raw, 0, 1));
        o = p;
        const away = (1 - p);
        if (it.dir === 'left') { x = -dist * away; y = narrow.matches ? 36 * away : 0; }
        else if (it.dir === 'right') { x = dist * away; y = narrow.matches ? 36 * away : 0; }
        else y = 44 * away;
      }

      const oS = o >= 0.999 ? '' : o.toFixed(3);
      const xS = x ? x.toFixed(1) + 'px' : '';
      const yS = y ? y.toFixed(1) + 'px' : '';
      if (oS !== it.o) { it.o = oS; oS === '' ? it.el.style.removeProperty('--o') : it.el.style.setProperty('--o', oS); }
      if (xS !== it.x) { it.x = xS; xS === '' ? it.el.style.removeProperty('--x') : it.el.style.setProperty('--x', xS); }
      if (yS !== it.y) { it.y = yS; yS === '' ? it.el.style.removeProperty('--y') : it.el.style.setProperty('--y', yS); }

      // crop whatever crosses the header line
      const cut = r.top < headLine && r.bottom > 0 ? Math.round(headLine - r.top) : null;
      if (cut !== it.cut) {
        it.cut = cut;
        if (cut === null) { it.el.classList.remove('is-cut'); it.el.style.removeProperty('--cut'); }
        else { it.el.style.setProperty('--cut', cut + 'px'); it.el.classList.add('is-cut'); }
      }
    }

    checkCounters(vh);

    // ribbons
    if (!still) {
      for (const rb of ribbons) {
        const r = rb.wrap.getBoundingClientRect();
        if (r.bottom < -60 || r.top > vh + 60) continue;
        rb.el.style.transform = 'translate3d(' + (((r.top + r.height / 2) - vh / 2) * 0.35 * rb.dir).toFixed(1) + 'px,0,0)';
      }
    }

    // progress bar
    const max = Math.max(1, document.documentElement.scrollHeight - vh);
    if (bar) bar.style.setProperty('--p', clamp(scrollY / max, 0, 1).toFixed(4));

    // active navigation link
    let section = null;
    for (const sc of scenes) { if (sc.getBoundingClientRect().top <= vh * 0.4) section = sc; }
    const current = section ? links.get(navFor[section.id]) || null : null;
    if (current !== activeLink) {
      if (activeLink) activeLink.removeAttribute('aria-current');
      if (current) current.setAttribute('aria-current', 'true');
      activeLink = current;
    }
  }

  // count-up numbers: start the first time they are reached (also when the page jumps straight past them)
  const counters = !reduced.matches ? [...document.querySelectorAll('[data-count]')].map(el => ({ el, started: false })) : [];
  const startCount = (c, delay) => {
    const el = c.el, target = parseInt(el.dataset.count, 10);
    el.style.display = 'inline-block';
    el.style.minWidth = String(target).length + 'ch';
    el.style.fontVariantNumeric = 'tabular-nums';
    const t0 = performance.now() + delay, dur = 2400;
    const step = now => {
      const t = clamp((now - t0) / dur, 0, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  counters.forEach(c => { c.el.textContent = '0'; });
  function checkCounters(vh) {
    let n = 0;
    for (const c of counters) {
      if (c.started) continue;
      if (c.el.getBoundingClientRect().top < vh * 0.82) { c.started = true; startCount(c, (n++) * 140); }
    }
  }

  const request = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request, { passive: true });
  addEventListener('load', request);
  addEventListener('pageshow', request);
  reduced.addEventListener?.('change', request);
  update();
})();
