# Product Requirements Document (`PRD.md`)

**Product:** Jatin Mishra — Freelance Website + Business-Consulting **Service Landing Page**
**Owner:** Jatin Mishra
**Version:** 2.0 (reframed from portfolio → service landing page)
**Last updated:** 25 June 2026
**Status:** Draft for review → input to `TRD.md`

**Source files (traceability):**
- `plan.md` v2 — framing, positioning, IA, design, phases, honest-claims policy *(present)*
- `milestone.md` — all project/work data *(**MISSING** — §9 defines schema + placeholders; no project data invented)*
- `Jatin_Mishra_Resume.pdf` — skills, experience, achievements, branding *(present)*

> Defines **what** the product must be and do (not code — that's the TRD). The design spec (§7) can be used as a brief for **Google Stitch for visual exploration / UI direction only** — Stitch never produces shipped code; the **final UI is implemented in Claude Code** with Next.js + TypeScript + Tailwind per the TRD. Glossary lives in `plan.md` §14. **Honest-claims policy (`plan.md` §10) governs all copy: no invented metrics/outcomes.**

> **Phase 1 launch scope (locked):** build **only the single landing page `/`** with the section order Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer. Optional routes (`/work/[slug]`, `/audit`, `/resume`) and any 3D are **Phase 2+** and are documented, not built, now.

---

## 1. Executive Summary

This is a **service landing page** whose single job is **lead generation** — turning visitors into booked calls, audit requests, and enquiries. It markets Jatin Mishra's service: building fast, modern websites (with SaaS add-ons like booking, payments, and enquiry forms) paired with real business and financial insight. Jatin is positioned honestly as an **AI-assisted website builder and business analyst with a Bank of America risk-analytics background** — never as a senior full-stack engineer. The page leads with the **offer (Services) before proof (Work)**, explains an easy **Process**, presents **Packages** as starting points, and funnels every section toward one primary CTA, **"Book a Free Call."** It is built on Next.js for SEO/speed, ships first with a lightweight premium CSS hero visual (3D is an optional later enhancement), and stays maintainable by a non-developer through Claude Code via simple data files. All claims are honest: deliverables are described, outcomes are never fabricated.

---

## 2. Project Goals & Objectives

| # | Goal | Objective |
|---|---|---|
| G1 | **Generate leads** | Maximize booked calls, audit requests, and form enquiries — the core KPI. |
| G2 | **Communicate the offer fast** | Visitor understands the service + audience within the first screen (Services-first IA). |
| G3 | **Differentiate honestly** | Convey "AI-assisted builder + ex-BofA business analyst" without inflated seniority or invented results. |
| G4 | **Lower friction to work with Jatin** | Process + Packages make engaging feel easy and low-risk. |
| G5 | **Prove capability** | Show real delivered work (from `milestone.md`) described by deliverables, not fabricated metrics. |
| G6 | **Be discoverable & fast** | Lighthouse SEO ≥ 95, LCP < 2.5s on 4G mobile. |
| G7 | **Stay non-coder maintainable** | Edit services, packages, and projects via simple data files through Claude Code. |

---

## 3. Target Audience

Primary goal is lead generation from these segments:

| Segment | Examples | Typical need |
|---|---|---|
| Education | Schools, colleges, tuition/coaching classes | Info site, admissions/enquiry forms, schedules, enrolment |
| Local service businesses | Clinics, cafés, restaurants, salons, local services | Site + booking/appointments, menu/services, maps, payments |
| Consultants & professionals | Independent consultants, advisories | Personal-brand site, lead capture, credibility |
| Founders / early-stage | D2C brands, startups | Launch site + SaaS + business/financial input |

Common thread: **non-technical, time-poor owners** who want a professional web presence (often with a booking/payment/enquiry function) from someone who also understands their business. **Secondary audience:** Founder's-Office/strategy recruiters who may also view the site; positioning must not undermine that path.

---

## 4. User Personas

### A — "Meera, the Tuition-Class Owner" (Primary)
- Runs a coaching center; not technical; wants parents to find classes and enquire online.
- Converts on: simple enquiry flow, examples of similar sites, a clear free-call offer, low perceived risk.

### B — "Priya, the Café Owner" (Primary)
- Two cafés; wants a professional site with menu + booking; burned by a past agency.
- Converts on: real examples, an easy Process, transparent starting prices, a human story.

### C — "Rahul, the Early-Stage Founder" (Primary, higher value)
- D2C founder; follows Jatin's LinkedIn unit-economics posts; wants a builder who also gets the numbers.
- Converts on: BofA credibility, business/strategy package, "Book a Free Call."

### D — "Anita, the Founder's-Office Recruiter" (Secondary)
- Hiring for strategy; wants evidence of analytical depth.
- Converts on: About story, $500B+ credibility, quantified résumé achievements.

---

## 5. User Stories

> *As a [user], I want to [action], so that [benefit].* Priority: M=Must, S=Should, C=Could.

### Global / Navigation
- (M) As a visitor, I want sticky nav with the primary CTA always visible, so that I can act anytime.
- (M) As a mobile visitor, I want a hamburger menu, so that nav works on small screens.
- (M) As a motion-sensitive visitor, I want reduced-motion respected, so that the site is comfortable.

### Hero
- (M) As a first-time visitor, I want to understand the offer + who it's for in ≤5s, so that I decide to stay.
- (M) As a visitor, I want one clear primary action ("Book a Free Call"), so that I'm not overwhelmed.
- (S) As a visitor with a weak existing site, I want a "Get a Free Website Audit" option, so that I have a low-commitment way in.
- (M) As a mobile visitor, I want the hero to load instantly, so that I don't bounce.

### Services (before Work)
- (M) As a potential client, I want to see exactly what Jatin offers, so that I know if he solves my problem.
- (S) As a visitor, I want each service to link to the primary CTA, so that I can act immediately.

### Process
- (M) As a non-technical client, I want to see how working together works step-by-step, so that it feels easy and low-risk.
- (S) As a budget-conscious client, I want to see that it starts with a free call and fixed-price proposal, so that I feel safe enquiring.

### Work (proof)
- (M) As a potential client, I want to see real delivered work, so that I trust Jatin's capability.
- (M) As a visitor, I want each work card to show client type, what was built, and the services/tech used, so that I judge relevance.
- (S) As a visitor, I want a "coming soon" item and delivery stats, so that I sense momentum.
- (S) As an interested client, I want an optional detail view, so that I can go deeper.
- (C) As a visitor, I want to filter work by type, so that I find ones like my business. *(Depends on milestone.md category.)*

### Packages
- (M) As a client, I want starting-point pricing, so that I know roughly what to expect.
- (M) As a hesitant client, I want reassurance that final pricing comes after a free call, so that I'm not scared off.
- (S) As a client, I want a "most popular" anchor, so that I have a recommended default.

### About
- (M) As a client, I want Jatin's background and differentiator, so that I trust his judgment.
- (S) As a recruiter, I want quantified achievements, so that I can assess analytical depth.

### Tools (secondary)
- (S) As a client, I want a quick glimpse of the tools Jatin uses, so that I gain confidence — without a heavy tech wall.

### Contact
- (M) As a visitor, I want a simple form ("Tell Me About Your Business": Name, Email, Message), so that I can reach out easily.
- (M) As a visitor, I want validation + a success confirmation, so that I know it sent.
- (S) As a higher-intent visitor, I want to book a call directly, so that I move faster than email.
- (M) As Jatin, I want spam protection, so that my inbox stays clean.

### Maintainer
- (M) As Jatin (non-coder), I want to edit services, packages, and projects via simple data files, so that I keep the site current without coding.

---

## 6. Feature Requirements

### 6.1 Functional (MoSCoW)

| ID | Feature | Priority | Source |
|---|---|---|---|
| F1 | Single-page layout, smooth-scroll, **Services before Work** order | Must | plan §3.1 |
| F2 | Sticky glass nav with persistent primary CTA + scroll-state | Must | plan §3.2 |
| F3 | Mobile hamburger → full-screen overlay | Must | plan §3.2 |
| F4 | Hero: offer, tagline, audience+edge line, primary CTA + secondary audit CTA, trust strip | Must | plan §4.5 |
| F5 | **Premium static/CSS hero visual (Phase 1)** | Must | plan §5.1 |
| F6 | Optional R3F/Spline 3D hero + fallback chain — **Phase 2+ only; NOT in Phase 1** (no Three.js, no WebGL detection, no 3D error boundary at launch) | Could (Phase 2) | plan §5.2–5.3 |
| F7 | Services section: 4 service tiles, each linking to primary CTA | Must | plan §4.5 |
| F8 | Process section: 5 steps (discovery → launch), CTA at end | Must | plan §4.5 |
| F9 | Work grid (3/2/1): card = image, title, client type, **deliverable description**, tags, optional live/details | Must | plan §4.5, §10 |
| F10 | "Coming Soon" work card | Should | plan §4.5 |
| F11 | Work stat band ("9 delivered · 15+ pipeline") | Should | plan §4.5 |
| F12 | Optional per-project detail page `/work/[slug]` — **Phase 2+ only; not built in Phase 1** | Should (Phase 2) | plan §3.1 |
| F13 | Work filtering by category | Could | needs milestone.md field |
| F14 | Packages section: 3 tiles (placeholder pricing), "most popular," add-ons row, "quote after free call" line | Must | plan §4.5 |
| F15 | About: bio, differentiator story, stat row, photo, interests | Must | plan §4.5, résumé |
| F16 | Tools strip (secondary, small) | Should | plan §4.5 |
| F17 | Contact form "Tell Me About Your Business" (Name, Email, Message) via Formspree/EmailJS | Must | plan §4.5, §6 |
| F18 | Form inline validation, loading + success states | Must | plan §4.5 |
| F19 | Spam honeypot | Must | plan §4.5, §11 |
| F20 | "Book a Free Call" booking link (Calendly/Cal.com) — primary CTA everywhere | Must | plan §1.5, §6 |
| F21 | "Get a Free Website Audit" secondary CTA — **in Phase 1 links to the `#contact` form** (a dedicated `/audit` page is Phase 2+) | Should | plan §1.5 |
| F22 | Social links (LinkedIn, GitHub, X) | Should | plan §4.5 |
| F23 | Footer: copyright, quick links, email, back-to-top | Must | plan §4.5 |
| F24 | Scroll-triggered entrance animations | Should | plan §4.4, §5.4 |
| F25 | Subtle parallax + tile tilt | Could | plan §5.4 |
| F26 | Content in editable data files (services, packages, projects) | Must | plan §9 |
| F27 | Analytics + lead tracking | Should | plan §6 |

### 6.2 Non-functional

| ID | Requirement | Target | Source |
|---|---|---|---|
| NF1 | LCP (4G mobile) | < 2.5s | plan §0/§6 |
| NF2 | Lighthouse Performance | ≥ 90 | plan §7 |
| NF3 | Lighthouse SEO | ≥ 95 | plan §7 |
| NF4 | Lighthouse Accessibility | ≥ 95 | plan §7 |
| NF5 | Text contrast | ≥ 4.5:1 | plan §4.2 |
| NF6 | Optional 3D bundle (**Phase 2 only — N/A in Phase 1**) | < 300KB | plan §5.2 |
| NF7 | Respect `prefers-reduced-motion` | Yes | plan §4.4 |
| NF8 | Cross-browser | Chrome/Safari/Firefox/Edge | plan §7 |
| NF9 | Responsive | 4 breakpoints | plan §4.6 |
| NF10 | Keyboard + screen-reader support | Full | plan §7 |
| NF11 | Hero never broken (static default) | Yes | plan §5.1, §5.3 |
| NF12 | HTTPS + custom domain | Yes | plan §7 |
| NF13 | **Honest copy — no invented metrics** | Enforced | plan §10 |

---

## 7. Design Requirements (visual spec)

> This spec may be pasted into **Google Stitch for visual exploration / UI direction only** — to preview layout, colour, and spacing ideas. **Stitch does not produce the shipped UI; the final UI is implemented in Claude Code** with Next.js + TypeScript + Tailwind per the TRD. Values extracted from `plan.md` §4–§5; treat as fixed constraints. **Section order (locked for Phase 1): Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer.**

### 7.1 Design language
Dark-mode, premium, **glass-morphism** grounded in **Material Design 3** principles. Near-black canvas, frosted semi-transparent cards, indigo→pink accent gradient used sparingly for the primary CTA and highlights. Modern and client-facing — **not developer-y**. Must read as fast and simple.

### 7.2 Color tokens
| Token | Value | Use |
|---|---|---|
| Background | `#0A0A0A` | Page |
| Elevated | `#141417` | Behind glass |
| Glass fill | `rgba(255,255,255,0.06)` | Card fill |
| Glass border | `rgba(255,255,255,0.12)` | Card edge |
| Accent 1 | `#6C63FF` | Gradient start |
| Accent 2 | `#FF6584` | Gradient end |
| Accent gradient | `linear-gradient(135deg,#6C63FF,#FF6584)` | Primary CTA, highlights |
| Text primary | `#F5F5F7` | Headings/body |
| Text muted | `#A1A1AA` | Secondary |
| Success | `#34D399` | Form success |

Body text ≥ 4.5:1 contrast.

### 7.3 Typography
Headlines Poppins (600/700); body/UI Inter (400/500). Scale: H1 `clamp(2.75rem,6vw,4.5rem)` · H2 `2.25rem` · H3 `1.5rem` · body `1.0625rem` · small `0.875rem`.

### 7.4 Spacing / grid / radius / motion
Spacing 4·8·12·16·24·32·48·64·96·128. Section padding 96/64/48. Content max 1200px; 24px mobile gutters. Radius cards 20 / buttons 12 / pills 999. Motion entrances 400–600ms ease-out, hovers 150–200ms; all respect reduced-motion.

### 7.5 Breakpoints
Mobile <640 (1col, hamburger, static hero, reduced effects) · Tablet 640–1024 (2col) · Desktop 1024–1440 (full) · Wide >1440 (cap 1200px).

### 7.6 Screen-by-screen (visual reference)

**Hero (full viewport):** two columns. Left ~55%: eyebrow ("Websites + SaaS for local businesses & founders") → H1/tagline → one line naming audience + BofA edge → **primary CTA "Book a Free Call"** + secondary "Get a Free Website Audit" → trust strip ("9 sites shipped · ex-Bank of America · 15+ in pipeline"). Right ~45%: **premium static/CSS visual** (animated gradient mesh/aurora or floating glass-card stack — NOT heavy 3D at launch). Mobile: single column, visual simplifies.

**Services:** heading + promise ("What I build for you"). Four glass tiles (icon + title + one line): Website Design & Build · SaaS/Booking/Payments/Enquiry Integration · Business & Financial Analysis · Market Research & Ads Support. Each links to primary CTA. Hover lift/glow.

**Process:** heading ("How we'll work together"). Five numbered steps — horizontal timeline desktop, vertical mobile: 1) Free Discovery Call, 2) Proposal & Package (fixed scope/price), 3) Design & Build (AI-assisted, live preview), 4) Review & Refine, 5) Launch & Support. Ends with primary CTA.

