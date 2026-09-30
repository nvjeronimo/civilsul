// Livro de Obra: um só momento de movimento.
// 1) A abertura: a prova de abertura assenta na página e o carimbo é batido uma vez (1,08 → 1, 500 ms).
// 2) Cada prova seguinte assenta na sua página quando entra em vista (desce, endireita-se, a sombra encosta).
// Tudo é visível sem JS; com movimento reduzido nada se move. Também controla o cabeçalho corrido da secretária.
const root = document.documentElement;
root.classList.add('js');

// Cabeçalho corrido: escondido enquanto a abertura (que já tem índice e contactos) está à vista.
const hero = document.querySelector('[data-hero]');
if (hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    ([e]) => root.classList.toggle('rh-on', !e.isIntersecting),
    { rootMargin: '-120px 0px 0px 0px' },
  ).observe(hero);
} else {
  root.classList.add('rh-on');
}

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canAnimate = 'animate' in Element.prototype;
const SETTLE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const PRESS = 'cubic-bezier(0.2, 0.9, 0.3, 1)';
const REST = '0 1px 1px rgb(26 29 34 / 0.08), 0 2px 4px rgb(26 29 34 / 0.06), 0 14px 26px -12px rgb(26 29 34 / 0.34)';
const LIFT = '0 2px 2px rgb(26 29 34 / 0.05), 0 10px 18px rgb(26 29 34 / 0.08), 0 34px 48px -18px rgb(26 29 34 / 0.3)';

function settle(el: HTMLElement, delay = 0) {
  // o CSS já aplica rotate: var(--r); a animação só compõe o desvio extra por cima
  const r = Number(el.dataset.r ?? 0);
  el.animate(
    [
      { transform: `translate3d(0, -14px, 0) rotate(${r < 0 ? 1.6 : -1.6}deg) scale(1.018)`, boxShadow: LIFT },
      { transform: 'none', boxShadow: REST },
    ],
    { duration: 900, delay, easing: SETTLE, fill: 'backwards' },
  );
}

if (!reduce && canAnimate) {
  const prints = [...document.querySelectorAll<HTMLElement>('[data-settle]')];
  const first = document.querySelector<HTMLElement>('.print--hero [data-settle]');
  if (first) settle(first);

  const stamp = document.querySelector<HTMLElement>('[data-stamp]');
  if (stamp) {
    stamp.animate(
      [
        { transform: 'scale(1.08)', opacity: 0 },
        { transform: 'scale(1.08)', opacity: 0.35, offset: 0.25 },
        { transform: 'scale(1)', opacity: 1 },
      ],
      { duration: 500, delay: 520, easing: PRESS, fill: 'backwards' },
    );
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        let n = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          settle(e.target as HTMLElement, n++ * 90);
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.02 },
    );
    prints.filter((p) => p !== first).forEach((p) => io.observe(p));
  }
}
