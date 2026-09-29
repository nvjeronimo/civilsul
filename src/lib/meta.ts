// Títulos e descrições SEO por página (PT/EN), comuns às três variantes.
import { SERVICES } from '../content/services';
import { WORKS } from '../content/works';
import type { RouteProps } from './routes';

export function meta({ lang, page, id }: RouteProps) {
  const pt = lang === 'pt';
  const brand = 'Civilsul';
  switch (page) {
    case 'home':
      return {
        title: pt ? 'Civilsul · Construtora no Algarve desde 1985 · Quarteira' : 'Civilsul · Builder in the Algarve since 1985 · Quarteira',
        description: pt
          ? 'Construção de moradias, reconstrução e ampliação, remodelações, piscinas e obras públicas no Algarve. Alvará nº 4511 desde 1985. Peça orçamento.'
          : 'House building, rebuilding and extensions, renovations, pools and public works in the Algarve. Construction permit nº 4511 since 1985. Request a quote.',
      };
    case 'services': {
      if (id) {
        const s = SERVICES.find((x) => x.id === id)!;
        return { title: `${s.searches[lang]} · ${brand}`, description: `${s.short[lang]} ${s.intro[lang].split('. ')[0]}.`.slice(0, 158) };
      }
      return {
        title: pt ? 'Serviços de construção civil no Algarve · Civilsul' : 'Building services in the Algarve · Civilsul',
        description: pt
          ? 'Moradias, reconstrução, remodelações, piscinas, telhados, impermeabilização, eletricidade, canalização e obras públicas. Uma só equipa, desde 1985.'
          : 'Houses, rebuilding, renovations, pools, roofs, waterproofing, electrics, plumbing and public works. One team, since 1985.',
      };
    }
    case 'works': {
      if (id) {
        const w = WORKS.find((x) => x.id === id)!;
        return {
          title: `${w.title[lang]} · ${pt ? 'Obras' : 'Work'} · ${brand}`,
          description: pt
            ? `${w.title[lang]}${w.place ? `, ${w.place}` : ''}. Obra executada pela Civilsul, construtora no Algarve desde 1985.`
            : `${w.title[lang]}${w.place ? `, ${w.place}` : ''}. Built by Civilsul, a builder in the Algarve since 1985.`,
        };
      }
      return {
        title: pt ? 'Obras realizadas · Portefólio · Civilsul' : 'Completed work · Portfolio · Civilsul',
        description: pt
          ? 'Moradias construídas e reconstruídas, apartamentos remodelados, fachadas preservadas, piscinas e exteriores no Algarve.'
          : 'Houses built and rebuilt, apartments renovated, facades preserved, pools and outdoor works in the Algarve.',
      };
    }
    case 'quote':
      return {
        title: pt ? 'Pedir orçamento de obra · Civilsul' : 'Request a building quote · Civilsul',
        description: pt
          ? 'Diga-nos que obra quer fazer, onde e para quando. Em quatro passos, envie o pedido por WhatsApp ou email.'
          : 'Tell us what you want to build, where and when. In four steps, send the request via WhatsApp or email.',
      };
    case 'contact':
      return {
        title: pt ? 'Contactos · Civilsul, Quarteira' : 'Contact · Civilsul, Quarteira',
        description: pt
          ? 'Caminho da Nobreza, Cascalheira, 8125-018 Quarteira. Telefone, WhatsApp e email da Civilsul.'
          : 'Caminho da Nobreza, Cascalheira, 8125-018 Quarteira. Civilsul phone, WhatsApp and email.',
      };
    case 'about':
      return {
        title: pt ? 'A empresa · Civilsul, construtora desde 1985' : 'The company · Civilsul, builder since 1985',
        description: pt
          ? 'Construtora do Sul, Lda.: alvará nº 4511 desde 1985, sede em Quarteira, obras no Algarve e no resto do país.'
          : 'Construtora do Sul, Lda.: permit nº 4511 since 1985, based in Quarteira, working in the Algarve and across Portugal.',
      };
    case 'privacy':
      return {
        title: pt ? 'Política de privacidade · Civilsul' : 'Privacy policy · Civilsul',
        description: pt ? 'Como a Civilsul trata os dados dos pedidos de orçamento. Sem cookies.' : 'How Civilsul handles quote request data. No cookies.',
      };
  }
}
