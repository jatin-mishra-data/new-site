# Technical Requirements Document (`TRD.md`)

**Product:** Jatin Mishra — Freelance Website + Business-Consulting **Service Landing Page**
**Owner:** Jatin Mishra
**Version:** 1.0 (derived from `PRD.md` v2.0 and `plan.md` v2)
**Last updated:** 25 June 2026
**Status:** Draft for review → input to implementation

**Source / traceability:** `plan.md` v2 (framing, design, phases) · `PRD.md` v2.0 (features, NFRs, design spec) · `Jatin_Mishra_Resume.pdf` (content) · `milestone.md` **MISSING** (Work data — §6 defines schema + loader; nothing invented).

> This document defines **how** we build the product: architecture, folder structure, libraries, data models, component contracts, integrations, performance/SEO implementation, and deployment. It is written to be actionable for implementation via **VS Code + Claude Code** — which is where the **final UI is built**. (Google Stitch, if used at all, is only for visual exploration / UI direction; it does not produce shipped code.) Plain-English term definitions live in `plan.md` §14. **Honest-claims policy (`plan.md` §10) is a build constraint, not just copy guidance.**

> **Phase 1 scope (locked):** ship **only the single landing page `/`** (section order Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer), with a **static, single photographic background image + progressive CSS dark-overlay layers** carrying the hero and full page (see §8) — still no JS rendering engine, no client-side image logic. **No Three.js, R3F, Spline, WebGL detection, 3D error boundary, or `/work/[slug]` / `/audit` / `/resume` routes in Phase 1.** Everything tagged "Phase 2" below is **documented for later, not scaffolded now** — keep Phase 1 dependencies lean.

---

## 1. Architecture Overview

### 1.1 Type & rendering
- **Static-first single-page site** built with **Next.js (App Router)** and exported as **mostly static (SSG)**. **Phase 1 ships exactly one route: `/`**, composed of section components. The `/work/[slug]` and `/audit` routes are **Phase 2+ only** and are not built at launch.
- **No custom backend / no database.** Dynamic behavior (contact form, booking) is handled by third-party services (Formspree/EmailJS, Calendly/Cal.com). This keeps hosting free/cheap, fast, and maintenance-light.
- **Content as data:** services, packages, and projects live in typed data files (`/data/*.ts`), so a non-coder edits plain text (via Claude Code) and the UI updates automatically.

### 1.2 Rendering decisions per route
| Route | Strategy | Phase | Why |
|---|---|---|---|
| `/` (landing) | SSG (static) | **Phase 1** | Fastest load, best SEO; content known at build time |
| `not-found` | Static | **Phase 1** | Friendly 404 |
| `/work/[slug]` | SSG via `generateStaticParams` | Phase 2+ | Per-project depth pages (not built at launch) |
| `/audit` | SSG | Phase 2+ | Dedicated audit page; in Phase 1 the audit CTA links to `#contact` |

In Phase 1 the "Get a Free Website Audit" CTA links to the `#contact` form anchor — no `/audit` route is created.

### 1.3 High-level diagram (text)
```
Browser
  └─ Next.js static pages (HTML/CSS/JS, prebuilt)
       ├─ Section components (Hero, Services, Process, Work, Packages, About, Tools, Contact, Footer)
       ├─ data/*.ts  (services, packages, projects)  ← edited by Jatin via Claude Code
       ├─ Contact form ── POST ──▶ Formspree/EmailJS ──▶ Jatin's inbox
       ├─ "Book a Free Call" ───────▶ Calendly/Cal.com (external)
       └─ Analytics beacon ─────────▶ Vercel Analytics / Plausible
Build/Deploy:
  GitHub repo ── push ──▶ Vercel (CI/CD) ──▶ static site on custom domain (HTTPS)
```

---

## 2. Technology Stack & Versions

> Pin exact versions in `package.json` at scaffold time; use the latest stable in each line below. Versions are chosen for App Router compatibility.

**Phase 1 keeps dependencies deliberately lean.** Only install what the first build of `/` needs. Do not add optional libraries unless that build actually requires them.

