// Opções do pedido de orçamento guiado (partilhadas pelas três variantes).
import type { Lang } from '../lib/site';
type T = Record<Lang, string>;

export const WORK_TYPES: { id: string; label: T }[] = [
  { id: 'moradia', label: { pt: 'Construir uma moradia', en: 'Build a house' } },
  { id: 'reconstrucao', label: { pt: 'Reconstruir ou ampliar', en: 'Rebuild or extend' } },
  { id: 'remodelacao', label: { pt: 'Remodelar casa ou apartamento', en: 'Renovate a house or flat' } },
  { id: 'piscina', label: { pt: 'Piscina ou exteriores', en: 'Pool or outdoor works' } },
  { id: 'telhado', label: { pt: 'Telhado, infiltrações, reparações', en: 'Roof, leaks, repairs' } },
  { id: 'outro', label: { pt: 'Outro trabalho', en: 'Something else' } },
];

export const PROPERTY: { id: string; label: T }[] = [
  { id: 'moradia', label: { pt: 'Moradia', en: 'House' } },
  { id: 'apartamento', label: { pt: 'Apartamento', en: 'Apartment' } },
  { id: 'terreno', label: { pt: 'Terreno', en: 'Plot of land' } },
  { id: 'comercial', label: { pt: 'Comércio ou alojamento', en: 'Shop or guest accommodation' } },
  { id: 'publico', label: { pt: 'Entidade pública', en: 'Public body' } },
];

export const TIMING: { id: string; label: T }[] = [
  { id: 'ja', label: { pt: 'O mais depressa possível', en: 'As soon as possible' } },
  { id: '3m', label: { pt: 'Nos próximos 3 meses', en: 'In the next 3 months' } },
  { id: '6m', label: { pt: 'Dentro de 6 meses', en: 'Within 6 months' } },
  { id: 'estudo', label: { pt: 'Ainda estou a estudar', en: 'Still exploring' } },
];

export const PROJECT_STATE: { id: string; label: T }[] = [
  { id: 'aprovado', label: { pt: 'Tenho projeto aprovado', en: 'I have an approved design' } },
  { id: 'curso', label: { pt: 'Projeto em curso', en: 'Design in progress' } },
  { id: 'sem', label: { pt: 'Ainda sem projeto', en: 'No design yet' } },
  { id: 'nao-precisa', label: { pt: 'Não precisa (obra pequena)', en: 'Not needed (small job)' } },
];

export const Q = {
  pt: {
    steps: ['A obra', 'O local', 'Prazo e projeto', 'Contacto'],
    type: 'Que obra quer fazer?',
    property: 'Tipo de imóvel',
    place: 'Localidade',
    placeHint: 'Ex.: Loulé, Vilamoura, Faro',
    area: 'Área aproximada (m²)',
    areaHint: 'Opcional',
    timing: 'Quando quer começar?',
    state: 'Situação do projeto',
    details: 'Descreva o que pretende',
    detailsHint: 'O que existe hoje, o que quer mudar, acabamentos que tem em mente…',
    name: 'Nome',
    phone: 'Telefone',
    email: 'Email',
    contactPref: 'Prefere ser contactado por',
    consent: 'Aceito que a Civilsul use estes dados só para responder a este pedido.',
    next: 'Continuar',
    back: 'Voltar',
    sendWa: 'Enviar por WhatsApp',
    sendEmail: 'Enviar por email',
    summary: 'Resumo do pedido',
    photosNote: 'Tem fotografias ou plantas? Envie-as depois pela conversa de WhatsApp ou em resposta ao email.',
    required: 'Preencha este campo para continuar.',
    invalidEmail: 'Este email não parece completo. Confirme, por exemplo: nome@dominio.pt',
    needContact: 'Indique pelo menos um telefone ou um email para lhe podermos responder.',
    needConsent: 'Para enviar, aceite o uso dos dados para responder ao pedido.',
    draft: 'O pedido fica guardado neste dispositivo até o enviar.',
    done: 'Abrimos a sua aplicação para enviar. Se não abriu, use o botão de novo ou ligue-nos.',
    subject: 'Pedido de orçamento',
    empty: '—',
  },
  en: {
    steps: ['The work', 'The place', 'Timing and design', 'Contact'],
    type: 'What would you like to do?',
    property: 'Type of property',
    place: 'Town',
    placeHint: 'E.g. Loulé, Vilamoura, Faro',
    area: 'Approximate area (m²)',
    areaHint: 'Optional',
    timing: 'When do you want to start?',
    state: 'Design status',
    details: 'Describe what you need',
    detailsHint: 'What is there today, what you want to change, finishes you have in mind…',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    contactPref: 'Preferred contact',
    consent: 'I agree that Civilsul may use these details only to answer this request.',
    next: 'Continue',
    back: 'Back',
    sendWa: 'Send via WhatsApp',
    sendEmail: 'Send by email',
    summary: 'Request summary',
    photosNote: 'Have photos or plans? Send them afterwards in the WhatsApp chat or as a reply to the email.',
    required: 'Fill in this field to continue.',
    invalidEmail: 'This email looks incomplete. Check it, for example: name@domain.com',
    needContact: 'Give at least a phone number or an email so we can reply.',
    needConsent: 'To send, agree to the use of your details to answer the request.',
    draft: 'Your request is kept on this device until you send it.',
    done: 'We opened your app to send it. If nothing opened, press the button again or call us.',
    subject: 'Quote request',
    empty: '—',
  },
} as const;
