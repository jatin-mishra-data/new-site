# Troubleshooting Guide

---

## Build Fails: `NEXT_PUBLIC_SITE_URL must be set in production`

**Cause:** The `NEXT_PUBLIC_SITE_URL` env var is missing in the Netlify build environment.

**Fix:**
1. Go to **Netlify → Site Settings → Environment variables**.
2. Add `NEXT_PUBLIC_SITE_URL` with the production domain (e.g. `https://jatinmishra.com`).
3. Trigger a new deploy.

---

## Build Fails: TypeScript Error

**Cause:** A recent code change introduced a type error.

**Fix:**
1. Run `npx tsc --noEmit` locally.
2. Fix all reported errors.
3. Commit and push — Netlify retries the build.

---

## Contact Form Submissions Not Arriving

**Possible causes:**

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Form shows error after submit | `NEXT_PUBLIC_FORMSPREE_ID` missing or wrong | Check env var in Netlify; redeploy |
| Form submits (shows success) but no email arrives | Formspree allowed origins not set | Add production domain in Formspree → form Settings → Allowed Domains |
| Email goes to spam | Formspree email marked as spam | Check spam folder; mark as not spam; add Formspree sender to contacts |
| Form not visible on page | `NEXT_PUBLIC_FORMSPREE_ID` not set | Env var is required to show the form |

---

## SSL Certificate Not Issued

**Cause:** DNS has not fully propagated yet, or DNS records are incorrect.

**Fix:**
1. Check propagation at [dnschecker.org](https://dnschecker.org).
2. Confirm the DNS records in your registrar match what Netlify shows in **Domain management**.
3. Wait up to 48 hours for full propagation.
4. In Netlify **Domain management**, click **Renew certificate** after DNS is confirmed.

---

## Site Loads on Netlify Subdomain but Not on Custom Domain

**Cause:** DNS not propagated or wrong records.

**Fix:**
1. Verify DNS records match Netlify's requirements (A record or CNAME for `www`).
2. Check propagation at [dnschecker.org](https://dnschecker.org).
3. If using Netlify DNS (Option A), confirm nameservers at registrar have been updated.

---

## Canonical URLs / OG Tags Show Wrong Domain

**Cause:** `NEXT_PUBLIC_SITE_URL` was set to a preview URL, localhost, or empty.

**Fix:**
1. Set `NEXT_PUBLIC_SITE_URL` to the correct production domain in Netlify env vars.
2. Trigger a redeploy — the value is baked in at build time, existing deploys are not updated automatically.

---

## Images Not Loading (404)

**Cause:** Image file is missing from `public/images/`.

**Fix:**
1. Confirm the file exists locally in `public/images/`.
2. Commit and push the image file — Next.js static assets must be committed to git.
3. Verify the path in the `Image` component matches the file exactly (case-sensitive on Linux).

---

## Booking CTA Links to `/#contact`

**Cause:** `siteConfig.bookingUrl` in `data/site.ts` was not updated from the placeholder.

**Fix:**
1. Edit `data/site.ts`:
   ```ts
   bookingUrl: "https://cal.com/jatinmishra/free-call",
   ```
2. Commit and push.

---

## HSTS Lock-Out (Browser Refuses HTTP Connection)

**Cause:** A user visited the site over HTTPS while HSTS was active, and the site is now unreachable (e.g. SSL lapsed or domain changed).

**Fix for affected user:**
1. In Chrome: go to `chrome://net-internals/#hsts`, enter the domain, click **Delete domain security policies**.
2. In Firefox: clear the HSTS cache via History settings.

**Prevention:** Never let the SSL certificate lapse while the site is live. Netlify auto-renews Let's Encrypt certificates — ensure the domain remains pointed at Netlify.

---

## `/sitemap.xml` Returns Localhost URLs

**Cause:** `NEXT_PUBLIC_SITE_URL` was not set (fallback used `localhost:3000`) or was set to the wrong value at build time.

**Fix:** Correct the env var in Netlify and trigger a redeploy.

---

## Lighthouse Performance Score Below 90

Common causes and fixes:

| Issue | Fix |
|-------|-----|
| Large images | Compress images with Squoosh or TinyPNG; ensure `.webp` format |
| Missing `sizes` attribute on `<Image>` | Add appropriate `sizes` prop to Next.js `<Image>` components |
| Render-blocking resources | Next.js handles this automatically — ensure no inline `<script>` tags added manually |
| Slow TTFB | Netlify CDN serves globally — TTFB should be <200ms from major cities |
