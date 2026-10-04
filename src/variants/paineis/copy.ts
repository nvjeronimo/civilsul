// Texto próprio da variante "Painéis" (só PT). Não acrescenta factos: tudo o que é afirmado vem de src/content ou de PRODUCT.md.
import type { Kind } from '../../content/works';

export const C = {
  home: 'Início',
  menu: 'Menu',
  close: 'Fechar',
  mainNav: 'Principal',
  footNav: 'Rodapé',
  quick: 'Contacto rápido',
  crumbs: 'Caminho',
  quoteShort: 'Orçamento',

  heroTag: 'Construtora desde 1985',
  heroH: 'Construímos, reconstruímos e remodelamos no Algarve desde 1985.',
  heroLede: 'Moradias de raiz, casas antigas reconstruídas e ampliadas, apartamentos remodelados, piscinas e exteriores. A mesma empresa, das fundações aos acabamentos.',
  seat: 'Quarteira, Algarve',
  seeWorks: 'Ver obras',

  whoTag: 'Quem somos',
  whoH: 'Uma construtora com alvará desde 1985, sede em Quarteira e obra feita no Algarve.',
  whoBtn: 'Conhecer a empresa',
  stats: { since: 'início de atividade', permit: 'número do alvará', services: 'áreas de serviço', works: 'obras no portefólio' },

  waysTag: 'A equipa',
  waysH: 'Uma equipa técnica com formação e vasta experiência, no Algarve e noutras regiões.',
  ways: [
    { icon: 'team', tag: 'Experiência', h: 'Urbanizações, moradias e apartamentos', p: 'A equipa técnica tem formação adequada e uma vasta experiência nestas construções.' },
    { icon: 'rule', tag: 'Âmbito', h: 'Obras públicas, reparações e remodelações', p: 'A mesma equipa executa obras públicas e trata de reparações e remodelações.' },
    { icon: 'pin', tag: 'Território', h: 'Sede em Quarteira, obra no Algarve', p: 'Trabalhamos sobretudo no Algarve, e as equipas deslocam-se também a outras regiões do país.' },
  ] as const,

  servicesTag: 'Serviços',
  servicesHomeH: 'Da moradia de raiz à reparação do telhado, com a mesma empresa.',
  seeService: 'Ver o serviço',
  allServices: 'Todos os serviços',
  tradesTag: 'Lista completa',
  tradesH: 'Todos os trabalhos que executamos',
  tradesP: 'As especialidades ficam com a mesma empresa. Se procura um trabalho específico, está aqui.',

  worksTag: 'Obras',
  worksHomeH: 'Moradias, casas antigas, apartamentos e exteriores: obras terminadas.',
  allWorks: 'Todas as obras',

  processTag: 'Como trabalhamos',
  processH: 'Da primeira conversa à obra, em quatro passos.',

  closeH: 'Tem uma obra em mente?',
  closeChips: ['Alvará nº 4511', 'Desde 1985', 'Algarve e restante país'],

  servicesH: 'Serviços de construção no Algarve',
  servicesLead: 'Seis áreas de obra feitas pela mesma empresa, com o alvará nº 4511: construção, reconstrução, remodelação, exteriores, telhados e obras públicas.',
  includes: 'O que inclui',
  relatedWorks: 'Obras deste serviço',
  otherServices: 'Outros serviços',
  quoteFor: 'Pedir orçamento para este trabalho',
  publicTag: 'Obras públicas',
  publicNote: 'Trabalhamos para entidades públicas ao abrigo do alvará que mantemos desde 1985.',
  publicAsk: 'Para informações sobre uma empreitada pública, escreva-nos ou ligue-nos.',

  worksH: 'Obras realizadas',
  worksLead: 'Moradias construídas e reconstruídas, fachadas preservadas, apartamentos remodelados, piscinas e exteriores no Algarve.',
  filter: 'Mostrar obras por tipo',
  filterAll: 'Todas',
  kind: 'Tipo de obra',
  place: 'Local',
  client: 'Cliente',
  service: 'Serviço',
  prev: 'Obra anterior',
  next: 'Obra seguinte',
  otherWorks: 'Outras obras',
  workAsk: 'Quer uma obra como esta?',
  workAskP: 'Conte-nos o que quer fazer, onde e para quando. Respondemos por telefone, WhatsApp ou email.',

  aboutH: 'Construtora do Sul, Lda., com alvará desde 1985.',
  missionTag: 'Missão',
  whereTag: 'Onde estamos',
  teamTag: 'Quem faz a obra',
  factsTag: 'Factos',
  factsH: 'O alvará nº 4511 acompanha a Civilsul desde 1985.',

  contactH: 'Fale connosco por telefone, WhatsApp ou email.',
  channelsTag: 'Contactos diretos',
  quoteAskH: 'Prefere deixar o pedido por escrito?',
  quoteAskP: 'Em quatro passos diz-nos que obra quer fazer, onde e para quando.',

  quoteH: 'Pedir orçamento',
  quoteLead: 'Quatro passos: a obra, o local, o prazo e o contacto. No fim, o pedido segue já escrito por WhatsApp ou por email.',
  noJs: 'Todos os passos estão visíveis. Preencha e envie por email.',
  optional: 'opcional',
  pref: { telefone: 'Telefone', whatsapp: 'WhatsApp', email: 'Email' },
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

/** "/ 001" */
export const num = (i: number) => String(i + 1).padStart(3, '0');
