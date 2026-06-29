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
          className="absolute rounded-full hero-aurora"
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
        {/* Subtle center-depth ambient */}
        <div
          className="absolute"
          style={{
            width: "900px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
            top: "28%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Film grain — premium depth cue */}
        <div
          className="absolute inset-0 pointer-events-none hero-film-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
            opacity: 0.032,
          }}
        />
        {/* CSS starfield — tiny white and blue-white dots */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Regular dim stars */}
          <circle cx="8" cy="10" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.2s" }} />
          <circle cx="22" cy="7" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.4s" }} />
          <circle cx="35" cy="14" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.7s" }} />
          <circle cx="48" cy="5" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.1s" }} />
          <circle cx="60" cy="12" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.9s" }} />
          <circle cx="78" cy="8" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.6s" }} />
          <circle cx="92" cy="15" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.3s" }} />
          <circle cx="12" cy="24" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.8s" }} />
          <circle cx="28" cy="20" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.5s" }} />
          <circle cx="42" cy="28" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.7s" }} />
          <circle cx="55" cy="22" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.9s" }} />
          <circle cx="72" cy="26" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.2s" }} />
          <circle cx="88" cy="18" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.1s" }} />
          <circle cx="5" cy="38" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.6s" }} />
          <circle cx="18" cy="35" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.4s" }} />
          <circle cx="32" cy="42" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.8s" }} />
          <circle cx="45" cy="32" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.9s" }} />
          <circle cx="58" cy="40" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.6s" }} />
          <circle cx="70" cy="36" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.2s" }} />
          <circle cx="85" cy="44" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.1s" }} />
          <circle cx="10" cy="52" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.9s" }} />
          <circle cx="25" cy="48" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.4s" }} />
          <circle cx="38" cy="55" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.7s" }} />
          <circle cx="52" cy="50" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.8s" }} />
          <circle cx="65" cy="58" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.6s" }} />
          <circle cx="80" cy="52" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.3s" }} />
          <circle cx="95" cy="48" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.8s" }} />
          <circle cx="15" cy="65" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.4s" }} />
          <circle cx="30" cy="62" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.9s" }} />
          <circle cx="42" cy="72" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.3s" }} />
          <circle cx="56" cy="68" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.1s" }} />
          <circle cx="68" cy="62" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.6s" }} />
          <circle cx="82" cy="70" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.5s" }} />
          <circle cx="90" cy="64" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.3s" }} />
          <circle cx="8" cy="80" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.5s" }} />
          <circle cx="22" cy="78" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "0.1s" }} />
          <circle cx="35" cy="85" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.2s" }} />
          <circle cx="50" cy="75" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "1.7s" }} />
          <circle cx="62" cy="82" r="0.55" fill="#fff" className="star-twinkle" style={{ animationDelay: "4.8s" }} />
          <circle cx="78" cy="78" r="0.5" fill="#fff" className="star-twinkle" style={{ animationDelay: "2.3s" }} />
          <circle cx="92" cy="88" r="0.6" fill="#fff" className="star-twinkle" style={{ animationDelay: "3.5s" }} />
          {/* Blue-white accent stars */}
          <circle cx="15" cy="15" r="0.65" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "2.7s" }} />
          <circle cx="38" cy="8" r="0.7" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "0.8s" }} />
          <circle cx="52" cy="35" r="0.65" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "3.9s" }} />
          <circle cx="75" cy="55" r="0.7" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "1.4s" }} />
          <circle cx="88" cy="30" r="0.65" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "4.2s" }} />
          <circle cx="10" cy="70" r="0.7" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "2.0s" }} />
          <circle cx="45" cy="85" r="0.65" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "3.6s" }} />
          <circle cx="68" cy="90" r="0.7" fill="#93C5FD" className="star-twinkle" style={{ animationDelay: "0.3s" }} />
          {/* Brighter star sparks */}
          <circle cx="28" cy="12" r="1.1" fill="#fff" className="star-sparkle" style={{ animationDelay: "1.8s" }} />
          <circle cx="65" cy="28" r="1.4" fill="#fff" className="star-sparkle" style={{ animationDelay: "3.1s" }} />
          <circle cx="8" cy="55" r="1.1" fill="#fff" className="star-sparkle" style={{ animationDelay: "4.5s" }} />
          <circle cx="42" cy="48" r="1.2" fill="#fff" className="star-sparkle" style={{ animationDelay: "0.6s" }} />
          <circle cx="82" cy="68" r="1.4" fill="#fff" className="star-sparkle" style={{ animationDelay: "2.3s" }} />
          <circle cx="55" cy="88" r="1.1" fill="#fff" className="star-sparkle" style={{ animationDelay: "3.8s" }} />
        </svg>
        {/* Radial vignette — pulls focus toward content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 45%, rgba(8,11,20,0.55) 100%)",
          }}
        />
      </div>

      <div className="content-container w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-10 lg:py-14">

          {/* ── Left column: copy ── */}
          <div
            className="flex flex-col gap-6 relative z-10"
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
                  Book a Free Call
                </Button>
              </div>
              <Button href="/#contact" variant="secondary">
                Get a Free Website Audit
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
            className="relative flex items-center justify-center overflow-visible min-h-[180px] sm:min-h-[240px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[450px] order-last lg:order-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 scale-[1.15] sm:scale-[1.25] md:scale-[1.35] lg:scale-[1.5] origin-center">
              {/* Ambient glow directly behind the illustration */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(37,99,235,0.20) 0%, transparent 65%)",
                }}
              />
              {/* Ground bloom */}
              <div
                className="absolute bottom-0 left-[15%] w-[70%] h-[45%] pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)",
                }}
              />
              {/* Conic shine sweep */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 160deg at 50% 50%, transparent 0%, rgba(37,99,235,0.05) 20%, transparent 50%, transparent 100%)",
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
