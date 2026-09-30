// A banda de sol percorre a página com o scroll. Onde o CSS tem scroll-driven animations, é só CSS;
// aqui fica a alternativa para os outros browsers. Com movimento reduzido, a banda fica parada.
const sun = document.querySelector<HTMLElement>('[data-sun]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

if (sun && !CSS.supports('animation-timeline: scroll()')) {
  let raf = 0;
  const set = () => {
    raf = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    sun.style.setProperty('--p', (max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0).toFixed(4));
  };
  const on = () => { if (!raf) raf = requestAnimationFrame(set); };
  const bind = () => {
    if (reduce.matches) {
      delete sun.dataset.js;
      removeEventListener('scroll', on);
      removeEventListener('resize', on);
    } else {
      sun.dataset.js = '';
      addEventListener('scroll', on, { passive: true });
      addEventListener('resize', on);
      set();
    }
  };
  bind();
  reduce.addEventListener('change', bind);
}
