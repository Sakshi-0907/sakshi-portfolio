// Section.tsx — a reusable wrapper. Every section has the same
// structure (id, heading, content), so we write it once.
// "props" are the inputs a component receives, like function arguments.
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode; // whatever is placed between <Section> and </Section>
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
