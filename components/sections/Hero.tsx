import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

// Résumé-stated facts only — never invent claims here
const trustPoints = ["9 sites shipped", "ex-Bank of America", "Currently accepting new projects"];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* ── Section-local cinematic background: sunrise mountain road ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/backgrounds/hero-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Top/bottom edge fade — matches the shared dark seam tone so it blends into the page start and into Services below */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,10,16,0.9) 0%, rgba(8,10,16,0.18) 20%, rgba(8,10,16,0.18) 80%, rgba(8,10,16,0.9) 100%)",
          }}
        />
      </div>

      {/* ── Background: readability scrim over the section-local background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Left-column readability scrim — darkest behind the copy, fading toward the photo on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.82) 40%, rgba(5,8,22,0.38) 68%, rgba(5,8,22,0.08) 100%)",
          }}
        />
      </div>

      <div className="content-container w-full">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center py-12 lg:py-20">

          {/* ── Left column: copy ── */}
          <div
            className="flex flex-col gap-7 relative z-10"
            style={{ animation: "hero-reveal 650ms ease-out both" }}
          >

            {/* Eyebrow pill badge */}
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
              Websites + SaaS for local businesses &amp; founders
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.08]"
              style={{ fontSize: "var(--text-h1)" }}
            >
              A website your business actually needs,{" "}
              <span className="gradient-text">built fast.</span>
            </h1>

            {/* Supporting paragraph */}
            <p
              className="text-[var(--text-muted)] max-w-[52ch]"
              style={{ fontSize: "1.0625rem", lineHeight: "1.8" }}
            >
              I build fast, modern websites with{" "}
              <span className="text-[var(--text-primary)] font-medium">booking, payments, or enquiry forms</span>{" "}
              when you need them, for schools, clinics, cafés, restaurants,
              consultants, and founders. Backed by a{" "}
              <span className="text-[var(--text-primary)] font-medium">Bank of America risk-analytics background</span>,
              so I understand the business behind the site.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-x-4 gap-y-3 pt-3">
              {/* Primary CTA with gradient glow */}
              <div className="relative group inline-block">
                <div
                  className="absolute -inset-0.5 rounded-[calc(var(--radius-btn)+2px)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    filter: "blur(8px)",
                  }}
                  aria-hidden="true"
                />
                <Button href={siteConfig.bookingUrl} variant="primary" className="relative">
                  Start a Conversation
                </Button>
              </div>
              <Button href="/#contact" variant="secondary">
                Tell Me About Your Project
              </Button>
            </div>

            {/* Trust strip — résumé-stated facts as subtle credential chips */}
            <ul
              className="flex flex-wrap items-center gap-2.5 pt-4 mt-1 border-t border-white/[0.07]"
              aria-label="Trust indicators"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.8125rem] text-[var(--text-muted)]"
                  style={{ background: "var(--glass-fill)", border: "1px solid rgba(96,165,250,0.22)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--accent-1)" }}
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right column: hero illustration ── */}
          <div
            className="relative flex items-center justify-center overflow-visible min-h-[200px] sm:min-h-[280px] md:min-h-[380px] lg:min-h-[460px] xl:min-h-[560px] order-last lg:order-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 scale-[1.25] sm:scale-[1.35] md:scale-[1.5] lg:scale-[1.7] origin-center">
              {/* Soft glass-style glow grounding the illustration on the photographic background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 68% 60% at 50% 50%, rgba(37,99,235,0.16) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/images/hero-visual-clean.webp"
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade — blends cleanly into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-base))",
        }}
      />
    </section>
  );
}
