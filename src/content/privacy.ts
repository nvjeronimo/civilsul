// Política de privacidade para a demonstração (sem cookies, sem analytics, formulário sem servidor).
// A rever com a Civilsul antes de publicar em civilsul.pt (responsável, NIF, prazos de conservação).
import type { Lang } from '../lib/site';
type Block = { h: string; p: string[] };

export const PRIVACY: Record<Lang, Block[]> = {
  pt: [
    { h: 'Quem trata os dados', p: ['Construtora do Sul, Lda. (Civilsul), Caminho da Nobreza, Cascalheira, 8125-018 Quarteira. Contacto: civilsul@sapo.pt.'] },
    { h: 'Que dados recebemos', p: ['Só os que nos envia num pedido de orçamento ou contacto: nome, telefone e/ou email, localidade, tipo de obra e a descrição que escrever. O formulário não envia nada para um servidor: abre o WhatsApp ou o seu programa de email com a mensagem pronta, e é você que a envia.'] },
    { h: 'Para quê', p: ['Para responder ao seu pedido, marcar uma visita e preparar um orçamento. Não usamos os dados para publicidade nem os vendemos.'] },
    { h: 'Durante quanto tempo', p: ['Enquanto o pedido estiver em análise e, se houver obra, durante o tempo exigido por lei para a documentação da empreitada.'] },
    { h: 'Cookies e medição', p: ['Este site não usa cookies nem ferramentas de estatística. As letras são servidas pelo próprio site. O rascunho do pedido de orçamento fica guardado apenas no seu navegador (armazenamento local) até o enviar ou apagar os dados do site.'] },
    { h: 'Os seus direitos', p: ['Pode pedir acesso, retificação ou apagamento dos seus dados para civilsul@sapo.pt. Pode também apresentar reclamação à Comissão Nacional de Proteção de Dados (www.cnpd.pt).'] },
  ],
  en: [
    { h: 'Who handles the data', p: ['Construtora do Sul, Lda. (Civilsul), Caminho da Nobreza, Cascalheira, 8125-018 Quarteira, Portugal. Contact: civilsul@sapo.pt.'] },
    { h: 'What we receive', p: ['Only what you send us in a quote or contact request: name, phone and/or email, town, type of work and the description you write. The form does not send anything to a server: it opens WhatsApp or your email app with the message ready, and you send it.'] },
    { h: 'What for', p: ['To answer your request, arrange a visit and prepare a quote. We do not use the data for advertising and never sell it.'] },
    { h: 'How long', p: ['While the request is being assessed and, if the work goes ahead, for the period the law requires for building-contract records.'] },
    { h: 'Cookies and analytics', p: ['This site uses no cookies and no analytics tools. Fonts are served by the site itself. The quote draft is kept only in your browser (local storage) until you send it or clear the site data.'] },
    { h: 'Your rights', p: ['You can ask for access to, correction or deletion of your data at civilsul@sapo.pt. You can also complain to the Portuguese data protection authority (www.cnpd.pt).'] },
  ],
};
