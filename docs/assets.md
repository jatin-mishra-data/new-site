# Asset Specification (`assets.md`)

**Product:** Jatin Mishra — Freelance Website + Business-Consulting **Service Landing Page**
**Status:** Approved-ready · derived from `plan.md`, `PRD.md`, `TRD.md` (source of truth)
**Last updated:** 25 June 2026

> **Source hierarchy.** Asset direction follows the canonical docs. The Stitch assets file was inspiration only and is **rejected** wherever it conflicts: it branded everything **"StrategicAI"** (Sora wordmark, "S" favicon), proposed a **3D / data-visualization hero**, fake **"Risk Analyzed / AI-Verified" badges**, and **invented case studies** (boutique hotel, clinic, e-commerce, financial services) with metrics. None of those are used. Brand is **Jatin Mishra**; the hero/page background is a **single static photographic image** with a progressive dark overlay (see `design.md` §2a, §15 — no image asset was required under the old CSS/SVG-only hero direction, but the revised cinematic direction now requires one, specified in §2a below); project imagery uses **clearly-marked placeholders** until real work is supplied.

---

## 1. Global Conventions

- **Formats:** photos/screenshots → **WebP** (with AVIF where the build supports it); logos/icons/monogram → **SVG**; favicon → SVG + PNG fallbacks; OG image → PNG (or high-quality JPG).
- **Optimization:** compress all raster images; run SVGs through SVGO; provide `@2x` for any raster used at a fixed size.
- **Color world:** assets live on a **dark** canvas (`#0A0A0A`). Logos/icons should be light or accent-colored, not dark-on-dark.
- **Alt text:** every meaningful image needs descriptive alt text (defined alongside the component); decorative visuals are marked decorative.
- **Folder:** project images under `public/work/`; brand assets at `public/`.

### Naming conventions
- lowercase, hyphenated, descriptive: `work-<clienttype>-<slug>.webp`, `jm-logo.svg`, `jm-monogram.svg`, `favicon.svg`, `og-image.png`, `portrait-jatin.webp`, `icon-<name>.svg`.
- No spaces, no brand placeholders like "strategicai-*".

---

## 2. Required Assets (Phase 1)

| Asset | Description | Dimensions | Format | Filename | Status |
|---|---|---|---|---|---|
| **Shared fallback background image** | Single fixed photographic background used behind Packages/Solutions and Tools (sections without a dedicated photo), paired with a progressive dark CSS overlay (see §2a). Decorative only. | 2560×1600 (desktop), with tablet/mobile crops — see §2a | WebP (AVIF where supported) | `bg-main.webp`, `bg-main-tablet.webp`, `bg-main-mobile.webp` | ✅ Present |
| **Section journey backgrounds (×6)** | One dedicated photo per major section forming a sunrise → morning → daylight → blue hour → night → late-night visual journey (see §2a). Decorative only. | Native photo resolution, ≥1920px wide | WebP | `hero-bg.webp` (sunrise), `services-bg.webp` (bright morning), `process-bg.webp` (daylight), `work-bg.webp` (blue hour), `about-bg.webp` (starry night), `contact-bg.webp` (darkest late-night) | ✅ Present |
| **Logo / "JM" monogram** | Jatin Mishra mark for nav + footer (Poppins wordmark or "JM" monogram). Light/accent on dark. | ~200×48 (wordmark) / 48×48 (monogram) | SVG | `jm-logo.svg`, `jm-monogram.svg` | ❌ Missing |
| **Favicon set** | Generated from the "JM" monogram. | 32×32, 48×48 (+ SVG) | SVG + PNG (+ `.ico`) | `favicon.svg`, `favicon-32.png`, `favicon.ico` | ❌ Missing |
| **OG / social image** | Share card: name + one-line offer on brand background. **No invented metrics.** | 1200×630 | PNG (or JPG) | `og-image.png` | ❌ Missing |
| **Portrait** | Professional headshot of Jatin, neutral background. | 800×800 | WebP | `portrait-jatin.webp` | ❌ Missing |
| **Service icons (×4)** | Line-art icons for the 4 services. Prefer an icon library (Lucide) over custom files. | 24–64px | SVG (or library) | `icon-web.svg`, `icon-saas.svg`, `icon-analysis.svg`, `icon-ads.svg` | ⚠️ Use Lucide |
| **Tool icons** | Brand logos for the Tools strip (SQL, Power BI, Looker Studio, Salesforce, Excel, Python, AI tools). | ~24px | SVG (Simple Icons) | from library | ⚠️ Use Simple Icons |
| **Project images (×3 + 1)** | Screenshots/mockups of real delivered sites + 1 "Coming Soon". **Placeholders until `milestone.md` is provided.** | 1280×720 (16:9) | WebP | `work-<type>-<slug>.webp` | ❌ Missing (placeholders) |

