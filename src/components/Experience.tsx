// Experience.tsx — a timeline. Jobs come from content.ts.
import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <div className="timeline-head">
              <h3>{job.role}, {job.company}</h3>
              <p className="meta">{job.period} | {job.location}</p>
            </div>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
