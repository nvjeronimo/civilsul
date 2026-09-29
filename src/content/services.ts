// Serviços da Civilsul, agrupados a partir da lista do site atual (civilsul.pt/servicos-e-portefolio).
// Os itens `items` são a lista original; os textos descrevem o serviço sem acrescentar números nem garantias.
import type { Lang } from '../lib/site';

type T = Record<Lang, string>;

export interface Service {
  id: string;
  code: string; // artigo fixo (usado como âncora na variante Mapa)
  slug: T;
  title: T;
  short: T;
  intro: T;
  items: T[];
  searches: T; // expressão de pesquisa local, usada no título SEO
  works: string[]; // ids de obras relacionadas
}

export const SERVICES: Service[] = [
  {
    id: 'moradias',
    code: '1',
    slug: { pt: 'construcao-de-moradias', en: 'house-building' },
    title: { pt: 'Construção de moradias', en: 'House building' },
    short: { pt: 'Moradias de raiz, da fundação aos acabamentos.', en: 'New houses, from foundations to finishes.' },
    intro: {
      pt: 'Construímos moradias de raiz no Algarve. A equipa técnica da Civilsul tem formação adequada e uma vasta experiência na construção de urbanizações, moradias e apartamentos, e acompanha a obra da estrutura aos acabamentos, com as especialidades feitas pela mesma empresa.',
      en: 'We build new houses in the Algarve. Civilsul’s technical team is properly trained and has wide experience building developments, villas and apartments, and follows the work from structure to finishes, with the specialist trades done by the same company.',
    },
    items: [
      { pt: 'Execução de moradias', en: 'Building villas and houses' },
      { pt: 'Trabalhos de pedreiro diversos', en: 'Bricklaying and masonry' },
      { pt: 'Instalação elétrica e canalização', en: 'Electrical and plumbing installation' },
      { pt: 'Carpintaria', en: 'Carpentry' },
    ],
    searches: { pt: 'Construção de moradias no Algarve', en: 'House building in the Algarve' },
    works: ['construcao-moradia', 'reconstrucao-ampliacao-moradia', 'vale-del-rey'],
  },
  {
    id: 'reconstrucao',
    code: '2',
    slug: { pt: 'reconstrucao-e-ampliacao', en: 'rebuilding-and-extensions' },
    title: { pt: 'Reconstrução, ampliação e reabilitação', en: 'Rebuilding, extensions and rehabilitation' },
    short: { pt: 'Casas e edifícios antigos, refeitos e aumentados.', en: 'Old houses and buildings, rebuilt and extended.' },
    intro: {
      pt: 'Grande parte das obras da Civilsul começa numa construção que já existe: casas antigas reconstruídas e ampliadas, edifícios reabilitados, fachadas preservadas enquanto o interior muda. Avaliamos o que se aproveita e propomos a forma de o fazer.',
      en: 'Much of Civilsul’s work starts from a building that already exists: old houses rebuilt and extended, buildings rehabilitated, facades kept while the inside changes. We assess what can be kept and propose how to do it.',
    },
    items: [
      { pt: 'Ampliações', en: 'Extensions' },
      { pt: 'Reabilitação de espaços', en: 'Rehabilitation of spaces' },
      { pt: 'Reconstrução com preservação de fachada', en: 'Rebuilding while preserving the facade' },
      { pt: 'Trabalhos de pedreiro diversos', en: 'Bricklaying and masonry' },
    ],
    searches: { pt: 'Reconstrução e ampliação de casas no Algarve', en: 'House rebuilding and extensions in the Algarve' },
    works: ['vale-del-rey', 'monte-do-pocinho', 'fachada-portaldegenios', 'reconstrucao-edificio', 'reconstrucao-ampliacao-moradia', 'remodelacao-ampliacao-moradia'],
  },
  {
    id: 'remodelacoes',
    code: '3',
    slug: { pt: 'remodelacoes', en: 'renovations' },
    title: { pt: 'Remodelações de casas e apartamentos', en: 'House and apartment renovations' },
    short: { pt: 'Cozinhas, casas de banho, pisos, tetos e pintura.', en: 'Kitchens, bathrooms, floors, ceilings and paint.' },
    intro: {
      pt: 'Remodelamos apartamentos e moradias, para habitação própria ou para alojamento. Todos os ofícios da obra ficam com a mesma equipa: demolição, canalização, eletricidade, tetos, revestimentos, pavimentos, carpintaria e pintura.',
      en: 'We renovate apartments and houses, to live in or to rent out. Every trade stays with the same team: demolition, plumbing, electrics, ceilings, tiling, flooring, carpentry and painting.',
    },
    items: [
      { pt: 'Remodelações de apartamentos', en: 'Apartment renovations' },
      { pt: 'Pinturas interior e exterior', en: 'Interior and exterior painting' },
      { pt: 'Tetos falsos (iluminação embutida opcional)', en: 'False ceilings (optional built-in lighting)' },
      { pt: 'Aplicação de azulejos e mosaico', en: 'Wall and floor tiling' },
      { pt: 'Pavimentos', en: 'Floors' },
      { pt: 'Soalho flutuante', en: 'Floating wooden floors' },
      { pt: 'Carpintaria', en: 'Carpentry' },
    ],
    searches: { pt: 'Remodelações de apartamentos e moradias no Algarve', en: 'Apartment and house renovations in the Algarve' },
    works: ['maison-amarande', 'topazmoment', 'remodelacao-apartamento', 'remodelacao-moradia'],
  },
  {
    id: 'piscinas',
    code: '4',
    slug: { pt: 'piscinas-e-exteriores', en: 'pools-and-outdoors' },
    title: { pt: 'Piscinas e arranjos exteriores', en: 'Pools and outdoor works' },
    short: { pt: 'Piscinas, terraços, pátios e muros.', en: 'Pools, terraces, patios and walls.' },
    intro: {
      pt: 'Remodelamos piscinas e tratamos do exterior da casa: terraços, pavimentos exteriores, muros, zonas de estar e de churrasco. É muitas vezes a última fase de uma moradia e a primeira coisa que se vê.',
      en: 'We renovate pools and take care of the outside of the house: terraces, outdoor paving, walls, seating and barbecue areas. It is often the last phase of a house and the first thing people see.',
    },
    items: [
      { pt: 'Remodelação de piscinas', en: 'Pool renovation' },
      { pt: 'Arranjos exteriores', en: 'Outdoor works and landscaping' },
      { pt: 'Pavimentos', en: 'Paving' },
      { pt: 'Impermeabilização', en: 'Waterproofing' },
    ],
    searches: { pt: 'Piscinas e arranjos exteriores no Algarve', en: 'Pools and outdoor works in the Algarve' },
    works: ['arranjos-exteriores-piscina', 'arranjos-exteriores-terraco', 'construcao-moradia'],
  },
  {
    id: 'telhados',
    code: '5',
    slug: { pt: 'telhados-e-impermeabilizacao', en: 'roofs-and-waterproofing' },
    title: { pt: 'Telhados, impermeabilização e reparações', en: 'Roofs, waterproofing and repairs' },
    short: { pt: 'Coberturas, isolamentos e infiltrações.', en: 'Roofs, insulation and leaks.' },
    intro: {
      pt: 'Reparamos e mantemos telhados, impermeabilizamos coberturas, terraços e paredes, e fazemos isolamentos. Também fazemos reparações de construção civil em casas habitadas.',
      en: 'We repair and maintain roofs, waterproof roofs, terraces and walls, and install insulation. We also carry out building repairs in lived-in homes.',
    },
    items: [
      { pt: 'Reparação e manutenção de telhados', en: 'Roof repair and maintenance' },
      { pt: 'Impermeabilização e isolamentos', en: 'Waterproofing and insulation' },
      { pt: 'Reparações', en: 'Repairs' },
    ],
    searches: { pt: 'Reparação de telhados e impermeabilização no Algarve', en: 'Roof repair and waterproofing in the Algarve' },
    works: ['remodelacao-moradia', 'remodelacao-ampliacao-moradia'],
  },
  {
    id: 'obras-publicas',
    code: '6',
    slug: { pt: 'obras-publicas', en: 'public-works' },
    title: { pt: 'Obras públicas', en: 'Public works' },
    short: { pt: 'Empreitadas para entidades públicas.', en: 'Contracts for public bodies.' },
    intro: {
      pt: 'A Civilsul executa obras públicas ao abrigo do alvará nº 4511, que mantém desde 1985. As equipas trabalham sobretudo no Algarve e deslocam-se a outras regiões do país.',
      en: 'Civilsul carries out public works under construction permit nº 4511, held since 1985. The teams work mainly in the Algarve and also travel to other regions of Portugal.',
    },
    items: [
      { pt: 'Execução de obras públicas', en: 'Public works' },
      { pt: 'Urbanizações', en: 'Urban developments' },
    ],
    searches: { pt: 'Construtora de obras públicas no Algarve', en: 'Public works contractor in the Algarve' },
    // O site atual não identifica nenhuma obra do portefólio como obra pública: não associar fotografias.
    works: [],
  },
];

