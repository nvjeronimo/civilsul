// Texto extra da variante "Padrão do setor" (PT/EN). Só reorganiza factos de PRODUCT.md e src/content; não acrescenta números.
import type { Lang } from '../../lib/site';
type T = Record<Lang, string>;

export const V = 'padrao' as const;

export const C = {
  home: { pt: 'Início', en: 'Home' },
  heroTitle: { pt: 'Construímos, reconstruímos e remodelamos no Algarve desde 1985.', en: 'Building, rebuilding and renovating in the Algarve since 1985.' },
  heroSub: { pt: 'Moradias, reconstruções, remodelações e piscinas. A mesma equipa, das fundações aos acabamentos.', en: 'Houses, rebuilds, renovations and pools. One team, from foundations to finishes.' },
  whatsappCta: { pt: 'Falar por WhatsApp', en: 'Chat on WhatsApp' },
  place: { pt: 'Quarteira, Algarve', en: 'Quarteira, Algarve' },

  servicesTitle: { pt: 'O que fazemos', en: 'What we do' },
  servicesIntro: { pt: 'Da moradia de raiz à reparação de um telhado, com os ofícios da obra feitos pela mesma empresa.', en: 'From a new house to a roof repair, with the building trades done by the same company.' },
  seeService: { pt: 'Ver serviço', en: 'View service' },
  tradesTitle: { pt: 'Lista completa de trabalhos', en: 'Full list of trades' },
  tradesIntro: { pt: 'Para quem procura um trabalho específico.', en: 'For anyone looking for a specific trade.' },

  worksTitle: { pt: 'Obras realizadas', en: 'Completed work' },
  worksIntro: { pt: 'Fotografias de obras terminadas pela Civilsul: moradias, reconstruções, interiores e exteriores.', en: 'Photographs of finished Civilsul projects: houses, rebuilds, interiors and outdoor works.' },
  filterLabel: { pt: 'Filtrar obras por tipo', en: 'Filter work by type' },
  filterAll: { pt: 'Todas', en: 'All' },
  showing: { pt: 'A mostrar', en: 'Showing' },
  viewWork: { pt: 'Ver obra', en: 'View project' },
  photoOf: { pt: 'Obra', en: 'Project' },

  processTitle: { pt: 'Como decorre uma obra', en: 'How a job runs' },
  processIntro: { pt: 'Quatro passos, do primeiro contacto à obra feita.', en: 'Four steps, from the first call to the finished job.' },

  companyTitle: { pt: 'Uma construtora do Algarve desde 1985', en: 'An Algarve builder since 1985' },
  companyMore: { pt: 'Conhecer a empresa', en: 'About the company' },
  aboutTitle: { pt: 'Construímos no Algarve desde 1985', en: 'Building in the Algarve since 1985' },
  whoTitle: { pt: 'Quem somos', en: 'Who we are' },
  teamTitle: { pt: 'A equipa', en: 'The team' },
  factsTitle: { pt: 'Em resumo', en: 'At a glance' },
  fSince: { pt: 'Desde', en: 'Since' },
  fPermit: { pt: 'Alvará de construção', en: 'Construction permit' },
  fOffice: { pt: 'Sede', en: 'Head office' },
  fArea: { pt: 'Onde trabalhamos', en: 'Where we work' },
  fLegal: { pt: 'Nome legal', en: 'Legal name' },

  bandTitle: { pt: 'Tem uma obra em mente?', en: 'Planning a building project?' },
  bandOr: { pt: 'Ou fale connosco diretamente', en: 'Or talk to us directly' },

  servicesPageTitle: { pt: 'Serviços de construção', en: 'Building services' },
  servicesPageLead: { pt: 'Construção, reconstrução, remodelação, piscinas, telhados e obras públicas. Sobretudo no Algarve, com equipas que se deslocam a outras regiões do país.', en: 'New builds, rebuilds, renovations, pools, roofs and public works. Mainly in the Algarve, with teams that also travel to other regions of Portugal.' },
  otherServices: { pt: 'Outros serviços', en: 'Other services' },
  quoteForThis: { pt: 'Pedir orçamento', en: 'Request a quote' },

  worksPageLead: { pt: 'Moradias construídas e reconstruídas, apartamentos remodelados, fachadas preservadas, piscinas e exteriores. Cada obra tem a sua página.', en: 'Houses built and rebuilt, apartments renovated, facades preserved, pools and outdoor works. Each project has its own page.' },
  kind: { pt: 'Tipo de obra', en: 'Type of work' },
  where: { pt: 'Local', en: 'Place' },
  client: { pt: 'Cliente', en: 'Client' },
  service: { pt: 'Serviço', en: 'Service' },
  prevWork: { pt: 'Obra anterior', en: 'Previous project' },
  nextWork: { pt: 'Obra seguinte', en: 'Next project' },
  similarTitle: { pt: 'Quer uma obra como esta?', en: 'Want something similar?' },
  similarText: { pt: 'Conte-nos o que pretende e onde. O passo seguinte é uma visita ao local e um orçamento descrito artigo a artigo.', en: 'Tell us what you have in mind and where. The next step is a site visit and a quote described item by item.' },

  quoteTitle: { pt: 'Pedir orçamento', en: 'Request a quote' },
  quoteLead: { pt: 'Quatro passos curtos. No fim, envia o pedido por WhatsApp ou email, já com o que precisamos para lhe responder.', en: 'Four short steps. At the end, send the request via WhatsApp or email, with what we need to answer you.' },
  quotePrefer: { pt: 'Prefere falar já?', en: 'Rather talk now?' },
  stepOf: { pt: 'Passo', en: 'Step' },
  of: { pt: 'de', en: 'of' },
  pref: {
    telefone: { pt: 'Telefone', en: 'Phone' },
    whatsapp: { pt: 'WhatsApp', en: 'WhatsApp' },
    email: { pt: 'Email', en: 'Email' },
  },
  optional: { pt: 'Opcional', en: 'Optional' },
  noJs: { pt: 'Ao enviar, abre o seu programa de email com o pedido.', en: 'Sending opens your email app with the request.' },

  contactTitle: { pt: 'Contactos', en: 'Contact' },
  mobileLabel: { pt: 'Telemóvel e WhatsApp', en: 'Mobile and WhatsApp' },
  landlineLabel: { pt: 'Telefone fixo', en: 'Landline' },
  officeLabel: { pt: 'Sede', en: 'Head office' },
  writeUs: { pt: 'Escreva-nos', en: 'Write to us' },
  callUs: { pt: 'Ligue-nos', en: 'Call us' },
  quoteCardTitle: { pt: 'Pedido de orçamento guiado', en: 'Guided quote request' },
  quoteCardText: { pt: 'Tipo de obra, local, prazo e contacto, em quatro passos. Envia por WhatsApp ou email.', en: 'Type of work, place, timing and contact, in four steps. Send it via WhatsApp or email.' },
  opensNew: { pt: '(abre numa nova janela)', en: '(opens in a new window)' },

  privacyTitle: { pt: 'Política de privacidade', en: 'Privacy policy' },

  footerNav: { pt: 'Navegação', en: 'Navigation' },
  footerContact: { pt: 'Contactos', en: 'Contact' },
  language: { pt: 'Idioma', en: 'Language' },
  mainNav: { pt: 'Principal', en: 'Main' },
  quickActions: { pt: 'Ações rápidas', en: 'Quick actions' },
  breadcrumb: { pt: 'Localização na página', en: 'Breadcrumb' },
  logoHome: { pt: 'Civilsul, página inicial', en: 'Civilsul, home page' },
} satisfies Record<string, T | Record<string, T>>;

