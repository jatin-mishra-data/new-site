# Content Audit

**Content Audit by GLM 5.2**:

I have all the copy needed. Here is the content audit.

\#\# Content Audit — Jatin Mishra Landing Page

\#\#\# Hero  
\*\*PASS\*\* — Mostly  
\- \*\*Issue:\*\* Trust strip claims "9 sites shipped" and "15+ projects in pipeline" — these are stated as facts but \`PROJECT\_RULES.md\` bans invented metrics. Status unverified; risk of dishonest claim.  
\- \*\*Issue:\*\* "Bank of America risk-analytics background" is repeated in Hero, About, and services — repetitive across the page, weakens impact.  
\- \*\*Recommendation:\*\* Verify the 9/15+ numbers against \`PROJECT\_RULES.md\` §11; if unverifiable, soften to "ex-Bank of America · local-business focus · fast turnaround." Lead with the differential once, not three times.

\#\#\# Services  
\*\*PASS\*\*  
\- \*\*Issue:\*\* Service \#2 title "SaaS / Booking / Payments / Enquiry Integration" is long and slash-heavy; reads as a list, not a service name.  
\- \*\*Issue:\*\* "from someone who worked in bank-grade risk analytics" injects first-person credential into a feature list — voice inconsistent (services are otherwise third-person descriptive).  
\- \*\*Recommendation:\*\* Rename \#2 to "Integrations & Booking" with the slash-list moved into the description. Drop the bank-grade line here — it already lives in About/Hero.

\#\#\# Packages  
\*\*PASS\*\*  
\- \*\*Issue:\*\* Every tier shows "Quote after free call" / "Custom quote" — no anchor pricing. Reduces scannability and trust; visitors can't self-qualify.  
\- \*\*Issue:\*\* Starter tagline "launched without the wait" implies a speed claim with no basis shown.  
\- \*\*Recommendation:\*\* Add starting-from anchor ranges even as placeholders (e.g., "from ₹X — final quote on call") per \`PROJECT\_RULES.md\` placeholder rule. Soften the "without the wait" line to "launched quickly."

\#\#\# About  
\*\*PASS\*\*  
\- \*\*Issue:\*\* "$500B+ of risk data" — unverified metric; potential honesty violation under §11.  
\- \*\*Issue:\*\* "4–5 businesses advised" is a range presented as a stat — ambiguous and weak; reads as filler.  
\- \*\*Issue:\*\* "I'm not a typical web freelancer" is a mild negative-positioning cliché.  
\- \*\*Recommendation:\*\* Verify $500B or replace with neutral "large-scale risk data." Cut "4–5" or make it a concrete number. Reword opener to lead with the differentiator, not the negation.

\#\#\# Contact  
\*\*PASS\*\*  
\- \*\*Issue:\*\* Two CTAs ("Book a Free Call" \+ "Get a Free Website Audit") sit side by side, and the audit button just scrolls to the form — no actual audit offer. Misleading CTA.  
\- \*\*Issue:\*\* "I'll get back personally — usually within a day or two" then success message repeats the same phrasing verbatim — redundant on conversion.  
\- \*\*Issue:\*\* Email block may render as "Coming soon" placeholder; combined with \`bookingUrl: "\#contact"\` still a TODO, the section ships incomplete and hurts trust.  
\- \*\*Recommendation:\*\* Either remove the audit CTA or relabel it "Tell me about your project" until the \`/audit\` route exists. Deduplicate the success copy. Ensure \`bookingUrl\` and email are real before launch.

\---

\#\#\# Content Score: 6.5 / 10

\#\#\# Top copy improvements  
1\. \*\*Audit every metric against §11 honesty rule\*\* — 9 sites, 15+ pipeline, $500B, 4–5 advised. Verify or remove.  
2\. \*\*De-dupe the Bank of America credential\*\* — state it once (About), reference it subtly elsewhere.  
3\. \*\*Fix the misleading "Free Website Audit" CTA\*\* — it currently scrolls to a generic form; relabel or build the route.  
4\. \*\*Add anchor pricing to Packages\*\* — even placeholder ranges drive self-qualification and trust.  
5\. \*\*Tighten Services \#2 title\*\* and remove the first-person credential line from the descriptive body for voice consistency.

Stopping here.

# Accessibility Audit

**Accessibility → DeepSeek V4 Flash Free** 

Now I have all the data I need. Here's the full WCAG accessibility audit.

\---

\#\# WCAG Accessibility Audit — \`new-site\` (Jatin Mishra)

| \# | Severity | Issue | Recommendation |  
|---|----------|-------|---------------|  
| 1 | \*\*High\*\* | \*\*Primary button text contrast fails WCAG AA.\*\* White (\`\#FFFFFF\`) on \`\#3B82F6\` (indigo-500) gives \~3.76:1 — needs 4.5:1 for normal text. Affects all "Book a Free Call" and "Send Message" buttons at 16–17px. | Darken the button background or lighten text to reach ≥4.5:1. Suggested: tint \`\#3B82F6\` → \`\#2563EB\` (contrast \~5.1:1) or use \`\#E0E7FF\` text. |  
| 2 | \*\*High\*\* | \*\*No skip-to-content link.\*\* Keyboard and screen-reader users must tab through every nav link before reaching main content. | Add a hidden skip link as first focusable element inside \`\<body\>\` targeting \`\#main-content\`. |  
| 3 | \*\*High\*\* | \*\*Mobile navigation completely hidden.\*\* Nav links use \`hidden md:flex\` — no hamburger, no fallback. On \<768px screens, keyboard/screen-reader users cannot access any section link. | Add a mobile menu toggle (\`aria-expanded\`, \`aria-controls\`) that reveals the link list. |  
| 4 | \*\*Medium\*\* | \*\*"Tools I work with" uses \`\<p\>\` not a heading.\*\* Screen readers see it as plain text, breaking the heading hierarchy — they cannot jump directly to or navigate by this section. | Change \`\<p\>\` → \`\<h2\>\` with the same styling, or add \`role="heading" aria-level="2"\`. |  
| 5 | \*\*Low\*\* | \*\*Nav home link \`href="\#"\`.\*\* Scrolls to top but provides no meaningful target for keyboard or screen-reader users to "skip" to page content. | Change to \`href="/"\` (or ideally \`href="\#main-content"\` for a skip-in-place pattern). |  
| 6 | \*\*Low\*\* | \*\*Redundant \`role="list"\` on \`\<ul\>\`.\*\* Native \`\<ul\>\` already has list semantics. Some screen readers announce "list" twice. | Remove \`role="list"\` from \`\<ul\>\` in Nav (and any other native list). |  
| 7 | \*\*Low\*\* | \*\*Social link touch targets.\*\* Social links in Contact use inline text size — may fall below 44×44px WCGA minimum on small screens. | Add min touch target sizing: \`min-h-\[44px\] min-w-\[44px\]\` or equivalent padding. |

\---

\#\#\# Positive Findings

\- \`lang="en"\` on \`\<html\>\` ✓  
\- \`\<h1\>\`–\`\<h2\>\`–\`\<h3\>\` hierarchy correct (except Tools section) ✓  
\- \`:focus-visible\` ring styled with \`--accent-1\` \+ box-shadow ✓  
\- Mouse-only focus ring suppressed with \`:focus:not(:focus-visible)\` ✓  
\- Form \`\<label\>\` elements use \`htmlFor\`, inputs use \`aria-describedby\` \+ \`aria-invalid\` ✓  
\- Error messages use \`role="alert"\` ✓  
\- Decorative elements (aurora, glass cards) use \`aria-hidden="true"\` ✓  
\- Honeypot field hidden with \`tabIndex={-1} aria-hidden="true"\` ✓  
\- \`@media (prefers-reduced-motion: reduce)\` globally suppresses animations ✓  
\- Footer "Back to top" link targets \`\#main-content\` ✓  
\- \`\<main\>\` element present with \`id="main-content"\` ✓  
\- Nav and footer nav use \`aria-label\` ✓

\---

\#\#\# Contrast Details (key pairs)

| Foreground | Background | Ratio | Verdict |  
|-----------|-----------|-------|---------|  
| \`\#F5F5F7\` text-primary | \`\#080B14\` bg-base | 18.5:1 | AAA |  
| \`\#A1A1AA\` text-muted | \`\#080B14\` bg-base | 8.0:1 | AAA |  
| \`\#FFFFFF\` on primary btn | \`\#3B82F6\` gradient | 3.76:1 | \*\*FAIL AA\*\* |  
| \`\#3B82F6\` accent-1 | \`\#080B14\` bg-base | 5.4:1 | AA |  
| \`\#F87171\` error | \`\#080B14\` bg-base | 7.3:1 | AAA |

\---

\#\#\# Accessibility Score

\*\*77 / 100\*\*

\#\#\# WCAG Compliance Summary

| Level | Conformance | Key Gaps |  
|-------|-----------|----------|  
| \*\*A\*\* | \~80% | \*\*Fail:\*\* No skip link (2.4.1), mobile nav hidden (2.1.1) |  
| \*\*AA\*\* | \~75% | \*\*Fail:\*\* Button text contrast (1.4.3), missing heading in Tools (1.3.1) |  
| \*\*AAA\*\* | \~85% | Passes text contrast for body/muted text; button contrast already fails AA |

Shall I proceed with fixing the accessibility issues? Here's the plan:

\#\#\# Fix Plan (by priority)

| \# | Task | Files | Effort |  
|---|------|-------|--------|  
| 1 | \*\*Fix primary button contrast\*\* — change button bg from \`\#3B82F6\` → \`\#2563EB\` (or tint the gradient) | \`app/globals.css\` (primary-btn gradient stops) | 1m |  
| 2 | \*\*Add skip-to-content link\*\* as first focusable element in layout | \`app/layout.tsx\` | 2m |  
| 3 | \*\*Add mobile menu toggle\*\* — hamburger button that reveals nav links on \<768px | \`components/layout/Nav.tsx\` | 15m |  
| 4 | \*\*Fix Tools heading\*\* — change \`\<p\>\` → \`\<h2\>\` (or add \`role="heading"\`) | \`components/sections/Tools.tsx\` | 1m |  
| 5 | \*\*Fix nav home link\*\* — change \`href="\#"\` → \`href="/"\` | \`components/layout/Nav.tsx\` | 1m |  
| 6 | \*\*Remove redundant \`role="list"\`\*\* from \`\<ul\>\` elements | \`components/layout/Nav.tsx\`, \`components/sections/Footer.tsx\` | 1m |  
| 7 | \*\*Add min touch targets\*\* to social links in Contact section | \`components/sections/Contact.tsx\` | 2m |

\#\#\# Verification  
\- Rebuild (\`npm run build\`) and reload \`http://localhost:3000\`  
\- Quick keyboard tab-through to verify skip link \+ mobile nav  
\- Re-verify contrast with dev tools

Total: \~25 min of work. Want me to go ahead?

# Security Audit

**Security → Qwen3.6 Plus** 

\#\# Security Audit Report

\---

\#\#\# 1\. XSS — Unsanitized Form Data in Error Display  
\*\*Severity:\*\* Medium-High  
\*\*Issue:\*\* \`Contact.tsx:27\` — \`FieldErr\` renders \`msg\` directly via JSX. While current messages are hardcoded strings, the error state is derived from client-side validation only. If validation logic ever incorporates user input into error messages, stored XSS becomes possible.  
\*\*Risk:\*\* Low currently (hardcoded strings), but no defense-in-depth.  
\*\*Recommendation:\*\* Keep error messages as constant strings only. Never interpolate user input into error text. Add a comment guard or use \`String(msg)\` coercion.

\---

\#\#\# 2\. Missing Security Headers / CSP  
\*\*Severity:\*\* High  
\*\*Issue:\*\* \`next.config.ts:3-5\` — No security headers configured. No Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Strict-Transport-Security.  
\*\*Risk:\*\* Site is vulnerable to clickjacking, MIME sniffing, man-in-the-middle attacks, and unrestricted script injection.  
\*\*Recommendation:\*\* Add headers in \`next.config.ts\`:  
\`\`\`ts  
headers: async () \=\> \[{  
  source: '/(.\*)',  
  headers: \[  
    { key: 'X-Content-Type-Options', value: 'nosniff' },  
    { key: 'X-Frame-Options', value: 'DENY' },  
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },  
    { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formspree.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' fonts.gstatic.com; connect-src 'self' https://formspree.io; frame-ancestors 'none';" },  
  \],  
}\]  
\`\`\`

\---

\#\#\# 3\. No HSTS (HTTPS Enforcement)  
\*\*Severity:\*\* High  
\*\*Issue:\*\* No \`Strict-Transport-Security\` header. The site handles lead-generation form submissions; without HSTS, traffic is vulnerable to downgrade attacks.  
\*\*Risk:\*\* MITM interception of form data on initial HTTP request.  
\*\*Recommendation:\*\* Add \`Strict-Transport-Security: max-age=31536000; includeSubDomains\` header once HTTPS is enforced.

\---

\#\#\# 4\. Client-Side Form Submission — Endpoint Exposure  
\*\*Severity:\*\* Medium  
\*\*Issue:\*\* \`Contact.tsx:9-11\` — \`NEXT\_PUBLIC\_FORMSPREE\_ID\` is exposed in the client bundle. The Formspree endpoint URL is constructed client-side and visible in browser DevTools/network tab.  
\*\*Risk:\*\* Anyone can scrape the form ID and spam Formspree directly, bypassing the frontend. Formspree has built-in spam protection, but this is still an attack surface.  
\*\*Recommendation:\*\* Acceptable for Formspree (designed for client-side use), but add rate limiting awareness. Consider a serverless API route (\`/api/contact\`) as a proxy to hide the endpoint and add server-side validation/rate limiting.

\---

\#\#\# 5\. No Server-Side Validation  
\*\*Severity:\*\* Medium  
\*\*Issue:\*\* \`Contact.tsx:40-48\` — All validation is client-side only. A malicious actor can bypass the React form entirely and POST directly to Formspree with arbitrary data.  
\*\*Risk:\*\* Spam, injection of malicious payloads into Formspree dashboard, email flooding.  
\*\*Recommendation:\*\* Route submissions through a Next.js API route (\`app/api/contact/route.ts\`) with server-side validation (e.g., Zod schema) before forwarding to Formspree.

\---

\#\#\# 6\. Honeypot — Insufficient Spam Protection  
\*\*Severity:\*\* Low-Medium  
\*\*Issue:\*\* \`Contact.tsx:172-179\` — Honeypot field uses \`tabIndex={-1}\` and \`className="hidden"\`, but sophisticated bots can detect and skip hidden fields. No rate limiting, CAPTCHA, or time-based validation.  
\*\*Risk:\*\* Determined spammers can bypass the honeypot.  
\*\*Recommendation:\*\* Add a time-based check (reject submissions under 2 seconds), consider Cloudflare Turnstile or hCaptcha for production. Add \`autocomplete="off"\` to all fields.

\---

\#\#\# 7\. External Dependency — Formspree Trust Boundary  
\*\*Severity:\*\* Low  
\*\*Issue:\*\* The entire contact form depends on Formspree as a third-party service. No fallback if Formspree is down or compromised.  
\*\*Risk:\*\* Service outage \= lost leads. If Formspree is compromised, form data could be intercepted.  
\*\*Recommendation:\*\* Acceptable for Phase 1\. Document the dependency. Consider adding email fallback (already partially done with \`mailto:\` link on error).

\---

\#\#\# 8\. No Rate Limiting  
\*\*Severity:\*\* Medium  
\*\*Issue:\*\* No rate limiting on form submissions. Client can fire unlimited POST requests to Formspree.  
\*\*Risk:\*\* Formspree quota exhaustion, email flooding, potential cost impact.  
\*\*Recommendation:\*\* Implement client-side debounce (disable button during submission — already done). Add server-side rate limiting via API route or Cloudflare/Netlify edge rules.

\---

\#\#\# 9\. Environment Variables — Build-Time Exposure  
\*\*Severity:\*\* Low (by design)  
\*\*Issue:\*\* \`NEXT\_PUBLIC\_FORMSPREE\_ID\` and \`NEXT\_PUBLIC\_SITE\_URL\` are prefixed with \`NEXT\_PUBLIC\_\`, meaning they are inlined into the client bundle at build time.  
\*\*Risk:\*\* These are intentionally public. No secrets are exposed. \`.env.example\` correctly documents this. No issue found.  
\*\*Recommendation:\*\* No action needed. Good practice already followed.

\---

\#\#\# 10\. External Scripts — None Found  
\*\*Severity:\*\* N/A  
\*\*Issue:\*\* No external \`\<script\>\` tags found in \`layout.tsx\` or \`Contact.tsx\`. Google Fonts are loaded via \`next/font/google\` (self-hosted at build time).  
\*\*Risk:\*\* None.  
\*\*Recommendation:\*\* No action needed.

\---

\#\#\# 11\. Dependency Risks  
\*\*Severity:\*\* Low  
\*\*Issue:\*\* \`package.json\` — Minimal dependencies: \`next@16.2.9\`, \`react@19.2.4\`, \`react-dom@19.2.4\`. No known vulnerable packages. No lockfile audit performed.  
\*\*Risk:\*\* Low. Always verify with \`npm audit\` before deployment.  
\*\*Recommendation:\*\* Run \`npm audit\` before production deploy. Pin exact versions or use \`package-lock.json\`.

\---

\#\#\# 12\. Client-Side Data Exposure  
\*\*Severity:\*\* Low  
\*\*Issue:\*\* \`siteConfig.email\` and \`socials\` data are imported from \`/data/\` and rendered client-side. Email is conditionally hidden if placeholder.  
\*\*Risk:\*\* Minimal. Email is intended to be public contact info.  
\*\*Recommendation:\*\* No action needed.

\---

\#\# Security Score: \*\*6/10\*\*

\---

\#\#\# Top Security Improvements

1\. \*\*Add security headers \+ CSP\*\* in \`next.config.ts\` (HSTS, X-Frame-Options, CSP, X-Content-Type-Options)  
2\. \*\*Create server API route\*\* (\`/api/contact\`) to proxy form submissions with server-side validation and rate limiting  
3\. \*\*Add server-side validation\*\* (Zod schema) to prevent malformed/malicious submissions  
4\. \*\*Strengthen spam protection\*\* — add time-based validation and consider CAPTCHA/Turnstile  
5\. \*\*Run \`npm audit\`\*\* before production deployment to verify dependency safety

# Performance Audit

**Performance → MiniMax M2.7** 

\#\# Performance Audit Report

\---

\#\#\# CRITICAL

\*\*Problem:\*\* Aurora background blobs use \`filter: blur(140px)\` \+ 20-26s CSS animations  
\*\*Why:\*\* Large blur radius \+ continuous transform animations (translate \+ scale) run on the main thread, recalculating paint/layout every frame across the entire viewport. 4 blobs \= 4 expensive composited layers.  
\*\*Recommendation:\*\* Replace with a single static radial gradient background. If animation is essential, use \`will-change: transform\` \+ \`translate3d\` to promote to GPU, or reduce blur to 40px max and remove continuous animation.

\*\*Problem:\*\* No \`next/image\` optimization on work screenshots  
\*\*Why:\*\* \`public/work/\*.png\` are served as raw files — no WebP/AVIF conversion, no lazy loading, no size optimization. These are LCP elements when in viewport.  
\*\*Recommendation:\*\* Move images to \`app/\` directory, use \`\<Image\>\` with \`sizes\`, \`quality\`, and \`priority\` props.

\*\*Problem:\*\* \`next.config.ts\` is empty — zero image optimization config  
\*\*Why:\*\* Out-of-the-box Next.js image optimization is disabled unless configured.  
\*\*Recommendation:\*\*  
\`\`\`ts  
const nextConfig: NextConfig \= {  
  images: { formats: \["image/avif", "image/webp"\] },  
};  
\`\`\`

\---

\#\#\# HIGH

\*\*Problem:\*\* Google Fonts — Poppins 4 weights \+ Inter 1 weight, no \`display\` swap  
\*\*Why:\*\* \`next/font/google\` applies \`font-display: swap\` by default, but loading 4 extra Poppins weights (500,600,700) that may not be used on first render delays FCP. Inter's default weight may not cover all usage.  
\*\*Recommendation:\*\* Subset to only required weights. Verify actual weight usage in design tokens (\`--font-heading\` uses 600/700 only) — remove 400/500 Poppins.

\*\*Problem:\*\* \`backdrop-filter: blur(12px)\` repeated on 3 glass cards \+ glow  
\*\*Why:\*\* Each \`backdrop-filter\` creates a new stacking context and is expensive on repaint. Combined with aurora blur layers behind them, this creates 7+ composited layers in the hero alone.  
\*\*Recommendation:\*\* Use a single glass container instead of stacked individual glass divs. Consider reducing blur to 8px.

\---

\#\#\# MEDIUM

\*\*Problem:\*\* SVG grain texture as inline data URI  
\*\*Why:\*\* Rendered on every paint. At 128×128 repeating over full viewport this is mildly expensive. Small risk.  
\*\*Recommendation:\*\* Convert to a single tiny noise texture and use \`background-repeat: repeat; background-size: auto\` — the current approach is acceptable at this size.

\*\*Problem:\*\* Button \`hover:-translate-y-0.5\` \+ \`hover:shadow-lg\` on primary CTA  
\*\*Why:\*\* Triggers layout recalc on hover. \`translateY\` is transform-only (GPU) but \`shadow-lg\` requires paint.  
\*\*Recommendation:\*\* Use \`will-change: transform\` on the button, or move shadow to a pseudo-element.

\*\*Problem:\*\* \`glass\` utility has both \`backdrop-filter\` and \`-webkit-backdrop-filter\`  
\*\*Why:\*\* Redundant in modern browsers (both applied). Doubles the filter work.  
\*\*Recommendation:\*\* Keep only \`backdrop-filter: blur(12px)\` — all supported browsers now use the unprefixed version.

\---

\#\#\# LOW

\*\*Problem:\*\* 206-line Hero component with inline styles  
\*\*Why:\*\* Inline styles bypass CSS optimization. Harder for browser to cache/compress.  
\*\*Recommendation:\*\* Move all inline \`style={}\` objects to CSS classes or CSS custom properties.

\*\*Problem:\*\* \`next.config.ts\` has no bundle analysis, compression, or powerpack config  
\*\*Why:\*\* No visibility into bundle size risks.  
\*\*Recommendation:\*\* Add \`bundleAnalyzer\` plugin when ready to audit.

\---

\#\# Performance Score: \*\*67/100\*\*

\*\*Largest performance risks:\*\*  
1\. Aurora blob animations with large blur filters blocking main thread  
2\. Unoptimized work screenshots (no WebP, no lazy loading)  
3\. 4 Google Fonts weights loaded, only 1–2 needed for above-the-fold  
4\. Multiple overlapping \`backdrop-filter\` layers in Hero glass card stack

# Technical Audit

**Technical → Kimi K2.7 Code** 

\# Technical Architecture Audit — Next.js 16 App Router

\#\# Passes

| Area | Verdict | Notes |  
|---|---|---|  
| \*\*Framework version & deps\*\* | PASS | Next.js 16.2.9, React 19.2.4, Tailwind CSS v4. Minimal, focused dependency tree. |  
| \*\*Server-first architecture\*\* | PASS | \`app/page.tsx\`, \`layout.tsx\`, and all section components except \`Contact\` are Server Components. |  
| \*\*Client boundary\*\* | PASS | Only \`Contact.tsx\` correctly declares \`"use client"\` because it needs form state. |  
| \*\*Next.js fonts\*\* | PASS | \`Poppins\` and \`Inter\` loaded via \`next/font/google\` with CSS variables. |  
| \*\*Tailwind v4 setup\*\* | PASS | \`@import "tailwindcss"\`, custom \`@utility\` tokens, dark color-scheme, reduced-motion support. |  
| \*\*TypeScript strict mode\*\* | PASS | \`strict: true\`, path aliases configured, interfaces centralized in \`lib/types.ts\`. |  
| \*\*Component composition\*\* | PASS | \`page.tsx\` is a clean composition of section components; reusable UI primitives exist. |  
| \*\*Hydration safety\*\* | PASS | No \`dangerouslySetInnerHTML\`, no browser-only APIs in server components. |

\---

\#\# Issues

\#\#\# 1\. Button component cannot render \`type="submit"\`  
\- \*\*Severity:\*\* Medium  
\- \*\*Problem:\*\* \`Button.tsx\` always renders \`\<button type="button"\>\`, so \`Contact.tsx\` had to use a raw \`\<button\>\` with duplicated styles for the form.  
\- \*\*Why it matters:\*\* Style duplication and divergence risk. If the primary button design changes, the form submit button will drift out of sync.  
\- \*\*Exact file:\*\* \`components/ui/Button.tsx\`, \`components/sections/Contact.tsx\`  
\- \*\*Recommendation:\*\* Add \`type?: "button" | "submit" | "reset"\` to \`Button.tsx\` and pass it through. Then replace the raw button in \`Contact.tsx\`.

\#\#\# 2\. Contact form duplicates Button styling  
\- \*\*Severity:\*\* Medium  
\- \*\*Problem:\*\* A hardcoded \`\<button\>\` in \`Contact.tsx\` replicates the primary variant’s gradient, hover lift, shadow, disabled opacity, and radius.  
\- \*\*Why it matters:\*\* Violates the DRY principle and the “reuse” rule in \`PROJECT\_RULES.md\`.  
\- \*\*Exact file:\*\* \`components/sections/Contact.tsx\` (lines 250–256)  
\- \*\*Recommendation:\*\* Use the shared \`Button\` component once it supports \`type="submit"\`.

\#\#\# 3\. Hero.tsx is oversized  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* 206 lines mixing marketing copy, aurora background markup, and a decorative card-stack visual.  
\- \*\*Why it matters:\*\* Harder to read and maintain; conflicts with the project’s “small components” standard.  
\- \*\*Exact file:\*\* \`components/sections/Hero.tsx\`  
\- \*\*Recommendation:\*\* Extract \`components/ui/AuroraBackground.tsx\` and \`components/ui/HeroVisual.tsx\`.

\#\#\# 4\. Inline SVG icon map in Services  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* Icons are defined as a local \`Record\<string, ReactNode\>\` with a TODO to migrate to \`lucide-react\`.  
\- \*\*Why it matters:\*\* Not reusable; adds noise; the migration path is already acknowledged but unimplemented.  
\- \*\*Exact file:\*\* \`components/sections/Services.tsx\` (lines 7–34)  
\- \*\*Recommendation:\*\* Add \`lucide-react\` and map \`service.icon\` to real components, or create a shared \`Icon.tsx\`.

\#\#\# 5\. Duplicated mobile/desktop timeline markup  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* \`Process.tsx\` contains two full markup trees: one for mobile and one for desktop.  
\- \*\*Why it matters:\*\* Step rendering changes must be made twice; violates maintainability goals.  
\- \*\*Exact file:\*\* \`components/sections/Process.tsx\` (lines 54–113)  
\- \*\*Recommendation:\*\* Use a single responsive layout or extract a \`ProcessStep\` component.

\#\#\# 6\. Static data inline in multiple sections  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* \`steps\`, \`tools\`, \`stats\`, and \`footerLinks\` are declared inside components instead of in \`data/\` files.  
\- \*\*Why it matters:\*\* Inconsistent with the existing \`data/\` pattern; makes content harder to locate and update.  
\- \*\*Exact files:\*\* \`Process.tsx\`, \`Tools.tsx\`, \`About.tsx\`, \`Work.tsx\`, \`Footer.tsx\`  
\- \*\*Recommendation:\*\* Move arrays to \`data/process.ts\`, \`data/tools.ts\`, etc.

\#\#\# 7\. \`package.json\` lacks quality scripts  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* No \`type-check\`, \`lint\`, or \`format\` scripts.  
\- \*\*Why it matters:\*\* No easy way to verify type safety or enforce style in CI.  
\- \*\*Exact file:\*\* \`package.json\`  
\- \*\*Recommendation:\*\* Add at least \`"type-check": "tsc \--noEmit"\`; consider \`eslint\`/\`prettier\`.

\#\#\# 8\. \`next.config.ts\` is empty  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* Default config with no production settings.  
\- \*\*Why it matters:\*\* Deployment target (Netlify), image remotePatterns, and build output settings are undefined.  
\- \*\*Exact file:\*\* \`next.config.ts\`  
\- \*\*Recommendation:\*\* Configure for the deployment target and add \`images.remotePatterns\` if external images are used.

\#\#\# 9\. Redundant \`role="list"\` on \`\<ul\>\`  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* \`Nav.tsx\` adds \`role="list"\` to a native \`\<ul\>\`.  
\- \*\*Why it matters:\*\* Unnecessary ARIA adds noise; \`\<ul\>\` already carries an implicit list role.  
\- \*\*Exact file:\*\* \`components/layout/Nav.tsx\` (line 21\)  
\- \*\*Recommendation:\*\* Remove \`role="list"\`.

\#\#\# 10\. \`Button.tsx\` \`onClick\` signature is restrictive  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* \`onClick?: () \=\> void\` omits the event argument.  
\- \*\*Why it matters:\*\* Prevents standard patterns like \`event.preventDefault()\` or \`event.stopPropagation()\`.  
\- \*\*Exact file:\*\* \`components/ui/Button.tsx\` (line 11\)  
\- \*\*Recommendation:\*\* Use \`React.MouseEventHandler\<HTMLButtonElement\>\`.

\#\#\# 11\. \`Button.tsx\` disabled anchor remains clickable  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* When \`href\` and \`disabled\` are both provided, the rendered \`\<a\>\` gets \`aria-disabled\` but still navigates.  
\- \*\*Why it matters:\*\* Disabled state is not actually enforced for link buttons.  
\- \*\*Exact file:\*\* \`components/ui/Button.tsx\` (lines 45–50)  
\- \*\*Recommendation:\*\* Render a \`\<button\>\` or \`\<span\>\` when \`disabled && href\`, or intercept the click.

\#\#\# 12\. Inline style overload for typographic tokens  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* Sections repeatedly use \`style={{ fontSize: "var(--text-h2)" }}\` etc. instead of Tailwind utilities.  
\- \*\*Why it matters:\*\* Mixes styling approaches and clutters JSX.  
\- \*\*Exact files:\*\* \`Hero.tsx\`, \`Services.tsx\`, \`Process.tsx\`, \`Work.tsx\`, \`Packages.tsx\`, \`About.tsx\`, \`Contact.tsx\`  
\- \*\*Recommendation:\*\* Add \`@utility text-h1\`, \`text-h2\`, \`text-h3\`, \`text-body\`, \`text-small\` in \`globals.css\`.

\#\#\# 13\. \`Work.tsx\` \`Image\` lacks \`sizes\` and \`priority\`  
\- \*\*Severity:\*\* Low  
\- \*\*Problem:\*\* \`next/image\` used without \`sizes\` or \`priority\`.  
\- \*\*Why it matters:\*\* Misses performance optimizations for LCP and responsive images.  
\- \*\*Exact file:\*\* \`components/sections/Work.tsx\` (lines 38–44)  
\- \*\*Recommendation:\*\* Add \`sizes\` based on the grid breakpoints and \`priority\` for above-fold images.

\---

\#\# Technical Score

\*\*7.5 / 10\*\*

Solid, server-first Next.js 16 architecture with clean composition, good TypeScript discipline, and correct Tailwind v4 usage. Score is pulled down mainly by the \`Button\` submit limitation forcing style duplication, the oversized \`Hero.tsx\`, and scattered inline data.

\---

\#\# Top 5 Priorities

1\. \*\*Enable \`type="submit"\` in \`Button.tsx\` and replace the raw button in \`Contact.tsx\`\*\* — fixes the only medium-severity duplication issue.  
2\. \*\*Split \`Hero.tsx\` into smaller components\*\* — extract background and card-stack visuals.  
3\. \*\*Centralize section data in \`data/\` files\*\* — align \`Process\`, \`Tools\`, \`About\`, \`Work\`, and \`Footer\` with the existing data pattern.  
4\. \*\*Add quality scripts and production Next.js config\*\* — \`type-check\`, deployment output, and image domains.  
5\. \*\*Create a reusable icon strategy\*\* — replace the inline SVG map in \`Services.tsx\` with \`lucide-react\` or a shared \`Icon\` component.

# SEO Audit

**SEO** → DeepSeek V4 Flash Free 

\---

\#\# SEO Audit: Jatin Mishra — Freelance Website

\#\#\# Metadata

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`\<title\>\` | \*\*PASS\*\* — "Jatin Mishra — Freelance Website & Business Consulting" | — | \`app/layout.tsx:21\` |  
| \`\<meta name="description"\>\` | \*\*PASS\*\* — present and unique | — | \`app/layout.tsx:22\` |  
| \`\<meta name="robots"\>\` | \*\*FAIL\*\* — missing; defaults to index,follow but should be explicit | Low | \`app/layout.tsx\` |  
| \`\<meta name="keywords"\>\` | \*\*FAIL\*\* — missing (low impact; ignored by Google but used by some engines) | Low | \`app/layout.tsx\` |  
| \`metadataBase\` | \*\*PASS\*\* — set via \`NEXT\_PUBLIC\_SITE\_URL\` | — | \`app/layout.tsx:20\` |  
| Fallback URL is \`example.com\` | \*\*FAIL\*\* — hard-coded fallback \`https://example.com\` in production builds will break OG/meta URLs | \*\*High\*\* | \`app/layout.tsx:17\` |

\#\#\# Open Graph

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`og:title\` | \*\*FAIL\*\* — not explicitly set; relies on page title fallback | \*\*High\*\* | \`app/layout.tsx:24\` |  
| \`og:description\` | \*\*FAIL\*\* — not explicitly set; relies on page description fallback | \*\*High\*\* | \`app/layout.tsx:24\` |  
| \`og:url\` | \*\*FAIL\*\* — missing | Medium | \`app/layout.tsx:24\` |  
| \`og:site\_name\` | \*\*FAIL\*\* — missing | Medium | \`app/layout.tsx:24\` |  
| \`og:type\` | \*\*FAIL\*\* — not explicitly set (defaults to "website" in Next.js, but should be explicit) | Low | \`app/layout.tsx:24\` |  
| \`og:image\` | \*\*PASS\*\* — set with 1200×630 dimensions | — | \`app/layout.tsx:25\` |

\#\#\# Twitter Cards

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`twitter:card\` | \*\*PASS\*\* — \`summary\_large\_image\` | — | \`app/layout.tsx:28\` |  
| \`twitter:image\` | \*\*PASS\*\* — set | — | \`app/layout.tsx:29\` |  
| \`twitter:title\` | \*\*FAIL\*\* — not set | Medium | \`app/layout.tsx:27\` |  
| \`twitter:description\` | \*\*FAIL\*\* — not set | Medium | \`app/layout.tsx:27\` |

\#\#\# Canonical

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`\<link rel="canonical"\>\` | \*\*FAIL\*\* — not set anywhere | \*\*High\*\* | \`app/layout.tsx\` |

\#\#\# Sitemap

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`sitemap.xml\` | \*\*FAIL\*\* — \`app/sitemap.ts\` does not exist | \*\*High\*\* | \`app/sitemap.ts\` |

\#\#\# Robots

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| \`robots.txt\` | \*\*FAIL\*\* — \`app/robots.ts\` does not exist | \*\*High\*\* | \`app/robots.ts\` |

\#\#\# Structured Data

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| JSON-LD (\`WebSite\`, \`Person\`, \`LocalBusiness\`) | \*\*FAIL\*\* — no structured data anywhere | \*\*High\*\* | — |

\#\#\# Heading Hierarchy

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| One \`\<h1\>\` | \*\*PASS\*\* — single \`h1\` in Hero | — | \`Hero.tsx:77\` |  
| Logical heading order (h1→h2→h3) | \*\*PASS\*\* — no jumps | — | All sections |  
| All sections have headings | \*\*PASS\*\* — every section uses \`h2\` or \`p\` for its label | — | — |  
| Tools section label | \*\*PASS\*\* — uses \`\<p\>\` styled as heading (appropriate — decorative) | — | \`Tools.tsx:18\` |

\#\#\# Image Alt Strategy

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| Project screenshots have \`alt\` text | \*\*PASS\*\* — \`"${project.title} website screenshot"\` | — | \`Work.tsx:40\` |  
| About placeholder has no \`img\` | \*\*PASS\*\* — decorative placeholder uses \`aria-hidden\` | — | \`About.tsx\` |  
| \`og-image.png\` missing alt | \*\*PASS\*\* — not applicable (meta image) | — | — |

\#\#\# Crawlability / Indexability

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| No \`noindex\` / \`nofollow\` | \*\*PASS\*\* — page is indexable | — | — |  
| No sitemap.xml | \*\*FAIL\*\* — prevents full discovery | \*\*High\*\* | — |  
| No robots.txt | \*\*FAIL\*\* — no control over crawler behavior | \*\*High\*\* | — |

\#\#\# Internal Links

| Check | Verdict | Severity | File |  
|---|---|---|---|  
| Nav links use \`\#\` anchors | ⚠️ \*\*PASS\*\* — acceptable for single-page site | Low | \`Nav.tsx:26\` |  
| All section IDs match nav targets | \*\*PASS\*\* — \`id\` attributes match \`href\` targets | — | All sections |  
| External links use \`rel="noopener noreferrer"\` | \*\*PASS\*\* — social links properly attributed | — | \`Contact.tsx:142\` |  
| Booking URL is \`\#contact\` placeholder | \*\*FAIL\*\* — \`bookingUrl\` is hard-coded to \`\#contact\` (marked TODO) | Medium | \`data/site.ts:8\` |

\---

\#\#\# SEO Score: \*\*38 / 100\*\*

\#\#\# Top 5 Improvements

1\. \*\*Add \`robots.ts\`\*\* — Allow all crawlers, point to sitemap. Quick win, unblocks indexing visibility.  
2\. \*\*Add \`sitemap.ts\`\*\* — Single \`\<url\>\` entry for \`/\`. Essential for Google to discover the page.  
3\. \*\*Add JSON-LD structured data\*\* — \`WebSite\` \+ \`Person\` schema. Boosts rich-result eligibility and entity understanding.  
4\. \*\*Fix \`og:title\`, \`og:description\`, \`twitter:title\`, \`twitter:description\`\*\* — Social shares currently have no explicit title/description. All current social previews will fall back to whatever the platform guesses.  
5\. \*\*Add canonical URL\*\* — Even on a single-page site, prevents any future duplication issues and signals the authoritative URL.

# UX Audit

**UX → MiniMax M2.7** 

Here's my UX audit based on the live page:

\---

\*\*UX Audit — Jatin Mishra Freelance Site\*\*

\---

\*\*Severity: HIGH\*\*  
\*\*Issue:\*\* Hero splits attention between two unrelated value propositions  
\*\*Recommendation:\*\* The tagline says "Websites \+ SaaS" but the sub-headline pivots to "Bank of America risk-analytics / business behind the site." A visitor can't hold both. Pick one angle for the hero — websites as the vehicle, analytics as the differentiator (not co-equal). Move the Bank of America reference to the About section.

\---

\*\*Severity: HIGH\*\*  
\*\*Issue:\*\* "JMPortrait coming soon" in About section  
\*\*Recommendation:\*\* Remove entirely. A broken-image placeholder reads as unfinished. Use a CSS gradient avatar placeholder or silhouette until a real photo is ready. Never ship "coming soon" on a live page.

\---

\*\*Severity: HIGH\*\*  
\*\*Issue:\*\* Process section duplicated in the page markup  
\*\*Recommendation:\*\* The 5-step process appears twice — likely a double-render issue. Audit the component that renders the Process section and ensure it's mounted once.

\---

\*\*Severity: MEDIUM\*\*  
\*\*Issue:\*\* Trust strip ("15+ projects in pipeline") may hurt confidence  
\*\*Recommendation:\*\* "Pipeline" signals overcommitment to a new visitor. Remove it. Keep "9 sites shipped" and "ex-Bank of America" only — those are solid proof points.

\---

\*\*Severity: MEDIUM\*\*  
\*\*Issue:\*\* Services section has no hierarchy — 4 equal tiles with identical weight  
\*\*Recommendation:\*\* Lead with the primary offering (Website Design & Build). Make it visually dominant (larger, accent border). Push the other three into a supporting cluster. Currently all 4 tiles feel equally important, which means nothing stands out.

\---

\*\*Severity: MEDIUM\*\*  
\*\*Issue:\*\* CTA label inconsistency  
\*\*Recommendation:\*\* "Get a Free Website Audit" links to \`\#contact\` but opens the same form as "Book a Free Call." Audit and Get Audit should be a single action with one clear label, or the audit CTA should genuinely trigger an audit flow.

\---

\*\*Severity: MEDIUM\*\*  
\*\*Issue:\*\* No submit-state feedback visible on contact form  
\*\*Recommendation:\*\* Confirm the Formspree form shows a clear success/error state after submission. A silent submission or page reload without confirmation erodes user confidence.

\---

\*\*Severity: LOW\*\*  
\*\*Issue:\*\* Typo in Tools section  
\*\*Recommendation:\*\* "Power BILooker Studio" → "Power BI" (or "Power BI / Looker Studio"). Minor but damages attention to detail perception.

\---

\*\*Severity: LOW\*\*  
\*\*Issue:\*\* "Book a Free Call" is the primary CTA but links to \`\#contact\` (same section as the form)  
\*\*Recommendation:\*\* If the goal is a Calendly/Cal.com booking, wire this to an actual calendar link. Forcing a form fill for "book a call" creates unnecessary friction for the highest-intent visitor.

\---

\*\*UX Score: 5 / 10\*\*

The bones are solid — clear sections, good dark aesthetic, glass-morphism, appropriate CTAs. Critical gaps: duplicate process section, "coming soon" portrait, and hero messaging split between two different services. These feel like a site that shipped before it was ready.

\---

\*\*Top 3 UX Improvements (in order):\*\*

1\. \*\*Fix the About portrait\*\* — remove "coming soon," use a gradient placeholder or silhouette  
2\. \*\*Resolve the duplicate Process section\*\* — one render, not two  
3\. \*\*Consolidate hero messaging\*\* — one clear angle (websites) with the Bank of America differentiator moved to About

\---

The site has a strong visual foundation. The issues above are all surface-level polish that would materially lift trust and conversion before any traffic is sent to it.

# Design Consistency Audit

**Design Consistency → MiniMax M2.7** 

Based on my code analysis, here is the \*\*Visual Design Consistency Audit\*\*:

\---

\#\# Severity Scale: Critical / Major / Minor / Info

\---

\#\#\# COLOR CONSISTENCY

\*\*Issue: Gradient mismatch\*\*  
\- \*\*Severity:\*\* Major  
\- \*\*Details:\*\* PROJECT\_RULES.md §12 specifies "indigo→pink accent gradient" but \`globals.css:14\` defines \`--accent-grad\` as \`linear-gradient(135deg, \#3B82F6, \#60A5FA)\` — blue to light blue. No indigo or pink present.  
\- \*\*Recommendation:\*\* Update \`globals.css:14\` to \`linear-gradient(135deg, \#6366F1, \#EC4899)\` (indigo→pink) OR update PROJECT\_RULES.md to match implementation.

\*\*Issue: accent-1 (\#3B82F6) is blue, not indigo\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`--accent-1\` is \`\#3B82F6\` (Tailwind blue-500), used as "accent" throughout. If brand intent is indigo, this should be \`\#6366F1\`.  
\- \*\*Recommendation:\*\* Align \`--accent-1\` with brand intent in \`globals.css:12\`.

\---

\#\#\# TYPOGRAPHY CONSISTENCY

\*\*Issue: Redundant font-family declarations on headings\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`globals.css:73-78\` already sets \`font-family: var(--font-heading)\` on all h1-h6. Components redundantly declare \`font-\[family-name:var(--font-poppins)\]\` on h1, h2, h3 elements in Hero:79, Services:42, Process:47, Packages:13, About:42, Contact:90 — all unnecessary.  
\- \*\*Recommendation:\*\* Remove \`font-\[family-name:var(--font-poppins)\]\` from heading elements site-wide; rely on globals.css inheritance.

\*\*Issue: Redundant font-size overrides\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`globals.css:80-82\` sets h1, h2, h3 font sizes via CSS. Components redundantly declare \`style={{ fontSize: "var(--text-h2)" }}\` on h2 elements (Services:43, Process:48, Packages:14, About:43, Contact:91) and similar for h3. These add no value.  
\- \*\*Recommendation:\*\* Remove inline \`style\` font-size overrides from heading elements; remove the h3 style override from \`globals.css:82\` if not needed globally.

\---

\#\#\# SPACING RHYTHM

\*\*Issue: Tools section breaks section padding rhythm\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`Tools.tsx:16\` uses \`className="\!py-10 lg:\!py-14"\` to override SectionWrapper padding, creating a visual break in the vertical rhythm.  
\- \*\*Recommendation:\*\* Use the standard \`--section-py\` spacing or adjust the CSS variable for Tools specifically via an ancestor class, not \`\!py\` overrides.

\*\*Issue: Packages grid missing bottom margin alignment\*\*  
\- \*\*Severity:\*\* Info  
\- \*\*Details:\*\* Packages uses \`mt-10\` after the grid; other sections (Work: \`mt-12\`) use different bottom spacings before closing content.  
\- \*\*Recommendation:\*\* Standardize footer copy margin to \`mt-10\` site-wide or adopt a consistent token.

\---

\#\#\# ALIGNMENT

\*\*Issue: Packages header div missing text-center\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`Packages.tsx:11\` header div has no \`text-center\` class, while \`Services.tsx:40\`, \`Process.tsx:45\`, \`Work.tsx:19\`, \`About.tsx:41\` all center their headers.  
\- \*\*Recommendation:\*\* Add \`text-center\` to Packages header div.

\---

\#\#\# CARD CONSISTENCY

\*\*Issue: Work cards use different padding than Services/Packages\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* Services cards use \`p-6\`, Packages cards use \`p-6\`, Work cards use \`p-5\`. GlassCard itself has no default padding; it's applied per-section.  
\- \*\*Recommendation:\*\* Standardize to \`p-6\` for all GlassCard instances, or make padding a GlassCard prop.

\*\*Issue: About portrait gradient ring uses non-token radius\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`About.tsx:20\` uses \`rounded-\[23px\]\` instead of \`var(--radius-card)\` (20px). The 3px difference is noticeable.  
\- \*\*Recommendation:\*\* Change to \`rounded-\[var(--radius-card)\]\` and adjust ring inset if needed.

\---

\#\#\# BUTTON CONSISTENCY

\*\*Issue: Nav button uses non-standard padding\*\*  
\- \*\*Severity:\*\* Info  
\- \*\*Details:\*\* Nav CTA button uses \`\!py-2 \!px-5\` while standard Button uses \`px-6 py-3\`. This is intentional for nav compactness but undocumented.  
\- \*\*Recommendation:\*\* Either define a "compact" button variant or document this exception.

\*\*Issue: Submit button in Contact form is raw button, not using Button component\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`Contact.tsx:250-256\` uses raw \`\<button\>\` with duplicated gradient-bg styling instead of the Button component, creating potential drift.  
\- \*\*Recommendation:\*\* Add \`type="submit"\` support to Button component or extract submit styling into a utility.

\---

\#\#\# BORDER RADIUS CONSISTENCY

\*\*Issue: Process badges use rounded-full instead of radius-pill token\*\*  
\- \*\*Severity:\*\* Info  
\- \*\*Details:\*\* \`Process.tsx:36\` uses \`rounded-full\` while \`Pill.tsx:11\` uses \`rounded-\[var(--radius-pill)\]\`. Both produce circular shapes but use different syntax.  
\- \*\*Recommendation:\*\* Use \`rounded-\[var(--radius-pill)\]\` consistently, or define a \`.badge\` utility.

\---

\#\#\# GLASSMORPHISM CONSISTENCY

\*\*Issue: No issues found\*\*  
\- \*\*Details:\*\* Glass utility is applied consistently via \`GlassCard\` and directly in Contact form. Backdrop blur (12px), glass-fill (5% white), glass-border (18% blue) are all properly defined and used.

\---

\#\#\# SHADOWS

\*\*Issue: Inconsistent shadow intensity across hover states\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\*  
  \- Primary buttons: \`hover:shadow-lg hover:shadow-indigo-500/25\`  
  \- Services cards: \`hover:shadow-md hover:shadow-indigo-500/10\`  
  \- Packages popular card: \`hover:shadow-lg hover:shadow-indigo-500/15\`  
  \- Services uses \`shadow-md\` while buttons use \`shadow-lg\` — inconsistent intensity.  
\- \*\*Recommendation:\*\* Define a \`--shadow-accent\` token in globals.css and use it consistently, e.g., \`hover:shadow-lg hover:shadow-\[var(--shadow-accent)\]\`.

\---

\#\#\# ACCENT USAGE

\*\*Issue: See Color section (gradient mismatch)\*\*  
\- \*\*Severity:\*\* Major  
\- \*\*Details:\*\* Accent gradient mismatch affects all gradient-text, gradient-bg, and icon badge usages. Currently blue, not indigo→pink.  
\- \*\*Recommendation:\*\* Align gradient definition with brand intent.

\---

\#\#\# HERO CONSISTENCY

\*\*Issue: Eyebrow text uses non-token text size\*\*  
\- \*\*Severity:\*\* Info  
\- \*\*Details:\*\* \`Hero.tsx:72\` uses \`text-\[length:var(--text-small)\]\` — correct token. Headings correctly use \`var(--text-h1)\`. Hero layout is well-balanced with 55/45 grid split.  
\- \*\*Recommendation:\*\* No changes needed.

\---

\#\#\# SECTION TRANSITIONS

\*\*Issue: No visual separator between sections\*\*  
\- \*\*Severity:\*\* Info  
\- \*\*Details:\*\* Sections rely entirely on background color contrast and spacing for separation. No dividers, borders, or transition effects between sections.  
\- \*\*Recommendation:\*\* Consider adding subtle \`border-t border-\[var(--glass-border)\]\` to some section wrappers or a thin gradient line to create visual rhythm. Currently consistent but potentially could benefit from subtle depth cues.

\---

\#\#\# VISUAL BALANCE

\*\*Issue: Packages "Most Popular" badge has text overflow risk\*\*  
\- \*\*Severity:\*\* Minor  
\- \*\*Details:\*\* \`Packages.tsx:84\` badge uses fixed \`px-2.5 py-1\` with \`text-\[0.7rem\]\` — tight fit for "Most Popular" text.  
\- \*\*Recommendation:\*\* Increase to \`px-3\` or use \`rounded-full\` with auto-width.

\---

\#\# Design Score /10

\*\*6.5 / 10\*\*

Strong foundation — glassmorphism is cohesive, spacing tokens are well-defined, typography hierarchy is clear. Main weaknesses are: (1) blue gradient vs. claimed indigo→pink brand direction, (2) inconsistent button/card padding, (3) shadow intensity drift, (4) redundant typography declarations, (5) one-off radius values breaking the token system.

\---

\#\# Top Visual Improvements (Priority Order)

1\. \*\*Fix gradient color\*\* — align \`--accent-grad\` with brand (indigo→pink per PROJECT\_RULES.md) — immediate visual brand impact  
2\. \*\*Standardize card padding\*\* — \`p-6\` everywhere, no \`p-5\` exceptions  
3\. \*\*Consolidate shadow tokens\*\* — single \`--shadow-accent\` token used across buttons, cards, badges  
4\. \*\*Remove redundant typography declarations\*\* — heading font/size is already set globally; local overrides are noise  
5\. \*\*Standardize border-radius tokens\*\* — use \`radius-pill\` and \`radius-card\` everywhere, no ad-hoc values like \`23px\`  
