---
version: 1
slug: "src-pages-luz-em-corte"
primary_target: "src/pages/luz-em-corte"
related_targets: []
---

# Surface: Civilsul · candidata B2 "Luz em Corte" (src/pages/luz-em-corte, src/variants/luz-em-corte) — homepage only, PT

Mode: Persuade.

## Direction contract
THESIS: The builder shows its houses the way architects think about them: in section. The page reads as one long architectural section drawing (corte), with walls cut in charcoal poché, lime-white rooms, and a band of warm sunlight that travels through the page as you scroll. It refuses the stock builder hero and any 3D-render gloss.
OWN-WORLD: Ground #F4F4F1 (lime white), poché charcoal #24272A for cut walls/slabs, drafting line #24272A at 1px and 0.5px hairlines, sunlight gold #E2B34A as a translucent diagonal band (the ONE accent, used as light, not as fill on UI), shadow blue #5E7A99 for secondary lines and captions. Structure: the page is ruled by horizontal "slabs" (thick charcoal bars 10–14px, like floor slabs in section) that separate sections; vertical "walls" (charcoal bars) frame photos. Photos sit in the "rooms" between slabs. A small drawn section of an Algarve house (authored inline SVG, simple: walls, slab, roof pitch, platibanda, openings — a technical drawing, max ~40 nodes, stroke/poché only, no shading) appears in the hero. Type: Sofia Sans Condensed Variable for display (architectural drawing titles, 700–800) and Sofia Sans Variable for body; annotations and levels (e.g. "cota +3,20" is NOT allowed — no invented measurements; use labels like "Sala", "Pátio", "Cobertura" only on the generic drawing) set small with tabular numerals. Buttons: rectangular charcoal or outline; the primary action gets the gold light behind it.
STORY: The visitor sees a precise drawing and real houses, understands that this company thinks structurally (reconstruction, extensions, new houses), follows the light down the section through services and works, reads the facts, and calls.
FIRST VIEWPORT: Header strip on lime white. Left 5/12: H1 "Construímos, reconstruímos e remodelamos no Algarve desde 1985." ~4.5rem, support line, "Pedir orçamento" + WhatsApp, facts line (Desde 1985 · Alvará nº 4511 · Quarteira, Algarve). Right 7/12: the drawn house section (charcoal poché, lime rooms) with the gold light band falling diagonally through its openings, and a real photo (Vale del Rey or Construção de moradia) inset in one "room" of the section. Mobile: H1, CTA, then the section drawing full width; sticky bar.
FORM: challenger "daylight section" (competitive) from re-roll round 2 of seed 42e80edc, fused with the product.
SIGNATURE: the light moves: a fixed translucent gold band whose angle/position shifts with scroll progress (CSS scroll-driven animation where supported, IntersectionObserver fallback), passing through each section's photos like sun through a window. Subtle (opacity ≤ 0.35 over photos), never over text contrast. Reduced motion: static band.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
