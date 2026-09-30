# Luz em Corte (proposta C, site completo, só PT)

O site é lido como um corte de arquitetura: lajes a carvão (12 px) separam os pisos (secções); as fotografias das obras são divisões entre paredes de poché; o bloco de contactos é o terreno por baixo da última laje e fica acima da banda de sol (a luz não entra na terra).

## Sistema
- Cores: cal #F4F4F1 (fundo), poché #24272A (lajes, paredes, texto), sol #E2B34A (só luz: banda fixa, raios no desenho, mancha atrás da ação principal, botão Orçamento da barra móvel), azul de sombra #5E7A99 (traço fino) / #48637F (texto secundário sobre cal, 5,6:1) / #A9BCCF (sobre carvão, 7:1), erro #9B2C1F.
- Tipo: Sofia Sans Condensed Variable 700–800 (títulos, telefones, legendas de divisão), Sofia Sans Variable (texto). Numerais tabulares em toda a página.
- Botões: retangulares, carvão ou traço; a ação principal (`.btn--lit`) está numa mancha de sol em paralelogramo que se desloca 6 px no hover.
- Linhas: 1 px carvão para abrir listas, 1 px a 42 % para as divisões internas.

## O desenho (Corte.astro)
Um só corte construtivo, desenhado uma vez (~40 unidades por metro, sem escala nem cotas): volume de dois pisos com terraço, platibanda e capeamento; escada de 20 espelhos com vazio e guarda; ala térrea com laje de esteira, telhado de duas águas e chaminé algarvia; lintéis com junta, peitoris salientes, vidros a traço; fundações em sapata; terreno tracejado a 45° que se desvanece; pátio com pavimento e muro baixo; mobiliário e figura a 0,75 px. Os raios de sol entram com o mesmo ângulo pela janela alta e pela porta do pátio.
Recortes (`view`): full (inicial, serviços, contactos), moradias (empresa), reconstrucao, remodelacoes, piscinas, telhados, obras-publicas (fundações e terreno: tratamento desenhado, sem fotografia, com "Alvará nº 4511").

## Páginas
Rota única `src/pages/luz-em-corte/[...path].astro` (variantPaths(['pt'])). Inicial, Serviços + 6, Obras (filtro por KINDS com aria-pressed, progressivo) + 13, Pedir orçamento (contrato de src/scripts/quote.ts), Contactos, Empresa, Privacidade. Layout comum com menu móvel (aria-expanded, Escape), rodapé completo e barra móvel Ligar · WhatsApp · Orçamento.

## Movimento
Um só momento: a banda de sol fixa (soft-light + multiply) atravessa todas as páginas e baixa de ângulo com o scroll. CSS scroll-driven onde existe; sun.ts como alternativa; parada com movimento reduzido. O resto são estados (hover, foco, barra de progresso do orçamento).

## Proveniência
Todas as imagens raster são fotografias reais do portefólio atual (src/assets/obras). Nenhum raster novo; o desenho é SVG autoral.
