// Menu móvel. Sem JS a navegação fica visível por baixo da marca; com JS passa a painel aberto por botão.
const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const panel = document.querySelector<HTMLElement>('[data-menu]');

if (btn && panel) {
  const root = document.documentElement;
  const mq = matchMedia('(min-width: 960px)');
  root.classList.add('menu-js');
  btn.hidden = false;

  const set = (open: boolean, returnFocus = false) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    btn.querySelector<HTMLElement>('[data-open]')!.hidden = open;
    btn.querySelector<HTMLElement>('[data-close]')!.hidden = !open;
    if (open) panel.querySelector<HTMLElement>('a')?.focus();
    else if (returnFocus) btn.focus();
  };

  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') set(false, true);
  });
  panel.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false); });
  mq.addEventListener('change', () => set(false));
}
