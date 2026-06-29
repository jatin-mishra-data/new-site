# Pre-Launch Checklist

Complete every item before pointing a real domain at this site.  
Mark each item `[x]` when done. Track overall status in [launch-status.md](launch-status.md).

---

## 1. Code Readiness

- [ ] All placeholder values replaced (see [env-vars.md](env-vars.md) and below)
- [ ] `siteConfig.bookingUrl` in `data/site.ts` updated from `/#contact` to real Calendly/Cal.com URL
- [ ] `siteConfig.email` confirmed correct (`jatinmsd07@gmail.com`)
- [ ] LinkedIn URL in `app/layout.tsx` JSON-LD `sameAs` confirmed correct
- [ ] OG image (`public/og-image.png`) exists and is 1200×630 px
- [ ] `public/favicon.svg` exists and renders correctly
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run build` completes without errors locally (requires `NEXT_PUBLIC_SITE_URL` set)

---

## 2. Environment Variables

- [ ] `NEXT_PUBLIC_SITE_URL` set to the production domain (e.g. `https://jatinmishra.com`)
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set to the Formspree form ID (e.g. `xpzgkabj`)

See [env-vars.md](env-vars.md) for full details.

---

## 3. Formspree

- [ ] Formspree account created at formspree.io
- [ ] Form created and form ID copied
- [ ] Allowed origin set to the production domain
- [ ] Test submission received at `jatinmsd07@gmail.com`

See [formspree.md](formspree.md) for setup steps.

---

## 4. Netlify Deployment

- [ ] Netlify account connected to the Git repository
- [ ] Build command set: `npm run build`
- [ ] Publish directory set: `.next`
- [ ] Node version set: `20`
- [ ] Both env vars added in Netlify dashboard
- [ ] Deploy triggered and succeeded (green deploy)

See [netlify.md](netlify.md) for setup steps.

---

## 5. Domain & DNS

- [ ] Domain purchased and accessible
- [ ] Netlify custom domain added and verified
- [ ] DNS A/CNAME records updated at registrar
- [ ] DNS propagation confirmed (24–48 hours)
- [ ] SSL certificate issued and active (Netlify auto-provisions via Let's Encrypt)
- [ ] `https://` loads without certificate warnings

See [domain-dns.md](domain-dns.md) for setup steps.

---

## 6. Post-Launch Validation

- [ ] Homepage loads on production URL
- [ ] `/solutions` page loads
- [ ] Contact form submits successfully
- [ ] Booking CTA links to correct Calendly/Cal.com URL
- [ ] `/sitemap.xml` returns valid XML with correct production URLs
- [ ] `/robots.txt` returns correct rules pointing to the sitemap
- [ ] OG preview correct (test with [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Lighthouse Performance score ≥ 90 (mobile)
- [ ] No console errors in production

See [post-launch-validation.md](post-launch-validation.md) for full validation steps.

---

## 7. SEO

- [ ] Google Search Console property added and verified
- [ ] Sitemap submitted to Google Search Console
- [ ] Bing Webmaster Tools property added (optional but recommended)

See [seo-setup.md](seo-setup.md) for setup steps.

---

## Sign-Off

| Area | Owner | Date |
|------|-------|------|
| Code readiness | | |
| Env vars | | |
| Formspree | | |
| Netlify deploy | | |
| Domain & SSL | | |
| Post-launch validation | | |
| SEO setup | | |
