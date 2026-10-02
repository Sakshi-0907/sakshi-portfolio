// Contact.tsx — the closing section. "mailto:" opens the visitor's email app.
import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="contact-lead">
        Looking for a Werkstudent in front-end or data? I'd like to hear about it.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>Email me</a>
        <a className="button" href={profile.linkedin}>LinkedIn</a>
        <a className="button" href={profile.github}>GitHub</a>
      </div>
      <p className="footer">{profile.location} | © {new Date().getFullYear()} {profile.name}</p>
    </Section>
  );
}
