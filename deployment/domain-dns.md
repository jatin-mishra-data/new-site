# Domain, DNS, and SSL Setup

---

## Overview

1. Add the custom domain to Netlify.
2. Update DNS records at your domain registrar to point to Netlify.
3. Wait for propagation (up to 48 hours).
4. Netlify auto-provisions a free SSL certificate via Let's Encrypt.

---

## Step 1 — Add Custom Domain in Netlify

1. In Netlify, go to **Site Settings → Domain management → Add custom domain**.
2. Enter your domain (e.g. `jatinmishra.com`).
3. Netlify will show you the required DNS records.

---

## Step 2 — Update DNS at Your Registrar

Netlify provides two options:

### Option A — Use Netlify DNS (Recommended)

Change your domain's nameservers at your registrar to Netlify's nameservers.  
Netlify then manages all DNS records for you, including automatic SSL renewal.

Netlify nameservers look like:
```
dns1.p06.nsone.net
dns2.p06.nsone.net
dns3.p06.nsone.net
dns4.p06.nsone.net
```
The exact values are shown in **Domain Settings → Netlify DNS** after adding the domain.

### Option B — External DNS (Keep Current Registrar DNS)

Add these records at your registrar:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | Netlify load balancer IP (shown in Netlify dashboard) |
| `CNAME` | `www` | `your-site-name.netlify.app` |

> Netlify's load balancer IP is stable but confirm the current value in your dashboard.

---

## Step 3 — Set the Primary Domain

In Netlify **Domain management**:
- Set the primary domain to `https://jatinmishra.com` (or your chosen domain).
- Enable **Force HTTPS** to redirect all `http://` traffic to `https://`.
- Optionally set `www` to redirect to the apex domain (or vice versa) — be consistent.

---

## Step 4 — SSL Certificate

Netlify automatically provisions a Let's Encrypt certificate once DNS propagates.  
This usually takes a few minutes to a few hours after DNS propagates.

Verify SSL:
- Open `https://yourdomain.com` in a browser.
- Click the padlock icon — certificate should show as valid, issued by Let's Encrypt.
- No browser warnings should appear.

---

## Step 5 — Update `NEXT_PUBLIC_SITE_URL`

Once the domain is confirmed live, verify `NEXT_PUBLIC_SITE_URL` in Netlify environment variables matches exactly (including `https://`, no trailing slash).

Trigger a redeploy after confirming the domain so the sitemap and canonical URLs reflect the correct domain.

---

## DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours depending on TTL settings and your ISP's resolver cache.

Check propagation status at [dnschecker.org](https://dnschecker.org).

---

## HSTS Note

The app sets `Strict-Transport-Security: max-age=31536000; includeSubDomains` via `next.config.ts`. This means:
- Browsers will refuse to load the site over HTTP for 12 months after the first HTTPS visit.
- Ensure HTTPS is working correctly before real users visit — HSTS errors require manual browser cache clearing to fix per-user.
