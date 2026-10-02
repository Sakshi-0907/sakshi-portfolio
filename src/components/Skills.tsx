import Section from "./Section";
import { skills, languages } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
        <div className="skill-row">
          <dt>Languages spoken</dt>
          <dd>{languages}</dd>
        </div>
      </dl>
    </Section>
  );
}
