---
name: huella-local-design
description: Use this skill to generate well-branded interfaces and assets for Huella Local (Fundación Huella Local), a Chilean foundation that bridges private sector and municipalities for high-impact public infrastructure. Contains essential design guidelines, colors, typography, font tokens, visual assets, and UI kit components for prototyping or production.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, infographics, etc), copy assets out of `assets/` and create static HTML files for the user to view. Load `styles.css` to get all design tokens. Use components from `components/core/` for reusable UI primitives.

If working on production code, read the token files in `tokens/` and copy relevant assets to understand the brand system precisely. The readme.md contains the full visual foundations guide.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about the surface and audience, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key brand facts to remember:
- Primary font: Montserrat (weights 400, 500, 600, 700 — NO 800)
- Brand colors: Azul #7A80A3, Naranja #E28757, Verde #8DC899, Gris texto #4D4E56
- Cards: white, border-radius 10px, subtle border + shadow-sm, hover to shadow-azul
- Buttons: orange fill, uppercase, border-radius 10px
- Photography: grayscale + azul overlay rgba(90,95,130,0.6)
- Slides: thin azul stripes top/bottom, orange label pill above title, optional Franja Verde footer
- Copy: Spanish primary, tú form, sentence case, bold key phrases inline, data-driven
