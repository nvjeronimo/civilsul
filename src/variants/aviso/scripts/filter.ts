// Filtro das obras por tipo. Sem JS todas as obras ficam visíveis e os botões não aparecem.
const group = document.querySelector<HTMLElement>('[data-filter-group]');
const list = document.getElementById('tapume');
if (group && list) {
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const items = [...list.querySelectorAll<HTMLElement>('li[data-kind]')];
  const status = group.querySelector<HTMLElement>('[data-filter-status]');
  const apply = (kind: string, announce = true) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === kind)));
    items.forEach((li) => (li.hidden = kind !== 'all' && li.dataset.kind !== kind));
    if (announce && status) {
      const label = buttons.find((b) => b.dataset.filter === kind)?.textContent?.trim() ?? '';
      status.textContent = `${status.dataset.prefix}: ${label}`;
    }
    const url = new URL(location.href);
    if (kind === 'all') url.searchParams.delete('tipo'); else url.searchParams.set('tipo', kind);
    history.replaceState(null, '', url);
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter ?? 'all')));
  const pre = new URLSearchParams(location.search).get('tipo');
  if (pre && buttons.some((b) => b.dataset.filter === pre)) apply(pre, false);
}
