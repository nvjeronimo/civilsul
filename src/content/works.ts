// Obras do portefólio atual (civilsul.pt/servicos-e-portefolio). Títulos = legendas originais.
// Não acrescentar datas, áreas, prazos ou locais que as legendas não indiquem.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../lib/site';

import construcaoMoradia from '../assets/obras/construcao-moradia.jpg';
import valeDelRey1 from '../assets/obras/vale-del-rey-1.jpg';
import valeDelRey2 from '../assets/obras/vale-del-rey-2.jpg';
import reconstrucaoAmpliacaoMoradia from '../assets/obras/reconstrucao-ampliacao-moradia.jpg';
import monteDoPocinho from '../assets/obras/monte-do-pocinho.jpg';
import fachada from '../assets/obras/fachada-portaldegenios.jpg';
import reconstrucaoEdificio from '../assets/obras/reconstrucao-edificio.jpg';
import maisonAmarande from '../assets/obras/maison-amarande.jpg';
import exterioresPiscina from '../assets/obras/arranjos-exteriores-piscina.jpg';
import topazmoment from '../assets/obras/topazmoment.jpg';
import remodelacaoAmpliacao from '../assets/obras/remodelacao-ampliacao-moradia.jpg';
import exterioresTerraco from '../assets/obras/arranjos-exteriores-terraco.jpg';
import remodelacaoApartamento from '../assets/obras/remodelacao-apartamento.jpg';
import remodelacaoMoradia from '../assets/obras/remodelacao-moradia.jpg';

type T = Record<Lang, string>;
export type Kind = 'moradias' | 'reabilitacao' | 'interiores' | 'exteriores';

export const KINDS: { id: Kind; label: T }[] = [
  { id: 'moradias', label: { pt: 'Moradias', en: 'Houses' } },
  { id: 'reabilitacao', label: { pt: 'Reabilitação', en: 'Rehabilitation' } },
  { id: 'interiores', label: { pt: 'Interiores', en: 'Interiors' } },
  { id: 'exteriores', label: { pt: 'Exteriores e piscinas', en: 'Outdoors and pools' } },
];

export interface Work {
  id: string;
  code: string;
  slug: T;
  title: T;
  kind: Kind;
  service: string; // id do serviço principal
  place?: string; // só quando a legenda o diz
  client?: string; // só quando a legenda o diz
  photos: { src: ImageMetadata; alt: T }[];
}

