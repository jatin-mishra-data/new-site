// Global photographic page background + progressive dark overlay (docs/design.md §2a, docs/TRD.md §8).
// Decorative only — hidden from assistive tech; art-directed per breakpoint via CSS (no JS, no extra fetch cost).
export default function PageBackground() {
  return <div className="page-background" aria-hidden="true" />;
}
