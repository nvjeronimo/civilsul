// A banda de sol percorre a página com o scroll. Onde o CSS tem scroll-driven animations, é só CSS;
// aqui fica a alternativa para os outros browsers (--sp no <html>). Com movimento reduzido, a banda fica parada.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

if (!CSS.supports('animation-timeline: scroll()')) {
  let raf = 0;
  const set = () => {
    raf = 0;
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty('--sp', (max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0).toFixed(4));
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(set); };
  const bind = () => {
    if (reduce.matches) {
      delete root.dataset.sunjs;
      root.style.removeProperty('--sp');
      removeEventListener('scroll', on);
      removeEventListener('resize', on);
    } else {
      root.dataset.sunjs = '';
      addEventListener('scroll', on, { passive: true });
      addEventListener('resize', on);
      set();
    }
  };
  bind();
  reduce.addEventListener('change', bind);
}