> The hero visual **is** the top of the full-page photographic background (see `design.md` §15) — it is carried entirely by the **Full-page background image** asset above plus a CSS overlay; no separate hero-only graphic is created.

---

## 2a. Background Image Specifications

### Shared fallback background (`bg-main*.webp`)
- **Format:** WebP primary, AVIF where the build supports it — same rule as other photos/screenshots (§1).
- **Resolution:** one master desktop asset at **2560×1600** (or native aspect of the source photo, capped ≥1920px wide); a tablet crop and a mobile crop derived from the same source image, not separate photoshoots.
- **Optimization:** compress aggressively — target a lean file size; implemented as a CSS `background-image` (via the `PageBackground` component), not `next/image`, since it's a fixed decorative layer rather than a discrete content image.
- **Naming convention:** `bg-main.webp` (desktop), `bg-main-tablet.webp` (640–1024px), `bg-main-mobile.webp` (<640px).
- **Storage location:** `public/backgrounds/`.
- **Usage:** shows behind Packages/Solutions and Tools — the two sections without a dedicated journey photo (see below).

### Section journey backgrounds (`hero-bg.webp` … `contact-bg.webp`)
- **Format:** WebP (re-encoded from the original source JPGs via `sharp`, quality 78). Originals kept alongside as `.jpg` files, not referenced by any component.
- **Resolution:** native photo resolution, ≥1920px wide, implemented via CSS `background-size: cover`.
- **Naming convention:** `hero-bg.webp`, `services-bg.webp`, `process-bg.webp`, `work-bg.webp`, `about-bg.webp`, `contact-bg.webp`.
- **Storage location:** `public/backgrounds/`.
- **Mapping (do not swap):** Hero = sunrise mountain road; Services = bright morning wide valley; Process = daylight mountain road; Work = blue-hour road; About = starry night / Milky Way road; Contact = darkest late-night road.
- **Seam strategy:** each section layers its photo with a top/bottom edge fade to a shared dark tone (`rgba(8,10,16, ~0.9)`) so consecutive sections blend into one another despite using different photos; the mid-section overlay darkness increases through the journey (lightest at Hero, near-solid by Contact).
- **Decorative status:** all six are **purely decorative** — implemented as CSS `background-image` on `aria-hidden="true"` layers, never conveying information not already in the text content. Readability depends entirely on each section's paired dark overlay — an image must never ship without its overlay.

---

## 3. Optional Assets (Phase 1, nice-to-have)

| Asset | Description | Format |
|---|---|---|
| Background grain/noise | Very subtle texture overlay for depth | CSS noise / small SVG |
| Process step icons | Small numerals or line icons for the 5 process steps (numbers/CSS work fine instead) | SVG / Lucide |
| Social icons | LinkedIn / GitHub / X | Lucide / Simple Icons |

---

## 4. Image Dimensions (reference)

| Use | Target size | Aspect |
|---|---|---|
| Full-page background (desktop) | 2560×1600 | ~16:10 |
| Project card image | 1280×720 | 16:9 |
| Portrait | 800×800 | 1:1 |
| OG image | 1200×630 | ~1.91:1 |
| Logo wordmark | ~200×48 | flexible (SVG) |
| Monogram / favicon | 48×48 / 32×32 | 1:1 |
| Service/tool icons | 24–64 | 1:1 |

---

## 5. File Formats

- **Screenshots / photos / portrait:** WebP (AVIF if supported). Served via `next/image` with explicit width/height to prevent layout shift.
- **Logo, monogram, icons, decorative shapes:** SVG (crisp at any size, tiny).
- **Favicon:** SVG primary + 32/48 PNG + `.ico` for legacy.
- **OG image:** PNG (or high-quality JPG ~1200×630).

---

## 6. Project Screenshot Requirements

