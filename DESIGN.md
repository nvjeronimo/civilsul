---
name: Civilsul redesign (proposal, three worlds)
description: Redesign proposal for civilsul.pt. Three parallel visual worlds over one shared content layer; the client has not chosen yet.
---

# Design System: Civilsul redesign (proposal)

This project has no single design system yet. It ships three complete, parallel visual worlds over the same content, routes and quote logic, so the client can compare them. Each world's tokens and rules live next to its code; this root file holds no tokens.

## Overview

| World | Route | Design system | Sidecar |
|---|---|---|---|
| Mapa de Quantidades | `/mapa/` (`src/pages/mapa/[...path].astro`) | `src/variants/mapa/DESIGN.md` | `src/variants/mapa/design.json` |
| Aviso de Obra | `/aviso/` (`src/pages/aviso/[...path].astro`) | `src/variants/aviso/DESIGN.md` | `src/variants/aviso/design.json` |
| Padrão do setor | `/padrao/` (`src/pages/padrao/[...path].astro`) | `src/variants/padrao/DESIGN.md` | `src/variants/padrao/design.json` |

Each world's tokens are scoped to its root class (`.v-mapa`, `.v-aviso`, `.v-padrao`) and must not leak into the others. When working in a world, read only that world's DESIGN.md. Do not mix tokens, components or motion between worlds.

**Once the client decides, the chosen world's DESIGN.md and design.json will be promoted to the project root (replacing this file), and the other two worlds retired.**

## Shared elements (identical in all three worlds)

- **Logo:** `src/components/Logo.astro`, a vector redraw of the current Civilsul mark (two rounded diamonds with a cut-out centre and a yellow circle). Tones `color`, `mono` (currentColor) and `reverse` (for dark grounds). Each world places it; none redraws it.
- **Quote form contract:** `src/scripts/quote.ts`. A guided 4-step request (type → property and place → timing → name and consent) that each world marks up with the same data attributes (`data-quote`, `data-step`, `data-prev` / `data-next`, `data-step-label`, `data-progress`, `data-summary`, `data-send="wa|email"`, `data-error-for`, `data-status`). It fills a live summary as the visitor types, sends by WhatsApp or email, and without JavaScript shows all steps and sends by mailto. Worlds restyle it; they do not change the contract.
- **Content:** `src/content/` (company, services, works, quote, privacy) and `src/lib/` (site facts, routes, meta) are the single source for all worlds, PT and EN. Per-world `copy.ts` files hold only world-specific wording.
- **Photography:** every raster in `src/assets/obras/` is the client's own photograph taken from the current civilsul.pt portfolio (source files in `originais/`). No generated or stock imagery in any world. `src/assets/proposta/` holds screenshots of the built worlds for the proposal index page.