**Work:** heading ("Recent work"). Responsive card grid (3/2/1). Card = 16:9 image, title, client type, **deliverable line (what was built — never invented metrics)**, service/tech pills, optional "Live"/"Details". Fourth = "Coming Soon" blurred/locked. Stat band below ("9 delivered · 15+ pipeline"). Hover lift 6px, glow, image zoom 1.04.

**Packages:** heading ("Where to start") + reassurance ("Every project is quoted after a free call — these are starting points"). Three glass pricing tiles: **Starter Site** (From ₹[PLACEHOLDER]) · **Growth Site** (From ₹[PLACEHOLDER], "Most popular") · **Business + Strategy** (Custom/₹[PLACEHOLDER]). Each lists 3 bullet points + "Book a Free Call." Optional add-ons row. Soft line: "Not sure which fits? Book a free call."

**About:** two columns — portrait placeholder (gradient ring) + bio leading with the honest BofA differentiator; compact stat row (3 yrs BofA · 9 sites · 50+ analyses · 4–5 advised); brief interests.

**Tools (secondary, small):** a single low-key icon strip ("Tools I work with"): SQL, Power BI, Looker Studio, Salesforce, Excel, Python (learning), web/AI tools. No large tech wall.

**Contact:** two columns — left: copy + **"Book a Free Call"** + **"Get a Free Website Audit"** + email + socials (LinkedIn, GitHub, X); right: form titled **"Tell Me About Your Business"** (Name, Email, Message) with validation, loading, success, hidden honeypot.

