import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 cursor-pointer";

// secondary uses explicit token refs — glass utility bakes in --radius-card (20px),
// buttons need --radius-btn (12px).
const styles: Record<Variant, string> = {
  // ponytail: AA contrast — #1D4ED8→#2563EB scores ~7.5:1 and ~5.2:1 on dark bg
  primary:
    "bg-[linear-gradient(135deg,#1D4ED8,#2563EB)] text-white px-6 py-3 rounded-[var(--radius-btn)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25",
  secondary:
    "bg-[var(--glass-fill)] border border-[var(--glass-border)] backdrop-blur-md text-[var(--text-primary)] px-6 py-3 rounded-[var(--radius-btn)] hover:bg-white/10",
  ghost:
    "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  style,
  disabled,
  type,
  onClick,
}: Props) {
  const cls = [
    base,
    styles[variant],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={cls} style={style} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} disabled={disabled} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
