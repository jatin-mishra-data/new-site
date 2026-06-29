import { siteConfig } from "@/data/site";

const footerLinks = [
  { label: "Services",  href: "#services"  },
  { label: "Work",      href: "#work"      },
  { label: "Packages",  href: "#packages"  },
  { label: "Contact",   href: "#contact"   },
];

export default function Footer() {
  const email =
    siteConfig.email === "PLACEHOLDER_EMAIL" ? null : siteConfig.email;

  return (
    <footer className="relative overflow-hidden border-t border-[var(--glass-border)] bg-[var(--glass-fill)] backdrop-blur-md">
      {/* Ambient — very faint top-center blue, ties footer to Contact above */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "160px",
            background: "var(--accent-1)",
            filter: "blur(90px)",
            opacity: 0.04,
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="content-container py-7">

        {/* Quick links */}
        <nav aria-label="Footer navigation" className="mb-5">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[length:var(--text-small)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[length:var(--text-small)] text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© 2026 Jatin Mishra</span>
            <span aria-hidden="true" className="opacity-30">·</span>
            <span>Built with Next.js.</span>
            {email && (
              <>
                <span aria-hidden="true" className="opacity-30">·</span>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[var(--text-primary)] transition-colors duration-150"
                >
                  {email}
                </a>
              </>
            )}
          </div>

          <a
            href="#main-content"
            className="hover:text-[var(--text-primary)] transition-colors duration-150"
            aria-label="Back to top of page"
          >
            ↑ Back to top
          </a>
        </div>

      </div>
    </footer>
  );
}
