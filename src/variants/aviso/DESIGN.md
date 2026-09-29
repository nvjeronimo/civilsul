---
name: Civilsul · Aviso de Obra
description: The Portuguese building-permit board as a website. White enamel panels bolted to a galvanised hoarding.
colors:
  hoarding: "#dcdeda"
  hoarding-rib: "#cfd2cd"
  enamel: "#ffffff"
  hem: "#f2f2ef"
  ink: "#111111"
  ink-2: "#3d403d"
  ink-3: "#575a57"
  rule-soft: "#c8cbc6"
  blue: "#0b84cf"
  blue-ink: "#0a6dad"
  yellow: "#ffd400"
  yellow-2: "#f5c800"
  error: "#b42318"
typography:
  display:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 1.45rem + 3.6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.875rem)"
    fontWeight: 850
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  band:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 800
    lineHeight: 1.2
  field-value:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  wrap: "78rem"
  board-pad: "clamp(2.35rem, 1.9rem + 1.8vw, 3.25rem)"
  stretch: "clamp(3rem, 2rem + 4vw, 6rem)"
  field-row: "0.85rem"
components:
  button-hazard:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.15rem"
    height: "3.5rem"
  button-hazard-hover:
    backgroundColor: "{colors.yellow-2}"
  button-plate:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1.15rem"
    height: "3.5rem"
  button-plate-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.enamel}"
  board:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  board-band:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.enamel}"
    typography: "{typography.band}"
  input:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  option-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.enamel}"
  lona:
    backgroundColor: "{colors.hem}"
    padding: "12px"
---

# Design System: Civilsul · Aviso de Obra

Scope: this file governs only the `aviso` world (`src/variants/aviso/**`, routed by `src/pages/aviso/[...path].astro`). All tokens are scoped under `.v-aviso` in `styles.css`.

## Overview

**Creative North Star: "The Permit Board on the Hoarding"**

Every page is the aviso de obra that hangs on every construction site in Portugal: a white enamel panel bolted to galvanised hoarding, its legal fields filled with Civilsul's real facts (who builds, permit 4511, since 1985, Quarteira). The ground is the hoarding itself, a light grey with a faint vertical corrugation; content lives on square white boards with a 2px ink border, an inner enamel fillet and four drawn screw heads. Key boards carry a blue municipal header band.

The voice is signage, not marketing: Overpass (the Portuguese road-sign face) set heavy, field labels in small uppercase above large values, square pictogram icons with 2px strokes and square caps. Photographs are printed site banners (lonas) with eyelets along the hem, stretched on the hoarding, each with a small bolted caption plate. Safety yellow with black 45° hazard stripes marks the primary action and nothing else.

Boards are physically bolted on: on first view a board settles with a 14px drop (560ms) while its screws turn a quarter (620ms, 140ms delay). Transform only, once; reduced motion shows them static.

**Key Characteristics:**
- Grey corrugated hoarding ground, white enamel boards, 2px ink borders, square corners.
- Four drawn screw heads per board (two per strip or caption plate).
- Legal field grammar: uppercase label over a bold value.
- Hazard stripes only on the primary quote action.
- Real photos as eyeleted banners, never as overlays behind text.

## Colors

Site materials: galvanised grey, white enamel, black ink, municipal blue, safety yellow.

### Primary
- **Municipal Blue** (blue): the header band on key boards (white text on blue), the current-page nav underline, the mobile current-item bar.
- **Link Blue** (blue-ink): link text and arrow links, where the lighter blue would be too weak for text on white.

### Secondary
- **Safety Yellow** (yellow): the hazard plate of the primary action, the quote cell of the mobile action bar, the skip link, text selection, focus rings on dark or blue surfaces.
- **Deep Safety Yellow** (yellow-2): hazard plate hover.

### Neutral
- **Galvanised Hoarding** (hoarding): page ground, under a repeating vertical rib gradient; also hover fill for option rows.
- **Hoarding Rib** (hoarding-rib): photo placeholders behind banners.
- **White Enamel** (enamel): every board, the header strip, caption plates, inputs, secondary buttons.
- **Banner Hem** (hem): the eyeleted hem of a lona and small annex panels.
- **Sign Ink** (ink): text, board borders, focus rings on light surfaces, checked options.
- **Ink 2 / Ink 3** (ink-2, ink-3): leads and secondary copy; field labels and notes.
- **Soft Rule** (rule-soft): dividers between field rows and list rows inside a board.
- **Error Red** (error): invalid inputs and error messages.

### Named Rules
**The Hazard Rule.** Yellow-and-black stripes mean "the primary action". One hazard plate per view (plus the quote cell of the mobile bar); never decorative, never on a secondary action.

**The Band Rule.** Blue is a band or a link, never a button fill.

## Typography

**Display Font:** Overpass Variable (with system-ui, sans-serif)
**Body Font:** Overpass Variable, same family
**Middot:** a local system face (Helvetica Neue / Arial) substitutes only U+00B7, because Overpass's middot is asymmetric.

**Character:** One highway-signage family carries everything. Heavy weights (800–900) with tight tracking make headings read like painted sign lettering; body stays at 400 for comfort.

### Hierarchy
- **Display** (900, clamp 2.35–4.5rem, 0.98, -0.03em): page H1s; the home board H1 runs clamp 2.5–4.25rem.
- **Headline** (850, clamp 1.75–2.875rem, 1.04, -0.02em): section titles.
- **Title** (800, clamp 1.25–1.5rem): board titles, list items, service names.
- **Band** (800, clamp 1.1875–1.375rem): text in the blue header band.
- **Field value** (700, clamp 1.125–1.3125rem, 1.3): the filled value of a legal field.
- **Body** (400, 1.0625rem, 1.55): running text; measure 64ch. Tabular numerals on.
- **Label** (700, 0.8125rem, 0.04em, uppercase, ink-3): legal field labels directly above their value.

