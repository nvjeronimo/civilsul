// Factos da Civilsul. Só o que o site atual (civilsul.pt) afirma. Não acrescentar números sem confirmação.
export const SITE = {
  name: 'Civilsul',
  legalName: 'Construtora do Sul, Lda.',
  since: 1985,
  permit: '4511',
  email: 'civilsul@sapo.pt',
  mobile: { display: '+351 912 276 607', tel: '+351912276607', wa: '351912276607' },
  landlines: [
    { display: '289 399 226', tel: '+351289399226' },
    { display: '289 393 903', tel: '+351289393903' },
  ],
  address: {
    street: 'Caminho da Nobreza, Cascalheira',
    postal: '8125-018',
    city: 'Quarteira',
    region: 'Algarve',
    country: 'PT',
  },
  // Coordenadas aproximadas de Cascalheira, Quarteira (confirmar com o cliente)
  geo: { lat: 37.0869, lng: -8.0858 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caminho+da+Nobreza+Cascalheira+8125-018+Quarteira',
} as const;

export type Lang = 'pt' | 'en';
export type Variant = 'mapa' | 'mostruario' | 'padrao';

export const VARIANTS: { id: Variant; name: string; line: { pt: string; en: string }; langs: Lang[] }[] = [
  { id: 'mapa', name: 'Mapa de Quantidades', line: { pt: 'O site como o orçamento de um construtor sério.', en: 'The site as a serious builder’s bill of quantities.' }, langs: ['pt', 'en'] },
  { id: 'mostruario', name: 'Mostruário', line: { pt: 'Cada serviço é uma amostra de material tirada das obras reais.', en: 'Every service is a material sample cut from real work.' }, langs: ['pt'] },
  { id: 'padrao', name: 'Padrão do setor', line: { pt: 'O site de construtora esperado, com acabamento a sério.', en: 'The expected builder site, finished properly.' }, langs: ['pt', 'en'] },
];

// Nota obrigatória junto de números de telefone (DL 59/2021)
export const CALL_NOTE = {
  mobile: { pt: 'Chamada para a rede móvel nacional', en: 'Call to a Portuguese mobile network' },
  landline: { pt: 'Chamada para a rede fixa nacional', en: 'Call to a Portuguese landline' },
};

export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Caminhos por idioma. Chave → segmento PT / EN. */
const SEG = {
  home: { pt: '', en: '' },
  services: { pt: 'servicos', en: 'services' },
  works: { pt: 'obras', en: 'work' },
  quote: { pt: 'orcamento', en: 'quote' },
  contact: { pt: 'contactos', en: 'contact' },
  about: { pt: 'empresa', en: 'company' },
  privacy: { pt: 'privacidade', en: 'privacy' },
} as const;
export type PageKey = keyof typeof SEG;

export function href(variant: Variant, lang: Lang, key: PageKey, slug?: string) {
  const parts = [variant];
  if (lang === 'en') parts.push('en');
  const seg = SEG[key][lang];
  if (seg) parts.push(seg);
  if (slug) parts.push(slug);
  return BASE + parts.join('/') + '/';
}

export const tel = (n: string) => `tel:${n}`;

export function whatsapp(lang: Lang, text?: string) {
  const t = text ?? (lang === 'pt' ? 'Olá Civilsul, gostava de pedir um orçamento.' : 'Hello Civilsul, I would like to request a quote.');
  return `https://wa.me/${SITE.mobile.wa}?text=${encodeURIComponent(t)}`;
}

export const UI = {
  pt: {
    nav: { services: 'Serviços', works: 'Obras', about: 'Empresa', contact: 'Contactos', quote: 'Pedir orçamento' },
    langSwitch: 'English',
    skip: 'Saltar para o conteúdo',
    since: 'Desde 1985',
    permit: 'Alvará nº 4511',
    area: 'Algarve e restante país',
    call: 'Ligar',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Morada',
    directions: 'Ver no mapa',
    menu: 'Menu',
    close: 'Fechar',
    allWorks: 'Todas as obras',
    allServices: 'Todos os serviços',
    related: 'Obras relacionadas',
    includes: 'Inclui',
    photos: 'Fotografias',
    privacy: 'Privacidade',
    rights: 'Todos os direitos reservados.',
    demo: 'Proposta de redesign · demonstração',
  },
  en: {
    nav: { services: 'Services', works: 'Work', about: 'Company', contact: 'Contact', quote: 'Request a quote' },
    langSwitch: 'Português',
    skip: 'Skip to content',
    since: 'Since 1985',
    permit: 'Permit nº 4511',
    area: 'Algarve and the rest of Portugal',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    directions: 'Open in maps',
    menu: 'Menu',
    close: 'Close',
    allWorks: 'All work',
    allServices: 'All services',
    related: 'Related work',
    includes: 'Includes',
    photos: 'Photographs',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
    demo: 'Redesign proposal · demo',
  },
} as const;
