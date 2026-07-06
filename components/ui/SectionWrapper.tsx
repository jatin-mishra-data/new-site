import type { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  return (
    <section id={id} className={`section-container isolate ${className}`}>
      <div className="content-container">{children}</div>
    </section>
  );
}
