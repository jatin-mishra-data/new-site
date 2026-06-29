import type { ReactNode } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const steps = [
  {
    id: "discovery",
    title: "Free Discovery Call",
    description: "Tell me about your business, goals, and budget with no commitment.",
  },
  {
    id: "proposal",
    title: "Proposal & Package",
    description: "I send a clear scope, timeline, and fixed price up front, so there are no surprises.",
  },
  {
    id: "build",
    title: "Design & Build",
    description:
      "I build your site (AI-assisted, so it's fast) and share a live preview link as it comes together.",
  },
  {
    id: "review",
    title: "Review & Refine",
    description: "You give feedback; I make quick revisions until it's right.",
  },
  {
    id: "launch",
    title: "Launch & Support",
    description:
      "I'll handle launch day, including domain, hosting, and the works, with optional ongoing care afterward.",
  },
];

const stepIcons: Record<string, ReactNode> = {
  discovery: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.23h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  proposal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  build: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  review: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  launch: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
};

const Badge = ({ n }: { n: number }) => (
  <div
    className="relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shrink-0 z-10"
    style={{
      background: "radial-gradient(circle at 30% 30%, #2563EB 0%, #1D4ED8 60%, #1E3A8A 100%)",
      border: "2px solid rgba(147,197,253,0.55)",
      color: "#fff",
      boxShadow: "0 0 30px rgba(37,99,235,0.6), inset 0 0 20px rgba(147,197,253,0.35)",
    }}
  >
    {n}
    <div
      className="absolute inset-[-8px] rounded-full -z-10"
      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)" }}
    />
  </div>
);

const IconBadge = ({ icon }: { icon: ReactNode }) => (
  <div
    className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5"
    style={{
      background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)",
      boxShadow: "0 0 28px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
    }}
  >
    {icon}
  </div>
);

const PremiumCard = ({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) => (
    <div
      className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(15,23,42,0.72) 0%, rgba(8,11,20,0.85) 100%)",
        border: "1.5px solid rgba(59,130,246,0.35)",
        borderRadius: "var(--radius-card, 16px)",
        boxShadow: "0 0 40px rgba(37,99,235,0.12), inset 0 1px 0 rgba(147,197,253,0.15)",
        ...style,
      }}
    >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)" }}
    />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

const trustItems = [
  {
    text: "FREE CALL.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    text: "FIXED SCOPE.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    text: "CLEAN LAUNCH.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden">
      {/* ── Section background fill ── */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "linear-gradient(180deg, #05070d 0%, #070a14 50%, #05070d 100%)" }}
        aria-hidden="true"
      />

      {/* ── Cinematic background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft ambient glow behind timeline */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.20) 0%, transparent 65%)" }}
        />

        {/* Dotted texture patches */}
        <div
          className="absolute top-20 left-12 w-40 h-40 opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.7) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-16 w-44 h-44 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />

        {/* Sweeping orbit arcs */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="process-arc-main" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.05)" />
              <stop offset="45%" stopColor="rgba(59,130,246,0.65)" />
              <stop offset="55%" stopColor="rgba(96,165,250,0.75)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>
            <linearGradient id="process-arc-bright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
              <stop offset="50%" stopColor="rgba(147,197,253,1)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0.15)" />
            </linearGradient>
          </defs>
          {/* Large upper-left arc */}
          <path
            d="M-120 220 C 180 -80, 620 -80, 820 160"
            stroke="url(#process-arc-main)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.8"
          />
          {/* Bright upper-right streak */}
          <path
            d="M1080 80 C 1220 40, 1380 110, 1540 280"
            stroke="url(#process-arc-bright)"
            strokeWidth="3.5"
            fill="none"
            opacity="0.85"
          />
          {/* Bottom-right arc */}
          <path
            d="M880 720 C 1100 660, 1320 760, 1460 920"
            stroke="url(#process-arc-main)"
            strokeWidth="2"
            fill="none"
            opacity="0.55"
          />
          {/* Bottom-left arc */}
          <path
            d="M60 820 C 280 760, 520 820, 740 920"
            stroke="url(#process-arc-main)"
            strokeWidth="2"
            fill="none"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 text-center mb-20">
        <span
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[var(--accent-1)]"
          style={{
            background: "rgba(15,23,42,0.55)",
            border: "1px solid rgba(96,165,250,0.3)",
          }}
        >
          How It Works
        </span>
        <h2
          className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
        >
          Simple process.{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">Clear launch path.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.0625rem] max-w-[48ch] mx-auto">
          Five steps from the first call to a live, polished site. No guesswork on your end.
        </p>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <ol className="relative z-10 flex flex-col lg:hidden mb-12 gap-4">
        {steps.map((step, i) => (
          <li key={step.id} className="flex items-stretch gap-4">
            {/* Left: badge + connector */}
            <div className="flex flex-col items-center shrink-0">
              <Badge n={i + 1} />
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-1 mt-2"
                  style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.7), rgba(59,130,246,0.1))" }}
                  aria-hidden="true"
                />
              )}
            </div>
            {/* Premium card */}
            <PremiumCard className="p-4 flex-1">
              <IconBadge icon={stepIcons[step.id]} />
              <h3
                className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] leading-snug"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                {step.description}
              </p>
            </PremiumCard>
          </li>
        ))}
      </ol>

      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden lg:block relative z-10 mb-16">
        {/* Connecting line */}
        <div
          className="absolute h-px"
          style={{
            top: "27px",
            left: "10%",
            right: "10%",
            background: "linear-gradient(to right, transparent, rgba(59,130,246,0.75) 12%, rgba(59,130,246,0.75) 88%, transparent)",
            boxShadow: "0 0 12px rgba(37,99,235,0.4)",
          }}
          aria-hidden="true"
        />

        <ol className="grid grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <li key={step.id} className="flex flex-col items-center text-center">
              <Badge n={i + 1} />

              <PremiumCard className="mt-8 p-5 w-full" style={{ minHeight: "280px" } as React.CSSProperties}>
                <div className="flex flex-col items-center text-center h-full">
                  <IconBadge icon={stepIcons[step.id]} />
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] leading-snug text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </PremiumCard>
            </li>
          ))}
        </ol>
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center mb-16">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-[var(--accent-1)]"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
            boxShadow: "0 0 35px rgba(37,99,235,0.45)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          </svg>
        </div>
        <p className="text-[var(--text-muted)] text-[1.0625rem]">
          That&apos;s it. Ready when you are.
        </p>
        <a
          href={siteConfig.bookingUrl}
          className="group inline-flex items-center rounded-full overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)" }}
        >
          <span className="px-6 py-3 text-white font-semibold">Start a Conversation</span>
          <span className="px-4 py-3 border-l border-white/20 text-white flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      </div>

      {/* ── Bottom trust bar ── */}
      <div
        className="relative z-10 w-full"
        style={{
          background: "linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(8,11,20,0.75) 100%)",
          borderTop: "1px solid rgba(96,165,250,0.22)",
          borderBottom: "1px solid rgba(96,165,250,0.22)",
          boxShadow: "inset 0 1px 0 rgba(147,197,253,0.08)",
        }}
      >
        <div className="max-w-5xl mx-auto py-5 px-6 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {trustItems.map((item, i) => (
            <div key={item.text} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-6 shrink-0"
                  style={{ background: "rgba(96,165,250,0.25)" }}
                />
              )}
              <span className="text-[var(--accent-1)]">{item.icon}</span>
              <span className="text-sm font-bold tracking-widest text-[var(--text-muted)]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
