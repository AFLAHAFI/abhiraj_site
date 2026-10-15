/* 360° panorama viewer (no libraries).
   - WebGL: the equirectangular image is projected onto the screen, so it looks like standing inside the room.
   - Drag (mouse or finger) to look around, +/− buttons or Ctrl+wheel / pinch to zoom, arrow keys, full-screen button.
   - Slowly turns by itself until you touch it; pauses when off screen.
   - If WebGL is unavailable it falls back to a flat panning view, and finally to the plain picture. */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TAU = Math.PI * 2;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  document.querySelectorAll('[data-pano]').forEach(init);

  function init(box) {
    const canvas = box.querySelector('.pano-canvas');
    const hint = box.querySelector('.pano-hint');
    if (!canvas) return;

    const MIN_FOV = 40 * Math.PI / 180, MAX_FOV = 100 * Math.PI / 180;
    let yaw = -0.5, pitch = 0.02, fov = 82 * Math.PI / 180;
    let vYaw = 0, vPitch = 0, dragging = false, lastX = 0, lastY = 0, lastT = 0;
    let auto = !reduce, idleAt = performance.now(), dirty = true, visible = false, ready = false;
    let w = 0, h = 0, mode = 'none', gl, ctx2, img, uniforms = {}, raf = 0, lastFrame = 0;
    const pointers = new Map();
    let pinchStart = 0, pinchFov = 0;

    /* ---------- loading the picture ---------- */
    function load() {
      const start = src => {
        img = new Image();
        img.decoding = 'async';
        img.onload = () => { setup(); };
        img.onerror = () => { box.dataset.mode = 'picture'; };
        img.src = src;
      };
      if (location.protocol === 'file:') {
        // WebGL refuses plain files opened from disk; the embedded copy avoids that
        const s = document.createElement('script');
        s.src = 'pano-data.js';
        s.onload = () => start(window.PANO_DATA || box.dataset.pano);
        s.onerror = () => start(box.dataset.pano);
        document.head.appendChild(s);
      } else start(box.dataset.pano);
    }

    /* ---------- WebGL ---------- */
    const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const FS = 'precision highp float;uniform sampler2D t;uniform vec2 r;uniform float yaw,pitch,fov;' +
      'void main(){vec2 q=(gl_FragCoord.xy-.5*r)/r.y;float f=.5/tan(.5*fov);vec3 d=normalize(vec3(q.x,q.y,f));' +
      'float cp=cos(pitch),sp=sin(pitch);d=vec3(d.x,d.y*cp+d.z*sp,-d.y*sp+d.z*cp);' +
      'float cy=cos(yaw),sy=sin(yaw);d=vec3(d.x*cy+d.z*sy,d.y,-d.x*sy+d.z*cy);' +
      'float lon=atan(d.x,d.z);float lat=asin(clamp(d.y,-1.,1.));' +
      'gl_FragColor=texture2D(t,vec2(lon/6.2831853+.5,.5-lat/3.1415927));}';

    function initGL() {
      gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' }) ||
           canvas.getContext('experimental-webgl');
      if (!gl) return false;
      const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
      const vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS);
      if (!vs || !fs) return false;
      const prog = gl.createProgram();
      gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
      gl.useProgram(prog);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      ['t', 'r', 'yaw', 'pitch', 'fov'].forEach(n => { uniforms[n] = gl.getUniformLocation(prog, n); });
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img); } catch (e) { return false; }
      if (gl.getError() !== gl.NO_ERROR) return false;
      gl.uniform1i(uniforms.t, 0);
      return true;
    }

    function setup() {
      if (initGL()) mode = 'webgl';
      else {
        // fresh canvas: a canvas that tried WebGL cannot give a 2D context
        const c2 = canvas.cloneNode(false); canvas.replaceWith(c2);
        ctx2 = c2.getContext('2d');
        if (ctx2) { mode = 'flat'; canvasRef = c2; } else mode = 'picture';
      }
      box.dataset.mode = mode;
      if (mode === 'picture') return;
      ready = true; resize(); dirty = true; kick();
      box.classList.add('is-live');
    }
    let canvasRef = canvas;

    /* ---------- drawing ---------- */
    function draw() {
      if (mode === 'webgl') {
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uniforms.r, w, h);
        gl.uniform1f(uniforms.yaw, yaw);
        gl.uniform1f(uniforms.pitch, pitch);
        gl.uniform1f(uniforms.fov, fov);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      } else if (mode === 'flat') {
        const iw = img.naturalWidth, ih = img.naturalHeight, aspect = w / h;
        const hf = 2 * Math.atan(Math.tan(fov / 2) * aspect);
        const sw = Math.min(iw, iw * hf / TAU), sh = Math.min(ih, ih * fov / Math.PI);
        const cx = (yaw / TAU + 0.5) * iw, x0 = ((cx - sw / 2) % iw + iw) % iw;
        const y0 = clamp((0.5 - pitch / Math.PI) * ih - sh / 2, 0, ih - sh);
        const first = Math.min(sw, iw - x0);
        ctx2.drawImage(img, x0, y0, first, sh, 0, 0, w * first / sw, h);
        if (first < sw) ctx2.drawImage(img, 0, y0, sw - first, sh, w * first / sw, 0, w * (sw - first) / sw, h);
      }
    }

    function frame(now) {
      raf = 0;
      if (!visible || !ready) return;
      const dt = Math.min(64, now - (lastFrame || now)); lastFrame = now;
      if (!dragging) {
        if (Math.abs(vYaw) > 1e-5 || Math.abs(vPitch) > 1e-5) {
          yaw += vYaw * dt; pitch += vPitch * dt;
          const k = Math.pow(0.0045, dt / 1000); vYaw *= k; vPitch *= k; dirty = true;
        } else if (auto && now - idleAt > 1200) { yaw += dt * 0.00011; dirty = true; }
        else if (!auto && !reduce && now - idleAt > 9000) auto = true;   // resume the slow turn after a long pause
      }
      pitch = clamp(pitch, -1.45, 1.45);
      if (yaw > Math.PI) yaw -= TAU; else if (yaw < -Math.PI) yaw += TAU;
      if (dirty) { draw(); dirty = false; }
      kick();
    }
    function kick() { if (!raf && visible && ready) raf = requestAnimationFrame(frame); }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = box.getBoundingClientRect();
      const nw = Math.max(2, Math.round(r.width * dpr)), nh = Math.max(2, Math.round(r.height * dpr));
      if (nw === w && nh === h) return;
      w = nw; h = nh;
      canvasRef.width = w; canvasRef.height = h; dirty = true;
    }

    /* ---------- interaction ---------- */
    const touched = () => { auto = false; idleAt = performance.now(); if (hint) hint.classList.add('is-hidden'); };
    function zoom(delta) { fov = clamp(fov + delta, MIN_FOV, MAX_FOV); dirty = true; touched(); kick(); }

    box.addEventListener('pointerdown', e => {
      if (e.target.closest('button')) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { box.setPointerCapture(e.pointerId); } catch (_) { /* not critical */ }
      if (pointers.size === 1) { dragging = true; lastX = e.clientX; lastY = e.clientY; lastT = e.timeStamp; vYaw = vPitch = 0; box.classList.add('is-drag'); }
      else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchStart = Math.hypot(a.x - b.x, a.y - b.y); pinchFov = fov; dragging = false;
      }
      touched();
    });
    box.addEventListener('pointermove', e => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchStart) { fov = clamp(pinchFov * pinchStart / d, MIN_FOV, MAX_FOV); dirty = true; kick(); }
        return;
      }
      if (!dragging) return;
      const k = fov / Math.max(1, box.clientHeight);
      const dx = e.clientX - lastX, dy = e.clientY - lastY, dt = Math.max(1, e.timeStamp - lastT);
      yaw -= dx * k; pitch += dy * k;
      vYaw = clamp(-dx * k / dt, -0.01, 0.01); vPitch = clamp(dy * k / dt, -0.01, 0.01);
      lastX = e.clientX; lastY = e.clientY; lastT = e.timeStamp; dirty = true; touched(); kick();
    });
    const up = e => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchStart = 0;
      if (!pointers.size) { dragging = false; box.classList.remove('is-drag'); if (e.timeStamp - lastT > 90) vYaw = vPitch = 0; kick(); }
    };
    box.addEventListener('pointerup', up);
    box.addEventListener('pointercancel', up);
    box.addEventListener('wheel', e => { if (!e.ctrlKey) return; e.preventDefault(); zoom(e.deltaY * 0.0012); }, { passive: false });
    box.addEventListener('keydown', e => {
      const step = fov * 0.12;
      const map = { ArrowLeft: () => { yaw -= step; }, ArrowRight: () => { yaw += step; }, ArrowUp: () => { pitch += step; }, ArrowDown: () => { pitch -= step; },
                    '+': () => zoom(-0.1), '=': () => zoom(-0.1), '-': () => zoom(0.1) };
      if (map[e.key]) { e.preventDefault(); map[e.key](); dirty = true; touched(); kick(); }
    });
    box.querySelectorAll('[data-pano-zoom]').forEach(b => b.addEventListener('click', () => zoom(-parseFloat(b.dataset.panoZoom) * 0.16)));
    const fs = box.querySelector('[data-pano-fs]');
    if (fs) {
      if (!document.fullscreenEnabled) fs.hidden = true;
      fs.addEventListener('click', () => { if (document.fullscreenElement) document.exitFullscreen(); else box.requestFullscreen && box.requestFullscreen(); });
      document.addEventListener('fullscreenchange', () => { box.classList.toggle('is-full', document.fullscreenElement === box); resize(); dirty = true; kick(); });
    }

    /* ---------- lifecycle ---------- */
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) { lastFrame = 0; if (!ready && !img) load(); kick(); } }, { rootMargin: '200px' }).observe(box);
    if ('ResizeObserver' in window) new ResizeObserver(() => { if (ready) { resize(); kick(); } }).observe(box);
    else addEventListener('resize', () => { if (ready) { resize(); kick(); } });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) { lastFrame = 0; kick(); } });
    canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); ready = false; box.classList.remove('is-live'); box.dataset.mode = 'picture'; });
    box.panoDebug = () => ({ mode, yaw, pitch, fov, w, h });
  }
})();
