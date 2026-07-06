import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Pill from "@/components/ui/Pill";
import { projects } from "@/data/projects";

// Stat band figures are résumé-stated counts only — never invent metrics
const stats = [
  { label: "sites delivered", value: "9" },
  { label: "currently accepting projects", value: "Open" },
];

export default function Work() {
  const shipped = projects.filter((p) => !p.comingSoon);

  return (
    <SectionWrapper id="work" className="relative overflow-hidden">

      {/* ── Section-local cinematic background: blue-hour road ── */}
      <div className="absolute inset-0 pointer-events-none -z-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/backgrounds/work-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,10,16,0.9) 0%, rgba(8,10,16,0.45) 20%, rgba(8,10,16,0.45) 80%, rgba(8,10,16,0.9) 100%)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div className="text-center mb-16">
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[color:var(--accent-primary,var(--accent-1))]">
          Recent Work
        </span>
        <h2
          className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
        >
          Work I&apos;ve{" "}
          <span className="gradient-text">shipped.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.0625rem] max-w-[52ch] mx-auto">
          Real projects, described by what was built. Nothing more.
        </p>
      </div>

      {/* ── Card grid: 1 col → 2 col sm → 3 col lg ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shipped.map((project) => (
          <div
            key={project.id}
            className="group glass flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:[border-color:rgba(96,165,250,0.45)] hover:[box-shadow:0_0_36px_rgba(59,130,246,0.16),0_10px_40px_rgba(0,0,0,0.4)]"
            style={{ background: "rgba(12,14,20,0.62)" }}
          >

            {/* Screenshot */}
            <div
              className="relative aspect-[16/9] overflow-hidden"
              style={{ background: "rgba(59,130,246,0.06)" }}
            >
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} website screenshot`}
                  width={800}
                  height={450}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[color:var(--accent-primary,var(--accent-1))] opacity-40">
                    Coming Soon
                  </span>
                </div>
              )}
              {/* Bottom framing gradient for legibility against the section */}
              <span
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                aria-hidden="true"
                style={{ background: "linear-gradient(to top, rgba(8,11,20,0.55), transparent)" }}
              />
            </div>

            {/* Content */}
            <div className="p-5 lg:p-6 flex flex-col gap-3 flex-1">


              <div>
                <p className="text-[length:var(--text-small)] text-[color:var(--accent-primary,var(--accent-1))] font-medium uppercase tracking-wider mb-1">
                  {project.clientType}
                </p>
                <h3
                  className="font-[family-name:var(--font-poppins)] font-semibold text-[var(--text-primary)] leading-snug transition-colors duration-200 group-hover:text-[color:var(--accent-primary,var(--accent-1))]"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {project.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              )}

              {(project.liveUrl || project.detailsUrl) && (
                <a
                  href={project.liveUrl || project.detailsUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-[length:var(--text-small)] font-medium text-[color:var(--accent-primary,var(--accent-1))] transition-colors duration-200 hover:underline underline-offset-4"
                  aria-label={`View ${project.title} project`}
                >
                  Visit site
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Solutions CTA ── */}
      <div className="mt-12 text-center">
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 text-[color:var(--accent-primary,var(--accent-1))] font-medium text-[0.9375rem] transition-colors duration-200 hover:underline underline-offset-4"
        >
          View more solutions →
        </a>
      </div>

      {/* ── Stat band — résumé-stated counts only ── */}
      <div className="relative mt-16" aria-hidden="true">
        <div className="w-full glass py-7 px-8 rounded-xl" style={{ background: "rgba(12,14,20,0.62)" }}>
          <div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                {i > 0 && (
                  <span className="hidden sm:block w-px h-10 bg-[rgba(96,165,250,0.12)] shrink-0" aria-hidden="true" />
                )}
                <div className="flex items-center gap-4">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(96,165,250,0.25)] bg-[rgba(59,130,246,0.10)] text-[color:var(--accent-primary,var(--accent-1))] shrink-0"
                    aria-hidden="true"
                  >
                    {i === 0 ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    )}
                  </span>
                  <div className="text-left">
                    <p
                      className="font-[family-name:var(--font-poppins)] font-bold gradient-text leading-none"
                      style={{ fontSize: "var(--text-h2)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[var(--text-muted)] text-[length:var(--text-small)] mt-1">
                      {s.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </SectionWrapper>
  );
}
