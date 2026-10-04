# Proposta E · "Painéis" (só PT)

Referência fixada pelo utilizador: a linguagem visual de flat-white.framer.website (modelo de consultoria), aplicada à Civilsul.
Recriada a linguagem, não o material: código, textos, fotografias, logótipo, ícones e letra são próprios ou da Civilsul.
Contrato de direção: `.impeccable/surfaces/src-pages-paineis.md`.

## Mundo
- Chão branco `#FFFFFF`; PAINÉIS a toda a largura com 8px de margem e raio 12px (cartões e mosaicos 10px, intervalo 6px).
- Cores dos painéis: tinta `#0D1117` (herói, factos, cabeças de página, resumo do pedido, rodapé), branco, ardósia `#636E86` (processo), cinza-claro `#EEF0F3` (cartões, formulário, etiquetas).
- Texto: tinta `#0D1117`; secundário `#5B6474` em claro, `#A9B1BF` em tinta, `#F4F6F9` em ardósia (o cinza não passa AA sobre ardósia).
- Sem cor de destaque: a única cor é a do símbolo Civilsul. Erros de formulário `#B42318`.
- Botões em pílula: tinta sobre claro, branco sobre escuro, contorno como secundário. Mínimo 44px (52px nos principais).

## Letra
Geist Variable (`@fontsource-variable/geist`, eixo de peso) para tudo.
- Título do herói: 400, `clamp(2.5rem … 4.625rem)`, entrelinha 1.02, tracking -0.04em.
- Títulos de secção: 400, `clamp(1.875rem … 3.375rem)`, -0.035em. Subtítulos 1.25–1.5rem, -0.02em.
- Corpo 1.0625rem / 1.5. Etiquetas: 600, 0.6875rem, maiúsculas, com "/" à frente, em pílula.
- Numeração "/ 001" a 600, 0.75rem, algarismos tabulares.

A etiqueta em pílula por cima dos títulos é traço do aspeto fixado: a proibição geral de "eyebrows" está levantada só nesta variante.

## Estrutura
- Cabeçalho branco preso ao topo (`position: sticky`): marca "Civilsul." com o símbolo, navegação ao centro-esquerda, "Ligar" (contorno) e "Pedir orçamento" (tinta). Em móvel: botão Menu com painel; sem JS a navegação fica visível por baixo da marca.
- Início: painel tinta (etiqueta, título, entrada + botões, factos à direita, fotografia larga a subir do fundo, "Quem somos", mosaicos de factos) → três cartões claros → serviços em acordeão numerado + lista completa de trabalhos → obras em fotografias grandes → processo em ardósia → painel de fecho com fotografia → painel de rodapé.
- Páginas interiores: cabeça em painel tinta com o caminho dentro de uma etiqueta; depois o mesmo vocabulário (linhas numeradas, grelhas de fotografias, cartões claros).
- Barra móvel fixa em pílula: Ligar · WhatsApp · Orçamento (na página do orçamento só os dois primeiros).

## Verdade
Os mosaicos só mostram 1985, 4511, `SERVICES.length` e `WORKS.length` (calculados em `Stats.astro`). Sem equipa, logótipos de clientes, preços, avaliações, testemunhos ou percentagens. Obras públicas nunca levam fotografia: painel tinta com "Alvará nº 4511".

## Movimento
- Assinatura: a linha do processo. Um só traço SVG que serpenteia entre os quatro passos; `motion.ts` calcula o caminho a partir da posição real dos passos (ResizeObserver) e liga `stroke-dashoffset` ao scroll. Em móvel o mesmo traço com cantos de 18px pela margem.
- Apoio: entradas de 16px, uma vez, só para o que está abaixo da dobra (classe posta por JS); acordeão com altura animada (`::details-content`, onde o browser suporta) e o "+" a rodar 45°.
- Curva `cubic-bezier(0.16, 1, 0.3, 1)`. Com movimento reduzido: linha completa, sem entradas nem transições.

## Ficheiros
`Layout.astro`, `styles.css`, `copy.ts`, `Icon.astro` (traço 1.5), `PageHead.astro`, `Stats.astro`, `ServiceList.astro`, `Trades.astro`, `WorkCard.astro`, `Process.astro`, `Close.astro`, `menu.ts`, `filter.ts`, `motion.ts`, `pages/*.astro`; rota `src/pages/paineis/[...path].astro`.

## Proveniência das imagens
Todas as fotografias são as obras da Civilsul em `src/assets/obras/` (originais do site atual), servidas por `astro:assets` em AVIF/WebP. Nenhuma imagem da referência foi usada; as capturas da referência estão em `_research/flat-white/` apenas para consulta.

## Verificação (2026-10-04)
Duas rondas de `tools/capture.mjs` (1440 e 390, sem overflow horizontal em nenhuma página); formulário percorrido com Playwright (pré-seleção `?tipo=`, erros, resumo, envio por WhatsApp); menu móvel, filtro das obras, acordeão e linha do processo testados; `impeccable detect` sem achados.

## Por rever
- Sem JS a linha do processo não é desenhada (os passos leem-se na mesma).
- A animação de altura do acordeão depende de `interpolate-size`; noutros browsers abre sem transição.
- O título do herói ocupa só duas linhas a 1440px, deixando a metade direita do painel mais vazia do que na referência.
