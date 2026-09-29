// Gramática de movimento: as réguas das tabelas desenham-se da esquerda para a direita uma vez;
// as pranchas do Anexo A abrem com um varrimento em clip-path. Nada mais se move.
// O estado por omissão já é visível: sem JS ou com movimento reduzido, tudo fica como está.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

if (!reduce && 'IntersectionObserver' in window && 'animate' in Element.prototype) {
  const seen = new WeakSet<Element>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting || seen.has(e.target)) continue;
        seen.add(e.target);
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        if (el.hasAttribute('data-wipe')) {
          el.animate(
            [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }],
            { duration: 1100, easing: EASE, fill: 'backwards' },
          );
        } else {
          const rows = [...el.querySelectorAll<HTMLElement>(':scope .ru')].slice(0, 24);
          rows.forEach((r, i) =>
            r.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], {
              duration: 900, delay: i * 55, easing: EASE, fill: 'backwards', pseudoElement: '::before',
            }),
          );
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
  );
  document.querySelectorAll('[data-wipe], [data-draw]').forEach((el) => io.observe(el));
}