### Named Rules
**The Field Label Rule.** An uppercase label is a legal field name and always names the value directly beneath it (Alvará nº, Sede, Telefone). It is never a free-floating kicker above a section heading.

## Layout

A 78rem container with a fluid gutter (1–2.5rem); sections ("stretches" of hoarding) spaced clamp(3–6rem). Boards pad clamp(2.35–3.25rem) so content clears the screws.

The header is a white strip bolted near the top (14px from the edge, over the hero on home) with screws at both ends. Home first view: a full-bleed banner photo with an eyeleted hem top and bottom; the Aviso board (max 36rem) is bolted over it left of centre, up to min(100svh, 64rem) tall. Below 48rem the photo becomes a 45svh band and the board overlaps it from below by 4.5rem.

The works index is a hoarding of lonas: 1 column, 2 columns from 40rem (landscape works span 2), 4 columns from 64rem with dense packing and fixed row heights. The header collapses to a menu button below 64rem (the drop-down is itself a bolted board); the fixed three-cell action bar (Ligar · WhatsApp · Orçamento) appears below 48rem.

## Elevation & Depth

Physical, low elevation: boards and plates really hang off the hoarding, so they cast short soft shadows. There are exactly two elevation levels plus the mobile bar. Depth inside a board comes from the inner enamel fillet (1px ink at 22%, inset 5px) and drawn screws, not from further shadows.

### Shadow Vocabulary
- **Board** (`box-shadow: 0 2px 2px rgb(0 0 0 / 0.16), 0 14px 28px -14px rgb(0 0 0 / 0.42)`): full boards and the open mobile menu.
- **Plate** (`box-shadow: 0 1px 1px rgb(0 0 0 / 0.1), 0 6px 14px -8px rgb(0 0 0 / 0.45)`): the header strip, lonas, caption tags, small annex panels.
- **Action bar** (`box-shadow: 0 -6px 18px -10px rgb(0 0 0 / 0.4)`): the fixed mobile bar.

### Named Rules
**The Bolted Rule.** Only things that are physically fixed to the hoarding (boards, strips, plates, banners) get a shadow. Buttons, inputs and text never do.

## Shapes

Square corners throughout (0px). Borders are heavy and honest: 2px ink on boards, buttons, inputs and options; 1px soft rules between rows inside a board; 2px ink rules to open a field table. Recurring small shapes are drawn, not decorative: circular screw heads with a slot, eyelets along banner hems, the 45° hazard stripe, a small rotated square as the error marker.

## Components

### Buttons
- **Hazard plate (primary):** 2px ink frame filled with -45° black/yellow stripes (11px), 7px of stripes around an inner yellow plate with its own 2px ink border; text 850 at 1.0625rem; 3.5rem min height (3rem small, stripe 8px). Hover slides the stripes (400ms) and deepens the plate to yellow-2.
- **Enamel plate (secondary):** white, 2px ink border, 800 weight, 3.5rem min. Hover inverts to ink with white text.
- **Arrow link:** blue-ink, 800, 2px underline at 35% that goes solid on hover; arrow nudges 3px.

### Cards / Containers
- **Board:** white enamel, 2px ink border, inner 1px fillet at 5px inset, four screws (26px; 20px on small boards) at 9px from the corners, board shadow, square. Optional blue header band with a 2px ink bottom border.
- **Lona (work banner):** hem-coloured 12px frame with eyelets along top and bottom, plate shadow, photo cover-cropped; a bolted white caption tag (2px ink, two 18px screws) sits bottom-left. Hover scales the photo 1.025 and underlines the title.

### Inputs / Fields
- **Style:** white, 2px ink border, square.
- **Choice rows:** 2px ink boxed options; hover fills with hoarding grey; checked inverts to ink with white text.
- **Focus:** 3px blue outline flush to the field (inputs); 3px ink outline offset 3px elsewhere.
- **Error:** error-red border plus a 1px inset, message led by a small rotated red square.

### Navigation
- **Header strip:** white enamel strip with a screw at each end; brand wordmark 900 at 1.5rem; nav links 700 with a 3px bottom border (soft rule on hover, municipal blue when current); PT/EN as a small 2px-bordered code plate that inverts on hover; phone with its call note; small hazard CTA.
- **Mobile:** menu button inverts when open; nav becomes a bolted drop-down board with 1.375rem 800 rows and a 4px blue inset bar on the current item.

### Quote Board (signature)
A blank licence board whose fields fill as the visitor types; the step indicator uses 2px-bordered numbers that invert to ink when current; the last step shows the completed board ready to send by WhatsApp or email.

## Do's and Don'ts

### Do:
- **Do** put content on white enamel boards with 2px ink borders and drawn screws.
- **Do** present facts as field rows: uppercase label (0.8125rem, 700, +0.04em) over a bold value.
- **Do** keep every corner square, inputs and buttons included.
- **Do** show photos as eyeleted lonas or full-bleed banners with a bolted caption plate.
- **Do** use blue-ink, not the lighter blue, for link text.

### Don't:
- **Don't** use hazard stripes for anything but the primary quote action.
- **Don't** fill buttons with blue.
- **Don't** place text directly over a photo with a gradient overlay; text sits on a board bolted over the photo.
- **Don't** use an uppercase field label as a kicker above a heading.
- **Don't** add shadows to buttons, inputs or text; only bolted objects cast them.
- **Don't** animate anything other than the bolt-on settle, the screw quarter-turn and small hover shifts.