**Footer:** glass bar — © 2026 Jatin Mishra · quick links · email · "Built with Next.js" · back-to-top.

### 7.7 Hero visual spec
**Phase 1 (build now):** premium CSS/SVG visual only (gradient mesh/aurora or glass-card stack), instant load, works everywhere — **no Three.js, no R3F, no Spline, no WebGL detection, no error boundary** (none needed; the static visual is the whole hero). **Phase 2 (optional, documented only):** low-poly glass icosahedron or "JM" monogram via R3F, or a Spline scene — lazy-loaded, <300KB, off-screen pause, mobile/reduced-motion fall back to the Phase-1 visual, wrapped in an error boundary so the hero is never broken.

### 7.8 Micro-interactions
Hover lift/glow on tiles and cards; scroll fade-in/slide-up; subtle parallax; capped ≤6° tile tilt. Disabled under reduced-motion and on mobile where noted.

### 7.9 CTA hierarchy (visual)
Primary **"Book a Free Call"** = solid accent-gradient button, highest contrast, repeated. Secondary **"Get a Free Website Audit"** = glass/outline button. **"Tell Me About Your Business"** = the contact form's heading, not a competing button.

---

## 8. Content Requirements

> Personal/brand content from résumé + `plan.md`. **Project content exclusively from `milestone.md`** (§9), shown as placeholders. **All copy obeys the honest-claims policy (`plan.md` §10).**