| Concern | Choice | Phase | Notes |
|---|---|---|---|
| Framework | **Next.js (App Router)**, latest stable (15.x line) | P1 | SSG/SSR, image optimization, SEO metadata API |
| Language | **TypeScript** (strict mode) | P1 | Type safety; Claude Code handles types |
| Runtime | Node.js LTS (18+ / 20+) | P1 | Required by Next build |
| Styling | **Tailwind CSS** v3.x + custom config | P1 | Design tokens encoded as theme |
| Icons | **lucide-react** (UI) + **simple-icons** (brand/tool logos) | P1 | Tree-shakeable |
| Animation | **Framer Motion** | P1 | `whileInView` entrances, reduced-motion aware |
| Hero / page background | **Single static photographic image** (`next/image`, no library) + CSS overlay | P1 | One optimized image served across hero + page (see §8), no JS rendering engine |
| Forms | **Formspree** (default) — alt **EmailJS** | P1 | No backend |
| Form validation | **react-hook-form** + **zod** | P1 | Client-side validation + schema |
| Booking | **Calendly** (default) / **Cal.com** | P1 | Simple link in Phase 1 (no embedded script) |
| Fonts | **next/font** (self-host Poppins + Inter) | P1 | No layout shift, no external request |
| Hosting / CI-CD | **Vercel** | P1 | Auto-deploy on git push |
| Linting/format | ESLint + Prettier | P1 | Consistency |
| Analytics | **Vercel Analytics** (default) / **Plausible** | P1 (light) | Privacy-friendly; add in Phase 1 deploy step |
| Mobile-menu a11y | **Hand-built** focus-trapped overlay; **Radix UI Dialog only if** hand-built focus management proves insufficient | P1 (Radix optional) | Don't add Radix unless actually needed |
| 3D engine | **@react-three/fiber** + **drei**, or **@splinetool/react-spline** | **Phase 2+ only — NOT installed in Phase 1** | Lazy-loaded, budgeted, optional enhancement |

**Decisions pending (default in brackets):** Form `[Formspree]`, Booking `[Calendly, link]`, Analytics `[Vercel Analytics]`, 3D `[ship static-only at launch — no 3D deps in Phase 1]`, Radix `[hand-build first; add only if needed]`.

---

## 3. Folder & File Structure

**Phase 1 structure (build exactly this):**
```
new-site/
├── app/
│   ├── layout.tsx              # Root layout: fonts, <head> metadata, analytics, skip-link
│   ├── page.tsx                # The single landing page: composes sections in locked order
│   ├── globals.css             # Tailwind directives + base styles + reduced-motion rules
│   ├── sitemap.ts               # Generated sitemap
│   ├── robots.ts                # robots.txt
│   └── not-found.tsx            # 404
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Work.tsx
│   │   ├── Packages.tsx
│   │   ├── About.tsx
│   │   ├── Tools.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx           # variant: primary | secondary | ghost
│   │   ├── GlassCard.tsx
│   │   ├── SectionWrapper.tsx   # consistent padding, max-width, scroll anchor id
│   │   ├── Pill.tsx             # tech/service tags
│   │   ├── Nav.tsx              # sticky nav + scroll state
│   │   ├── MobileMenu.tsx       # hand-built focus-trapped overlay (Radix only if needed)
│   │   ├── StatBand.tsx
│   │   ├── Reveal.tsx           # Framer Motion whileInView wrapper (reduced-motion aware)
│   │   └── CTAButton.tsx        # "Book a Free Call" primary, reused everywhere
│   ├── background/
│   │   └── PageBackground.tsx   # Phase 1: renders the full-page photographic background + progressive dark overlay
│   └── form/
│       └── ContactForm.tsx      # react-hook-form + zod + honeypot + states
├── data/
│   ├── services.ts
│   ├── packages.ts
│   ├── projects.ts              # hand-mirrored from milestone.md (§6) — placeholders until provided
│   ├── socials.ts
│   └── site.ts                  # name, tagline, email, CTA labels, booking URL (placeholders OK)
├── lib/
│   ├── types.ts                 # Service, Package, Project types
│   └── motion.ts                # shared variants + reduced-motion helper
├── public/
│   ├── backgrounds/              # full-page background image + responsive crops (webp), per assets.md §2a
│   ├── work/                    # project images (webp)
│   ├── og.png                   # 1200x630 social card
│   └── favicon set
├── next.config.js               # image formats (webp/avif), headers
├── tailwind.config.ts           # design tokens (§4)
├── tsconfig.json
├── .env.local                   # FORMSPREE_ID / booking URL (not committed)
├── .env.example                 # documents required env vars
└── package.json
```

