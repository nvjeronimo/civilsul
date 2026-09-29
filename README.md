# Civilsul · proposta de redesign

Demonstração do novo site da Civilsul (Construtora do Sul, Lda.), em três direções visuais sobre o mesmo conteúdo.

- Proposta: `/` (src/pages/index.astro)
- Variantes: `/mapa/`, `/aviso/`, `/padrao/` (cada uma em src/variants/<variante> + src/pages/<variante>), PT na raiz e EN em `/en/`
- Conteúdo partilhado: src/content (serviços, obras, textos, formulário), factos em src/lib/site.ts
- Pedido de orçamento: src/scripts/quote.ts (envio por WhatsApp ou email, sem servidor)

```bash
npm install
npm run dev      # http://localhost:4321/civilsul/
npm run build    # dist/ (GitHub Pages em https://nvjeronimo.github.io/civilsul/)
```

Para produção em civilsul.pt: `SITE=https://civilsul.pt BASE=/ PUBLIC_DEMO=false npm run build`, publicar só a variante escolhida na raiz, e usar public/.htaccess (cabeçalhos de segurança e redirecionamentos do WordPress antigo).

Só factos do site atual (1985, alvará nº 4511, lista de serviços, 14 fotografias, contactos). Ver PRODUCT.md.
