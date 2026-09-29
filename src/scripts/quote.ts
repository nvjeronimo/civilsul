// Pedido de orçamento guiado. Comum às três variantes; cada uma desenha a sua marcação com este contrato:
//   <form data-quote data-i18n='{…}' data-wa="351…" data-email="…">
//     <fieldset data-step> … </fieldset> (um por passo, por ordem)
//     [data-prev] [data-next]            botões de navegação
//     [data-step-label]                  itens do indicador de passos (recebem aria-current="step")
//     [data-progress]                    recebe --progress (0..1) e data-current
//     [data-summary]                     preenchido com <div><dt/><dd/></div> em tempo real
//     [data-send="wa"|"email"]           botões de envio
//     [data-error-for="campo"]           mensagens de erro
//     [data-status]                      região aria-live
//   Opções de escolha: <input type="radio" name="type" value="…" data-text="Rótulo">
// Sem JavaScript o formulário mostra todos os passos e envia por email (mailto).

type Dict = Record<string, string | string[]>;
const KEY = 'civilsul-orcamento';

const REQUIRED: string[][] = [['type'], ['property', 'place'], ['timing'], ['name', 'consent']];

export function initQuote(form: HTMLFormElement) {
  const t = JSON.parse(form.dataset.i18n || '{}') as Dict;
  const steps = [...form.querySelectorAll<HTMLFieldSetElement>('[data-step]')];
  const labels = [...document.querySelectorAll<HTMLElement>('[data-step-label]')];
  const progress = document.querySelector<HTMLElement>('[data-progress]');
  const summary = document.querySelector<HTMLElement>('[data-summary]');
  const status = form.querySelector<HTMLElement>('[data-status]') ?? document.querySelector<HTMLElement>('[data-status]');
  let current = 0;

  form.classList.add('is-js');
  form.setAttribute('novalidate', '');

  // Rascunho guardado neste dispositivo
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved) for (const [k, v] of Object.entries(saved)) setField(k, String(v));
  } catch {}
  // Pré-seleção vinda de links (?tipo=remodelacao)
  const pre = new URLSearchParams(location.search).get('tipo');
  if (pre) setField('type', pre);

  function setField(name: string, value: string) {
    const els = form.querySelectorAll<HTMLInputElement>(`[name="${name}"]`);
    els.forEach((el) => {
      if (el.type === 'radio') el.checked = el.value === value;
      else if (el.type === 'checkbox') el.checked = value === 'true';
      else el.value = value;
    });
  }

  function data() {
    const out: Record<string, string> = {};
    form.querySelectorAll<HTMLInputElement>('input, textarea, select').forEach((el) => {
      if (!el.name) return;
      if (el.type === 'radio') { if (el.checked) out[el.name] = el.value; }
      else if (el.type === 'checkbox') out[el.name] = String(el.checked);
      else out[el.name] = el.value.trim();
    });
    return out;
  }

  function text(name: string) {
    const checked = form.querySelector<HTMLInputElement>(`[name="${name}"]:checked`);
    if (checked) return checked.dataset.text || checked.value;
    // campos de texto apenas: um grupo de rádio sem escolha fica vazio
    const el = form.querySelector<HTMLInputElement>(`[name="${name}"]:not([type=radio]):not([type=checkbox]):not([type=hidden])`);
    return el ? el.value.trim() : '';
  }

  function rows(): [string, string][] {
    const area = text('area');
    return [
      [t.type as string, text('type')],
      [t.property as string, text('property')],
      [t.place as string, text('place')],
      [t.area as string, area ? `${area} m²` : ''],
      [t.timing as string, text('timing')],
      [t.state as string, text('state')],
      [t.details as string, text('details')],
      [t.name as string, text('name')],
      [t.phone as string, text('phone')],
      [t.email as string, text('email')],
      [t.contactPref as string, text('pref')],
    ];
  }

  function message() {
    return `${t.subject}\n\n` + rows().filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  }

  function renderSummary() {
    if (!summary) return;
    summary.replaceChildren(
      ...rows().map(([k, v]) => {
        const row = document.createElement('div');
        row.dataset.filled = String(Boolean(v));
        const dt = document.createElement('dt');
        dt.textContent = k;
        const dd = document.createElement('dd');
        dd.textContent = v || (t.empty as string);
        row.append(dt, dd);
        return row;
      }),
    );
  }

  function error(name: string, msg: string) {
    const box = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    const field = form.querySelector<HTMLElement>(`[name="${name}"]`);
    if (box) { box.textContent = msg; box.hidden = !msg; }
    const target = field?.closest('fieldset:not([data-step]), .field') ?? field;
    target?.toggleAttribute('data-invalid', Boolean(msg));
    if (field && field instanceof HTMLInputElement && field.type !== 'radio') field.setAttribute('aria-invalid', String(Boolean(msg)));
  }

  function validate(step: number) {
    const d = data();
    let ok = true;
    let first: HTMLElement | null = null;
    for (const name of REQUIRED[step] ?? []) {
      const empty = name === 'consent' ? d.consent !== 'true' : !d[name];
      const msg = empty ? (name === 'consent' ? (t.needConsent as string) : (t.required as string)) : '';
      error(name, msg);
      if (empty) { ok = false; first ??= form.querySelector(`[name="${name}"]:not([type=hidden])`); }
    }
    if (step === 3) {
      const noContact = !d.phone && !d.email;
      error('phone', noContact ? (t.needContact as string) : '');
      if (noContact) { ok = false; first ??= form.querySelector('[name="phone"]'); }
      const badEmail = d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email);
      error('email', badEmail ? (t.invalidEmail as string) : '');
      if (badEmail) { ok = false; first ??= form.querySelector('[name="email"]'); }
    }
    first?.focus();
    return ok;
  }

  function show(i: number, focus = true) {
    current = Math.max(0, Math.min(steps.length - 1, i));
    steps.forEach((s, n) => {
      s.hidden = n !== current;
      s.toggleAttribute('data-active', n === current);
    });
    labels.forEach((l, n) => {
      if (n === current) l.setAttribute('aria-current', 'step');
      else l.removeAttribute('aria-current');
      l.toggleAttribute('data-done', n < current);
      // passos já feitos podem ser revisitados pelo teclado
      if (n < current) { l.tabIndex = 0; l.setAttribute('role', 'button'); } else { l.removeAttribute('tabindex'); l.removeAttribute('role'); }
    });
    if (progress) {
      progress.style.setProperty('--progress', String(current / Math.max(1, steps.length - 1)));
      progress.dataset.current = String(current);
    }
    form.dataset.current = String(current);
    form.querySelectorAll<HTMLElement>('[data-prev]').forEach((b) => (b.hidden = current === 0));
    form.querySelectorAll<HTMLElement>('[data-next]').forEach((b) => (b.hidden = current === steps.length - 1));
    form.querySelectorAll<HTMLElement>('[data-send]').forEach((b) => (b.hidden = current !== steps.length - 1));
    if (focus) steps[current].querySelector<HTMLElement>('legend, h2, h3')?.focus?.();
  }

  form.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-next], [data-prev], [data-send]');
    if (!el) return;
    e.preventDefault();
    if (el.hasAttribute('data-prev')) return show(current - 1);
    if (el.hasAttribute('data-next')) { if (validate(current)) show(current + 1); return; }
    for (let s = 0; s < steps.length; s++) if (!validate(s)) return show(s);
    const msg = message();
    const url = el.dataset.send === 'wa'
      ? `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(msg)}`
      : `mailto:${form.dataset.email}?subject=${encodeURIComponent(`${t.subject} · ${text('type')}`)}&body=${encodeURIComponent(msg)}`;
    window.open(url, el.dataset.send === 'wa' ? '_blank' : '_self', 'noopener');
    if (status) status.textContent = t.done as string;
  });

  labels.forEach((l, n) => {
    l.addEventListener('click', () => { if (n < current) show(n); });
    l.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && n < current) { e.preventDefault(); show(n); } });
  });

  form.addEventListener('input', (e) => {
    const name = (e.target as HTMLInputElement).name;
    if (name) error(name, '');
    renderSummary();
    try { localStorage.setItem(KEY, JSON.stringify(data())); } catch {}
    // Escolha única avança sozinha no primeiro passo
    if (name === 'type' && current === 0 && (e.target as HTMLInputElement).type === 'radio') setTimeout(() => show(1), 180);
  });

  form.addEventListener('submit', (e) => { e.preventDefault(); form.querySelector<HTMLElement>(current === steps.length - 1 ? '[data-send="wa"]' : '[data-next]')?.click(); });

  renderSummary();
  show(0, false);
}

document.querySelectorAll<HTMLFormElement>('form[data-quote]').forEach(initQuote);
