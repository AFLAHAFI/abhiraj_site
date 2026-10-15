/* Loading screen: preloads all 240 animation frames and shows a live % count.
   - Runs once per browser session (coming back from the Projects pages skips it).
   - Never blocks for long: it gives up waiting after 8 seconds and shows the page anyway. */
(() => {
  'use strict';
  const root = document.documentElement;
  const el = document.getElementById('loader');
  const done = () => { root.classList.remove('is-loading'); root.classList.add('is-ready'); if (el) el.remove(); };
  if (!el || root.classList.contains('skip-loader')) { done(); return; }

  const TOTAL = 240, MIN_MS = 1400, MAX_MS = 8000, PARALLEL = 6;
  const num = document.getElementById('loader-num');
  const fill = el.querySelector('.loader-bar i');
  const note = el.querySelector('.loader-note');
  const AR = root.lang === 'ar';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const src = i => `frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

  // order: the first frames (so the opening scroll is smooth), then every 4th across the sequence, then the rest
  const order = [], seen = new Set();
  const add = i => { if (i >= 1 && i <= TOTAL && !seen.has(i)) { seen.add(i); order.push(i); } };
  for (let i = 1; i <= 24; i++) add(i);
  for (let i = 1; i <= TOTAL; i += 4) add(i);
  for (let i = 1; i <= TOTAL; i++) add(i);

  let next = 0, active = 0, loaded = 0, shown = 0, finished = false;
  const t0 = performance.now();

  function pump() {
    while (active < PARALLEL && next < order.length) {
      const im = new Image();
      active++;
      im.onload = im.onerror = () => { active--; loaded++; pump(); };
      im.src = src(order[next++]);
    }
  }

  function render(value) {
    const v = Math.max(0, Math.min(100, Math.floor(value)));
    if (num) num.textContent = String(v).padStart(2, '0');
    if (fill) fill.style.transform = 'scaleX(' + (v / 100) + ')';
    if (note) note.textContent = (AR ? 'جارٍ تحميل الإطارات · ' : 'Loading frames · ') + Math.min(TOTAL, loaded) + ' / ' + TOTAL;
    el.setAttribute('aria-valuenow', String(v));
  }

  function finish() {
    if (finished) return;
    finished = true;
    render(100);
    if (note) note.textContent = AR ? 'جاهز' : 'Ready';
    try { sessionStorage.setItem('abhiIntro', '1'); } catch (e) { /* private mode: just show it again next time */ }
    el.classList.add('done');
    root.classList.add('is-ready');
    setTimeout(() => root.classList.remove('is-loading'), reduce ? 0 : 350);
    setTimeout(() => el.remove(), reduce ? 400 : 1100);
  }

  function tick(now) {
    if (finished) return;
    const elapsed = now - t0;
    const target = (loaded / TOTAL) * 100;
    shown += (target - shown) * 0.16;
    if (target - shown < 0.35) shown = target;
    // never count faster than the minimum show time, so the intro is readable even on a fast connection
    const display = Math.min(shown, (elapsed / MIN_MS) * 100);
    render(display);
    if (display >= 100 || elapsed > MAX_MS) { finish(); return; }
    requestAnimationFrame(tick);
  }

  render(0);
  pump();
  requestAnimationFrame(tick);
})();
