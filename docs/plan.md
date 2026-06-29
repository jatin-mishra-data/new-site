# Service Landing Page — Master Plan (`plan.md`)

**Owner:** Jatin Mishra
**Last updated:** 25 June 2026
**Status:** Approved plan → derive `PRD.md` + `TRD.md` from this, then implement.
**Product type:** **Freelance website + business-consulting service landing page** (lead generation), *not* a passive portfolio.

> **How to read this document.** This is the *strategy and blueprint* layer — **what** we build, **for whom**, and **why**, plus the design and technical approach. It contains no final code. After review, we turn it into a PRD (detailed "what it must do") and a TRD (detailed "how we build it"), then write code. A plain-English glossary of every technical term is at the bottom (§14).

---

## 0. What this site is (the core framing)

This is a **service landing page**, not a portfolio. A portfolio quietly displays past work and hopes someone notices. A landing page is built to do **one job: turn visitors into leads** — people who book a call, request an audit, or send an enquiry.

**Jatin sells a service:** he designs and builds websites (often with SaaS add-ons like booking, payments, or CRM) and pairs them with real business and financial insight. The site exists to make a prospect think *"this person can solve my problem — let me get in touch,"* and then make that contact effortless.

Everything below serves lead generation. Past work ("projects") is **proof that supports the offer**, not the headline act.

---

## 1. Positioning & messaging

### 1.1 Who Jatin is on this site
> **An AI-assisted website builder and business analyst — with a Bank of America risk-analytics background — who builds fast, modern websites and actually understands the numbers behind your business.**

Two real edges, fused: (1) he ships real client sites quickly using AI-assisted workflows, and (2) he brings genuine business/financial judgment (3 years at Bank of America on $500B+ in risk-weighted assets; 50+ published D2C unit-economics analyses) that almost no freelance web builder has.

### 1.2 What we deliberately do NOT claim (important)
- **Do not over-position Jatin as a "senior full-stack developer" or "expert engineer."** He is an **AI-assisted builder + analyst**. That is true, differentiated, and credible. Inflated seniority is easy to puncture and would damage trust with both clients and recruiters.
- No "10x developer," no framework-flexing, no fake expertise claims.

### 1.3 Honest-claims policy (applies to the whole site — see also §10)
**No invented results.** We do **not** state revenue growth, no-show reduction, conversion lift, traffic increases, or any client metric unless Jatin provides proof. Until then, work is described by **what was delivered** ("built a booking-enabled site with an online menu"), never by **fabricated outcomes** ("increased bookings 30%"). The only numbers used are Jatin's own résumé-stated figures (e.g. "9 sites delivered," "15+ in pipeline," "50+ analyses," "400+ avg LinkedIn engagement").

