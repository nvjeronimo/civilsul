// Assinatura: cada barra pinta-se da esquerda para a direita quando a sua parede entra em vista.
// Sem JS, ou com movimento reduzido, as barras já estão pintadas. Só se "despintam" as que ainda
// estão abaixo da dobra no momento em que o script corre, para nunca apagar o que já se viu.
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

if (!reduce.matches && 'IntersectionObserver' in window) {
  const below = [...document.querySelectorAll<HTMLElement>('[data-barra]')].filter(
    (el) => el.getBoundingClientRect().top > innerHeight,
  );
  if (below.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-painted');
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    for (const el of below) {
      el.classList.add('is-wet');
      io.observe(el);
    }
  }
}