export const WORKS: Work[] = [
  {
    id: 'construcao-moradia', code: 'A.01', kind: 'moradias', service: 'moradias',
    slug: { pt: 'construcao-de-moradia', en: 'new-house' },
    title: { pt: 'Construção de moradia', en: 'New house' },
    photos: [{ src: construcaoMoradia, alt: { pt: 'Moradia contemporânea com piscina, deck e volumes revestidos a madeira', en: 'Contemporary house with pool, deck and timber-clad volumes' } }],
  },
  {
    id: 'vale-del-rey', code: 'A.02', kind: 'moradias', service: 'reconstrucao', place: 'Vale del Rey',
    slug: { pt: 'moradia-vale-del-rey', en: 'house-vale-del-rey' },
    title: { pt: 'Reconstrução e ampliação de moradia em Vale del Rey', en: 'House rebuilt and extended in Vale del Rey' },
    photos: [
      { src: valeDelRey1, alt: { pt: 'Moradia branca reconstruída, com relvado e caminho de gravilha', en: 'Rebuilt white house with lawn and gravel path' } },
      { src: valeDelRey2, alt: { pt: 'Terraço com pavimento em madeira entre volumes brancos', en: 'Timber-floored terrace between white volumes' } },
    ],
  },
  {
    id: 'reconstrucao-ampliacao-moradia', code: 'A.03', kind: 'moradias', service: 'reconstrucao',
    slug: { pt: 'reconstrucao-e-ampliacao-de-moradia', en: 'house-rebuilt-and-extended' },
    title: { pt: 'Reconstrução e ampliação de moradia', en: 'House rebuilt and extended' },
    photos: [{ src: reconstrucaoAmpliacaoMoradia, alt: { pt: 'Moradia térrea branca com platibanda decorada e piscina', en: 'Single-storey white house with decorated parapet and pool' } }],
  },
  {
    id: 'monte-do-pocinho', code: 'A.04', kind: 'reabilitacao', service: 'reconstrucao', place: 'Monte do Pocinho',
    slug: { pt: 'agroturismo-monte-do-pocinho', en: 'agritourism-monte-do-pocinho' },
    title: { pt: 'Reconstrução de imóvel para Agroturismo no Monte do Pocinho', en: 'Building rebuilt as an agritourism in Monte do Pocinho' },
    photos: [{ src: monteDoPocinho, alt: { pt: 'Casa térrea tradicional branca com barra azul e telhado de telha', en: 'Traditional single-storey white house with blue band and tiled roof' } }],
  },
  {
    id: 'fachada-portaldegenios', code: 'A.05', kind: 'reabilitacao', service: 'reconstrucao', client: 'Portaldegénios, Lda.',
    slug: { pt: 'preservacao-de-fachada', en: 'facade-preservation' },
    title: { pt: 'Alteração da construção existente com preservação de fachada', en: 'Existing building altered while preserving the facade' },
    photos: [{ src: fachada, alt: { pt: 'Fachada histórica branca com cantarias e portão verde numa rua calcetada', en: 'White historic facade with stone surrounds and green door on a cobbled street' } }],
  },
  {
    id: 'reconstrucao-edificio', code: 'A.06', kind: 'reabilitacao', service: 'reconstrucao',
    slug: { pt: 'reconstrucao-com-ampliacao-de-edificio', en: 'building-rebuilt-and-extended' },
    title: { pt: 'Reconstrução com ampliação de edifício', en: 'Building rebuilt and extended' },
    photos: [{ src: reconstrucaoEdificio, alt: { pt: 'Edifício de três pisos com fachada azul, varandas de ferro e mansardas', en: 'Three-storey building with blue facade, iron balconies and dormers' } }],
  },
  {
    id: 'maison-amarande', code: 'A.07', kind: 'interiores', service: 'remodelacoes', client: 'Maison Amarande',
    slug: { pt: 'apartamento-maison-amarande', en: 'maison-amarande-apartment' },
    title: { pt: 'Remodelação de apartamento da Maison Amarande', en: 'Maison Amarande apartment renovation' },
    photos: [{ src: maisonAmarande, alt: { pt: 'Cozinha remodelada com bancada clara, madeira e candeeiros pretos', en: 'Renovated kitchen with light worktop, timber and black pendants' } }],
  },
  {
    id: 'arranjos-exteriores-piscina', code: 'A.08', kind: 'exteriores', service: 'piscinas',
    slug: { pt: 'arranjos-exteriores-piscina', en: 'outdoor-works-pool' },
    title: { pt: 'Arranjos exteriores de moradia, com piscina', en: 'House outdoor works, with pool' },
    photos: [{ src: exterioresPiscina, alt: { pt: 'Piscina com deck de madeira, relva sintética e guarda de vidro', en: 'Pool with timber deck, artificial grass and glass balustrade' } }],
  },
  {
    id: 'topazmoment', code: 'A.09', kind: 'interiores', service: 'remodelacoes', client: 'Topazmoment',
    slug: { pt: 'apartamento-topazmoment', en: 'topazmoment-apartment' },
    title: { pt: 'Remodelação de apartamento da Topazmoment', en: 'Topazmoment apartment renovation' },
    photos: [{ src: topazmoment, alt: { pt: 'Cozinha estreita com armários escuros, janela de caixilho metálico e mosaico hidráulico', en: 'Narrow kitchen with dark cabinets, steel-framed window and patterned floor tiles' } }],
  },
  {
    id: 'remodelacao-ampliacao-moradia', code: 'A.10', kind: 'moradias', service: 'reconstrucao',
    slug: { pt: 'remodelacao-e-ampliacao-de-moradia', en: 'house-renovated-and-extended' },
    title: { pt: 'Remodelação e ampliação de moradia', en: 'House renovated and extended' },
    photos: [{ src: remodelacaoAmpliacao, alt: { pt: 'Moradia com ampliação envidraçada no piso térreo e cobertura ajardinada', en: 'House with glazed ground-floor extension and planted roof' } }],
  },
  {
    id: 'arranjos-exteriores-terraco', code: 'A.11', kind: 'exteriores', service: 'piscinas',
    slug: { pt: 'arranjos-exteriores-terraco', en: 'outdoor-works-terrace' },
    title: { pt: 'Arranjos exteriores de moradia, terraço', en: 'House outdoor works, terrace' },
    photos: [{ src: exterioresTerraco, alt: { pt: 'Terraço com pavimento claro, muros brancos e zona de churrasco', en: 'Terrace with light paving, white walls and barbecue area' } }],
  },
  {
    id: 'remodelacao-apartamento', code: 'A.12', kind: 'interiores', service: 'remodelacoes',
    slug: { pt: 'remodelacao-de-apartamento', en: 'apartment-renovation' },
    title: { pt: 'Remodelação de apartamento', en: 'Apartment renovation' },
    photos: [{ src: remodelacaoApartamento, alt: { pt: 'Casa de banho com bancada comprida, dois lavatórios e espelhos redondos', en: 'Bathroom with long vanity, two basins and round mirrors' } }],
  },
  {
    id: 'remodelacao-moradia', code: 'A.13', kind: 'moradias', service: 'remodelacoes',
    slug: { pt: 'remodelacao-de-moradia', en: 'house-renovation' },
    title: { pt: 'Remodelação de moradia', en: 'House renovation' },
    photos: [{ src: remodelacaoMoradia, alt: { pt: 'Moradia branca com telhados de telha antiga vista do telhado', en: 'White house with old clay-tile roofs seen from the roof' } }],
  },
];

export const workById = (id: string) => WORKS.find((w) => w.id === id)!;