| Element | Content | Source |
|---|---|---|
| Hero eyebrow | "Websites + SaaS for local businesses & founders" | plan §4.5 |
| Hero H1/tagline | Option A "A website your business actually needs — built fast." *(confirm)* | plan §1.4 |
| Hero edge line | Names audience + "built by an analyst with a Bank of America background" | plan §1.1 |
| Hero trust strip | "9 sites shipped · ex-Bank of America · 15+ in pipeline" | résumé |
| Primary CTA | "Book a Free Call" | plan §1.5 |
| Secondary CTA | "Get a Free Website Audit" | plan §1.5 |
| Services | Website Design & Build · SaaS/Booking/Payments/Enquiry · Business & Financial Analysis · Market Research & Ads Support | plan §4.5, résumé |
| Process steps | Discovery Call → Proposal & Package → Design & Build → Review & Refine → Launch & Support | plan §4.5 |
| Work cards | **From milestone.md** — title, client type, deliverable (not metrics), tags, optional links, status | milestone.md (placeholder) |
| Work stat band | "9 delivered · 15+ in pipeline" | résumé |
| Packages | Starter / Growth (popular) / Business+Strategy; placeholder prices; add-ons; "quote after free call" | plan §4.5 |
| About bio | Honest differentiator (BofA → builder who understands the numbers) | plan §4.5, résumé |
| About stats | 3 yrs BofA · 9 sites · 50+ analyses · 4–5 advised | résumé |
| About interests | Trekking, motorcycling | résumé |
| Tools | SQL, Power BI, Looker Studio, Salesforce, Excel, Python (learning), AI tools | résumé |
| Contact form title | "Tell Me About Your Business" | plan §1.5 |
| Contact email | *Confirm: résumé shows jatinm1807@gmail.com vs account jatinmsd07@gmail.com* | résumé / open item |
| Socials | LinkedIn (linkedin.com/in/jatin-mishra-795218192), GitHub, X | résumé + open item |
| Footer | © 2026 Jatin Mishra; quick links; email; "Built with Next.js" | plan §4.5 |

