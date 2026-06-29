# Post-Launch Validation

Run this checklist on the live production URL after every deployment that touches
layout, routing, env vars, or content. Not every item needs re-checked for minor copy edits.

---

## 1. Availability

- [ ] `https://yourdomain.com` loads (200 OK, no redirects to Netlify preview URL)
- [ ] `https://www.yourdomain.com` redirects correctly to the primary domain
- [ ] `https://yourdomain.com/solutions` loads (200 OK)
- [ ] `https://yourdomain.com/sitemap.xml` returns valid XML
- [ ] `https://yourdomain.com/robots.txt` returns correct rules
- [ ] `https://yourdomain.com/favicon.svg` loads
- [ ] No 404 errors in the browser console for any page assets

---

## 2. Content

- [ ] Hero headline and supporting copy visible above the fold on desktop (≥ 1280px)
- [ ] Hero headline and CTAs visible above the fold on mobile (375px)
- [ ] Primary CTA ("Book a Free Call") links to the correct Calendly/Cal.com URL
- [ ] Secondary CTA ("Get a Free Website Audit") scrolls to the contact section
- [ ] Jatin Mishra email address in the nav Email Me button is correct
- [ ] No placeholder text visible on any page (no `TODO`, `PLACEHOLDER`, `EXAMPLE`)
- [ ] No visible em dashes in any copy
- [ ] No "we" / "our team" / agency language in any visible copy

---

## 3. Contact Form

- [ ] Contact form is visible on the homepage
- [ ] Submit the form with a test message
- [ ] Submission appears in the Netlify dashboard under **Forms → contact**
- [ ] Email notification received at `jatinmsd07@gmail.com` (configure in Netlify → Forms → contact → Notifications)
- [ ] Form shows a success state after submission
- [ ] Form shows an error state on network failure (graceful degradation)

---

## 4. SEO & Metadata

- [ ] `<title>` tag is correct: `Jatin Mishra - Freelance Website & Business Consulting`
- [ ] `<meta name="description">` is present
- [ ] `<link rel="canonical">` points to the production URL
- [ ] Open Graph title, description, and image (`/og-image.png`) are present
- [ ] Test OG preview at [opengraph.xyz](https://www.opengraph.xyz) or the Facebook Sharing Debugger
- [ ] JSON-LD structured data is present (check in browser DevTools → Elements → `<script type="application/ld+json">`)
- [ ] Sitemap lists the correct production URLs (check `/sitemap.xml`)
- [ ] `robots.txt` sitemap pointer uses the production domain

---

## 5. Security Headers

Open DevTools → Network → select the main document → Headers tab.  
Verify these response headers are present:

| Header | Expected Value |
|--------|---------------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `Content-Security-Policy` | starts with `default-src 'self'` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), ...` |

---

## 6. Performance

Run Lighthouse in Chrome DevTools (Incognito window, no extensions):

- [ ] Performance ≥ 90 (mobile)
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95

Common issues to fix if scores are low:
- Images not in WebP/AVIF format (already configured in `next.config.ts`)
- Render-blocking resources
- Missing alt text

---

## 7. Browser & Device Testing

- [ ] Chrome (latest) — desktop
- [ ] Safari (latest) — desktop
- [ ] Firefox (latest) — desktop
- [ ] Chrome — mobile (Android)
- [ ] Safari — mobile (iOS)
- [ ] Test at 375px, 768px, 1280px viewport widths

---

## 8. Accessibility

- [ ] Keyboard navigation: Tab through the page — all interactive elements reachable
- [ ] Skip to main content link visible on focus
- [ ] Focus rings visible on all interactive elements
- [ ] Screen reader: headings follow logical order (h1 → h2 → h3)
- [ ] All images have `alt` text (decorative images have `alt=""`)

---

## 9. Final Sign-Off

| Check | Result | Date |
|-------|--------|------|
| Availability | | |
| Content | | |
| Contact form | | |
| SEO & metadata | | |
| Security headers | | |
| Lighthouse scores | | |
| Browser testing | | |
