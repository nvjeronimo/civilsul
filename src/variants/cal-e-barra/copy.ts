// Texto próprio da variante (só PT). Não acrescenta factos: tudo o que é afirmado vem de src/content ou de PRODUCT.md.
import type { Kind } from '../../content/works';

export const C = {
  home: 'Início',
  menu: 'Menu',
  close: 'Fechar',
  mainNav: 'Principal',
  quick: 'Contacto rápido',
  crumbs: 'Caminho',

  heroLede: 'Moradias de raiz, casas antigas refeitas e aumentadas, apartamentos, piscinas e exteriores. A mesma equipa, das fundações aos acabamentos.',
  servicesHomeH: 'Da moradia de raiz à reparação do telhado.',
  servicesHomeP: 'Construção, reconstrução, remodelação e manutenção. As especialidades ficam com a mesma empresa: eletricidade, canalização, carpintaria, revestimentos e pintura.',
  tradesH: 'Todos os trabalhos que executamos',
  worksHomeH: 'Obras entregues, de Vale del Rey ao Monte do Pocinho.',
  worksHomeP: 'Moradias novas, casas antigas reconstruídas, fachadas preservadas, apartamentos remodelados e exteriores. As fotografias são das obras terminadas.',
  companyH: 'Uma construtora com alvará desde 1985.',
  processH: 'Como começa uma obra connosco.',
  closeH: 'Peça orçamento para a sua obra.',
  allServices: 'Todos os serviços',
  allWorks: 'Todas as obras',
  seat: 'Sede em Quarteira, Algarve',

  servicesH: 'Serviços de construção no Algarve',
  servicesLead: 'Seis frentes de obra feitas pela mesma empresa, com o alvará nº 4511: construção, reconstrução, remodelação, exteriores, telhados e obras públicas.',
  seeService: 'Ver o serviço',
  includes: 'O que inclui',
  relatedWorks: 'Obras deste serviço',
  otherServices: 'Outros serviços',
  quoteFor: 'Pedir orçamento para este trabalho',
  publicNote: 'Nas obras públicas trabalhamos para entidades públicas, ao abrigo do alvará que mantemos desde 1985. As equipas trabalham sobretudo no Algarve e deslocam-se a outras regiões do país.',
  publicAsk: 'Para informações sobre uma empreitada pública, escreva-nos ou ligue-nos.',

  worksH: 'Obras realizadas',
  worksLead: 'Moradias construídas e reconstruídas, fachadas preservadas, apartamentos remodelados, piscinas e exteriores no Algarve. Todas as fotografias são de obras terminadas.',
  filter: 'Mostrar obras por tipo',
  filterAll: 'Todas',
  kind: 'Tipo de obra',
  place: 'Local',
  client: 'Cliente',
  service: 'Serviço',
  prev: 'Obra anterior',
  next: 'Obra seguinte',
  workAsk: 'Quer uma obra como esta?',
  workAskP: 'Conte-nos o que quer fazer, onde e para quando. Respondemos por telefone, WhatsApp ou email.',

  aboutH: 'A empresa',
  aboutLead: 'Construtora do Sul, Lda., com o alvará de construção nº 4511 desde 1985 e sede em Quarteira.',
  whoH: 'Onde estamos',
  teamH: 'Quem faz a obra',

  contactH: 'Contactos',
  quoteH: 'Pedir orçamento',
  quoteLead: 'Quatro passos: a obra, o local, o prazo e o contacto. No fim, o pedido segue já escrito por WhatsApp ou por email.',
  noJs: 'Todos os passos estão visíveis. Preencha e envie por email.',
  optional: 'opcional',
  pref: { telefone: 'Telefone', whatsapp: 'WhatsApp', email: 'Email' },
  stepOf: 'Passo',
  mobile: 'Telemóvel',
  landline: 'Rede fixa',

  privacyH: 'Privacidade',
  privacyLead: 'Como tratamos os dados de um pedido de orçamento. Este site não usa cookies.',
};

/** Tipo de obra do formulário para cada serviço (pré-seleção ?tipo=). */
export const QUOTE_TYPE: Record<string, string> = {
  moradias: 'moradia', reconstrucao: 'reconstrucao', remodelacoes: 'remodelacao', piscinas: 'piscina', telhados: 'telhado', 'obras-publicas': 'outro',
};

export const kindLabel = (k: Kind) => ({ moradias: 'Moradia', reabilitacao: 'Reabilitação', interiores: 'Interiores', exteriores: 'Exteriores e piscinas' })[k];

/** "Inclui a, b e c." (itens do serviço lidos como frase, sem separadores pendurados). */
export const includes = (items: string[]) => {
  const l = items.map((t) => t.charAt(0).toLowerCase() + t.slice(1));
  return `Inclui ${l.length > 1 ? `${l.slice(0, -1).join(', ')} e ${l.at(-1)}` : l[0]}.`;
};