---

## 9. Work / Project Showcase Structure

The Work section is driven by `milestone.md` (single source of truth for project facts). **Default handling (Phase 1): project entries are mirrored manually, by hand, into `data/projects.ts`. Do NOT build a markdown parser for `milestone.md`** — it adds code a non-coder can't maintain. This PRD defines structure + display rules only; **no project data is invented**.

### 9.1 Schema per project
| Field | Type | Required | Drives |
|---|---|---|---|
| `title` | string | Yes | Card title |
| `clientType` | string | Yes | Sub-label ("Tuition Class — Bhubaneswar") |
| `status` | `completed` \| `upcoming` \| `pipeline` | Yes | Grouping/treatment |
| `image` | path/URL | Yes (completed) | 16:9 card image |
| `deliverable` | string (what was built; **no fabricated results**) | Yes (completed) | Card description |
| `description` | string | Optional | Detail page body |
| `techStack` | string[] | Yes | Tag pills |
| `features` | string[] | Optional | Detail page list |
| `liveUrl` | URL | Optional | "Live" link |
| `repoUrl` | URL | Optional | "GitHub" (optional; client work often private) |
| `slug` | string | Optional | `/work/[slug]` |
| `category` | string | Optional | Filtering (F13) |
| `comingSoon` | boolean | Optional | Locked/blurred card |

