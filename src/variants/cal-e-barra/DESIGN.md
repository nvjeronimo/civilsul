# Cal e Barra (proposta B) — sistema como construído

Site completo, só PT. Rota única `src/pages/cal-e-barra/[...path].astro` (`variantPaths(['pt'])`) + `src/variants/cal-e-barra/**`:
`Layout.astro` (head, cabeçalho, rodapé, barra fixa móvel), `Wall.astro` (parede: platibanda + corpo + barra com slot), `PageHead.astro`, `Win.astro` (obra como janela), `Channels.astro`, `Close.astro` (remate de contacto), `Trades.astro`, `Process.astro`, `Crown.astro`, `Icon.astro`, `copy.ts`, scripts `barra.ts` / `menu.ts` / `filter.ts`, e `pages/` (Home, Services, Service, Works, Work, Quote, Contact, About, Privacy).

## Tese
A página é uma casa algarvia em alçado. A parede é cal (`--cal`), cada secção termina numa barra pintada que ocupa toda a largura, e cada parede é rematada por uma platibanda em degrau que sobe da "rua" (`--rua`, o intervalo entre paredes). Não há adereços: nem azulejo, nem sol, nem texturas. A casa vive na estrutura, na cor e nas fotografias reais.

## Cor
| token | valor | uso |
|---|---|---|
| `--cal` | #F5F6F4 | parede, fundo de todas as secções |
| `--rua` | #E6E7E2 | intervalo entre paredes, rodapé ("o chão"), fundo das janelas antes da foto carregar |
| `--ink` / `--ink-2` / `--ink-3` | #1B1B1B / #454643 / #5C5D59 | texto; todos ≥ 5.4:1 sobre cal |
| `--anil` | #1F4FA0 | barra principal (primeira vista, obras, empresa, contactos), botão principal, barra fixa móvel, `::selection` |
| `--anil-soft` | #CDD8EE | texto secundário sobre anil (5.4:1) |
| `--ocre` | #D9A43A | barra secundária, duas vezes (serviços, processo); texto sobre ela é tinta (7.6:1) |
| `--telha` | #B5553A | só filete: sublinhado de links e hover da navegação |

## Tipo
- Display: Schibsted Grotesk Variable, 700–800, tracking -0.035 a -0.04em. H1 4.5rem máx. (desktop), H2 clamp(2rem, 3.5vw, 3.25rem).
- Texto: Sofia Sans Variable, 18px base, 1.6.
- Números de telefone: `.num` com `tnum`. `tnum` fica fora dos títulos (no Schibsted alarga vírgulas e pontos).

## Estrutura
- `.wall` = secção. `margin-top: var(--street)` abre a rua; `.crown` (clip-path de 8 pontos, largura clamp(220px, 30vw, 440px)) fica sobre a coluna do título.
- `.barra` = pé da parede, altura por modificador: `--hero` 88px, `--facts` 72/88px, `--m` 64px, `--s` 48px, `--xs` 40px. Só a primeira vista e a empresa levam conteúdo (ações; factos).
- Primeira vista em desktop: cabeçalho e H1 em 5/12, janela com a reconstrução e ampliação de moradia (platibanda decorada, céu limpo) em 7/12, proporção 4:3.1 assente no pé da vista, barra anil a toda a largura no fundo da vista. O cabeçalho sobrepõe-se à grelha por `--hd-h` (156px).
- Obras: grelha de 12 colunas, janelas alinhadas pelo lintel (topo), proporções 3:2 / 4:3 / 4:5, cantos retos, legenda por baixo (título + local/cliente quando a legenda original o diz).
- Serviços: título fixo à esquerda (sticky), seis linhas à direita, itens como frase ("Inclui …"), lista completa de trabalhos (`#trabalhos`) em 1/2/3 colunas.
- Móvel: barra fixa anil com Ligar · WhatsApp · Orçamento (`#contactos`).

## Páginas
- Cada página é uma sequência de `Wall`: a primeira sem platibanda e com a barra que se pinta ao carregar (`barra--load`); as seguintes com platibanda e barra pintada ao entrar em vista.
- A barra leva conteúdo quando serve: ligações de secção (home), factos (empresa), navegação obra anterior/seguinte (obra), o alvará (obras públicas).
- Obras públicas não têm fotografia: a primeira parede termina numa barra anil alta com "Alvará nº 4511" pintado; no índice de serviços a janela desse serviço é um painel anil com o alvará.
- Obra: fotografias na proporção natural; com duas fotos as colunas repartem-se pela proporção de cada uma para as alturas coincidirem.
- Obras: filtro por KINDS (botões `aria-pressed`, escondido sem JS, `?tipo=` na URL).
- Orçamento: contrato de `src/scripts/quote.ts` à letra; o indicador de passos é uma barra anil sobre a rua; o resumo é uma folha branca com filete anil; sem JS todos os passos visíveis e envio por mailto.
- Cabeçalho: na home ocupa 5/12 da primeira vista; nas interiores é uma linha. Menu móvel em painel (botão com `aria-expanded`, Escape fecha e devolve o foco); sem JS a navegação fica visível.

## Movimento
Um só momento: a barra pinta-se da esquerda para a direita (clip-path inset, 900ms, expo-out). A da primeira vista é animação CSS (termina pintada mesmo sem JS); as restantes só são "despintadas" pelo `barra.ts` se estiverem abaixo da dobra quando o script corre, e pintam ao entrar em vista. `prefers-reduced-motion`: tudo pintado, sem transições.

## Superfícies do browser
`::selection` anil/cal (invertido nas barras), `caret-color` anil, `scrollbar-color` anil sobre rua, foco a tinta 2px com offset 3px (cal sobre anil), `accent-color` anil.

## Rasters
Nenhum raster novo. Todas as imagens são as fotografias reais do portefólio atual (`src/assets/obras/*`, origem `originais/trabalhos-*.jpg` do civilsul.pt), servidas por `astro:assets` em AVIF/WebP. Obras públicas não são ilustradas.

## Revisão final (2026-09-30, capturas em `.impeccable/review/cal-e-barra/`)
- Sem overflow horizontal a 390; sem erros de consola além do script inline da barra de ferramentas de dev do Astro (só em dev).
- `impeccable detect`: sem achados.
- Monte do Pocinho (barra azul) nas Obras da home e na página Empresa.
- Site completo verificado a 1440 e 390 (8 páginas da captura + obras públicas + privacidade): sem overflow; formulário percorrido com Playwright (pré-seleção ?tipo=, validação por passo, resumo, envio WhatsApp); menu e filtro testados.
- Veredito: a gramática (cal, barra, platibanda) lê-se como arquitetura e não como tema. Ponto fraco: muitas barras anil vazias ao longo de páginas longas repetem-se e dependem da pintura animada para ganhar sentido.
