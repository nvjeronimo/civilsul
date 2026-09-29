// Menu móvel + assentamento das placas (uma vez, só transform; nada com movimento reduzido).

const head = document.querySelector<HTMLElement>('[data-menu]');
const btn = head?.querySelector<HTMLButtonElement>('[data-menu-btn]');
const panel = head?.querySelector<HTMLElement>('[data-menu-panel]');

if (head && btn && panel) {
  const label = btn.querySelector<HTMLElement>('[data-open-label]');
  const set = (open: boolean, focusBtn = false) => {
    head.toggleAttribute('data-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = (open ? label.dataset.closeLabel : label.dataset.openLabel) ?? '';
    if (open) panel.querySelector<HTMLElement>('a')?.focus();
    else if (focusBtn) btn.focus();
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && head.hasAttribute('data-open')) set(false, true);
  });
  document.addEventListener('click', (e) => {
    if (head.hasAttribute('data-open') && !head.contains(e.target as Node)) set(false);
  });
  panel.addEventListener('focusout', (e) => {
    const to = e.relatedTarget as Node | null;
    if (head.hasAttribute('data-open') && to && !head.contains(to)) set(false);
  });
  matchMedia('(min-width: 64rem)').addEventListener('change', (e) => { if (e.matches) set(false); });
}

const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!still && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-bolting');
        io.unobserve(e.target);
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
  );
  document.querySelectorAll('[data-bolt]').forEach((el) => io.observe(el));
}
