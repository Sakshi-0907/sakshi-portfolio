// Projects.tsx — shows each project from content.ts.
// The "&&" pattern only renders a link if that URL exists.
import Section from "./Section";
import { projects, profile } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags" aria-label="Technologies used">
              {project.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="project-links">
              {project.liveUrl && <a href={project.liveUrl}>Live site</a>}
              {project.codeUrl && <a href={project.codeUrl}>Source code</a>}
            </div>
          </article>
        ))}
      </div>
      <p className="note">
        More projects in progress. Follow along on <a href={profile.github}>GitHub</a>.
      </p>
    </Section>
  );
}
