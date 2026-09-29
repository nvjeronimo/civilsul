// Filtro do portefólio: botões com aria-pressed; sem JavaScript todas as obras ficam visíveis.
const bar = document.querySelector<HTMLElement>('[data-filter]');
const grid = document.querySelector<HTMLElement>('[data-works]');
const status = document.querySelector<HTMLElement>('[data-filter-status]');

if (bar && grid) {
  const buttons = [...bar.querySelectorAll<HTMLButtonElement>('button[data-kind]')];
  const cards = [...grid.querySelectorAll<HTMLElement>('[data-kind]')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  bar.hidden = false;

  const apply = (kind: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.kind === kind)));
    cards.forEach((c) => { c.hidden = kind !== 'all' && c.dataset.kind !== kind; });
    grid.classList.toggle('is-filtered', kind !== 'all');
  };

  bar.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-kind]');
    if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
    const kind = btn.dataset.kind!;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduce.matches) doc.startViewTransition(() => apply(kind));
    else apply(kind);
    if (status) status.textContent = `${status.dataset.prefix}: ${btn.textContent?.trim()}`;
  });
}
