// Folha "Pedido de orçamento nº …": número e data do rascunho, o marcador amarelo na linha preenchida mais recente
// e, no telemóvel, a tira fixa que resume a folha e a abre por inteiro.
// O conteúdo das linhas é escrito por src/scripts/quote.ts em [data-summary]; aqui só se observa.
const sheet = document.querySelector<HTMLElement>('[data-sheet]');
const list = document.querySelector<HTMLElement>('[data-summary]');
const strip = document.querySelector<HTMLButtonElement>('[data-strip]');

if (sheet) {
  const lang = document.documentElement.lang.startsWith('pt') ? 'pt-PT' : 'en-GB';
  const now = new Date();
  const dateEl = sheet.querySelector('[data-sheet-date]');
  if (dateEl) dateEl.textContent = now.toLocaleDateString(lang, { day: '2-digit', month: '2-digit', year: 'numeric' });
  let no = '';
  try { no = localStorage.getItem('civilsul-mapa-no') || ''; } catch {}
  if (!no) {
    const p = (n: number) => String(n).padStart(2, '0');
    no = `${String(now.getFullYear()).slice(2)}${p(now.getMonth() + 1)}${p(now.getDate())}-${p(Math.floor(Math.random() * 90) + 10)}`;
    try { localStorage.setItem('civilsul-mapa-no', no); } catch {}
  }
  document.querySelectorAll('[data-sheet-no]').forEach((el) => (el.textContent = no));
}

// Tira móvel: botão com aria-expanded que abre/fecha a folha como painel
if (sheet && strip) {
  strip.hidden = false;
  sheet.setAttribute('data-drawer', '');
  const set = (open: boolean, refocus = false) => {
    strip.setAttribute('aria-expanded', String(open));
    sheet.toggleAttribute('data-open', open);
    if (!open && refocus) strip.focus();
  };
  strip.addEventListener('click', () => set(strip.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && strip.getAttribute('aria-expanded') === 'true') set(false, true); });
  matchMedia('(min-width: 1100px)').addEventListener('change', () => set(false));
}

if (list) {
  const countEl = strip?.querySelector('[data-strip-count]');
  const newEl = strip?.querySelector<HTMLElement>('[data-strip-new]');
  const read = () => [...list.children].map((r) => (r.getAttribute('data-filled') === 'true' ? r.querySelector('dd')?.textContent ?? '' : ''));
  let last = read();
  let newest = -1;

  const paintStrip = (sweep: boolean) => {
    if (countEl) countEl.textContent = String(last.filter(Boolean).length);
    if (!newEl || newest === -1) return;
    const row = list.children[newest];
    const k = document.createElement('span');
    k.textContent = row.querySelector('dt')?.textContent ?? '';
    const v = document.createElement('b');
    v.textContent = row.querySelector('dd')?.textContent ?? '';
    if (sweep) v.className = 'is-sweep';
    newEl.replaceChildren(k, v);
  };

  const mo = new MutationObserver(() => {
    const now = read();
    let changed = -1;
    now.forEach((v, i) => { if (v && v !== last[i]) changed = i; });
    const sweep = changed !== -1 && changed !== newest;
    if (changed !== -1) newest = changed;
    if (newest !== -1 && !now[newest]) newest = -1;
    last = now;
    [...list.children].forEach((r, i) => {
      r.classList.toggle('is-new', i === newest);
      r.classList.toggle('is-sweep', i === newest && sweep);
    });
    paintStrip(sweep);
  });
  mo.observe(list, { childList: true });
  // rascunho recuperado: a última linha preenchida fica marcada, sem varrimento
  for (let i = last.length - 1; i >= 0; i--) if (last[i]) { newest = i; break; }
  if (newest !== -1) list.children[newest]?.classList.add('is-new');
  paintStrip(false);
}