### 1.4 Tagline options for the hero (pick one in PRD stage)
- **A (outcome-led):** "A website your business actually needs — built fast."
- **B (offer-led):** "Websites + SaaS for local businesses, built by an analyst."
- **C (hybrid edge):** "I build your website and read your numbers." *(numbers = your business's financials.)*
- **D (simple-confident):** "Modern websites for businesses that want to grow."

Recommendation: **A** as headline, with a sub-line naming the audience and the BofA edge.

### 1.5 Call-to-action (CTA) strategy — hierarchy, not a pile of buttons
Three asks, but ranked so visitors never freeze:
- **Primary (everywhere):** **"Book a Free Call"** — one clear, repeated primary action (hero, sticky nav, end of each section, contact).
- **Secondary (lead magnet):** **"Get a Free Website Audit"** — appealing to people who already have a weak site; a low-commitment way in.
- **Form heading / soft ask:** **"Tell Me About Your Business"** — the contact form's friendly title, for people ready to write.

> **Why the hierarchy:** when every button looks equally important, people choose none. One dominant primary action lifts conversion; the others are offered as alternates, not equals.

### 1.6 Proof points to surface (all résumé-true)
9 client websites delivered with SaaS integrations · 15+ projects in active pipeline · 3 years at Bank of America (regulatory reporting, $500B+ RWA) · 50+ published D2C analyses (400+ avg engagement) · advisory for 4–5 local businesses. These are stated as Jatin's own figures, not as guaranteed outcomes for new clients.

---

## 2. Target Audience

**Primary goal: generate leads** from the following segments. They split into a few buyer types:

| Segment | Examples | What they typically need |
|---|---|---|
| **Education** | Schools, colleges, tuition/coaching classes | Credible info site, admissions/enquiry forms, class schedules, online enrolment |
| **Local service businesses** | Clinics, cafés, restaurants, salons, repair/local services | Website + booking/appointments, menu/services, maps, payments |
| **Consultants & professionals** | Independent consultants, advisories | Personal-brand site, lead capture, credibility content |
| **Founders / early-stage businesses** | D2C brands, startups | Launch site + SaaS integrations + business/financial input |

The common thread: owners who are **not technical**, are **time-poor**, and want a professional web presence (often with a booking/payment/enquiry function) from someone who also understands their business. The copy speaks to that person, not to engineers.

---

## 3. Information Architecture (IA)

### 3.1 Sitemap & section order
**Single-page (one long scroll) + optional depth pages.** Note the deliberate order: **Services comes before Projects** — we state the offer first, then prove it.

```
/  (single page, scroll sections)
├── #hero          → offer, tagline, primary CTA, premium hero visual
├── #services      → what Jatin does for you (MOVED BEFORE PROJECTS)
├── #process       → how clients work with him, discovery → launch (NEW)
├── #work          → proof: featured projects + "coming soon" + stats
├── #packages      → packages / pricing starting points (NEW)
├── #about         → bio, BofA→builder story, credibility numbers
├── #tools         → tools/tech (SECONDARY, small strip)
├── #contact       → "Tell Me About Your Business" form + Book a Call + socials
└── footer         → copyright, quick links, email

Optional sub-pages (later, only if needed):
/work/[slug]       → full case-study page per project
/audit             → website-audit request landing (supports the secondary CTA)
/resume            → web/PDF résumé
```

> **Why Services before Projects?** Visitors first need to know *what you sell* and *whether it fits their problem*. Once the offer lands, the projects become believable proof. Leading with projects asks them to infer the offer — extra work that loses people.

### 3.2 Navigation
- **Sticky glass top nav:** Logo/Initials · Services · Process · Work · Packages · About · **Book a Free Call (button, accent gradient)**.
- Nav shrinks + gains a border on scroll. **Mobile:** hamburger → full-screen glass overlay.
- The primary CTA lives in the nav at all times.

### 3.3 Primary user flow (engineered path)
```
Hero → understand the offer + audience in ≤5s → primary CTA "Book a Free Call" or scroll
  → Services → "yes, he does the thing I need"
  → Process → "this looks easy and low-risk to work with"
  → Work → real proof (from milestone.md) → trust ↑
  → Packages → "I roughly know what this costs / where to start"
  → About → meet the analyst-builder (BofA story) → trust ↑↑
  → Tools → quick confidence signal (kept small)
  → Contact → Book a Free Call / Get an Audit / send the form → CONVERSION
```
Every section ends with a one-click path to the primary CTA. Secondary CTA ("Get a Free Website Audit") appears where it fits (hero alt-action, after Work, in contact).

---

## 4. Design Blueprint

### 4.1 Design language
Foundation: **Material Design 3 (M3)** principles (spacing rhythm, elevation, accessible contrast, state layers), reinterpreted as a **dark, glass-morphism** skin. Premium and modern, but **fast and simple** — the visual richness must never slow the page or confuse a non-technical visitor.

### 4.2 Color tokens
| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#0A0A0A` | Page background |
| `--bg-elevated` | `#141417` | Behind glass cards |
| `--glass-fill` | `rgba(255,255,255,0.06)` | Card fill |
| `--glass-border` | `rgba(255,255,255,0.12)` | 1px card edge |
| `--accent-1` | `#6C63FF` (indigo) | Gradient start |
| `--accent-2` | `#FF6584` (pink) | Gradient end |
| `--accent-grad` | `linear-gradient(135deg,#6C63FF,#FF6584)` | Primary buttons, headline highlight, glows |
| `--text-primary` | `#F5F5F7` | Headings/body |
| `--text-muted` | `#A1A1AA` | Secondary text |
| `--success` | `#34D399` | Form success |

> **Accessibility guardrail:** body text ≥ 4.5:1 contrast against background; verify the muted-on-base pair in Phase 1.

### 4.3 Typography
- **Headlines:** Poppins (600/700). **Body/UI:** Inter (400/500). Self-hosted via `next/font` (no layout shift).
- **Scale (desktop):** H1 `clamp(2.75rem, 6vw, 4.5rem)` · H2 `2.25rem` · H3 `1.5rem` · body `1.0625rem` · small `0.875rem`.

### 4.4 Spacing, grid, radius, motion
- Spacing scale (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Section padding: 96 desktop / 64 tablet / 48 mobile. Content max-width 1200px; 24px mobile gutters.
- Radius: cards 20px, buttons 12px, pills 999px.
- Motion: entrances 400–600ms ease-out; hovers 150–200ms. **All motion respects `prefers-reduced-motion`.**

### 4.5 Section-by-section spec (new order)

**HERO (`#hero`) — full viewport**
- Left ~55%: eyebrow ("Websites + SaaS for local businesses & founders") → **H1 / tagline** → one sentence naming audience + BofA edge → **primary CTA "Book a Free Call"** + secondary "Get a Free Website Audit" → thin trust strip ("9 sites shipped · ex-Bank of America · 15+ in pipeline").
- Right ~45%: **premium hero visual** — see §5. **Phase 1 = a static/CSS visual** (gradient mesh + glass card stack or animated gradient), not heavy 3D.
- Mobile: single column; visual simplifies to a CSS gradient/static image.

**SERVICES (`#services`) — first proof of value**
- Heading + one-line promise ("What I build for you").
- 4 glass service tiles, each icon + title + one line:
  - **Website Design & Build** — fast, modern, mobile-first sites.
  - **SaaS / Booking / Payments / Enquiry Integration** — add the functions your business needs.
  - **Business & Financial Analysis** — pricing, unit economics, gap analysis.
  - **Market Research & Ads Support** — positioning and basic Meta-ads help.
- Each tile links to the primary CTA. Hover: subtle lift/glow.

**PROCESS (`#process`) — how it works (NEW)**
- Heading ("How we'll work together — simple and low-risk").
- 5 numbered steps (horizontal on desktop, vertical timeline on mobile):
  1. **Free Discovery Call** — understand your business, goals, and budget.
  2. **Proposal & Package** — clear scope, timeline, and fixed price up front.
  3. **Design & Build** — AI-assisted, fast; you get a live preview link.
  4. **Review & Refine** — your feedback, quick iterations.
  5. **Launch & Support** — domain, hosting, go live; optional ongoing care.
- Ends with primary CTA.

**WORK (`#work`) — proof (formerly "Projects")**
- Heading + one line ("Recent work").
- Responsive card grid (3/2/1). Card: image (16:9), title, client type, **deliverable description** (what was built — NOT invented metrics), service/tech tags, optional "Live" / "Details" links.
- 4th card = "Coming Soon" placeholder (tasteful blur/lock).
- Stat band below: "9 delivered · 15+ in pipeline" (résumé figures).
- All content from `milestone.md` (see §9). Hover: lift 6px, glow, image zoom 1.04.

**PACKAGES / PRICING (`#packages`) — starting points (NEW)**
- Heading ("Where to start") + reassurance ("Every project is quoted after a free call — these are starting points").
- 3 glass pricing tiles (placeholder pricing — structure now, numbers later):
  - **Starter Site** — for small local businesses: a clean single-page/few-page site, mobile-first, contact/enquiry form. *From ₹[PLACEHOLDER].*
  - **Growth Site** — multi-section site + 1 SaaS integration (booking / payments / enquiry). *From ₹[PLACEHOLDER].*
  - **Business + Strategy** — website **plus** financial/market analysis advisory (Jatin's differentiator). *Custom / ₹[PLACEHOLDER].*
- Optional **add-ons** row (placeholder): extra pages, ongoing care/retainer, ads setup, analysis report.
- Middle tier flagged "Most popular." Each tile CTA = "Book a Free Call." A soft line below: "Not sure which fits? Book a free call and we'll figure it out."

**ABOUT (`#about`)**
- Two columns: portrait placeholder (gradient ring) + bio.
- Bio leads with the differentiator (honest): *"I'm not a typical web freelancer. I spent 3 years at Bank of America working with $500B+ of risk data — now I build websites for businesses and understand the numbers behind them."*
- Compact stat row: 3 yrs BofA · 9 sites · 50+ analyses · 4–5 businesses advised. Brief interests line (trekking, motorcycling) for rapport.

**TOOLS (`#tools`) — SECONDARY, kept small**
- A single low-key icon strip ("Tools I work with"): SQL, Power BI, Looker Studio, Salesforce, Excel, Python (learning), plus web/AI tools. No big "tech stack" wall. The site sells outcomes; tools are a quiet confidence signal only.

**CONTACT (`#contact`)**
- Two columns. Left: inviting copy + **"Book a Free Call"** (primary) + **"Get a Free Website Audit"** (secondary) + direct email + social icons (LinkedIn, GitHub, X). Right: form titled **"Tell Me About Your Business"** (Name, Email, Message), inline validation, loading + success states, hidden honeypot (anti-spam).

**FOOTER**
- Minimal glass bar: © 2026 Jatin Mishra · quick links · email · "Built with Next.js" · back-to-top.

### 4.6 Responsive breakpoints
| Name | Width | Behavior |
|---|---|---|
| Mobile | <640px | 1 column; hamburger; hero visual → static/CSS; reduced effects |
| Tablet | 640–1024px | 2-col grids; condensed spacing |
| Desktop | 1024–1440px | Full multi-column + full effects |
| Wide | >1440px | Content capped at 1200px |

**Mobile-first:** design the phone version first (most traffic), layer up for larger screens — naturally protects performance.

---

## 5. Hero Visual & 3D Strategy (scope reduced for Phase 1)

### 5.1 Phase 1 = premium **static / CSS** visual (no heavy 3D)
The hero ships first with a **lightweight, premium-looking visual built in CSS** — e.g. an animated **gradient mesh/aurora**, a stack of **floating glass cards**, or a subtle particle/dot grid in pure CSS/SVG. This:
- loads instantly (no 3D engine, no big download),
- looks premium and on-brand,
- works everywhere with zero fallback risk,
- is dead-simple to maintain.

This directly serves the "fast, simple, easy for a non-developer" requirement.

### 5.2 Phase 2 / optional = Three.js (R3F) or Spline
Real 3D is an **enhancement, added later only if wanted** — not a launch blocker. If added:
- Use **React Three Fiber** (Three.js for React) with a single **low-poly glass icosahedron** or a "JM" monogram; or a **Spline** scene (drag-and-drop 3D tool, exported as an embed).
- **Strict budget:** lazy-load after content, < 300KB, pause rendering off-screen, mobile + reduced-motion fall back to the Phase-1 static visual.
- **Spline how-to (if chosen):** create a free account at spline.design → add a primitive with a glass material + slow rotation + mouse-look → File → Export → "Public URL" or "React (R3F)" → embed via `@splinetool/react-spline` or an iframe. Trade-off: easier to design, heavier to load.

### 5.3 Fallback chain (whenever 3D is added)
```
WebGL + desktop + motion-OK   → R3F 3D scene
mobile / reduced-motion        → Phase-1 static/CSS visual
no WebGL / 3D fails to load     → Phase-1 static/CSS visual (wrapped in an error boundary)
```
Because the static visual is the default, the hero is **never** broken or slow — 3D only ever adds on top.

### 5.4 Subtle depth (cheap, optional)
Light parallax (background vs. foreground move at slightly different scroll speeds) and a small ≤6° mouse-tilt on cards. All disabled under reduced-motion and on mobile.

---

## 6. Technical Stack

| Layer | Choice | Why (for Jatin) |
|---|---|---|
| Framework | **Next.js (App Router)** | Best SEO + speed; you build/maintain with **VS Code + Claude Code**, so the "hard for non-coders" downside disappears. Search engines see real content. |
| Language | TypeScript | Catches mistakes early; Claude Code handles the types. |
| Styling | **Tailwind CSS** | Fast, consistent styling; easy for AI to generate and you to tweak. |
| Hero visual (P1) | **CSS / SVG** | Premium look, instant load, zero fallback risk. |
| 3D (P2/optional) | **React Three Fiber** / Spline | Enhancement only; budgeted + graceful fallback. |
| Animation | **Framer Motion** + CSS | Simple `whileInView` fades/slides; respects reduced-motion. |
| Forms | **Formspree** or **EmailJS** | No backend; emails you directly. |
| Hosting / CI-CD | **Vercel** | Connect GitHub; every save auto-deploys. Free tier is enough. |
| Booking | **Calendly / Cal.com** | Powers "Book a Free Call." |
| Analytics | Vercel Analytics / Plausible | Track the §1 lead metrics. |
| Domain | Custom (TBD) | Credibility. |

> **Why not plain HTML or React+Vite?** Plain HTML is easy to hand-edit, but Claude Code does the editing here. React+Vite has weaker default SEO. Next.js wins on the metric that matters: being found and loading fast.

---

## 7. Development Phases

### Phase 1 — Setup, Design System & Static Launch (fast, no heavy 3D)
- **Scope (locked):** build **only the single landing page `/`**. Do **not** build `/work/[slug]`, `/audit`, or `/resume` in Phase 1 — those are Phase 2+ optional items.
- **Section order (locked):** Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer. Do not reorder.
- Scaffold Next.js + TypeScript + Tailwind; Git repo; connect Vercel (live URL from day one).
- Encode design tokens (§4.2–4.4) into Tailwind config.
- Build reusable primitives: glass `Card`, gradient `Button`, `SectionWrapper`, `Tag/Pill`, sticky `Nav` + mobile menu.
- Build the **premium static/CSS hero visual** (§5.1). **No R3F, no Spline, no Three.js, no WebGL detection, no 3D error boundary in Phase 1.**
- Build all sections in the locked order with placeholder content.
- Wire the contact form + honeypot; add Book-a-Call link (placeholder URL until confirmed).
- Verify contrast + reduced-motion handling.
- **Exit:** a deployed, content-shaped single page with working nav, form, and static hero — fast and complete in structure.

### Phase 2 — Content, Polish & Optional 3D
- Replace placeholders with **real content** from `milestone.md`, résumé, and confirmed packages.
- Add Framer Motion scroll animations + subtle parallax.
- **Optional:** add R3F/Spline 3D hero with full fallback chain (§5.2–5.3) — only if wanted.
- **Exit:** content-complete, polished, animated site; 3D (if added) degrades gracefully.

### Phase 3 — Testing
- Cross-browser (Chrome, Safari, Firefox, Edge), real-device mobile, keyboard nav, screen-reader labels, form edge cases, real form-submission test.
- **Exit:** works on a real phone and a screen reader; form delivers mail.

### Phase 4 — Deployment & Optimization
- Custom domain + HTTPS; SEO (semantic HTML, meta, Open Graph image, `sitemap.xml`, `robots.txt`, JSON-LD `Person`/`ProfessionalService` schema); image compression (WebP/AVIF); Lighthouse to targets; analytics live; lead tracking.
- **Exit:** Lighthouse Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95; live on custom domain.

---

## 8. Assets Needed

| Asset | Details | Source |
|---|---|---|
| Project images (×4) | 16:9 screenshots/mockups (3 work + 1 "coming soon") | Own work; mockups via Shots.so / Screely / Figma |
| Photo (×1) | Professional portrait ~800×800 | Own |
| Logo / "JM" monogram | SVG (nav, footer, favicon, optional 3D) | Figma/Canva |
| Service / process / tool icons | UI + brand icons | Lucide, Simple Icons, FontAwesome |
| Hero static visual | CSS/SVG gradient mesh or glass-card stack | Built in-code |
| 3D scene (optional, P2) | Low-poly primitive or Spline scene | R3F/Spline; Sketchfab/Poly Pizza if importing |
| Fonts | Poppins + Inter | Google Fonts via `next/font` |
| OG/social image | 1200×630 share card | Figma/Canva |
| Favicon set | From monogram | realfavicongenerator.net |
| Stock imagery (gaps) | Free, license-clear | Unsplash, Pexels |

> **Licensing:** use only assets licensed for commercial use; check Sketchfab model licenses; get client permission before publishing client screenshots/links.

---

## 9. Content Data Model (easy edits for a non-coder)

Content lives in **simple list files** so updates mean editing plain text, not code. **Default handling: project data is mirrored manually into `data/projects.ts` by hand. Do NOT build a markdown parser for `milestone.md` in Phase 1** — a parser adds code a non-coder can't maintain. Two key files:

```ts
// data/services.ts — what Jatin offers
export const services = [
  { icon: "globe", title: "Website Design & Build", blurb: "Fast, modern, mobile-first sites." },
  // ...
];

// data/packages.ts — pricing starting points (placeholders for now)
export const packages = [
  { name: "Starter Site",        priceFrom: "₹[PLACEHOLDER]", popular: false,
    points: ["Single/few-page site", "Mobile-first", "Enquiry form"] },
  { name: "Growth Site",         priceFrom: "₹[PLACEHOLDER]", popular: true,
    points: ["Multi-section site", "1 SaaS integration (booking/payments)", "Basic SEO"] },
  { name: "Business + Strategy",  priceFrom: "Custom",        popular: false,
    points: ["Everything in Growth", "Financial/market analysis", "Advisory call"] },
];

// data/projects.ts — proof, sourced from milestone.md (NO invented metrics)
export const projects = [
  { title: "[from milestone.md]", clientType: "[from milestone.md]",
    image: "/work/....webp",
    deliverable: "What was built — e.g. 'Booking-enabled site with online menu'", // NOT a fabricated result
    tags: ["Web Design", "Booking SaaS"], liveUrl: "", detailsUrl: "", comingSoon: false },
];
```
> Content is separated from code on purpose: new client → add one entry → the card/tile appears automatically.

---

## 10. Honest-Claims Policy (must-follow)

This is a hard rule for every section, the PRD, the TRD, and the final copy:

1. **No invented outcomes or metrics.** Do not claim revenue growth, no-show reduction, conversion/traffic increase, ROI, or any client result **unless Jatin supplies verifiable proof.**
2. **Describe deliverables, not results.** Project/work copy says *what was built* ("multi-page site with online booking"), not *what it achieved*.
3. **Only résumé-stated figures are used** for Jatin's own stats (9 delivered, 15+ pipeline, 50+ analyses, 400+ avg engagement, $500B+ RWA, 3 yrs BofA). These are presented as Jatin's stated experience, not as promises to new clients.
4. **No inflated seniority.** "AI-assisted builder + business analyst," never "senior full-stack engineer."
5. **Packages/pricing are starting points**, clearly labelled, with "final quote after a free call."
6. If proof is later provided, real metrics may be added **with attribution** (e.g. "client-reported").

---

## 11. Risk Assessment

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | Hero visual hurts performance | Low (P1 is static/CSS) | Med | Static/CSS hero by default; 3D only as budgeted optional enhancement (§5). |
| 2 | Positioning drifts to "senior dev" | Med | High | §1.2 + §10 enforce "AI-assisted builder + analyst"; no inflated claims. |
| 3 | Invented metrics creep into copy | Med | High | §10 honest-claims policy; deliverable-only descriptions; review gate. |
| 4 | Weak/empty proof (Work section) | Med | High | Use real deliverables from `milestone.md`; if thin, build 1–2 polished demo sites. No lorem text. |
| 5 | Too many co-equal CTAs dilute action | Med | Med | CTA hierarchy (§1.5): one primary ("Book a Free Call"), others secondary. |
| 6 | Broad audience → vague message | Med | Med | Segment-aware copy (§2); hero names the audience; Services map to common needs. |
| 7 | Pricing exposure scares leads | Med | Med | "Starting points + free-call quote" framing; middle tier anchored "most popular." |
| 8 | Responsiveness breaks | Med | Med | Mobile-first; real-device testing (Phase 3); `clamp()` type; breakpoint table (§4.6). |
| 9 | Form spam | High | Low | Honeypot + Formspree spam filter; obfuscated email. |
| 10 | SEO underperforms | Low | High | Next.js SSR/SSG + meta + sitemap + schema (Phase 4); real indexable copy per section. |
| 11 | Scope creep / never ships | Med | Med | Hard phase exit criteria; live shell in Phase 1; 3D + sub-pages optional. |
| 12 | `milestone.md` missing | High (currently) | High | Work section built to a schema with placeholders; populate when provided (see PRD §9). |

---

## 12. Open Items to Confirm before/with PRD & TRD
1. **Real project details** from `milestone.md` (titles, client types, deliverables, tech, links, status). **Still missing.**
2. **Tagline** — confirm §1.4 option A or pick another.
3. **Package pricing** — real numbers (or keep placeholders for launch).
4. **Booking tool** — Calendly vs Cal.com.
5. **Form tool** — Formspree (default) vs EmailJS.
6. **Contact email** — résumé shows `jatinm1807@gmail.com`; account is `jatinmsd07@gmail.com`. Which to display?
7. **Social handles** — GitHub + X URLs (LinkedIn known).
8. **Domain name** to register.
9. **3D** — ship static-only at launch, or add R3F/Spline in Phase 2?

---

## 13. What happens next (workflow)
1. You review this updated plan.
2. I regenerate **PRD.md** from it (features, personas, user stories, a design spec, Services/Process/Packages, honest-claims rules).
3. I write **TRD.md** from the PRD (architecture, folders, components, libraries, data models, deployment).
4. We build in the 4 phases (§7), live URL from Phase 1.

> **On Google Stitch:** Stitch (or any visual tool) is used **only for visual exploration and UI direction** — to look at layout/colour ideas. The **final UI is implemented in Claude Code** using Next.js + TypeScript + Tailwind per the TRD. Stitch never produces the shipped code.

---

## 14. Plain-English Glossary
- **Service landing page:** a single focused page designed to turn visitors into leads (calls/enquiries), unlike a passive portfolio.
- **Lead generation:** getting interested potential clients to contact you.
- **CTA (Call To Action):** the button/prompt asking the visitor to do something ("Book a Free Call").
- **SaaS integration:** plugging in a ready-made online tool (booking, payments, CRM) so the site can *do* things, not just show info.
- **SPA (Single-Page Application):** a site that lives on one page; sections scroll instead of loading new pages.
- **Next.js / App Router:** a popular React-based toolkit for fast, search-friendly sites; App Router is its modern page-organizing system.
- **React:** system for building interfaces from reusable blocks ("components").
- **SSR / SSG:** the page's content is built before it reaches the browser, so Google and users see it immediately (good for SEO + speed).
- **SEO:** making your site easy for Google to find and rank.
- **Tailwind CSS:** styling by adding small labels (classes) to elements.
- **Three.js / WebGL:** WebGL is the browser's 3D ability; Three.js makes it manageable.
- **React Three Fiber (R3F):** Three.js wrapped to fit a React site.
- **Spline:** a drag-and-drop 3D design tool (like Canva for 3D) that exports ready-made scenes.
- **Framer Motion:** a library for smooth React animations.
- **Glass-morphism:** the frosted-glass look — semi-transparent blurred cards.
- **Gradient mesh / aurora:** a soft, colorful animated background made purely with CSS — premium-looking and very light.
- **Low-poly:** a 3D shape with few triangles, so it renders fast.
- **Lazy-load:** load something later/only when needed so the important parts appear first.
- **Lighthouse:** Google's free tool that scores a site on speed, SEO, accessibility.
- **LCP (Largest Contentful Paint):** time until the main content is visible — a key speed score.
- **Bounce rate:** % of visitors who leave without interacting.
- **CI/CD:** automation that publishes your site every time you save.
- **Vercel:** hosting that runs Next.js and does CI/CD for you.
- **Formspree / EmailJS:** services that email you a form's contents without running a server.
- **Honeypot:** a hidden form field that traps spam bots.
- **`prefers-reduced-motion`:** an OS setting; when on, we turn animations off (motion sensitivity).
- **Open Graph (OG) image:** the preview picture shown when your link is shared on social media.
- **Contrast ratio (4.5:1):** a readability check for text against its background.
- **PRD / TRD:** Product Requirements Doc (what to build) / Technical Requirements Doc (how to build it).

---

*End of plan.md*