**Phase 2+ additions (documented only — do NOT create in Phase 1):**
```
app/work/[slug]/page.tsx         # per-project detail route (Phase 2+)
app/audit/page.tsx               # dedicated audit page (Phase 2+)
components/hero/HeroVisual3D.tsx  # optional R3F/Spline 3D (Phase 2+)
lib/webgl.ts                     # WebGL detection — only needed for optional 3D (Phase 2+)
```

---

## 4. Design Tokens → Tailwind Config

Encode `PRD.md` §7 tokens into `tailwind.config.ts` so every component references the system, not hard-coded values.

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        photoOverlay: { top: "rgba(10,10,10,0.35)", bottom: "rgba(10,10,10,0.92)" },
        elevated: "#141417",
        glass: { fill: "rgba(12,14,20,0.55)", border: "rgba(255,255,255,0.12)" },
        accent: { primary: "#6C63FF" /* refined blue derived from existing indigo palette — tuned during implementation, see design.md §5 */ },
        text: { primary: "#F5F5F7", muted: "#A1A1AA" },
        success: "#34D399",
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(135deg, var(--accent-primary), #FF6584)",
      },
      fontFamily: { heading: ["var(--font-poppins)"], body: ["var(--font-inter)"] },
      borderRadius: { card: "20px", btn: "12px", pill: "999px" },
      maxWidth: { content: "1200px" },
      // spacing scale 4..128 maps to Tailwind defaults; add 96/128 if missing
    },
  },
  plugins: [],
};
```
- Fonts loaded in `app/layout.tsx` via `next/font/google` (Poppins, Inter) exposed as CSS vars `--font-poppins`, `--font-inter`.
- `globals.css` includes a global `@media (prefers-reduced-motion: reduce)` block disabling transitions/animations.

---

## 5. Component Specifications (contracts)

> All section components are server components by default; interactive ones (`Nav`, `MobileMenu`, `ContactForm`, `Reveal`) are client components (`"use client"`). Section order in `page.tsx` is fixed (locked for Phase 1): **Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer**.

| Component | Type | Key props / behavior |
|---|---|---|
| `Nav` | client | Sticky; shrinks + adds border after scrollY > 24px; renders `CTAButton` (primary); anchors to section ids |
| `MobileMenu` | client | Hand-built full-screen overlay; focus-trapped; closes on nav click. (Use Radix Dialog only if hand-built focus management proves insufficient.) |
| `CTAButton` | client | Label default "Book a Free Call"; `href` = booking URL; analytics event on click |
| `Button` | server | `variant: primary (accent-grad) \| secondary (glass/outline) \| ghost` |
| `Hero` | server | Composes copy over the shared `PageBackground` (Phase 1: static image + overlay, no separate hero-only visual) |
| `PageBackground` | server | Renders the single full-page photographic image (`next/image`, `priority` in the hero viewport) + progressive CSS dark-overlay layers (see §8); mounted once at the page/layout level so hero and later sections share one continuous image |
| `HeroVisual3D` | — | **Phase 2+ only — not built in Phase 1.** Would be a client component, dynamically imported `ssr:false`, gated by WebGL/reduced-motion/viewport, falling back to static |
| `Services` | server | Maps `data/services.ts`; each tile → `CTAButton` |
| `Process` | server | Maps 5 steps; horizontal/vertical timeline |
| `Work` | server | Maps `data/projects.ts`; grid + ComingSoon card + `StatBand`; deliverable-only copy |
| `Packages` | server | Maps `data/packages.ts`; "popular" flag; "quote after free call" note |
| `About` | server | Bio + stat row + photo placeholder |
| `Tools` | server | Small icon strip from a tools list |
| `ContactForm` | client | react-hook-form + zod; honeypot; loading/success/error states; POST to Formspree |
| `Footer` | server | Links, email, back-to-top |
| `Reveal` | client | Framer Motion `whileInView` fade/slide; no-op under reduced-motion |

---

## 6. Data Models (`lib/types.ts`) & `milestone.md` Loader

```ts
export type Service = { icon: string; title: string; blurb: string };