/** Fotografia que representa cada serviço (obra real associada). */
export const SERVICE_PHOTO: Record<string, string> = {
  moradias: 'vale-del-rey',
  reconstrucao: 'monte-do-pocinho',
  remodelacoes: 'maison-amarande',
  piscinas: 'arranjos-exteriores-piscina',
  telhados: 'remodelacao-moradia',
  'obras-publicas': 'reconstrucao-edificio',
};

/** ?tipo= do pedido de orçamento por serviço. */
export const SERVICE_QUOTE: Record<string, string> = {
  moradias: 'moradia',
  reconstrucao: 'reconstrucao',
  remodelacoes: 'remodelacao',
  piscinas: 'piscina',
  telhados: 'telhado',
  'obras-publicas': 'outro',
};

/** Obras em destaque na página inicial (ordem do mosaico): nenhuma fotografia repete as dos serviços.
 *  [id da obra, índice da fotografia] */
export const FEATURED: [string, number][] = [
  ['arranjos-exteriores-terraco', 0],
  ['vale-del-rey', 1],
  ['topazmoment', 0],
  ['fachada-portaldegenios', 0],
  ['remodelacao-apartamento', 0],
  ['remodelacao-ampliacao-moradia', 0],
];

/** Faixa fotográfica de largura total na página inicial (fotografia não usada noutro ponto da página). */
export const HOME_BAND = 'reconstrucao-ampliacao-moradia';
