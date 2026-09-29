// Assinatura "amostra → casa".
// 1) Toque: o primeiro toque numa amostra abre-a (recorte → casa inteira); o segundo segue o link.
// 2) Parede de obras ([data-resolve]): sem JS vê-se a casa; com JS cada amostra começa no recorte
//    e resolve-se na fotografia inteira quando entra no ecrã (uma só vez).
// O hover e o foco pelo teclado são só CSS. Movimento reduzido: nada disto corre (fotografia inteira).
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const chips = [...document.querySelectorAll<HTMLElement>('[data-chip]')];
let lastPointer = 'mouse';

document.addEventListener('pointerdown', (e) => { lastPointer = e.pointerType; }, { capture: true, passive: true });
document.addEventListener('keydown', () => { lastPointer = 'key'; }, { capture: true, passive: true });

for (const chip of chips) {
  if (chip.hasAttribute('data-resolve')) continue;
  chip.addEventListener('click', (e) => {
    if (reduce || lastPointer !== 'touch') return;
    if (chip.classList.contains('is-open')) return; // segundo toque: segue o link
    e.preventDefault();
    chips.forEach((c) => c !== chip && c.classList.remove('is-open'));
    chip.classList.add('is-open');
  });
}

// Tocar fora fecha a amostra aberta
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-chip]')) return;
  chips.forEach((c) => c.classList.remove('is-open'));
});

const walls = chips.filter((c) => c.hasAttribute('data-resolve'));
if (walls.length && !reduce && 'IntersectionObserver' in window) {
  walls.forEach((c) => c.classList.add('is-crop'));
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const el = en.target as HTMLElement;
      io.unobserve(el);
      // espera um instante com a amostra à vista antes de abrir a casa
      setTimeout(() => el.classList.remove('is-crop'), 350);
    }
  }, { threshold: 0.55 });
  // dois frames: o recorte pinta primeiro, depois observa
  requestAnimationFrame(() => requestAnimationFrame(() => walls.forEach((c) => io.observe(c))));
}
