// Comportamento comum da variante Padrão: cabeçalho ao rolar, menu móvel, revelação única das secções.

const header = document.querySelector<HTMLElement>('[data-header]');

// 1. Cabeçalho: transparente sobre a fotografia, branco com sombra depois de rolar
if (header) {
  let ticking = false;
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  };
  update();
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
}

// 2. Menu móvel
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const panel = document.querySelector<HTMLElement>('[data-menu]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');

function setMenu(open: boolean) {
  if (!panel || !openBtn) return;
  panel.hidden = !open;
  openBtn.setAttribute('aria-expanded', String(open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
  const main = document.getElementById('main');
  const footer = document.querySelector('footer');
  const bar = document.querySelector('.mbar');
  [main, footer, bar].forEach((el) => el?.toggleAttribute('inert', open));
  if (open) panel.querySelector<HTMLElement>('.menu__nav a')?.focus();
  else openBtn.focus();
}

openBtn?.addEventListener('click', () => setMenu(true));
closeBtn?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && panel && !panel.hidden) setMenu(false);
});
// Foco preso no painel enquanto aberto
panel?.addEventListener('keydown', (e) => {
  if (e.key !== 'Tab') return;
  const items = [...panel.querySelectorAll<HTMLElement>('a[href], button')];
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
window.matchMedia('(min-width: 60rem)').addEventListener('change', (e) => { if (e.matches && panel && !panel.hidden) setMenu(false); });

// 3. Revelação: só o que ainda está abaixo do ecrã, uma vez, 12px
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) { en.target.classList.remove('is-pending'); io.unobserve(en.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  for (const el of els) {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('is-pending');
      io.observe(el);
    }
  }
}