export type Package = {
  name: string;
  priceFrom: string;       // "₹[PLACEHOLDER]" | "Custom"
  popular?: boolean;
  points: string[];
  ctaLabel?: string;       // default "Book a Free Call"
};

export type ProjectStatus = "completed" | "upcoming" | "pipeline";

export type Project = {
  title: string;
  clientType: string;
  status: ProjectStatus;
  image?: string;
  deliverable?: string;    // what was BUILT — never an invented metric
  description?: string;
  techStack: string[];
  features?: string[];
  liveUrl?: string;
  repoUrl?: string;
  slug?: string;
  category?: string;
  comingSoon?: boolean;
};
```

### 6.1 `milestone.md` mapping
- `milestone.md` is the source of truth for project facts. **Default and only Phase 1 approach: hand-mirror each project into `data/projects.ts` as a typed `Project` entry.** **Do NOT build a markdown parser for `milestone.md`** — a parser adds code a non-coder can't maintain and is explicitly out of scope. (A build-time parser may be reconsidered in a later phase only if the project list grows large; not now.)
- Any missing optional field → the corresponding UI element is hidden (no broken/empty elements).
- **Honest-claims enforcement (build rule):** `deliverable` and `description` must describe what was built; a metric may appear **only** if `milestone.md` provides it with attribution (e.g. `clientReported: true`). No metric is generated in code.
- Until `milestone.md` is provided, `data/projects.ts` holds clearly-marked placeholder entries used **during development only** — no fake client outcomes.

### 6.2 Derived values
- `StatBand` counts: `delivered = projects.filter(p => p.status==="completed").length` and pipeline count from `status==="pipeline"` — but if `milestone.md` is absent, fall back to résumé-stated display strings ("9 delivered · 15+ in pipeline") defined in `data/site.ts`.

---

## 7. Integrations

### 7.1 Contact form (Formspree default)
- `ContactForm` POSTs `{ name, email, message, _gotcha (honeypot) }` to `https://formspree.io/f/<FORM_ID>` (`<FORM_ID>` from `NEXT_PUBLIC_FORMSPREE_ID`).
- Client validation via zod: name (required, ≤80), email (valid), message (required, ≤2000). Honeypot `_gotcha` hidden; if filled → silently drop.
- States: idle → submitting (disabled + spinner) → success (green confirmation, form reset) / error (retry message).
- **EmailJS alternative:** swap the submit handler to `emailjs.send(serviceId, templateId, params, publicKey)` with keys in env; same UI states.

### 7.2 Booking
- "Book a Free Call" links to the Calendly/Cal.com URL in `data/site.ts` (`bookingUrl`). Option: inline Calendly popup widget (lazy-loaded script) vs. simple new-tab link. **Default: link** (lightest); upgrade to popup later.

### 7.3 Analytics + lead events
- Vercel Analytics component in `layout.tsx`. Custom events: `cta_book_call_click`, `cta_audit_click`, `form_submit_success`, `scroll_to_work`. (Plausible alt: custom events via its script.)

