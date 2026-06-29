"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { siteConfig, navLinks } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const update = () => setActiveHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  // Clear active highlight when scrolled back to the top (Hero area has no nav entry)
  useEffect(() => {
    const onScroll = () => { if (window.scrollY < 100) setActiveHash(""); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash("#" + entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 h-16 bg-[var(--glass-fill)] border-b border-[var(--glass-border)] backdrop-blur-md"
      aria-label="Main navigation"
    >
      {/* Wordmark */}
      <a
        href="/"
        className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] text-lg tracking-tight"
      >
        Jatin Mishra
      </a>

      {/* Desktop links — absolutely centred so wordmark + CTA stay pinned to edges */}
      <ul className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => {
          const isActive = activeHash === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`relative text-sm transition-colors duration-150 ${
                  isActive
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-[5px] left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ${
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{
                    background: "var(--accent-1)",
                    boxShadow: isActive ? "0 0 8px var(--accent-1)" : "none",
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Right side: CTA + hamburger */}
      <div className="relative z-10 flex items-center gap-2">
        {/* Hidden on mobile — hamburger provides nav on small screens */}
        <span className="hidden md:inline-flex">
        <Button
          href="/#contact"
          variant="secondary"
          className="text-sm !py-2 !px-5 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Contact Me
        </Button>
        </span>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-btn)] text-[var(--text-primary)] hover:bg-white/5 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <>
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown — fixed so backdrop-filter ancestors can't clip it */}
      <div
        id="mobile-menu"
        className={`fixed top-16 inset-x-0 z-50 bg-[var(--bg-elevated)] border-b border-[var(--glass-border)] ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-[var(--glass-border)] last:border-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm transition-colors duration-150 ${
                  activeHash === link.href
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-3">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-[var(--text-primary)] transition-all duration-150 hover:text-[var(--accent-1)]"
              style={{ background: "var(--glass-fill)", border: "1px solid var(--glass-border)" }}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
