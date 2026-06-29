import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block px-3 py-1 text-[length:var(--text-small)] rounded-[var(--radius-pill)] bg-white/10 text-[var(--text-muted)] ${className}`}
    >
      {children}
    </span>
  );
}
