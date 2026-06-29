# Release Notes

---

## v0.1.0 — Initial Launch (Phase 1)

**Status:** Pre-launch (pending production deployment)

### What's included

- Homepage (`/`) with sections: Hero, Services, Solutions overview, Work, About, Contact form
- Solutions page (`/solutions`) with full package listings and indicative pricing
- Contact form via Formspree (fallback to mailto if env var not set)
- Security headers: CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- SEO: JSON-LD structured data (WebSite + Person), Open Graph, sitemap, robots
- Production build guard: throws at compile time if `NEXT_PUBLIC_SITE_URL` missing in production
- Navy / astronomical blue design system (replaced purple/violet palette)
- Responsive layout: tested at 375px, 768px, 1280px+

### Deliberately excluded (Phase 2+)

- Analytics (no tracking in Phase 1)
- Blog / case studies
- Client portal
- CMS integration
- Calendly embed (booking URL is an external link)
- Dynamic pricing calculator

---

## Template for Future Entries

```
## v0.X.0 — [Short description]

**Date:** YYYY-MM-DD  
**Deploy:** [Netlify deploy URL or hash]

### Changes
- 

### Known issues
-
```

---

*Version numbers follow the `version` field in `package.json`. Bump it on each production deploy.*
