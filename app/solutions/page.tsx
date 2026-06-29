import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions & Services | Jatin Mishra",
  description:
    "Websites, QR menus, Google Business Profile, WhatsApp setup, and simple automation for restaurants, hotels, clinics, consultants, and local businesses. Starting from ₹7,999.",
};

const PACKAGES = [
  {
    name: "Starter Web Presence Package",
    description:
      "For small businesses, consultants, NGOs, and local service providers who need a clean online presence fast.",
    price: "₹7,999 – ₹14,999",
    timeline: "Min 4–7 working days",
    inclusions: [
      "Modern website or landing page",
      "Mobile-friendly design",
      "Contact form + WhatsApp button",
      "Basic SEO & Google indexing setup",
    ],
  },
  {
    name: "Growth Website Package",
    description:
      "For businesses that want more enquiries, better presentation, and stronger lead capture.",
    price: "₹14,999 – ₹29,999",
    timeline: "Min 7–12 working days",
    inclusions: [
      "Everything in Starter, plus multi-section website",
      "Quote / booking & enquiry forms",
      "Google Business Profile setup support",
      "Conversion optimisation + speed checks",
    ],
  },
  {
    name: "Brand + Website Combo Package",
    description:
      "For businesses that don't yet have proper branding, copy, or website structure.",
    price: "₹19,999 – ₹39,999",
    timeline: "Min 10–15 working days",
    inclusions: [
      "Website + logo refinement + brand style guide",
      "Homepage, about & service page copy",
      "FAQs + contact form + WhatsApp integration",
      "Basic SEO + Google Business Profile support",
    ],
  },
  {
    name: "Lead Generation + Automation Package",
    description:
      "For businesses that want their website to capture and follow up on leads automatically.",
    price: "₹14,999 – ₹49,999",
    timeline: "Min 7–20 working days",
    inclusions: [
      "Lead capture, quote & booking forms",
      "WhatsApp enquiry flow + auto-replies",
      "AI chatbot for FAQs and lead generation",
      "Analytics & conversion tracking",
    ],
  },
  {
    name: "Website Upgrade + Maintenance Package",
    description:
      "For businesses with an existing website that looks outdated, loads slowly, or isn't generating enquiries.",
    price: "Redesign: ₹9,999 – ₹29,999\nMaintenance: ₹2,999/month",
    timeline: "Redesign: 5–12 days · Maintenance: ongoing",
    inclusions: [
      "Modern UI + mobile optimisation",
      "Faster loading & image optimisation",
      "Better CTAs, forms & user flow",
      "Monthly content updates & performance reports",
    ],
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      {/* Fixed ambient glow orbs — Stitch void atmosphere, persistent across all sections */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true">
        <div
          className="glow-orb"
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%)",
            opacity: 0.14,
            top: "-20%",
            left: "-10%",
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: "620px",
            height: "620px",
            background: "radial-gradient(circle, rgba(77,163,255,0.5) 0%, transparent 70%)",
            opacity: 0.11,
            bottom: "-10%",
            right: "-5%",
          }}
        />
      </div>

      {/* Back to home — fixed glass pill, top-left */}
      <a
        href="/"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
        style={{
          background: "var(--glass-fill)",
          border: "1px solid var(--glass-border)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0.4375rem 0.875rem",
          borderRadius: "var(--radius-pill)",
        }}
      >
        <span aria-hidden="true">←</span>
        Home
      </a>

      <section
        className="relative flex items-center overflow-hidden pt-16"
      aria-labelledby="solutions-hero-heading"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Left-column readability overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,11,20,0.97) 0%, rgba(8,11,20,0.84) 38%, rgba(8,11,20,0.34) 68%, rgba(8,11,20,0.10) 100%)",
          }}
        />
        {/* Top-right indigo bloom */}
        <div
          className="absolute rounded-full"
          style={{
            width: "760px",
            height: "760px",
            background: "radial-gradient(circle, #2563EB 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.18,
            top: "-220px",
            right: "-200px",
            animation: "aurora-drift 20s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Bottom-left pink bloom — distinguishes this page from the main hero */}
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #4DA3FF 0%, transparent 65%)",
            filter: "blur(90px)",
            opacity: 0.08,
            bottom: "-80px",
            left: "-100px",
            animation: "aurora-drift 26s ease-in-out infinite reverse",
            willChange: "transform",
          }}
        />
        {/* Film grain — premium depth cue */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
            opacity: 0.032,
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 45%, rgba(8,11,20,0.55) 100%)",
          }}
        />
      </div>

      <div className="content-container w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center py-10 lg:py-14">

          {/* ── Left column: copy ── */}
          <div
            className="flex flex-col gap-7 relative z-10"
            style={{ animation: "hero-reveal 650ms ease-out both" }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold tracking-[0.12em] uppercase"
              style={{
                background: "rgba(37, 99, 235, 0.10)",
                border: "1px solid rgba(96, 165, 250, 0.35)",
                color: "#93C5FD",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 0 6px rgba(37,99,235,0.9)",
                  animation: "dot-pulse 2.4s ease-in-out infinite",
                }}
              />
              Services &amp; Pricing
            </div>

            {/* Headline */}
            <h1
              id="solutions-hero-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.08]"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Choose what your{" "}
              <span className="gradient-text">business needs</span>{" "}
              online.
            </h1>

            {/* Supporting paragraph */}
            <p
              className="text-[var(--text-muted)] max-w-[52ch]"
              style={{ fontSize: "1.0625rem", lineHeight: "1.8" }}
            >
              Websites, QR menus, Google Business Profile, WhatsApp enquiry
              flows, and simple automation for restaurants, hotels, clinics,
              consultants, and local businesses. Starting from ₹7,999. Final
              quote after a short requirements call.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="relative group inline-block">
                {/* Glow halo on primary CTA hover */}
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button href={siteConfig.bookingUrl} variant="primary" className="relative">
                  Book a Free Call
                </Button>
              </div>
              <Button href="/#contact" variant="secondary">
                Get a Free Website Audit
              </Button>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 border-t border-white/[0.07]"
              aria-label="Trust indicators"
            >
              <span className="text-[0.8125rem] text-[var(--text-muted)]">All prices are indicative</span>
              <span className="hidden sm:block w-px h-3 bg-white/20" aria-hidden="true" />
              <span className="text-[0.8125rem] text-[var(--text-muted)]">Final quote after a short call</span>
              <span className="hidden sm:block w-px h-3 bg-white/20" aria-hidden="true" />
              <span className="text-[0.8125rem] text-[var(--text-muted)]">No hidden costs</span>
            </div>
          </div>

          {/* ── Right column: hero render ── */}
          <div
            className="relative flex items-center justify-center overflow-hidden min-h-[180px] sm:min-h-[240px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[450px] order-last lg:order-none rounded-[var(--radius-card)]"
            aria-hidden="true"
            style={{
              border: "1px solid rgba(77,163,255,0.12)",
              boxShadow: "0 0 48px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Accent glow behind the object — unclipped, makes the art feel embedded */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 58% 54% at 50% 47%, rgba(37,99,235,0.22) 0%, transparent 62%)",
              }}
            />
            {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame and dissolves what remains */}
            <div
              className="absolute inset-0 scale-[1.2] sm:scale-[1.3] md:scale-[1.45] lg:scale-[1.6] origin-center"
              style={{
                maskImage: "radial-gradient(ellipse 70% 68% at 50% 48%, black 38%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 68% at 50% 48%, black 38%, transparent 78%)",
              }}
            >
              {/* Ground bloom */}
              <div
                className="absolute bottom-0 left-[15%] w-[70%] h-[45%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/images/solutions/solutions-hero-astral-core.webp"
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                quality={90}
              />
            </div>

            {/* Edge camouflage — bleed the frame edges into the page background */}
            <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-base), transparent)" }} />
            <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }} />
            <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />
            {/* Soft radial vignette — proportional, scales with the frame so corners always dissolve */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-base) 100%)",
              }}
            />
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-base))",
        }}
      />
      </section>

      {/* ── Core Packages ── */}
      <section
        className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28"
        aria-labelledby="core-packages-heading"
      >
        {/* Faint ambient bloom behind the grid */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          {/* Section heading — left-aligned per Stitch dashboard style */}
          <div className="mb-12 lg:mb-16">
            <div className="analyst-chip text-[var(--accent-2)] mb-4">Core Infrastructure</div>
            <h2
              id="core-packages-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Core <span className="gradient-text">Packages</span>
            </h2>
            <p
              className="mt-4 text-[var(--text-muted)] max-w-[56ch] text-sm"
              style={{ lineHeight: "1.75" }}
            >
              All prices are indicative ranges. Final quote after a short
              requirements call, no commitment needed.
            </p>
          </div>

          {/* Package grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className="relative flex flex-col gap-5 p-6 rounded-[var(--radius-card)] border border-[rgba(255,255,255,0.08)] bg-[var(--glass-fill)] backdrop-blur-[24px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(37,99,235,0.35)] hover:shadow-[0_0_40px_rgba(37,99,235,0.10)] group"
              >
                {/* Icon box — Stitch card identity marker */}
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[rgba(37,99,235,0.12)] transition-colors"
                  style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.22)" }}
                  aria-hidden="true"
                >
                  <span className="w-4 h-4 rounded gradient-bg opacity-70" />
                </div>

                <header>
                  <h3
                    className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)]"
                    style={{ fontSize: "var(--text-h3)", lineHeight: "1.25" }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="mt-2 text-[var(--text-muted)] text-sm"
                    style={{ lineHeight: "1.65" }}
                  >
                    {pkg.description}
                  </p>
                </header>

                <div>
                  <p
                    className="gradient-text font-[family-name:var(--font-poppins)] font-bold"
                    style={{ fontSize: "1.125rem", whiteSpace: "pre-line" }}
                  >
                    {pkg.price}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 flex-grow" role="list">
                  {pkg.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span
                        className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-2)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Mono timeline footer — Stitch analyst chip style */}
                <div className="mt-auto border-t border-[rgba(255,255,255,0.05)] pt-4 flex items-center justify-between gap-3">
                  <span className="analyst-chip text-[var(--text-muted)]">{pkg.timeline}</span>
                  <Button
                    href={siteConfig.bookingUrl}
                    variant="secondary"
                    className="shrink-0"
                  >
                    Book a Free Call
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Section-level primary CTA */}
          <div className="mt-14 lg:mt-20 text-center flex flex-col items-center gap-4">
            <p className="text-[var(--text-muted)] text-sm max-w-[48ch]">
              Not sure which package fits? Book a free requirements call. I'll recommend the right starting point for your business.
            </p>
            <div className="relative group inline-block">
              <div
                className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                  filter: "blur(8px)",
                }}
                aria-hidden="true"
              />
              <Button
                href={siteConfig.bookingUrl}
                variant="primary"
                className="relative"
              >
                Book a Free Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ── Complete Online Presence Bundle ── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="bundle-heading"
      >
        {/* Elevated surface — lifts this above the regular card grid */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--bg-elevated)" }}
          aria-hidden="true"
        />
        {/* Accent glow, biased toward image side */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 72% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="content-container py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">

            {/* Left: copy — stacks below image on mobile */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* Badge */}
              <div className="analyst-chip text-[var(--accent-2)]">Best Value Bundle</div>

              <div>
                <h2
                  id="bundle-heading"
                  className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
                >
                  Complete Online{" "}
                  <span className="gradient-text">Presence Bundle</span>
                </h2>
                <p
                  className="mt-3 text-[var(--text-muted)]"
                  style={{ lineHeight: "1.75" }}
                >
                  Everything a business owner needs in one place: website,
                  copy, branding support, WhatsApp, Google Business Profile,
                  SEO, and analytics. Best value when bought as a bundle rather
                  than as separate services.
                </p>
              </div>

              {/* Price */}
              <div>
                <p
                  className="gradient-text font-[family-name:var(--font-poppins)] font-bold"
                  style={{ fontSize: "2rem" }}
                >
                  ₹24,999+
                </p>
                <p className="text-[0.8125rem] text-[var(--text-muted)] mt-1">
                  Final quote after a short requirements call · Min 10–18
                  working days
                </p>
              </div>

              {/* Inclusions — two-column grid on sm+ */}
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5"
                role="list"
              >
                {[
                  "Modern website or landing page",
                  "Website copy",
                  "Basic branding support",
                  "Contact form + WhatsApp button",
                  "Google Business Profile setup",
                  "Basic SEO setup",
                  "Analytics setup",
                  "Image optimisation + Google indexing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span
                      className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--accent-1)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA with glow halo */}
              <div className="relative group inline-block w-fit">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

            {/* Right: image — shown above text on mobile */}
            <div
              className="relative order-1 lg:order-2 flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[440px]"
            >
              {/* Accent glow behind the object — makes the art feel embedded */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 58% 54% at 50% 48%, rgba(37,99,235,0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />
              {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame */}
              <div
                className="absolute inset-0 scale-[1.15] sm:scale-[1.28] lg:scale-[1.42] origin-center"
                style={{
                  maskImage: "radial-gradient(ellipse 70% 68% at 50% 48%, black 38%, transparent 78%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 68% at 50% 48%, black 38%, transparent 78%)",
                }}
              >
                <Image
                  src="/images/solutions/bundle-ui-composition.webp"
                  alt="UI composition showing a website, branding, and business profile elements combined in one bundle"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  quality={90}
                />
              </div>
              {/* Edge camouflage — bleed the frame edges into the elevated background */}
              <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              {/* Soft radial vignette — corners dissolve into the page */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-elevated) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </section>
      {/* ── Restaurant & Café Solutions ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="restaurant-heading"
      >
        {/* Faint ambient bloom */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 28% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          <div className="grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left: image — shown above content on mobile */}
            <div
              className="relative flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] order-1"
            >
              {/* Accent glow behind the object — makes the art feel embedded */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 56% 56% at 50% 48%, rgba(37,99,235,0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />
              {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame; taller ellipse for the portrait phone render */}
              <div
                className="absolute inset-0 scale-[1.3] sm:scale-[1.45] lg:scale-[1.6] origin-center"
                style={{
                  maskImage: "radial-gradient(ellipse 64% 72% at 50% 48%, black 36%, transparent 76%)",
                  WebkitMaskImage: "radial-gradient(ellipse 64% 72% at 50% 48%, black 36%, transparent 76%)",
                }}
              >
                <Image
                  src="/images/solutions/restaurant-qr-mockup.webp"
                  alt="A phone displaying a digital QR menu for a café, with a WhatsApp enquiry button"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  quality={90}
                />
              </div>
              {/* Edge camouflage — bleed the frame edges into the page background */}
              <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} aria-hidden="true" />
              {/* Soft radial vignette — corners dissolve into the page */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-base) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Right: content */}
            <div className="flex flex-col gap-6 order-2">
              {/* Eyebrow */}
              <div className="analyst-chip text-[var(--accent-2)]">Restaurants &amp; Cafés</div>

              <div>
                <h2
                  id="restaurant-heading"
                  className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
                >
                  Stop losing customers to{" "}
                  <span className="gradient-text">a weak online presence.</span>
                </h2>
                <p
                  className="mt-3 text-[var(--text-muted)]"
                  style={{ lineHeight: "1.75" }}
                >
                  Many restaurants and cafés lose walk-ins and enquiries because
                  their menu is hard to find, their Google profile is incomplete,
                  or customers can't reach them easily. I set up a practical
                  digital presence, no app, no custom software.
                </p>
              </div>

              {/* What's included */}
              <div>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  What I set up
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {[
                    "Modern restaurant or café website, mobile-friendly",
                    "Digital menu page + scannable QR code for tables",
                    "WhatsApp click-to-enquire or click-to-order button",
                    "Table booking or party/event enquiry form",
                    "Google Business Profile setup and optimisation",
                    "Basic SEO + analytics setup",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span
                        className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-1)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing note */}
              <div
                className="rounded-[var(--radius-card)] p-4 text-sm"
                style={{
                  background: "var(--glass-fill)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <p className="text-[var(--text-primary)] font-medium mb-1">
                  Indicative pricing
                </p>
                <ul className="flex flex-col gap-1 text-[var(--text-muted)]">
                  <li>QR menu setup only: ₹4,999+</li>
                  <li>Full restaurant/café website package: ₹14,999 – ₹34,999</li>
                  <li>Food Business Starter Bundle (everything above): ₹24,999+</li>
                </ul>
                <p className="mt-2 text-[var(--text-muted)] text-[0.75rem]">
                  Final quote after a short requirements call · Min 4–15 working
                  days depending on scope
                </p>
              </div>

              {/* CTA */}
              <div className="relative group inline-block w-fit">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── Hotel / Homestay Direct Enquiry ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="hotel-heading"
      >
        {/* Elevated surface — alternates with restaurant's plain base */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--bg-elevated)" }}
          aria-hidden="true"
        />
        {/* Accent bloom, biased toward image side */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 72% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">

            {/* Left: content */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="analyst-chip text-[var(--accent-2)]">Hotels &amp; Homestays</div>

              <div>
                <h2
                  id="hotel-heading"
                  className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
                >
                  Let guests enquire{" "}
                  <span className="gradient-text">directly, no middleman.</span>
                </h2>
                <p
                  className="mt-3 text-[var(--text-muted)]"
                  style={{ lineHeight: "1.75" }}
                >
                  Many small hotels and homestays depend entirely on booking
                  platforms and lose direct enquiries because they have no
                  proper website, no WhatsApp enquiry flow, and no Google
                  presence. I set up a simple, professional digital setup so
                  guests can find and contact you directly, no booking engine,
                  no app.
                </p>
              </div>

              {/* What's included */}
              <div>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  What I set up
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {[
                    "Modern hotel or homestay website with room listing",
                    "Room photo gallery and amenities section",
                    "Direct booking enquiry form (check-in, guests, room preference)",
                    "WhatsApp booking enquiry button",
                    "Google Maps integration + Google Business Profile support",
                    "Nearby attractions and contact section",
                    "Reviews section using client-provided content",
                    "Basic SEO + analytics setup",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span
                        className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-1)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing note */}
              <div
                className="rounded-[var(--radius-card)] p-4 text-sm"
                style={{
                  background: "var(--glass-fill)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <p className="text-[var(--text-primary)] font-medium mb-1">
                  Indicative pricing
                </p>
                <ul className="flex flex-col gap-1 text-[var(--text-muted)]">
                  <li>Direct enquiry form setup only: ₹7,999+</li>
                  <li>Full hotel / homestay website package: ₹19,999 – ₹49,999</li>
                  <li>Hotel Direct Enquiry Bundle (everything above): ₹34,999+</li>
                </ul>
                <p className="mt-2 text-[var(--text-muted)] text-[0.75rem]">
                  Final quote after a short requirements call · Min 4–25 working
                  days depending on scope
                </p>
              </div>

              {/* CTA */}
              <div className="relative group inline-block w-fit">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

            {/* Right: image — shown above content on mobile */}
            <div
              className="relative flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] order-1 lg:order-2"
            >
              {/* Accent glow behind the object — makes the art feel embedded */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 56% 56% at 50% 48%, rgba(37,99,235,0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />
              {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame; taller ellipse for the portrait render */}
              <div
                className="absolute inset-0 scale-[1.15] sm:scale-[1.28] lg:scale-[1.42] origin-center"
                style={{
                  maskImage: "radial-gradient(ellipse 60% 70% at 50% 48%, black 12%, transparent 64%)",
                  WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 48%, black 12%, transparent 64%)",
                }}
              >
                <Image
                  src="/images/solutions/hotel-enquiry-mockup.webp"
                  alt="A hotel room card and WhatsApp enquiry flow showing how guests can contact a homestay directly"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  quality={90}
                />
              </div>
              {/* Edge camouflage — bleed the frame edges into the elevated background */}
              <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              {/* Soft radial vignette — corners dissolve into the page */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-elevated) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </section>
      {/* ── AI Automation & Lead Capture ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="automation-heading"
      >
        {/* Faint ambient bloom, image-side bias */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 28% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          <div className="grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left: image — above content on mobile */}
            <div
              className="relative flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] order-1"
            >
              {/* Accent glow behind the object — makes the art feel embedded */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 58% 54% at 50% 48%, rgba(37,99,235,0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />
              {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame; near-circular mask for the centered render */}
              <div
                className="absolute inset-0 scale-[1.15] sm:scale-[1.28] lg:scale-[1.42] origin-center"
                style={{
                  maskImage: "radial-gradient(ellipse 66% 64% at 50% 48%, black 14%, transparent 66%)",
                  WebkitMaskImage: "radial-gradient(ellipse 66% 64% at 50% 48%, black 14%, transparent 66%)",
                }}
              >
                <Image
                  src="/images/solutions/automation-chatbot-render.webp"
                  alt="Abstract render showing a chatbot conversation and automated lead capture flow for a small business"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  quality={90}
                />
              </div>
              {/* Edge camouflage — bleed the frame edges into the page background */}
              <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} aria-hidden="true" />
              {/* Soft radial vignette — corners dissolve into the page */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-base) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Right: content */}
            <div className="flex flex-col gap-6 order-2">
              {/* Eyebrow */}
              <div className="analyst-chip text-[var(--accent-2)]">AI Automation</div>

              <div>
                <h2
                  id="automation-heading"
                  className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
                >
                  Stop handling{" "}
                  <span className="gradient-text">repetitive enquiries</span>{" "}
                  manually.
                </h2>
                <p
                  className="mt-3 text-[var(--text-muted)]"
                  style={{ lineHeight: "1.75" }}
                >
                  Simple, no-code automations that handle routine tasks: FAQ
                  replies, lead collection, form notifications, and basic
                  follow-up flows, so you spend less time on manual back-and-forth
                  and more time running your business.
                </p>
              </div>

              {/* What's included */}
              <div>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  What I set up
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {[
                    "FAQ chatbot: answers common questions automatically",
                    "Lead generation chatbot: collects name, email, and enquiry",
                    "Contact and quote request forms with email notifications",
                    "WhatsApp enquiry flow with auto-reply setup",
                    "Basic appointment or booking widget connection (lightweight, no-code)",
                    "Simple customer follow-up workflow",
                    "Analytics to track form submissions and enquiries",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span
                        className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-1)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[0.8125rem] text-[var(--text-muted)] italic">
                  All tools here are no-code or lightweight integrations: payment
                  links, embeddable widgets, simple forms, and automation tools.
                  I don&apos;t build custom AI platforms or enterprise automation systems.
                </p>
              </div>

              {/* Pricing note */}
              <div
                className="rounded-[var(--radius-card)] p-4 text-sm"
                style={{
                  background: "var(--glass-fill)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <p className="text-[var(--text-primary)] font-medium mb-1">
                  Indicative pricing
                </p>
                <ul className="flex flex-col gap-1 text-[var(--text-muted)]">
                  <li>Contact forms &amp; lead capture: ₹4,999+</li>
                  <li>AI chatbot integration: ₹7,999+</li>
                  <li>No-code / lightweight business systems: ₹9,999+</li>
                  <li>Lead generation + automation package: ₹14,999 – ₹49,999</li>
                </ul>
                <p className="mt-2 text-[var(--text-muted)] text-[0.75rem]">
                  Final quote after a short requirements call · Min 4–20 working
                  days depending on scope
                </p>
              </div>

              {/* CTA */}
              <div className="relative group inline-block w-fit">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── Website Audit & Redesign ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="audit-heading"
      >
        {/* Elevated surface — alternates with Automation's plain base */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--bg-elevated)" }}
          aria-hidden="true"
        />
        {/* Accent bloom, content-side bias */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 28% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">

            {/* Left: content */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="analyst-chip text-[var(--accent-2)]">Audit &amp; Redesign</div>

              <div>
                <h2
                  id="audit-heading"
                  className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
                >
                  Your website exists.{" "}
                  <span className="gradient-text">Does it work?</span>
                </h2>
                <p
                  className="mt-3 text-[var(--text-muted)]"
                  style={{ lineHeight: "1.75" }}
                >
                  Many business websites look fine but load slowly, break on
                  mobile, or leave visitors with no clear next step. I review
                  your existing site and identify what's holding it back, then
                  either fix the specific issues or redesign it properly.
                </p>
              </div>

              {/* What I look at / fix */}
              <div>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  What I review and fix
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {[
                    "Design audit: layout, colours, typography, visual clarity",
                    "Mobile usability: how it looks and works on phones and tablets",
                    "Loading speed: image sizes, lazy loading, basic performance",
                    "Enquiry/contact flow: are CTAs clear and easy to act on?",
                    "Basic SEO: meta titles, descriptions, sitemap, Google indexing",
                    "Modern UI update: cleaner layout, better spacing, fresher look",
                    "Monthly maintenance: content updates, backups, performance checks",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                    >
                      <span
                        className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--accent-1)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing note */}
              <div
                className="rounded-[var(--radius-card)] p-4 text-sm"
                style={{
                  background: "var(--glass-fill)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <p className="text-[var(--text-primary)] font-medium mb-1">
                  Indicative pricing
                </p>
                <ul className="flex flex-col gap-1 text-[var(--text-muted)]">
                  <li>Basic website audit: Free</li>
                  <li>Detailed audit report: ₹2,999+</li>
                  <li>Website redesign: ₹9,999 – ₹29,999</li>
                  <li>Monthly maintenance: ₹2,999/month</li>
                </ul>
                <p className="mt-2 text-[var(--text-muted)] text-[0.75rem]">
                  Final quote after reviewing your current website · Redesign
                  min 5–12 working days
                </p>
              </div>

              {/* CTA */}
              <div className="relative group inline-block w-fit">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

            {/* Right: image — above content on mobile */}
            <div
              className="relative flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] order-1 lg:order-2"
            >
              {/* Accent glow behind the object — makes the art feel embedded */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 58% 54% at 50% 48%, rgba(37,99,235,0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />
              {/* Scaled + masked wrapper — pushes the rectangular canvas edges out of frame; near-circular mask for the centered render */}
              <div
                className="absolute inset-0 scale-[1.15] sm:scale-[1.28] lg:scale-[1.42] origin-center"
                style={{
                  maskImage: "radial-gradient(ellipse 66% 64% at 50% 48%, black 14%, transparent 66%)",
                  WebkitMaskImage: "radial-gradient(ellipse 66% 64% at 50% 48%, black 14%, transparent 66%)",
                }}
              >
                <Image
                  src="/images/solutions/website-audit-render.webp"
                  alt="Abstract render of a website being reviewed, showing layout, speed, and mobile checks"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  quality={90}
                />
              </div>
              {/* Edge camouflage — bleed the frame edges into the elevated background */}
              <div className="absolute inset-x-0 top-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-elevated), transparent)" }} aria-hidden="true" />
              {/* Soft radial vignette — corners dissolve into the page */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 74% 70% at 50% 48%, transparent 52%, var(--bg-elevated) 100%)",
                }}
                aria-hidden="true"
              />
            </div>

          </div>
        </div>
      </section>
      {/* ── Selected Individual Services ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="individual-services-heading"
      >
        {/* Very faint centre bloom — keeps the section from feeling empty */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          {/* Section heading — left-aligned per Stitch dashboard style */}
          <div className="mb-4">
            <div className="analyst-chip text-[var(--accent-2)] mb-4">Targeted Interventions</div>
            <h2
              id="individual-services-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Individual <span className="gradient-text">Services</span>
            </h2>
          </div>

          {/* Context note */}
          <p className="text-sm text-[var(--text-muted)] max-w-[56ch] mb-12 lg:mb-14" style={{ lineHeight: "1.7" }}>
            Add-ons or smaller standalone services. Packages above are usually better value when you need more than one thing.
          </p>

          {/* Bento grid — Stitch auto-rows fixed-height layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
            {[
              {
                name: "Website Creation",
                description: "A modern business website built from scratch for your type of business.",
                price: "₹7,999+",
                timeline: "Min 4–15 working days",
                colSpan: 1,
              },
              {
                name: "Website Redesign",
                description: "Updated layout, colours, and UI for an existing website.",
                price: "₹9,999+",
                timeline: "Min 5–12 working days",
                colSpan: 1,
              },
              {
                name: "AI Content Creation",
                description: "Website copy, service pages, FAQs, and calls to action.",
                price: "₹2,999+",
                timeline: "Min 4–7 working days",
                colSpan: 2,
              },
              {
                name: "SEO Setup",
                description: "Meta titles, descriptions, sitemap, and Google indexing setup. No ranking guarantee.",
                price: "₹4,999+",
                timeline: "Min 4–7 working days",
                colSpan: 1,
              },
              {
                name: "Google Business Profile",
                description: "Profile creation or cleanup: photos, categories, services, and business details.",
                price: "₹2,999+",
                timeline: "Min 4–7 working days",
                colSpan: 2,
              },
              {
                name: "WhatsApp Integration",
                description: "Click-to-chat button, direct enquiry links, and catalog integration support.",
                price: "₹2,999+",
                timeline: "Min 4–6 working days",
                colSpan: 1,
              },
              {
                name: "Website Audit",
                description: "Design, speed, mobile usability, and basic SEO review of your current website.",
                price: "Basic: Free · Detailed: ₹2,999+",
                timeline: "Min 4–5 working days",
                colSpan: 2,
              },
              {
                name: "AI Chatbot Integration",
                description: "FAQ chatbot or lead-capture chatbot embedded on your website.",
                price: "₹7,999+",
                timeline: "Min 5–15 working days",
                colSpan: 2,
              },
            ].map((service) => (
              <article
                key={service.name}
                className={`flex flex-col justify-between p-5 rounded-[var(--radius-card)] border border-[rgba(255,255,255,0.08)] bg-[var(--glass-fill)] backdrop-blur-[12px] transition-all duration-200 hover:bg-white/[0.04] hover:border-[rgba(37,99,235,0.30)]${service.colSpan === 2 ? " md:col-span-2" : ""}`}
              >
                <div>
                  <h3
                    className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)]"
                    style={{ fontSize: "0.9375rem", lineHeight: "1.3" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-[var(--text-muted)] text-[0.8125rem] mt-1.5" style={{ lineHeight: "1.55" }}>
                    {service.description}
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-3">
                  <p className="gradient-text font-[family-name:var(--font-poppins)] font-semibold text-sm">
                    {service.price}
                  </p>
                  <p className="analyst-chip text-[var(--text-muted)] mt-1.5">
                    {service.timeline}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href={siteConfig.bookingUrl}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-1)] focus-visible:rounded-[var(--radius-btn)]"
            >
              Not sure what you need? Book a free call
              <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* ── Visual Service Block — editorial wallpaper break ── */}
      <section
        className="relative overflow-hidden flex items-center min-h-[400px] lg:min-h-[460px]"
        aria-labelledby="visual-block-heading"
      >
        {/* Background wallpaper — decorative */}
        <Image
          src="/images/solutions/visual-block-wallpaper-1.webp"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
          quality={85}
        />

        {/* Scrim — ensures strong text contrast over any wallpaper content */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,11,20,0.95) 0%, rgba(8,11,20,0.84) 55%, rgba(8,11,20,0.68) 100%)",
          }}
        />
        {/* Edge fades — all four sides dissolve into the page background */}
        <div className="absolute inset-x-0 top-0 h-28 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to bottom, var(--bg-base), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }} />
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

        {/* Content */}
        <div className="content-container relative z-10 py-20 lg:py-28">
          <div className="max-w-[52ch]">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold tracking-[0.12em] uppercase"
              style={{
                background: "rgba(37, 99, 235, 0.12)",
                border: "1px solid rgba(96, 165, 250, 0.35)",
                color: "#93C5FD",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: "var(--accent-1)",
                  boxShadow: "0 0 6px rgba(37,99,235,0.9)",
                  animation: "dot-pulse 2.4s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              AI-assisted execution
            </div>

            {/* Heading */}
            <h2
              id="visual-block-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] mb-5"
              style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
            >
              Modern business websites,{" "}
              <span className="gradient-text">built with speed and clarity.</span>
            </h2>

            {/* Body */}
            <p
              className="text-[var(--text-muted)] mb-8"
              style={{ fontSize: "1.0625rem", lineHeight: "1.8" }}
            >
              I use AI-assisted workflows to plan, write content, explore
              design directions, and build faster, without cutting corners on
              quality. The final result is reviewed, customised, and built
              around your actual business needs, not a template.
            </p>

            {/* Ghost CTA */}
            <a
              href={siteConfig.bookingUrl}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] border border-[var(--glass-border)] rounded-[var(--radius-btn)] px-5 py-2.5 transition-all duration-150 hover:bg-white/5 hover:border-[rgba(37,99,235,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-1)] focus-visible:rounded-[var(--radius-btn)]"
            >
              Start with a free call
              <span aria-hidden="true" className="text-[var(--accent-1)]">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* ── Pricing & Timeline Notes ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="pricing-notes-heading"
      >
        {/* Faint ambient bloom */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          {/* Section header — left-aligned dashboard style */}
          <div className="mb-10 lg:mb-14">
            <div className="analyst-chip text-[var(--accent-2)] mb-4">Transparency First</div>
            <h2
              id="pricing-notes-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Pricing &amp;{" "}
              <span className="gradient-text">Timeline Notes</span>
            </h2>
            <p
              className="mt-4 text-[var(--text-muted)] max-w-[54ch] text-sm"
              style={{ lineHeight: "1.75" }}
            >
              No hidden surprises. Here is exactly how pricing and timelines
              work, so you know them before booking a call.
            </p>
          </div>

          {/* Dashboard divider */}
          <div className="border-t border-[rgba(255,255,255,0.06)] mb-10" aria-hidden="true" />

          {/* Two data panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Pricing panel */}
            <div
              className="rounded-[var(--radius-card)] overflow-hidden flex flex-col"
              style={{
                background: "var(--glass-fill)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Panel header bar */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--accent-1)", boxShadow: "0 0 6px rgba(37,99,235,0.8)" }}
                  aria-hidden="true"
                />
                <span className="analyst-chip text-[var(--accent-2)]">Pricing</span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] text-sm ml-1"
                >
                  How pricing works
                </h3>
              </div>
              <ul className="flex flex-col" role="list">
                {[
                  "All prices shown are indicative ranges, not fixed quotes.",
                  "Final pricing depends on scope: number of pages, content requirements, design complexity, forms, integrations, urgency, and ongoing support needs.",
                  "Packages are better value than picking multiple individual services separately.",
                  "Prices are negotiable depending on the final scope and selected services.",
                  "Domain, hosting, paid tools, third-party subscriptions, stock images, and ad spend are charged separately unless included in the final quote.",
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-6 py-4 text-sm text-[var(--text-muted)]${i < arr.length - 1 ? " border-b border-[rgba(255,255,255,0.04)]" : ""}`}
                  >
                    <span
                      className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--accent-1)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline panel */}
            <div
              className="rounded-[var(--radius-card)] overflow-hidden flex flex-col"
              style={{
                background: "var(--glass-fill)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Panel header bar */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "#60A5FA", boxShadow: "0 0 6px rgba(96,165,250,0.8)" }}
                  aria-hidden="true"
                />
                <span className="analyst-chip text-[var(--accent-2)]">Timelines</span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] text-sm ml-1"
                >
                  How timelines work
                </h3>
              </div>
              <ul className="flex flex-col" role="list">
                {[
                  "Every project takes a minimum of 4 working days.",
                  "Larger projects may take 7–25+ working days depending on scope, feedback, content availability, approvals, integrations, and revisions.",
                  "Timelines extend if content or images aren't ready, brand direction is unclear, revisions are needed, or third-party access is delayed.",
                  "Google Business Profile verification timeline depends on Google, not something I can control.",
                  "I'll give a realistic timeline estimate on the requirements call, not after work starts.",
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-6 py-4 text-sm text-[var(--text-muted)]${i < arr.length - 1 ? " border-b border-[rgba(255,255,255,0.04)]" : ""}`}
                  >
                    <span
                      className="mt-[0.3rem] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#60A5FA" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA — flanked by dashboard rules */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" aria-hidden="true" />
            <a
              href={siteConfig.bookingUrl}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-1)] focus-visible:rounded-[var(--radius-btn)]"
            >
              Ask for a clear quote
              <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </a>
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" aria-hidden="true" />
          </div>
        </div>
      </section>
      {/* ── Scope Boundaries ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        aria-labelledby="scope-heading"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--bg-elevated)" }}
          aria-hidden="true"
        />
        {/* Accent bloom */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(37,99,235,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="content-container">
          {/* Section header — left-aligned */}
          <div className="mb-10 lg:mb-14">
            <div className="analyst-chip text-[var(--accent-2)] mb-4">Project Scope</div>
            <h2
              id="scope-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              What I <span className="gradient-text">do and don't</span> build
            </h2>
            <p
              className="mt-4 text-[var(--text-muted)] max-w-[52ch] text-sm"
              style={{ lineHeight: "1.75" }}
            >
              Being clear about scope upfront saves time on both sides. If
              your project falls outside this, I'll say so on the first call.
            </p>
          </div>

          {/* Dashboard divider */}
          <div className="border-t border-[rgba(255,255,255,0.06)] mb-10" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* What I can help with */}
            <div
              className="rounded-[var(--radius-card)] overflow-hidden flex flex-col"
              style={{
                background: "var(--glass-fill)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--success)", boxShadow: "0 0 6px rgba(52,211,153,0.7)" }}
                  aria-hidden="true"
                />
                <span className="analyst-chip" style={{ color: "var(--success)" }}>In scope</span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] text-sm ml-1"
                >
                  What I can help with
                </h3>
              </div>
              <ul className="flex flex-col" role="list">
                {[
                  "Business websites and landing pages",
                  "Restaurant, café, and hotel websites",
                  "QR menus and digital menu pages",
                  "Contact, quote, and booking enquiry forms",
                  "Google Business Profile setup and optimisation",
                  "WhatsApp enquiry and click-to-chat integration",
                  "Basic SEO setup: meta tags, sitemap, Google indexing",
                  "No-code and lightweight business automations",
                  "AI chatbot for FAQs and lead capture",
                  "Website audit, redesign, and monthly maintenance",
                  "AI-assisted content: copy, FAQs, service pages",
                  "Basic branding support: logo refinement, colours, fonts",
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-6 py-3.5 text-sm text-[var(--text-muted)]${i < arr.length - 1 ? " border-b border-[rgba(255,255,255,0.04)]" : ""}`}
                  >
                    <span className="mt-[0.25rem] shrink-0 text-[var(--success)] font-bold text-base leading-none" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What I don't build */}
            <div
              className="rounded-[var(--radius-card)] overflow-hidden flex flex-col"
              style={{
                background: "var(--glass-fill)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--error)", boxShadow: "0 0 6px rgba(239,68,68,0.6)" }}
                  aria-hidden="true"
                />
                <span className="analyst-chip" style={{ color: "var(--error)" }}>Out of scope</span>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] text-sm ml-1"
                >
                  What I don't build
                </h3>
              </div>
              <ul className="flex flex-col" role="list">
                {[
                  "Full mobile apps (iOS or Android)",
                  "Custom SaaS platforms or web applications",
                  "Hotel management or property management software",
                  "Restaurant management or POS software",
                  "Custom booking engines or reservation systems",
                  "Payment-heavy platforms or e-commerce with complex logic",
                  "Enterprise-grade automation or custom AI systems",
                  "SEO ranking guarantees: basic setup only",
                  "Fake reviews, fake testimonials, or invented metrics",
                  "Results or revenue guarantees of any kind",
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 px-6 py-3.5 text-sm text-[var(--text-muted)]${i < arr.length - 1 ? " border-b border-[rgba(255,255,255,0.04)]" : ""}`}
                  >
                    <span className="mt-[0.25rem] shrink-0 text-[var(--error)] font-bold text-base leading-none" aria-hidden="true">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[0.8125rem] text-[var(--text-muted)] italic">
                  If a project needs any of the above, I'll let you know on the
                  first call so you can find the right person for it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── Final CTA ── */}
      <section
        className="relative overflow-hidden flex items-center min-h-[440px] lg:min-h-[520px]"
        aria-labelledby="final-cta-heading"
      >
        {/* Background wallpaper — decorative */}
        <Image
          src="/images/solutions/visual-block-wallpaper-2.webp"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
          quality={85}
        />

        {/* Scrim */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,11,20,0.95) 0%, rgba(8,11,20,0.86) 50%, rgba(8,11,20,0.74) 100%)",
          }}
        />
        {/* Edge fades — all four sides dissolve into the page background */}
        <div className="absolute inset-x-0 top-0 h-52 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to bottom, var(--bg-base) 0%, var(--bg-base) 28%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to top, var(--bg-base), transparent)" }} />
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

        {/* Content — left-aligned control panel */}
        <div className="content-container relative z-10 py-20 lg:py-28">
          <div className="max-w-[62ch]">
            {/* Status bar — control panel header row */}
            <div className="flex items-center gap-4 mb-8">
              <div className="analyst-chip text-[var(--accent-2)]">Session Ready</div>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#34D399",
                    boxShadow: "0 0 6px rgba(52,211,153,0.8)",
                    animation: "dot-pulse 2.4s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />
                <span className="text-[0.75rem] text-[var(--text-muted)]">Available for new projects</span>
              </div>
            </div>

            {/* Dashboard divider */}
            <div className="border-t border-[rgba(255,255,255,0.08)] mb-8" aria-hidden="true" />

            <h2
              id="final-cta-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] mb-5"
              style={{ fontSize: "var(--text-h2)", lineHeight: "1.15" }}
            >
              Not sure which solution{" "}
              <span className="gradient-text">fits your business?</span>
            </h2>

            <p
              className="text-[var(--text-muted)] mb-8"
              style={{ fontSize: "1.0625rem", lineHeight: "1.8" }}
            >
              The easiest next step is a short call. I'll understand what your
              business needs, suggest the right starting point, and give you a
              clear quote, no pressure, no commitment.
            </p>

            {/* Control panel data readouts */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: "Free call", value: "30 min" },
                { label: "No commitment", value: "required" },
                { label: "Quote", value: "after call" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 px-4 py-2.5 rounded-[var(--radius-card)]"
                  style={{ background: "var(--glass-fill)", border: "1px solid var(--glass-border)" }}
                >
                  <span className="text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em]">{label}</span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{value}</span>
                </div>
              ))}
            </div>

            {/* Dashboard divider */}
            <div className="border-t border-[rgba(255,255,255,0.06)] mb-8" aria-hidden="true" />

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary CTA */}
              <div className="relative group inline-block">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button
                  href={siteConfig.bookingUrl}
                  variant="primary"
                  className="relative"
                >
                  Book a Free Call
                </Button>
              </div>

              {/* Secondary CTA */}
              <Button href="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
