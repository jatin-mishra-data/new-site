# Design Specification (`design.md`)

**Product:** Jatin Mishra — Freelance Website + Business-Consulting **Service Landing Page**
**Status:** Approved-ready · derived from `plan.md`, `PRD.md`, `TRD.md` (source of truth)
**Last updated:** 25 June 2026

> **Source hierarchy.** This file consolidates the approved design direction from `plan.md` / `PRD.md` / `TRD.md`. The raw Stitch files in `docs/` were used as *visual inspiration only* and were **not** allowed to override approved direction. Where Stitch conflicted (light "StrategicAI" corporate theme, navy/emerald palette, Sora/Playfair fonts, sharp 4px corners, agency framing, data-viz hero), this file follows the canonical docs instead.
>
> **Build direction.** The final UI is implemented in **Claude Code** with **Next.js + TypeScript + Tailwind CSS**. Google Stitch is visual inspiration only — never production code.

---

## 1. Visual Philosophy

**Premium, modern, fast — and unmistakably a solo expert, not an agency.**

The site should feel like a high-end product landing page: dark, confident, and clean, with a single bright accent that always points to the next action. It must communicate two things at a glance — *this person builds polished modern websites* and *this person actually understands business and numbers* — without ever tipping into corporate/consultancy stiffness or developer-portfolio clutter.

Guiding principles:

- **Outcomes over ornament.** Every visual choice serves one job: move the visitor toward booking a call or sending an enquiry.
- **Fast is part of premium.** A beautiful page that loads slowly fails. Lightness is a design value, not just a technical one.
- **Calm, not loud.** Dark canvas, generous space, one accent gradient. Restraint reads as expensive.
- **Honest by design.** No fake dashboards, fake metrics, or fake "trusted by" logos. Proof is shown as real deliverables.

---

## 2. Design Language

- **Theme:** Dark mode primary. Near-black canvas with frosted **glass-morphism** cards (semi-transparent fills + subtle blur + 1px light border).
- **Foundation:** **Material Design 3** principles (spacing rhythm, elevation, accessible contrast, state layers on interactive elements) reinterpreted in a dark, premium skin.
- **Accent:** a single indigo→pink gradient used *sparingly* — primary CTA, headline highlight, focus glows. Never as large background fills that hurt contrast.
- **Tone:** modern and client-facing. **Not** "developer-y," **not** corporate-consultancy, **not** agency.

---

## 3. Page Structure (Phase 1)

**Single-page landing (`/`) only.** One long, smooth-scrolling page composed of anchored sections. **No other routes in Phase 1.**

**Locked section order (do not reorder):**

1. **Hero**
2. **Services**
3. **Process**
4. **Work**
5. **Packages**
6. **About**
7. **Tools**
8. **Contact**
9. **Footer**

Sticky glass top navigation overlays the page; on mobile it collapses to a hamburger that opens a full-screen glass overlay. The primary CTA ("Book a Free Call") is present in the nav at all times.

---

## 4. Section-by-Section Design Direction

**Hero (full viewport)** — Two columns on desktop. Left (~55%): small eyebrow label → large headline/tagline → one supporting sentence (audience + Bank of America edge) → primary CTA + secondary CTA → a thin trust strip of plain-text facts. Right (~45%): the **static/CSS hero visual** (see §15). Background: near-black with a soft, slow-drifting blurred gradient blob. Mobile: single column, visual simplifies to a CSS gradient.

**Services** — Section heading + one-line promise. A grid of 4 glass service tiles (icon + title + one line each). 3 columns desktop / 2 tablet / 1 mobile. Each tile is a quiet link to the primary CTA. Hover: subtle lift + border glow.

**Process** — Heading + reassurance line. 5 numbered steps shown as a horizontal timeline on desktop, vertical on mobile. Each step: number badge, short title, one-line description. Ends with the primary CTA.

**Work** — Heading + one line. Responsive card grid (3/2/1). Each card: 16:9 image, title, client type, a **deliverable description** (what was built), service/tech tag pills, optional "Live" and "Details" links. A 4th "Coming Soon" card uses a tasteful blurred/locked treatment. A stat band below shows résumé-stated counts. Hover: card lifts ~6px, border glows, image scales ~1.04.

**Packages** — Heading ("Where to start") + reassurance ("Every project is quoted after a free call — these are starting points"). 3 glass pricing tiles; the middle tier flagged "Most popular" with a brighter border. Each tile: name, starting-point price (placeholder allowed), 3 bullet points, a CTA. Optional add-ons row beneath. A soft "Not sure which fits? Book a free call" line. **"Final quote after free call" must appear in this section.**

**About** — Two columns: portrait placeholder (square, soft gradient ring) + bio that leads with the Bank of America → builder differentiator. A compact stat row of résumé-stated figures. A brief, human interests line for rapport.

