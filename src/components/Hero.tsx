// Hero.tsx — the first thing visitors see.
import { profile } from "../data/content";
import Target from "./Target";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="hero-name">{profile.name}, {profile.role}</p>
        <h1 className="hero-headline">{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">See projects</a>
          {/* "download" tells the browser to save the file */}
          <a className="button" href={profile.resumeFile} download>Download resume (PDF)</a>
        </div>
      </div>
      <Target />
    </section>
  );
}
