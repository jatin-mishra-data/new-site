import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const solutions = [
  { label: "Business websites",                  icon: "🌐" },
  { label: "Website redesigns",                  icon: "✏️" },
  { label: "Restaurant and cafe websites",        icon: "🍽️" },
  { label: "Hotel and homestay enquiry websites", icon: "🏨" },
  { label: "AI automation and lead capture",      icon: "⚡" },
  { label: "Website audit and improvement",       icon: "🔍" },
];

export default function Packages() {
  return (
    <SectionWrapper id="solutions" className="relative overflow-hidden">

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[var(--accent-1)]">
          Solutions
        </span>
        <h2
          className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
        >
          What I can{" "}
          <span className="gradient-text">build for you.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.0625rem] max-w-[54ch] mx-auto">
          From a first business site to a full redesign or AI-powered lead capture,
          here is a quick look at what I work on.
        </p>
      </div>

      {/* Solution category tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map(({ label, icon }) => (
          <div
            key={label}
            className="glass flex items-center gap-4 px-6 py-5 rounded-[var(--radius-card)]"
          >
            <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
            <span className="text-[var(--text-primary)] font-medium text-sm leading-snug">{label}</span>
          </div>
        ))}
      </div>

      {/* Pricing reassurance */}
      <p className="mt-10 text-center text-[var(--text-muted)] text-sm max-w-[60ch] mx-auto">
        Indicative ranges and scope details are explained on the Solutions page.
        Final quote after a free call.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/solutions" variant="primary">
          View all solutions
        </Button>
        <Button href={siteConfig.bookingUrl} variant="secondary">
          Start a Conversation
        </Button>
      </div>

    </SectionWrapper>
  );
}
