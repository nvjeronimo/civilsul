// Movimento da variante: (1) a linha do processo, um só traço curvo que liga os passos e se desenha com o scroll;
// (2) entradas discretas (16px, uma vez) para o que está abaixo da dobra. Com movimento reduzido: linha completa, sem entradas.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Linha do processo ────────────────────────────────────────────────────────
const steps = document.querySelector<HTMLElement>('[data-line]');
if (steps) {
  const svg = steps.querySelector<SVGSVGElement>('svg')!;
  const track = svg.querySelector<SVGPathElement>('[data-track]')!;
  const draw = svg.querySelector<SVGPathElement>('[data-draw]')!;
  const items = [...steps.querySelectorAll<HTMLElement>('[data-step-item]')];
  let len = 0;
  let ticking = false;

  const update = () => {
    ticking = false;
    if (reduce) { draw.style.strokeDashoffset = '0'; return; }
    const r = steps.getBoundingClientRect();
    const vh = innerHeight;
    const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.25)));
    draw.style.strokeDashoffset = String(len * (1 - p));
  };

  const build = () => {
    const w = steps.clientWidth;
    const h = steps.clientHeight;
    if (!w || !items.length) return;
    const maxR = w >= 720 ? Infinity : 60;
    const xL = 1;
    const xR = w - 1;
    const ys = items.map((el) => el.offsetTop);
    const last = items[items.length - 1];
    ys.push(Math.min(h - 1, last.offsetTop + last.offsetHeight));
    ys[0] = Math.max(1, ys[0]);
    let d = `M${xL} ${ys[0]}`;
    for (let i = 0; i < items.length; i++) {
      const r = Math.min((ys[i + 1] - ys[i]) / 2, maxR, (xR - xL) / 2 - 1);
      if (i % 2 === 0) d += ` H${xR - r} A${r} ${r} 0 0 1 ${xR} ${ys[i] + r} V${ys[i + 1] - r} A${r} ${r} 0 0 1 ${xR - r} ${ys[i + 1]}`;
      else d += ` H${xL + r} A${r} ${r} 0 0 0 ${xL} ${ys[i] + r} V${ys[i + 1] - r} A${r} ${r} 0 0 0 ${xL + r} ${ys[i + 1]}`;
    }
    d += items.length % 2 === 0 ? ` H${xR}` : ` H${xL}`;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    track.setAttribute('d', d);
    draw.setAttribute('d', d);
    len = draw.getTotalLength();
    draw.style.strokeDasharray = `${len} ${len}`;
    update();
  };

  build();
  document.fonts?.ready.then(build);
  if ('ResizeObserver' in window) new ResizeObserver(build).observe(steps);
  if (!reduce) {
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    addEventListener('scroll', onScroll, { passive: true });
  }
}

// ── Entradas ─────────────────────────────────────────────────────────────────
if (!reduce && 'IntersectionObserver' in window) {
  const els = [...document.querySelectorAll<HTMLElement>('[data-rv]')].filter((el) => el.getBoundingClientRect().top > innerHeight * 0.92);
  els.forEach((el) => el.classList.add('rv'));
  const io = new IntersectionObserver((entries) => {
    let n = 0;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      el.style.setProperty('--d', `${n++ * 80}ms`);
      el.classList.add('rv-in');
      io.unobserve(el);
    }
  }, { rootMargin: '0px 0px -6% 0px' });
  els.forEach((el) => io.observe(el));
}
