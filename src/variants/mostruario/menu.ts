// Menu móvel: sem JS a lista fica visível por baixo do cabeçalho; com JS passa a painel com botão.
const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const panel = document.querySelector<HTMLElement>('[data-menu]');

if (btn && panel) {
  const mq = matchMedia('(min-width: 1100px)');
  btn.hidden = false;
  panel.hidden = true;

  const set = (open: boolean, returnFocus = false) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
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
