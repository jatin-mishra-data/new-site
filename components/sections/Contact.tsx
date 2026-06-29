"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { socials as allSocials } from "@/data/socials";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

// Only show socials with confirmed real URLs
const socials = allSocials.filter((s) => !s.url.startsWith("PLACEHOLDER_"));

const inputBase =
  "w-full bg-[rgba(5,7,14,0.82)] border border-[rgba(96,165,250,0.28)] text-[var(--text-primary)] rounded-[var(--radius-btn)] px-4 py-3.5 text-[length:var(--text-body)] placeholder:text-[var(--text-muted)]/50 transition-all duration-150 focus:outline-none focus:border-[rgba(59,130,246,0.6)] focus:shadow-[0_0_0_2px_rgba(59,130,246,0.35),0_0_25px_rgba(59,130,246,0.2)]";

const inputErrCls =
  "border-[var(--error)] focus:border-[var(--error)] focus:shadow-[0_0_0_1px_var(--error),0_0_20px_rgba(248,113,113,0.15)]";

function FieldErr({ msg, id }: { msg?: string; id?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="mt-1 text-[length:var(--text-small)] text-[var(--error)]">
      {msg}
    </p>
  );
}

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    <path d="M2 12h20" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!name.trim()) e.name = "This field is required.";
    if (!email.trim()) e.email = "This field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!message.trim()) e.message = "This field is required.";
    return e;
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const fd = new FormData(evt.currentTarget);

    // Netlify honeypot — bot-field must be empty
    if (fd.get("bot-field")) { setStatus("success"); return; }

    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    setStatus("submitting");
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name,
        email,
        message,
      }).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const emailDisplay =
    siteConfig.email === "PLACEHOLDER_EMAIL" ? null : siteConfig.email;

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* ── Section background fill ── */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "linear-gradient(180deg, #05070d 0%, #070a14 50%, #05070d 100%)" }}
        aria-hidden="true"
      />

      {/* ── Cinematic background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft ambient glows */}
        <div
          className="absolute top-1/2 left-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)",
            transform: "translate(-40%, -50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)",
            transform: "translate(35%, 35%)",
          }}
        />

        {/* Faint dot texture */}
        <div
          className="absolute top-1/3 left-12 w-48 h-48 opacity-30"
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
            <linearGradient id="contact-arc-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147,197,253,0.9)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>
            <linearGradient id="contact-arc-right" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.05)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
              <stop offset="100%" stopColor="rgba(147,197,253,0.9)" />
            </linearGradient>
          </defs>
          {/* Left arc */}
          <path
            d="M-120 120 C 80 -20, 320 20, 420 180"
            stroke="url(#contact-arc-left)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.75"
          />
          {/* Right arc */}
          <path
            d="M1020 720 C 1220 860, 1380 820, 1560 680"
            stroke="url(#contact-arc-right)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">

        {/* ── Left: contact info ── */}
        <div className="flex flex-col gap-8 lg:pt-2">
          <div>
            <span
              className="inline-block mb-5 px-4 py-1.5 rounded-full text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[var(--accent-1)]"
              style={{
                background: "rgba(15,23,42,0.55)",
                border: "1px solid rgba(96,165,250,0.3)",
              }}
            >
              Get In Touch
            </span>
            <h2
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-4"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Let&apos;s talk about{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">your next project.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.0625rem] leading-relaxed max-w-[48ch]">
              Tell me a bit about your business and what you&apos;re trying to do,
              and I&apos;ll reply personally.
            </p>
          </div>

          {/* Contact details — scannable list */}
          <div className="flex flex-col gap-3">
            {emailDisplay && (
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--accent-1)] shrink-0"
                  style={{
                    background: "rgba(15,23,42,0.65)",
                    border: "1px solid rgba(96,165,250,0.25)",
                  }}
                >
                  <MailIcon />
                </div>
                <div>
                  <p className="text-[length:var(--text-small)] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <a
                    href={`mailto:${emailDisplay}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent-1)] transition-colors"
                  >
                    {emailDisplay}
                  </a>
                </div>
              </div>
            )}

            {/* Response time */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--accent-1)] shrink-0"
                style={{
                  background: "rgba(15,23,42,0.65)",
                  border: "1px solid rgba(96,165,250,0.25)",
                }}
              >
                <ClockIcon />
              </div>
              <div>
                <p className="text-[length:var(--text-small)] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  Response time
                </p>
                <p className="text-[var(--text-primary)]">Within a day or two</p>
              </div>
            </div>

            {socials.length > 0 && (
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[var(--accent-1)] shrink-0"
                  style={{
                    background: "rgba(15,23,42,0.65)",
                    border: "1px solid rgba(96,165,250,0.25)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[length:var(--text-small)] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 min-h-[44px] rounded-full text-[length:var(--text-small)] font-medium text-[var(--text-primary)] transition-all duration-150 hover:text-[var(--accent-1)]"
                        style={{
                          background: "rgba(15,23,42,0.6)",
                          border: "1px solid rgba(96,165,250,0.28)",
                          boxShadow: "0 0 12px rgba(37,99,235,0.1), inset 0 1px 0 rgba(147,197,253,0.1)",
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Alternate ways to reach me — secondary to the form */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=Website%20Project%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[rgba(96,165,250,0.45)] hover:text-[var(--accent-1)]"
              style={{
                background: "rgba(15,23,42,0.45)",
                border: "1px solid rgba(96,165,250,0.25)",
              }}
            >
              <MailIcon />
              Email Me
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[rgba(96,165,250,0.45)] hover:text-[var(--accent-1)]"
              style={{
                background: "rgba(15,23,42,0.45)",
                border: "1px solid rgba(96,165,250,0.25)",
              }}
            >
              <GlobeIcon />
              Get a Free Website Audit
            </a>
          </div>
        </div>

        {/* ── Right: form card ── */}
        <div
          id="contact-form"
          className="relative overflow-hidden p-6 lg:p-8 flex flex-col gap-6"
          style={{
            background: "linear-gradient(180deg, rgba(12,18,35,0.88) 0%, rgba(6,9,18,0.95) 100%)",
            border: "1.5px solid rgba(59,130,246,0.55)",
            borderRadius: "var(--radius-card, 16px)",
            boxShadow: "0 0 60px rgba(37,99,235,0.22), 0 0 120px rgba(37,99,235,0.08), inset 0 1px 0 rgba(147,197,253,0.18)",
          }}
        >
          {/* Shine overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)" }}
          />

          <div className="relative z-10">
            <h3
              className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)]"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Tell Me About Your Business
            </h3>
            <div
              className="mt-3 h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.8), rgba(59,130,246,0.2))" }}
            />
            <p className="mt-4 text-[var(--text-muted)] text-sm leading-relaxed">
              A few details is all I need to get started.
            </p>
          </div>

          {status === "success" ? (
            <div className="relative z-10 rounded-[var(--radius-btn)] bg-[var(--success)]/10 border border-[var(--success)]/30 px-5 py-4">
              <p className="text-[var(--success)] text-sm leading-relaxed">
                Thanks, your message is on its way. I&apos;ll get back to you
                personally, usually within a day or two.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              name="contact"
              method="POST"
              className="relative z-10 flex flex-col gap-5"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot — hidden from real users, caught by Netlify and handleSubmit */}
              <input
                name="bot-field"
                type="text"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
                autoComplete="off"
              />

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[var(--text-muted)] text-sm font-medium mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-describedby={errors.name ? "err-name" : undefined}
                  aria-invalid={!!errors.name}
                  className={`${inputBase}${errors.name ? ` ${inputErrCls}` : ""}`}
                />
                <FieldErr msg={errors.name} id="err-name" />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[var(--text-muted)] text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-describedby={errors.email ? "err-email" : undefined}
                  aria-invalid={!!errors.email}
                  className={`${inputBase}${errors.email ? ` ${inputErrCls}` : ""}`}
                />
                <FieldErr msg={errors.email} id="err-email" />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[var(--text-muted)] text-sm font-medium mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your business and what you need…"
                  rows={5}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  aria-invalid={!!errors.message}
                  className={`${inputBase} resize-none${errors.message ? ` ${inputErrCls}` : ""}`}
                />
                <FieldErr msg={errors.message} id="err-message" />
              </div>

              {/* Submit button with separated arrow */}
              <Button
                type="submit"
                disabled={status === "submitting"}
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}
                className="group w-full overflow-hidden hover:translate-y-0 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] disabled:opacity-70 !py-0 !px-0 !gap-0"
              >
                <span className="flex-1 flex items-center justify-center py-3.5">
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </span>
                <span
                  className="flex items-center justify-center self-stretch px-4 transition-colors"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                >
                  <ArrowRightIcon />
                </span>
              </Button>

              <p className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-[length:var(--text-small)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--accent-1)] shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your details stay private. I&apos;ll never share them.
              </p>

              {status === "error" && (
                <div className="rounded-[var(--radius-btn)] bg-[var(--error)]/10 border border-[var(--error)]/30 px-4 py-3">
                  <p className="text-[var(--error)] text-sm">
                    Something went wrong. Please try again, or email me
                    directly
                    {emailDisplay ? (
                      <>
                        {" "}at{" "}
                        <a
                          href={`mailto:${emailDisplay}`}
                          className="font-medium underline underline-offset-4"
                        >
                          {emailDisplay}
                        </a>
                      </>
                    ) : (
                      " via the booking link above"
                    )}
                    .
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