- **16:9**, 1280×720, WebP, consistent framing across cards.
- Show the **real delivered site** (home or a key screen). Device-frame mockups (via Shots.so / Screely / Figma) are fine for polish.
- **Only real work** that Jatin has permission to publish. Get a quick OK from the client before publishing screenshots/links.
- Until `milestone.md` is supplied, use **clearly-labelled placeholder images** (e.g. a neutral gradient panel reading `PLACEHOLDER — project image`) — never pass them off as real client work, and never attach invented metrics.
- Filename pattern: `work-<clienttype>-<slug>.webp` (e.g. `work-cafe-bistro.webp`).

---

## 7. Portrait Requirements

- 800×800, 1:1, WebP.
- Professional but approachable; neutral or simple background; good lighting.
- Works on a dark canvas (subject not lost in shadow); a soft accent gradient ring is applied in CSS, so the source can be plain.
- Filename: `portrait-jatin.webp`.

---

## 8. Logo / Monogram Requirements

- Brand text is **"Jatin Mishra"** (or **"JM"** monogram) — **never "StrategicAI."**
- Set in **Poppins** (matching the headline font), light or accent-gradient on dark. **Do not** use Sora.
- Provide a horizontal wordmark (`jm-logo.svg`, ~200×48) and a compact monogram (`jm-monogram.svg`, 48×48) for nav/favicon/footer.
- SVG, optimized, no embedded raster.

---

## 9. Favicon Requirements

- Generated from the **"JM" monogram** (not an "S").
- Provide `favicon.svg` (primary), `favicon-32.png`, `favicon-48.png`, and `favicon.ico`.
- Readable at 16–32px; high contrast on both light and dark browser chrome.
- Generate the set via realfavicongenerator.net or equivalent.

---

## 10. OG Image Requirements

- 1200×630, PNG (or JPG).
- Contains: **Jatin Mishra**, a one-line offer (e.g. "Websites + SaaS for local businesses & founders"), on the brand dark background with the accent gradient.
- **No invented metrics, no fake dashboards, no "trusted by" logos.**
- Filename: `og-image.png`. Referenced in Open Graph + Twitter card metadata.

---

## 11. Icon Requirements

- **Service icons:** prefer **Lucide** (consistent line-art) over bespoke SVGs; only create custom SVGs if a concept isn't covered.
- **Tool/brand icons:** use **Simple Icons** for SQL, Power BI, Looker Studio, Salesforce, Excel, Python, etc. — keep them small and monochrome/muted in the Tools strip.
- **Social icons:** Lucide (LinkedIn, GitHub, X).
- All icons inherit color via `currentColor` so they theme with tokens; sized 24–64px.
- **Banned:** fake credential badges ("Risk Analyzed", "AI-Verified").

---

## 12. Assets Still Missing (action needed from Jatin)

1. ~~Full-page cinematic background photo~~ — done: shared fallback (`bg-main*.webp`) + 6 section journey photos (`hero-bg.webp` … `contact-bg.webp`) all present — see §2a.
2. **"JM" logo + monogram** (or approval to generate one).
3. **Favicon set** (derives from the monogram).
4. **OG image** (derives from logo + tagline).
5. **Portrait photo** (800×800).
6. **Real project screenshots** for the Work section — **blocked on `milestone.md`** + client permission.
7. **Confirmed contact email** for footer/OG/error copy (résumé vs account address).
8. **GitHub + X handles** for social icons (LinkedIn already known).

Until these arrive, the build uses labelled placeholders and library icons so Phase 1 can still be built and deployed.

---

## 13. Phase 1 vs Phase 2

**Phase 1 (needed for launch):**
- Shared fallback background image (desktop + tablet + mobile crops) + 6 section journey photos — see §2a. **Done.**
- JM logo/monogram, favicon set, OG image, portrait.
- Service icons (Lucide), tool icons (Simple Icons), social icons.
- Project images — real where available, otherwise clearly-marked placeholders + 1 "Coming Soon".
- Optional: subtle background grain, process step icons.

**Phase 2 (optional, only if pursued — do NOT prepare for Phase 1):**
- Any **3D / Spline scene or low-poly model assets** (only if the optional 3D hero is added later; not part of Phase 1).
- Per-project detail-page imagery for `/work/[slug]`.
- A dedicated `/audit` page graphic.
- Real, attributed proof assets (e.g. permitted client logos or quotes) if/when available.

> **Explicitly NOT in Phase 1:** 3D models, Spline exports, WebGL textures, data-visualization/dashboard graphics, fake badges, testimonial avatars.

---

*End of assets.md*