/** Lista original completa, tal como aparece no site atual (para quem procura um ofício específico). */
export const TRADES: T[] = [
  { pt: 'Execução de moradias', en: 'Building villas' },
  { pt: 'Execução de obras públicas', en: 'Public works' },
  { pt: 'Remodelações de apartamentos e piscinas', en: 'Apartment and pool renovations' },
  { pt: 'Pinturas de construção civil interior e exterior', en: 'Interior and exterior painting' },
  { pt: 'Tetos falsos (opção de iluminação embutida)', en: 'False ceilings (built-in lighting optional)' },
  { pt: 'Aplicação de azulejos e mosaico', en: 'Tiling' },
  { pt: 'Pavimentos', en: 'Floors' },
  { pt: 'Soalho flutuante', en: 'Floating wooden floors' },
  { pt: 'Impermeabilização e isolamentos', en: 'Waterproofing and insulation' },
  { pt: 'Reparação e manutenção de telhados', en: 'Roof repair and maintenance' },
  { pt: 'Instalação elétrica', en: 'Electrical installation' },
  { pt: 'Canalização', en: 'Plumbing' },
  { pt: 'Carpintaria', en: 'Carpentry' },
  { pt: 'Trabalhos de pedreiro diversos', en: 'Bricklaying and masonry' },
  { pt: 'Reparações', en: 'Repairs' },
  { pt: 'Ampliações', en: 'Extensions' },
  { pt: 'Reabilitação de espaços', en: 'Rehabilitation of spaces' },
];

export const serviceById = (id: string) => SERVICES.find((s) => s.id === id)!;
