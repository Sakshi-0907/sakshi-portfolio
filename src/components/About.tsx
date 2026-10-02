import Section from "./Section";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      {about.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </Section>
  );
}