### 9.2 Display rules
- `completed` → full cards in the grid (target ≥ 3). `upcoming`/`comingSoon` → blurred "Coming Soon" card. `pipeline` → feeds the stat band count only.
- Stat band counts derived from the `data/projects.ts` entries (mirrored from `milestone.md`); if absent, fall back to résumé-stated display strings ("9 delivered · 15+ in pipeline").
- Detail pages (`/work/[slug]`) are **Phase 2+ only** — not generated in Phase 1 even if `slug` exists.
- Filtering shown only if `category` exists across entries.
- Missing field → UI element hidden; **never render lorem/placeholder text in production**.
- **`deliverable` describes what was built; no metric is shown unless `milestone.md` supplies a proof-backed, attributed figure** (honest-claims policy).

### 9.3 Placeholder note
Until `milestone.md` is supplied, the section is built to this schema with clearly-marked placeholders. No titles, deliverables, tech, or links are invented here.

---

## 10. User Flow

```
Hero → grasp offer + audience ≤5s → "Book a Free Call" or scroll
Services → "he does what I need"
Process → "easy and low-risk to work with"
Work → real proof (milestone.md, deliverables only) → trust ↑
Packages → "I know roughly what this costs / where to start"
About → meet the analyst-builder (BofA story) → trust ↑↑
Tools → quick confidence signal (small)
Contact → Book a Free Call / Get an Audit / submit form → CONVERSION → success confirmation
```
Every section offers a one-click path to the primary CTA; the secondary audit CTA appears in the hero, after Work, and in Contact.

---

## 11. Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| Lead actions/month (calls + audits + form) | Primary KPI | Form tool + booking + analytics |
| Booked calls/month | Secondary KPI | Calendly/Cal.com |
| Hero bounce rate | < 45% | Analytics |
| Scroll-to-Work rate | ≥ 60% | Analytics |
| LCP (4G mobile) | < 2.5s | Lighthouse/field |
| Lighthouse Performance | ≥ 90 | Lighthouse |
| Lighthouse SEO | ≥ 95 | Lighthouse |
| Lighthouse Accessibility | ≥ 95 | Lighthouse |

