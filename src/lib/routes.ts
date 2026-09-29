// Todas as páginas de uma variante (PT e EN). Usado por src/pages/<variante>/[...path].astro.
import { SERVICES } from '../content/services';
import { WORKS } from '../content/works';
import type { Lang, PageKey } from './site';

export interface RouteProps { lang: Lang; page: PageKey; id?: string }

const SEG: Record<Exclude<PageKey, 'home'>, Record<Lang, string>> = {
  services: { pt: 'servicos', en: 'services' },
  works: { pt: 'obras', en: 'work' },
  quote: { pt: 'orcamento', en: 'quote' },
  contact: { pt: 'contactos', en: 'contact' },
  about: { pt: 'empresa', en: 'company' },
  privacy: { pt: 'privacidade', en: 'privacy' },
};

export function variantPaths(langs: Lang[] = ['pt', 'en']) {
  const out: { params: { path: string | undefined }; props: RouteProps }[] = [];
  for (const lang of langs) {
    const pre = lang === 'en' ? 'en/' : '';
    const add = (path: string, props: RouteProps) => out.push({ params: { path: (pre + path).replace(/\/$/, '') || undefined }, props });
    add('', { lang, page: 'home' });
    for (const k of Object.keys(SEG) as (keyof typeof SEG)[]) add(SEG[k][lang], { lang, page: k });
    for (const s of SERVICES) add(`${SEG.services[lang]}/${s.slug[lang]}`, { lang, page: 'services', id: s.id });
    for (const w of WORKS) add(`${SEG.works[lang]}/${w.slug[lang]}`, { lang, page: 'works', id: w.id });
  }
  return out;
}

/** Caminho equivalente no outro idioma (para o seletor PT/EN e hreflang). */
export function altPath(page: PageKey, id: string | undefined, lang: Lang) {
  if (page === 'home') return lang === 'en' ? 'en/' : '';
  const pre = lang === 'en' ? 'en/' : '';
  const seg = SEG[page as Exclude<PageKey, 'home'>][lang];
  let slug = '';
  if (id && page === 'services') slug = SERVICES.find((s) => s.id === id)!.slug[lang] + '/';
  if (id && page === 'works') slug = WORKS.find((w) => w.id === id)!.slug[lang] + '/';
  return `${pre}${seg}/${slug}`;
}