**Tools** — Deliberately **small and secondary**: a single low-key icon strip ("Tools I work with"). No large "tech stack" wall. The site sells outcomes; tools are a quiet confidence signal only.

**Contact** — Two columns. Left: warm copy + primary CTA + secondary CTA + direct email + social icons. Right: the form (Name, Email, Message) with inline validation, a clear loading state, and a friendly success message. A hidden honeypot field guards against spam.

**Footer** — Minimal glass bar: copyright (Jatin Mishra), quick links, email, a "Built with Next.js" line, and a back-to-top affordance.

---

## 5. Design Tokens

> Canonical tokens. These override the Stitch token files entirely (which were light-mode navy/emerald).

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#0A0A0A` | Page background (near-black) |
| `--bg-elevated` | `#141417` | Surface behind glass cards |
| `--glass-fill` | `rgba(255,255,255,0.06)` | Glass card fill |
| `--glass-border` | `rgba(255,255,255,0.12)` | 1px glass card border |
| `--accent-1` | `#6C63FF` (indigo) | Gradient start |
| `--accent-2` | `#FF6584` (pink) | Gradient end |
| `--accent-grad` | `linear-gradient(135deg,#6C63FF,#FF6584)` | Primary CTA, headline highlight, focus glow |
| `--text-primary` | `#F5F5F7` | Headings, body |
| `--text-muted` | `#A1A1AA` | Secondary text |
| `--success` | `#34D399` | Form success states |
| `--error` | `#F87171` | Form error states |

**Contrast guardrail:** body text must meet ≥ 4.5:1 against its background. Verify the `--text-muted` on `--bg-base` pair early; darken the background or lighten the text if it fails.

---

## 6. Typography Guidance

- **Headlines:** **Poppins** (600/700) — geometric, confident, friendly enough for a client-facing site.
- **Body / UI:** **Inter** (400/500) — workhorse readability.
- Self-hosted via `next/font` (Poppins + Inter) to avoid layout shift and external requests.
- **Do not use** Sora or Playfair Display (Stitch suggestions) — they belong to the rejected corporate/agency theme.

**Type scale (desktop):**

| Role | Size |
|---|---|
| H1 | `clamp(2.75rem, 6vw, 4.5rem)` |
| H2 | `2.25rem` |
| H3 | `1.5rem` |
| Body | `1.0625rem` |
| Small / label | `0.875rem` |

`clamp()` lets type resize fluidly between phone and desktop without hand-tuning every breakpoint.

---

## 7. Spacing System