---

## 12. Assumptions & Dependencies

### 12.1 Blocking
- **`milestone.md` is missing.** All Work content depends on it; built to §9 schema, cannot be populated until provided.

> **Placeholders do not block documentation or Phase 1 build.** Booking URL, Formspree ID, contact email, GitHub/X handles, package prices, and domain all use clearly-marked placeholder values until confirmed; the site builds and deploys with placeholders and these are swapped in later.

### 12.2 Assumptions (confirm)
- A1: Product = service landing page for lead-gen (confirmed).
- A2: Positioning = AI-assisted builder + analyst; no senior-dev inflation (confirmed).
- A3: Section order Services-before-Work, with Process + Packages (confirmed).
- A4: Phase-1 hero = static/CSS; 3D optional Phase 2 (confirmed).
- A5: Tagline = plan §1.4 option A (pending final confirmation).
- A6: Package pricing = placeholders for launch (pending real numbers).
- A7: Booking = Calendly/Cal.com; Form = Formspree (default) — pending confirmation.
- A8: Contact email — résumé `jatinm1807@gmail.com` vs account `jatinmsd07@gmail.com` — confirm which.
- A9: GitHub + X handles to be provided; LinkedIn known.
- A10: Custom domain TBD.
- A11: Stat figures are Jatin's own résumé-stated numbers, kept accurate.
- A12: Client permission obtained before publishing client screenshots/links.

### 12.3 External dependencies
Vercel (hosting/CI-CD); Formspree/EmailJS; Calendly/Cal.com; Google Fonts (Poppins, Inter); Lucide + Simple Icons; Vercel Analytics/Plausible; assets per `plan.md` §8.

---

## 13. Constraints

| Type | Constraint | Source |
|---|---|---|
| Technical | No custom backend; forms via third-party | plan §6 |
| Technical | Phase-1 hero static/CSS; 3D optional + budgeted (<300KB, graceful) | plan §5 |
| Technical | Hit Lighthouse targets; non-coder maintainable via data files + Claude Code | plan §7, §9 |
| Design | Fixed tokens (§7); dark glass-morphism + M3; Services-before-Work order | plan §3.1, §4 |
| Design | Google Stitch used **only for visual exploration / UI direction**; **final UI implemented in Claude Code** (Next.js/TS/Tailwind) per the TRD | this PRD, plan §13 |
| Scope | **Phase 1 = single page `/` only**; `/work/[slug]`, `/audit`, `/resume`, and 3D are Phase 2+ | plan §3.1, §7 |
| Content | No invented project data (all from milestone.md); **no fabricated metrics/outcomes** | plan §10, source rules |
| Content | Honest positioning — no inflated seniority | plan §1.2, §10 |
| Content | Packages are starting points; final quote after free call | plan §4.5, §10 |
| Scope | Service-landing-page scope; sub-pages/3D optional; phased exit criteria | plan §7, CLAUDE.md |
| Process | plan → PRD → TRD; human approval before implementation | CLAUDE.md §2 |

---

## 14. Traceability / Quality Checklist
- [x] All `plan.md` v2 sections reflected (framing, Services-first, Process, Packages, reduced 3D, CTA hierarchy, honest claims)
- [x] All project data sourced from `milestone.md` via schema + placeholders (none invented)
- [x] User stories cover all features incl. Process, Packages, CTA hierarchy, maintainer
- [x] Features prioritized (MoSCoW)
- [x] Design spec detailed enough for visual exploration in Google Stitch; final UI built in Claude Code (§7)
- [x] Success metrics measurable
- [x] **No fabricated outcomes/metrics; deliverable-only Work copy** (§9.2, §13)
- [x] Showcase accommodates dynamic milestone.md content (§9)
- [x] Clear enough to generate TRD directly
- [ ] **Blocker:** provide `milestone.md` to populate Work content (§12.1)

---

*End of PRD.md*
