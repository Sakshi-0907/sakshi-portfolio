// Education.tsx — reuses the timeline styles from Experience.
import Section from "./Section";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((d) => (
          <li key={d.degree} className="timeline-item">
            <h3>{d.degree}</h3>
            <p className="meta">{d.school}</p>
            <p className="meta">{d.period} | {d.location}</p>
            {d.grade && <p className="meta">{d.grade}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}