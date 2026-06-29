import Image from "next/image";
import type { ReactNode } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";

const icons: Record<string, ReactNode> = {
  Globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      <path d="M2 12h20" />
    </svg>
  ),
  Zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  TrendingUp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">

      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <Image
          src="/images/services-bg-full.webp"
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,11,20,0.12)" }}
        />
        {/* Sweeping orbit arc */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden="true"
          style={{ opacity: 0.7 }}
        >
          <defs>
            <linearGradient id="orbitGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(96,165,250,0.30)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.70)" />
              <stop offset="80%" stopColor="rgba(96,165,250,0.30)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="orbitGlow2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(139,92,246,0.15)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.45)" />
              <stop offset="75%" stopColor="rgba(139,92,246,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Main orbit arc */}
          <path
            d="M-200 600 C 200 200, 600 100, 900 250 C 1100 350, 1300 300, 1600 450"
            stroke="url(#orbitGlow)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Secondary arc offset below */}
          <path
            d="M-100 750 C 300 300, 700 250, 1000 400 C 1200 500, 1400 450, 1700 600"
            stroke="url(#orbitGlow2)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Orbiting dots */}
          <circle cx="350" cy="330" r="2.5" fill="rgba(96,165,250,0.85)" />
          <circle cx="750" cy="230" r="3" fill="rgba(99,102,241,0.90)" />
          <circle cx="1050" cy="310" r="2" fill="rgba(96,165,250,0.80)" />
          <circle cx="1350" cy="370" r="2.5" fill="rgba(139,92,246,0.85)" />
        </svg>
        {/* Ambient blue glow behind cards */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: "1000px",
            height: "800px",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div className="text-center mb-16">
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[var(--accent-1)]">
          What I Build For You
        </span>
        <h2
          className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
        >
          Pick what you need.{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">I&apos;ll handle the rest.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.0625rem] max-w-[50ch] mx-auto">
          From a clean marketing site to a full booking or payment flow, I scope, build, and launch it.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="glass relative flex flex-col p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:[border-color:rgba(96,165,250,0.60)] hover:[box-shadow:inset_0_0_60px_rgba(59,130,246,0.14),0_0_50px_rgba(59,130,246,0.28),0_0_20px_rgba(99,102,241,0.18),0_10px_40px_rgba(0,0,0,0.35)]"
            style={{
              border: "1.5px solid rgba(96,165,250,0.35)",
              boxShadow: "inset 0 0 60px rgba(59,130,246,0.10), 0 0 30px rgba(59,130,246,0.08), 0 8px 32px rgba(0,0,0,0.25)",
              minHeight: "400px",
            }}
          >
            {/* Top-edge glass highlight */}
            <span
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              aria-hidden="true"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18) 30%, rgba(255,255,255,0.12) 70%, transparent)" }}
            />
            {/* Inner blue glow — bottom-right */}
            <span
              className="absolute bottom-0 right-0 w-56 h-56 pointer-events-none"
              aria-hidden="true"
              style={{ background: "radial-gradient(circle at 80% 80%, rgba(59,130,246,0.15) 0%, transparent 60%)" }}
            />
            {/* Premium shine overlay */}
            <span
              className="absolute top-0 left-0 w-1/2 h-full pointer-events-none opacity-[0.04]"
              aria-hidden="true"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 60%)" }}
            />
            {/* Bottom dot texture */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.20) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
                maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
              }}
            />

            {/* Icon badge — circular */}
            <div
              className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 mb-5"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #1D4ED8 100%)",
                boxShadow: "0 0 32px rgba(59,130,246,0.65), 0 0 16px rgba(59,130,246,0.40), inset 0 1px 0 rgba(255,255,255,0.30)",
              }}
            >
              {icons[service.icon]}
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                aria-hidden="true"
                style={{ background: "linear-gradient(150deg, rgba(255,255,255,0.20) 0%, transparent 55%)" }}
              />
            </div>

            {/* Title */}
            <h3
              className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] leading-snug mb-2"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {service.title}
            </h3>

            {/* Accent rule */}
            <div className="w-10 h-[2px] rounded-full mb-4 gradient-bg" />

            {/* Body */}
            <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
              {service.description}
            </p>

            {/* CTA — pushed to card bottom via mt-auto */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[length:var(--text-small)] font-medium text-[var(--accent-1)] hover:underline underline-offset-4 mt-auto self-start"
            >
              Get in touch →
            </a>
          </div>
        ))}
      </div>

      {/* ── Solutions teaser ── */}
      <div className="mt-16 text-center">
        <p className="text-[var(--text-muted)] text-[0.9375rem] mb-6">
          Need the full picture? Every service is documented with clear scope, fixed pricing, and honest timelines.
        </p>
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 gradient-bg"
        >
          Explore All Solutions →
        </a>
      </div>

      {/* ── Bottom info bar — full-width glass bar ── */}
      <div className="relative mt-16" aria-hidden="true">
        <div
          className="relative w-full glass py-5 px-8 rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(96,165,250,0.25)",
            boxShadow: "inset 0 0 40px rgba(59,130,246,0.06)",
          }}
        >
          {/* Shine overlay */}
          <span
            className="absolute top-0 left-0 w-1/3 h-full pointer-events-none opacity-[0.03]"
            aria-hidden="true"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 60%)" }}
          />
          <div className="flex items-center justify-center gap-7 sm:gap-14">
            <span className="text-[0.875rem] font-semibold text-[var(--text-primary)] tracking-wide">Flexible</span>
            <span className="w-px h-6" style={{ background: "rgba(96,165,250,0.30)" }} />
            <span className="text-[0.875rem] font-semibold text-[var(--text-primary)] tracking-wide">Scalable</span>
            <span className="w-px h-6" style={{ background: "rgba(96,165,250,0.30)" }} />
            <span className="text-[0.875rem] font-semibold text-[var(--text-primary)] tracking-wide">Result-Driven</span>
          </div>
        </div>
      </div>

    </SectionWrapper>
  );
}
