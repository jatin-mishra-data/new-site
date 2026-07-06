import SectionWrapper from "@/components/ui/SectionWrapper";

const toolCategories = [
  {
    label: "AI Research & Writing",
    items: ["Gemini", "NotebookLM", "Claude", "ChatGPT", "DeepSeek", "Kimi", "Qwen"],
  },
  {
    label: "Build & Coding Workflow",
    items: ["OpenCode", "Codex", "Penpot", "Google Stitch"],
  },
  {
    label: "Creative & Media",
    items: ["Minimax", "Google Veo", "Higgsfield", "Leonardo AI", "OpenCut"],
  },
];

export default function Tools() {
  return (
    <SectionWrapper id="tools" className="relative overflow-hidden">
      {/* ── HUD accent layer (over the shared page background) ── */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(96,165,250,0.6) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <svg
          className="absolute bottom-0 left-0 w-full h-[250px]"
          viewBox="0 0 1200 250"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 200 Q 300 0 600 150 Q 900 300 1200 50"
            fill="none"
            stroke="rgba(59,130,246,0.08)"
            strokeWidth="1"
          />
          <path
            d="M 0 220 Q 300 20 600 170 Q 900 320 1200 70"
            fill="none"
            stroke="rgba(59,130,246,0.04)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* ── Header ── */}
      <div className="text-center mb-10">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] text-[length:var(--text-small)] font-semibold tracking-widest uppercase text-[color:var(--accent-primary,var(--accent-1))]">
          TOOLS
        </span>
        <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(2rem,5vw,3rem)] font-semibold gradient-text tracking-tight">
          The tools I work with
        </h2>
      </div>

      {/* ── Tool categories ── */}
      <div className="flex flex-col gap-8">
        {toolCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-4">
              {cat.label}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cat.items.map((tool) => (
                <span
                  key={tool}
                  className="relative overflow-hidden inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white/80"
                  style={{
                    border: "1.5px solid rgba(96,165,250,0.22)",
                    boxShadow:
                      "inset 0 0 40px rgba(59,130,246,0.05), 0 4px 16px rgba(0,0,0,0.4)",
                    background:
                      "linear-gradient(135deg, rgba(12,14,20,0.68) 0%, rgba(12,14,20,0.55) 100%)",
                  }}
                >
                  <span
                    className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                    }}
                  />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