- **Spacing scale (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Everything snaps to this.
- **Section vertical padding:** 96 desktop / 64 tablet / 48 mobile.
- **Content max-width:** 1200px, centered; 24px side gutters on mobile.
- Generous vertical rhythm between sections keeps the page calm and premium; density is allowed *inside* cards, not between sections.

---

## 8. Component Rules

- All components reference **design tokens**, never hard-coded colors/sizes.
- **Corner radius:** cards 20px · buttons 12px · pills/tags 999px.
- Reusable primitives: `GlassCard`, `Button`, `SectionWrapper` (handles padding, max-width, scroll-anchor id), `Pill`, `Nav`, `MobileMenu`, `StatBand`, `CTAButton`, `Reveal` (scroll-animation wrapper).
- **Glass effect:** `--glass-fill` background + `backdrop-blur` + 1px `--glass-border`. If blur ever reduces text contrast, add a subtle solid underlay behind text.
- One **primary CTA** style site-wide (`CTAButton`, label "Book a Free Call") so the main action is instantly recognizable everywhere.

---

## 9. Button Styles

| Variant | Appearance | Use |
|---|---|---|
| **Primary** | Solid `--accent-grad` fill, `--text-primary` label, 12px radius, subtle lift + brighter glow on hover (150–200ms) | The one main action: "Book a Free Call" |
| **Secondary** | Glass / outline (transparent fill, 1px `--glass-border`), light label | "Get a Free Website Audit", lower-commitment actions |
| **Ghost** | Text-only with a small trailing arrow icon | Inline links ("Live", "Details") |

Rules: never place two primary buttons competing in the same view; the primary is dominant, the secondary clearly subordinate. All buttons have a visible keyboard focus ring.

---

## 10. Card Styles

- **Base:** `GlassCard` — `--glass-fill`, 1px `--glass-border`, 20px radius, internal padding 24–32px.
- **Elevation:** soft, shallow shadow; cards sit *on* the page, not floating far above it.
- **Hover (interactive cards):** lift ~6px, border brightens toward accent, optional inner image scales ~1.04. Disabled on touch/mobile and under reduced-motion.
- **Work cards:** 16:9 media top, then title → client type → deliverable line → tag pills → links. "Coming Soon" variant uses reduced opacity + a small lock/blur, no real links.
- **Packages tiles:** equal-height; "Most popular" tier gets a brighter accent border and a small label chip.

---

## 11. Form Styles

- **Inputs:** comfortable height (~48px), dark elevated fill, 1px `--glass-border`, 12px radius, `Inter` label above each field.
- **Focus state:** 2px accent-colored border / glow (use `--accent-1`), never a low-contrast outline.
- **Validation:** inline, below the field. Success uses `--success`; errors use `--error` with a short, human message and `aria-describedby` linking the message to the field.
- **States:** idle → submitting (button disabled + spinner) → success (clear confirmation, form resets) / error (retry guidance).
- **Spam:** a visually hidden honeypot field; if filled, silently drop the submission.
- Fields for Phase 1: **Name, Email, Message** (per canonical). An optional "Business type" select is a Phase 2 nice-to-have, not required now.

---

## 12. Responsive Behavior

**Mobile-first.** Design the phone layout first (most traffic), then layer richness up for larger screens.

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | 1 column; hamburger nav; hero visual → static/CSS gradient; reduced effects |
| Tablet | 640–1024px | 2-column grids; condensed spacing |
| Desktop | 1024–1440px | Full multi-column layout + full effects |
| Wide | > 1440px | Content capped at 1200px; background visuals breathe |

---

## 13. Accessibility Rules

- Body text contrast ≥ **4.5:1**; verify muted-on-base.
- **Keyboard:** all interactive elements operable; visible focus rings; mobile menu is focus-trapped and closes on Escape / link click.
- **Semantics:** proper landmarks (`header`/`main`/`section[aria-labelledby]`/`footer`), logical `h1`–`h3` order, a skip-to-content link.
- **Images:** descriptive `alt` text on every meaningful image; decorative visuals marked appropriately.
- **Motion:** every animation respects `prefers-reduced-motion` (off = no transitions/parallax).
- **Forms:** real `<label>`s, error text tied via `aria-describedby`, clear success messaging.
- Target Lighthouse Accessibility ≥ 95.

---

## 14. Motion Rules

- **Entrances:** fade-in + ~20px upward slide, 400–600ms, ease-out, triggered when a section scrolls into view (IntersectionObserver / Framer Motion `whileInView`).
- **Hovers:** 150–200ms transitions on buttons, cards, tiles.
- **Ambient:** a slow gradient drift in the hero background (pure CSS).
- **Parallax / tilt (optional, subtle):** background vs. foreground move at slightly different scroll speeds; cards may tilt ≤ 6° toward the cursor. Capped low — premium, not carnival.
- **All motion disabled** under `prefers-reduced-motion` and reduced on mobile.

---

## 15. Phase 1 Static Hero Visual Direction

The Phase 1 hero visual is **static / CSS / SVG only** — and it is the *entire* hero visual, not a placeholder for 3D.

Approved options (pick one in build):

- **Gradient mesh / aurora:** layered CSS `radial-gradient`s in the accent palette with a slow `@keyframes` drift. Premium, near-zero weight.
- **Floating glass-card stack:** 2–3 overlapping `GlassCard`s at slight angles with gentle CSS float, hinting at "websites I build."
- **Subtle particle / dot grid:** a light CSS/SVG dot or line grid with a soft accent glow.

Requirements: pure CSS/SVG (no JS engine), instant paint, looks premium on a dark canvas, and animation pauses under `prefers-reduced-motion`. Because it cannot "fail," it needs **no fallback, no error boundary, no detection logic**.

---

## 16. What NOT to Implement in Phase 1

- ❌ **No 3D of any kind:** no Three.js, no React Three Fiber (R3F), no Spline, no WebGL, no `HeroVisual3D`, no WebGL detection, no 3D error boundary, no 3D dependencies. *(3D is an optional **Phase 2** enhancement only.)*
- ❌ **No extra routes:** no `/work/[slug]`, `/audit`, or `/resume`. The audit CTA links to the `#contact` form anchor in Phase 1.
- ❌ **No data-visualization / fake dashboard hero** (a Stitch idea) — it implies invented metrics.
- ❌ **No light-mode / navy-emerald / Sora / Playfair** theming from Stitch.
- ❌ **No agency / "we" / consultancy chrome**, no "trusted by" logo walls, no testimonial avatars fabricated as proof.
- ❌ **No invented metrics anywhere** in the UI (see `content.md` honest-claims + banned claims).
- ❌ **No heavy component libraries** "just in case." Keep dependencies lean; add Radix UI only if hand-built mobile-menu focus management proves insufficient.

---

*End of design.md*