### 7.4 Environment variables (`.env.example`)
```
NEXT_PUBLIC_FORMSPREE_ID=
NEXT_PUBLIC_BOOKING_URL=
# EmailJS (if used)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

---

## 8. Page Background & Hero Visual Implementation

### 8.1 Phase 1 (build now) — single static photographic background + overlay
- `PageBackground` renders **one** optimized photographic image via `next/image` (canonical asset: `public/backgrounds/bg-main.webp`, or the equivalent canonical filename defined in `assets.md` §2a) plus responsive tablet/mobile crops (`bg-main-tablet.webp`, `bg-main-mobile.webp`), selected via `sizes`/`srcSet` per breakpoint. It is mounted once (page/layout level, positioned behind all sections via CSS, e.g. `fixed`/`absolute` + `z-index`) so the hero and every later section share the same continuous image rather than each section loading its own asset.
- **Progressive dark overlay:** one or more CSS gradient/scrim layers sit between the image and content. Overlay opacity is lightest near the hero (`--bg-photo-overlay-top`) and increases down the page toward Contact/Footer (`--bg-photo-overlay-bottom`), implemented as a single tall `linear-gradient` (or a couple of section-anchored gradient stops) — not per-section background images. This is pure CSS, zero JS.
- **Responsive positioning/cropping:** desktop uses the full-resolution crop; tablet/mobile breakpoints swap to their pre-cropped assets (via `next/image` `sizes` + art-direction, e.g. `<picture>`-style breakpoint sources) so the focal point (road/horizon detail) stays framed correctly and never drifts behind body copy. No client-side cropping logic — crops are pre-rendered image assets, not computed in the browser.
- The image is decorative (`alt=""`), contributes no information beyond what's in the text, and depends entirely on its overlay for text contrast — the overlay must ship together with the image, never without it.
- Zero JS rendering engine, instant paint, no fallback/error-boundary needed — a static image asset cannot "fail" the way a WebGL context can. Any accompanying ambient motion (e.g. a very slow overlay/gradient drift) is disabled under reduced-motion.
- **Phase 1 has no 3D code at all:** no Three.js/R3F/Spline, no `webgl.ts`, no `HeroVisual3D`, no error boundary — none of that is required for a static image.

### 8.2 Phase 2 (optional — documented only, NOT built now) — R3F / Spline
> The following is a forward spec for a possible later enhancement. None of it is scaffolded in Phase 1.
- `HeroVisual3D` dynamically imported with `ssr:false`, rendered only when ALL true: WebGL supported, not `prefers-reduced-motion`, viewport ≥ 1024px, hero in view.
- Scene: single low-poly glass icosahedron or "JM" monogram; slow rotation + cursor tilt; `frameloop="demand"` or pause when off-screen (IntersectionObserver).
- Budget: dynamic chunk + assets < 300KB; wrapped in an `ErrorBoundary` → renders `PageBackground` on any failure.
- Spline alt: `@splinetool/react-spline` with a `scene` URL; same gating + fallback.
- Fallback chain (Phase 2 only):
```
support && !reducedMotion && desktop && inView → <HeroVisual3D/>
else                                            → <PageBackground/>
3D import/render error (ErrorBoundary)          → <PageBackground/>
```

---

## 9. Performance Implementation (hit NF1–NF2)
- Static generation (SSG) for the page; no client data-fetching on load.
- `next/image` for all images; serve **AVIF/WebP** (`next.config.js images.formats`); explicit width/height to avoid layout shift; `priority` only on hero image.
- Self-hosted fonts via `next/font` (no render-blocking external CSS).
- Phase 1 is naturally light (no 3D engine). Defer/lazy-load anything non-critical; analytics loads after first paint.
- Tailwind purges unused CSS at build. Framer Motion imported per-component.
- Target budgets: initial JS < ~120KB gzip; LCP element = hero heading/image, < 2.5s on 4G. (The < 300KB 3D budget applies only if/when Phase 2 3D is added.)

---

## 10. SEO & Accessibility Implementation (NF3–NF5, NF10)
- **SEO:** App Router `metadata` export per route (title, description, canonical, Open Graph + Twitter card using `/public/og.png`); `app/sitemap.ts`; `app/robots.ts`; JSON-LD `Person` + `ProfessionalService` script in `layout.tsx`; semantic landmarks (`<header><main><section aria-labelledby><footer>`); descriptive `<h1>`–`<h3>` hierarchy; real indexable copy in every section (not image-only).
- **Accessibility:** skip-to-content link; keyboard-operable nav + focus-trapped mobile dialog (Radix); visible focus rings; `alt` text on all images; form fields with `<label>` + `aria-describedby` for errors; color contrast ≥ 4.5:1 (verify muted-on-base); all motion gated by reduced-motion; target Lighthouse A11y ≥ 95.

---

## 11. Build, Deployment & Environments (NF12)
- **Repo:** GitHub. **Host:** Vercel, connected for CI/CD — every push to `main` auto-builds and deploys; PR previews on branches.
- **Env vars** set in Vercel dashboard (mirroring `.env.example`); secrets never committed.
- **Placeholders do not block the build.** Booking URL, Formspree ID, contact email, GitHub/X handles, package prices, and domain ship as clearly-marked placeholder values in `data/site.ts` / `.env` and are swapped in once confirmed. The site builds, deploys, and is reviewable with placeholders in place.
- **Domain:** custom domain (TBD) added in Vercel with auto HTTPS.
- **Pre-deploy checks (CI):** `next build`, ESLint, type-check. **Post-deploy:** run Lighthouse against the preview URL; gate release on Perf ≥ 90 / SEO ≥ 95 / A11y ≥ 95.
- **Headers** (`next.config.js`): basic security headers (`X-Content-Type-Options`, `Referrer-Policy`, etc.).

---

## 12. Implementation Plan → Parallelizable Chunks
Maps to `plan.md` §7 phases; chunks within a phase can be built in parallel.

**Phase 1 — Setup & static launch**
- C1: Scaffold (Next.js+TS+Tailwind), tokens in config, fonts, globals + reduced-motion. *(blocks others)*
- C2: UI primitives (`Button`, `GlassCard`, `SectionWrapper`, `Pill`, `CTAButton`, `Reveal`).
- C3: `Nav` + `MobileMenu`.
- C4: `PageBackground` + `Hero`.
- C5: Section shells (Services, Process, Work, Packages, About, Tools, Footer) with placeholder data files.
- C6: `ContactForm` + Formspree wiring + honeypot.

**Phase 2 — Content & polish (parallel; not part of launch)**
- C7: Populate `data/*` by hand-mirroring `milestone.md` + résumé + confirmed packages.
- C8: Framer Motion entrances + subtle parallax.
- C9: *(optional)* `HeroVisual3D` + fallback chain + WebGL detection — adds 3D deps; only if wanted.
- C10: *(optional)* `/work/[slug]` + `/audit` pages.

**Phase 3 — Testing**
- C11: Cross-browser + real-device + keyboard/screen-reader + form submission test.

**Phase 4 — Deploy & optimize**
- C12: SEO (metadata, sitemap, robots, JSON-LD, OG), image optimization, Lighthouse to targets, domain + analytics.

---

## 13. Risks (technical) & Mitigations
| Risk | Mitigation |
|---|---|
| Optional 3D bloats bundle (Phase 2 only) | Not in Phase 1 at all; if added later: hard <300KB budget, `dynamic ssr:false`, default to static, ErrorBoundary fallback |
| Form spam / abuse | Honeypot + Formspree filtering; rate-limited by provider; no raw email exposed |
| SEO weak on a single-page site | Per-section semantic copy, metadata, sitemap, JSON-LD; optional sub-pages add indexable URLs |
| Invented metrics slip into Work copy | `deliverable`-only schema; metric requires attributed flag from `milestone.md`; review gate (§14) |
| `milestone.md` missing at build | Build against schema with placeholder data file; résumé-stated stat strings as fallback |
| Layout shift hurts LCP | `next/image` dimensions, self-hosted fonts, reserved hero space |
| Non-coder breaks code while editing | Edits confined to `data/*.ts` typed files; TypeScript + build check catch errors before deploy |

---

## 14. Verification & Acceptance (per `CLAUDE.md` quality rules)
- **Automated (Phase 1):** `next build` passes; ESLint + type-check clean; Lighthouse CI gate (Perf ≥90, SEO ≥95, A11y ≥95); initial-JS bundle-size check. (No 3D bundle check in Phase 1.)
- **Manual (Phase 1):** real-device mobile pass; keyboard-only nav; screen-reader labels; live contact-form submission lands in inbox; reduced-motion verified. (3D-fallback / WebGL testing applies only if Phase 2 3D is added.)
- **Content audit (honest-claims):** confirm no fabricated metrics/outcomes anywhere; only placeholder or résumé-stated figures used; positioning is "AI-assisted builder + analyst," not senior engineer; packages labelled as starting points with "final quote after free call."
- **Recommended:** use an Opus review pass / subagent to review the implementation against this TRD before sign-off.

---

## 15. Open Technical Decisions (confirm before/with implementation)
1. `milestone.md` content (blocking for Work data).
2. Form provider: **Formspree** (default) vs EmailJS.
3. Booking: **Calendly** (default) vs Cal.com; link vs inline popup.
4. Analytics: **Vercel Analytics** (default) vs Plausible.
5. 3D at launch: **static-only** (default) vs add R3F/Spline in Phase 2.
6. Contact email to display: `jatinm1807@gmail.com` vs `jatinmsd07@gmail.com`.
7. Domain name to register.
8. Whether to add `/work/[slug]` and `/audit` routes **in Phase 2** (they are out of scope for the Phase 1 launch).

---

*End of TRD.md*
