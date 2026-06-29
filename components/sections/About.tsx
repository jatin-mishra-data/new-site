import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { value: "3 yrs", label: "at Bank of America" },
  { value: "9", label: "sites delivered" },
  { value: "50+", label: "published analyses" },
  { value: "5+", label: "businesses advised" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">



      <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">

        {/* ── Portrait ── */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative w-72 h-80 lg:w-[28rem] lg:h-[34rem]">
            {/* Soft outer glow */}
            <div
              className="absolute -inset-3 rounded-[24px]"
              style={{
                background: "rgba(59,130,246,0.10)",
                filter: "blur(20px)",
              }}
              aria-hidden="true"
            />
            {/* Thin blue-tinted border */}
            <div
              className="absolute -inset-[1px] rounded-[20px]"
              style={{ border: "1px solid rgba(96,165,250,0.30)" }}
              aria-hidden="true"
            />
            {/* Image container */}
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src="/images/jatin-portrait.webp"
                alt="Jatin Mishra"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 448px, 288px"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Bio + interests ── */}
        <div className="glass flex flex-col gap-8 p-8 lg:p-10">
          {/* Eyebrow + heading */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[var(--accent-1)]">
              ABOUT
            </span>
            <h2
              className="font-[family-name:var(--font-poppins)] font-bold text-[var(--text-primary)] leading-[1.15] mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Not just a developer,{" "}
              <span className="gradient-text">a business thinker.</span>
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-[1.0625rem]">
              I&apos;m not a typical web freelancer. I spent 3 years at Bank of
              America working with large-scale risk analytics, turning messy
              numbers into decisions leaders could act on. Now I build websites for
              businesses, and I bring that same eye for the numbers to your
              project. So you don&apos;t just get a good-looking site. You get
              someone who understands the business behind it.
            </p>
          </div>

          {/* Interests */}
          <p className="text-[var(--text-muted)] text-sm italic">
            Outside work: high-altitude trekking and long-distance motorcycling.
          </p>
        </div>

      </div>

      {/* ── Stats row — full width, balanced ── */}
      <div className="glass mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 p-6 sm:p-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p
              className="font-[family-name:var(--font-poppins)] font-bold gradient-text"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {s.value}
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-1 leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
