// Filtro do Anexo A por tipo de obra. Sem JS: todas as obras visíveis e os botões escondidos.
const bar = document.querySelector<HTMLElement>('[data-filter]');
if (bar) {
  const items = [...document.querySelectorAll<HTMLElement>('[data-kind]')];
  const count = document.querySelector<HTMLElement>('[data-count]');
  const buttons = [...bar.querySelectorAll<HTMLButtonElement>('button[data-k]')];
  bar.hidden = false;
  const apply = (k: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === k)));
    let n = 0;
    items.forEach((el) => { const on = k === 'all' || el.dataset.kind === k; el.hidden = !on; if (on) n++; });
    if (count) count.textContent = String(n);
    const url = new URL(location.href);
    if (k === 'all') url.searchParams.delete('tipo'); else url.searchParams.set('tipo', k);
    history.replaceState(null, '', url);
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.k!)));
  const pre = new URLSearchParams(location.search).get('tipo');
  if (pre && buttons.some((b) => b.dataset.k === pre)) apply(pre);
}
