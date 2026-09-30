# Cal e Barra (candidata B1) — sistema como construído

Só página inicial, só PT. `src/pages/cal-e-barra/index.astro` + `src/variants/cal-e-barra/**`.

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

## Movimento
Um só momento: a barra pinta-se da esquerda para a direita (clip-path inset, 900ms, expo-out). A da primeira vista é animação CSS (termina pintada mesmo sem JS); as restantes só são "despintadas" pelo `barra.ts` se estiverem abaixo da dobra quando o script corre, e pintam ao entrar em vista. `prefers-reduced-motion`: tudo pintado, sem transições.

## Superfícies do browser
`::selection` anil/cal (invertido nas barras), `caret-color` anil, `scrollbar-color` anil sobre rua, foco a tinta 2px com offset 3px (cal sobre anil), `accent-color` anil.

## Rasters
Nenhum raster novo. Todas as imagens são as fotografias reais do portefólio atual (`src/assets/obras/*`, origem `originais/trabalhos-*.jpg` do civilsul.pt), servidas por `astro:assets` em AVIF/WebP. Obras públicas não são ilustradas.

## Revisão final (2026-09-30, capturas em `.impeccable/review/cal-e-barra/`)
- Sem overflow horizontal a 390; sem erros de consola além do script inline da barra de ferramentas de dev do Astro (só em dev).
- `impeccable detect`: sem achados.
- Monte do Pocinho (barra azul) passou para as Obras, janela 7/12 junto à Maison Amarande.
- Veredito: a gramática (cal, barra, platibanda) lê-se como arquitetura e não como tema. Ponto fraco: as barras vazias (obras, contactos) repetem-se e dependem da pintura animada para ganhar sentido.
