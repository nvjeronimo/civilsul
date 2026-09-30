// Menu móvel: sem JS a navegação fica visível no cabeçalho; com JS passa a painel com botão.
const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const panel = document.querySelector<HTMLElement>('[data-menu]');

if (btn && panel) {
  const mq = matchMedia('(min-width: 960px)');
  document.documentElement.classList.add('has-menu');
  btn.hidden = false;
  const set = (open: boolean, returnFocus = false) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.toggleAttribute('data-open', open);
    btn.querySelector<HTMLElement>('[data-open-l]')!.hidden = open;
    btn.querySelector<HTMLElement>('[data-close-l]')!.hidden = !open;
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
