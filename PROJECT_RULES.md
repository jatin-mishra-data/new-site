# PROJECT_RULES.md

> Single source of truth for **every** AI tool working on this repository — Claude Code, Co-Work, OpenCode, Codex, Gemini CLI, and any future coding agent. Read this first. It overrides all other project rules.

---

## 1. Project Identity

- **Project name:** Jatin Mishra — Freelance Website + Business-Consulting Service Landing Page.
- **Purpose:** Lead generation — booked calls, website-audit requests, and enquiries.
- **Phase:** Phase 1 (single landing page).
- **Status:** Planning complete; in implementation.

This **is** Jatin Mishra's freelance website + business-consulting service landing page.

It is **NOT**:

- StrategicAI (or any invented brand)
- an agency
- a portfolio
- a SaaS product

---

## 2. Source of Truth

Priority order (higher wins on conflict):

1. `PROJECT_RULES.md`
2. `CLAUDE.md`
3. `docs/`
   - `plan.md`
   - `PRD.md`
   - `TRD.md`
   - `design.md`
   - `content.md`
   - `assets.md`

Everything inside `docs/archive-stitch-raw/` is **historical reference only**. Never use it unless explicitly requested.

---

## 3. Project Philosophy

Always optimize for:

- simplicity
- maintainability
- speed
- accessibility
- SEO
- honesty

Never optimize for unnecessary complexity.

---

## 4. Token Optimization (Highest Priority)

Token efficiency overrides convenience.

- Read the minimum number of files.
- Never scan the whole repository.
- Never reread files already read in the current task.
- Never reread documentation unless it changed.
- Work incrementally.
- One implementation step per task.
- Avoid broad analysis.
- Stop immediately after completing the requested task.

---

## 5. Skill Usage Policy

Before beginning work:

- Search available skills.
- Load only the minimum useful skill(s).
- Never load unrelated skills.
- Prefer built-in reasoning if no skill provides clear benefit.
- Avoid duplicate capabilities.

---

## 6. Planning Rules

Before editing:

1. Identify the files required.
2. Read only those files.
3. Explain the intended change briefly.
4. Implement.
5. Stop.

Never redesign unrelated systems. Never refactor unrelated code. Never "improve while you're there."

---

## 7. Scope Control

Implement exactly what was requested.

Never add:

- optional features
- future enhancements
- speculative improvements

unless explicitly instructed.

---

## 8. Project Constraints

- **Phase 1 only.** Single landing page.
- **Locked section order:** Hero → Services → Process → Work → Packages → About → Tools → Contact → Footer.

Do **NOT** implement (unless explicitly requested):

- Three.js
- React Three Fiber
- Spline
- WebGL detection
- 3D fallback
- `/audit`
- `/resume`
- `/work/[slug]`

---

## 9. Technology Rules

Use:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Hero: **static CSS/SVG only**.

---

## 10. Coding Standards

Prefer:

- small components
- clear naming
- reuse
- composition

Avoid:

- large files
- duplicate code
- magic values
- unnecessary abstractions

---

## 11. Content Rules

- **Brand:** Jatin Mishra.
- **Voice:** first person ("I build", "I'll help").

Never use:

- "We"
- "Our team"
- "Agency"

No fake claims. No invented metrics. No fake testimonials. No fake case studies.

Missing values (email, prices, handles, project data) must remain **clearly marked placeholders** — never invent them.

---

## 12. Design Rules

- Use only the approved docs (`docs/design.md`, `docs/content.md`, `docs/assets.md`).
- Never use archived Stitch files.

Maintain:

- dark theme
- glassmorphism
- approved typography (Poppins headings, Inter body)
- approved spacing system
- approved color system (near-black base, indigo→pink accent gradient)

---

## 13. Documentation Rules

When documentation must be read:

- Read only the minimum required document.
- Never load all docs at once.
- Never summarize docs unless requested.

---

## 14. Completion Rules

After finishing a task, report:

- Files changed
- Why
- Anything blocked

Then stop. Never continue to another task automatically.

---

## 15. Future Compatibility

This document must be followable by:

- Claude Code
- Co-Work
- OpenCode
- Codex
- Gemini CLI
- Future coding agents

Avoid tool-specific wording. Use generic implementation rules wherever possible. Any tool-specific behavior belongs in that tool's own bootstrap file (e.g. `CLAUDE.md`), not here.

---

*End of PROJECT_RULES.md*
