// Amostras do mostruário: recortes em CSS das fotografias reais das obras (sem novas imagens).
// x/y = ponto focal em % da fotografia (object-position e transform-origin), s = ampliação da amostra.
// hx/hy = enquadramento da casa inteira quando a amostra abre. Coordenadas escolhidas a olhar para cada foto.
// `material` descreve só o que se vê na fotografia: nada de marcas, espécies, medidas ou especificações.
import { workById, type Work } from '../../content/works';

export interface Sample {
  code: string;
  work: string;
  photo: number;
  material: string;
  x: number;
  y: number;
  s: number;
  hx: number;
  hy: number;
}

export const SAMPLES: Sample[] = [
  { code: 'S-01', work: 'construcao-moradia', photo: 0, material: 'Revestimento em madeira', x: 55, y: 32, s: 3.6, hx: 45, hy: 50 },
  { code: 'S-02', work: 'monte-do-pocinho', photo: 0, material: 'Parede caiada com barra azul', x: 100, y: 72, s: 4.6, hx: 70, hy: 50 },
  { code: 'S-03', work: 'topazmoment', photo: 0, material: 'Mosaico hidráulico', x: 35, y: 82, s: 2.6, hx: 50, hy: 50 },
  { code: 'S-04', work: 'arranjos-exteriores-piscina', photo: 0, material: 'Água e revestimento da piscina', x: 52, y: 52, s: 3.4, hx: 50, hy: 50 },
  { code: 'S-05', work: 'remodelacao-moradia', photo: 0, material: 'Telha cerâmica', x: 72, y: 47, s: 4, hx: 50, hy: 50 },
  { code: 'S-06', work: 'reconstrucao-edificio', photo: 0, material: 'Fachada azul com varanda de ferro', x: 45, y: 68, s: 2.2, hx: 50, hy: 60 },
  { code: 'S-07', work: 'vale-del-rey', photo: 1, material: 'Pavimento em madeira', x: 70, y: 55, s: 3, hx: 50, hy: 50 },
  { code: 'S-08', work: 'reconstrucao-ampliacao-moradia', photo: 0, material: 'Platibanda decorada', x: 28, y: 20, s: 3.5, hx: 40, hy: 50 },
  { code: 'S-09', work: 'fachada-portaldegenios', photo: 0, material: 'Cantaria em pedra', x: 55, y: 58, s: 3.5, hx: 50, hy: 50 },
  { code: 'S-10', work: 'maison-amarande', photo: 0, material: 'Armários em madeira', x: 25, y: 22, s: 4.5, hx: 50, hy: 50 },
  { code: 'S-11', work: 'remodelacao-ampliacao-moradia', photo: 0, material: 'Cobertura ajardinada', x: 45, y: 40, s: 4, hx: 50, hy: 50 },
  { code: 'S-12', work: 'arranjos-exteriores-terraco', photo: 0, material: 'Azulejo com padrão', x: 29, y: 36, s: 4.5, hx: 35, hy: 50 },
  { code: 'S-13', work: 'remodelacao-apartamento', photo: 0, material: 'Bancada com lavatório embutido', x: 45, y: 56, s: 3, hx: 50, hy: 50 },
];

/** Amostra principal de cada família de serviço (a do primeiro ecrã). */
export const LEAD: Record<string, string> = {
  moradias: 'S-01',
  reconstrucao: 'S-02',
  remodelacoes: 'S-03',
  piscinas: 'S-04',
  telhados: 'S-05',
  // Obras públicas: nenhuma obra do portefólio é identificada como obra pública → amostra só com texto.
};

/** Tipo de obra do pedido de orçamento → amostra (o "outro" fica em branco). */
export const TYPE_SAMPLE: Record<string, string | undefined> = {
  moradia: 'S-01',
  reconstrucao: 'S-02',
  remodelacao: 'S-03',
  piscina: 'S-04',
  telhado: 'S-05',
};

export const sampleByCode = (code: string) => SAMPLES.find((s) => s.code === code)!;
export const sampleForWork = (id: string) => SAMPLES.find((s) => s.work === id)!;
export const leadSample = (serviceId: string): Sample | undefined => (LEAD[serviceId] ? sampleByCode(LEAD[serviceId]) : undefined);

/** Parede do primeiro ecrã: seis amostras reais, cada uma com a família da obra de onde vem. */
export const HERO_WALL: { code: string; family: string }[] = [
  { code: 'S-01', family: 'moradias' },
  { code: 'S-02', family: 'reconstrucao' },
  { code: 'S-03', family: 'remodelacoes' },
  { code: 'S-04', family: 'piscinas' },
  { code: 'S-05', family: 'telhados' },
  { code: 'S-06', family: 'reconstrucao' },
];
export const workOf = (s: Sample): Work => workById(s.work);

/** Amostras das obras relacionadas com um serviço, sem a principal. */
export function familySamples(serviceId: string, works: string[], max = 3) {
  const lead = leadSample(serviceId);
  return works.filter((w) => w !== lead?.work).map(sampleForWork).slice(0, max);
}

/** Pré-seleção do tipo de obra no pedido de orçamento a partir do serviço. */
export const TIPO: Record<string, string> = {
  moradias: 'moradia',
  reconstrucao: 'reconstrucao',
  remodelacoes: 'remodelacao',
  piscinas: 'piscina',
  telhados: 'telhado',
  'obras-publicas': 'outro',
};
