// Textos institucionais, reescritos a partir de "Missão" e "Quem somos" do site atual. Mesmo conteúdo, sem factos novos.
import type { Lang } from '../lib/site';
type T = Record<Lang, string>;

export const TAGLINE: T = { pt: 'Para si com excelência desde 1985', en: 'Building with excellence since 1985' };
export const BUILDER_LINE: T = { pt: 'A sua construtora desde 1985', en: 'Your builder since 1985' };

export const MISSION: T = {
  pt: 'A Civilsul é um nome na construção civil com uma longa história de qualidade, segurança e competência, com o alvará nº 4511 desde 1985. Com profissionalismo e flexibilidade, sabe corresponder aos desejos do cliente mais exigente: ouvimos, aconselhamos e ajudamos a otimizar e concretizar o seu projeto.',
  en: 'Civilsul is a name in building construction with a long history of quality, safety and competence, holding construction permit nº 4511 since 1985. With professionalism and flexibility, we meet the wishes of the most demanding client: we listen, advise and help you optimise your project and make it happen.',
};

export const INVITE: T = {
  pt: 'Apresente-nos a sua ideia e discutiremos o projeto com rigor e profissionalismo. Para orçamentos, informações ou esclarecimentos, contacte-nos.',
  en: 'Bring us your idea and we will discuss the project with rigour and professionalism. For quotes, information or questions, get in touch.',
};

export const WHO: T = {
  pt: 'A Civilsul tem sede no Caminho da Nobreza, Cascalheira, em Quarteira. Trabalha sobretudo no Algarve, mas as equipas deslocam-se também a outras regiões do país.',
  en: 'Civilsul is based at Caminho da Nobreza, Cascalheira, in Quarteira. It works mainly in the Algarve, and the teams also travel to other regions of Portugal.',
};

export const TEAM: T = {
  pt: 'A equipa técnica tem formação adequada e uma vasta experiência na construção de urbanizações, moradias, apartamentos e obras públicas, bem como em reparações e remodelações.',
  en: 'The technical team is properly trained and has wide experience building developments, houses, apartments and public works, as well as repairs and renovations.',
};

/** Como trabalhamos: passos genéricos de uma obra, sem prazos nem promessas. */
export const PROCESS: { title: T; text: T }[] = [
  { title: { pt: 'Ouvir a ideia', en: 'Hear the idea' }, text: { pt: 'Conte-nos o que quer fazer, onde e para quando. Fotos e plantas ajudam.', en: 'Tell us what you want to do, where and by when. Photos and plans help.' } },
  { title: { pt: 'Visitar e medir', en: 'Visit and measure' }, text: { pt: 'Vemos o local, discutimos o projeto e aconselhamos soluções.', en: 'We see the site, discuss the project and advise on solutions.' } },
  { title: { pt: 'Orçamentar', en: 'Quote' }, text: { pt: 'Enviamos um orçamento com os trabalhos descritos artigo a artigo.', en: 'We send a quote with the works described item by item.' } },
  { title: { pt: 'Construir', en: 'Build' }, text: { pt: 'A mesma equipa faz a obra, das fundações aos acabamentos.', en: 'The same team does the work, from foundations to finishes.' } },
];
