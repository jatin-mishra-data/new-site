# Deployment Package — Jatin Mishra Freelance Website

This folder is the single source of truth for deploying, validating, and maintaining
the Jatin Mishra freelance and business-consulting landing page.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4  
**Host:** Netlify  
**Node:** ≥ 20  

---

## Reading Order

Work through these documents in order for a first-time deployment:

| Step | Document | Purpose |
|------|----------|---------|
| 1 | [checklist.md](checklist.md) | Everything that must be done before going live |
| 2 | [env-vars.md](env-vars.md) | Environment variables — what they are and where to set them |
| 3 | [formspree.md](formspree.md) | Contact form account setup |
| 4 | [netlify.md](netlify.md) | Connecting the repo and deploying on Netlify |
| 5 | [domain-dns.md](domain-dns.md) | Custom domain, DNS records, and SSL |
| 6 | [seo-setup.md](seo-setup.md) | Google Search Console and sitemap submission |
| 7 | [post-launch-validation.md](post-launch-validation.md) | Verify everything works in production |
| 8 | [launch-status.md](launch-status.md) | Track sign-off on each step |

**Reference documents** (use as needed):

- [maintenance.md](maintenance.md) — how to update content after launch
- [rollback.md](rollback.md) — how to revert a bad deploy
- [troubleshooting.md](troubleshooting.md) — common issues and fixes
- [project-config.md](project-config.md) — stack versions, routes, security headers, key files
- [release-notes.md](release-notes.md) — version history and Phase 1 scope

---

## Critical Blockers

The following must be resolved before the site can go live:

- [ ] **`NEXT_PUBLIC_SITE_URL`** — set to the real production domain
- [ ] **`NEXT_PUBLIC_FORMSPREE_ID`** — create a Formspree account and get a form ID
- [ ] **`siteConfig.bookingUrl`** in `data/site.ts` — replace `/#contact` with a real Calendly or Cal.com link

> The build will throw at compile time if `NEXT_PUBLIC_SITE_URL` is missing in production.
> This is intentional — it prevents shipping bad canonical/OG/sitemap URLs.

---

## Repository Location

All application source code lives in the project root (one level above this folder).  
Never modify files in `deployment/` to fix application bugs — edit source code instead.
