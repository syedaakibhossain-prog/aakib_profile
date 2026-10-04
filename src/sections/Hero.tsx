// src/sections/Hero.tsx
import { identity, contact } from '../data/portfolio';
import { ParticleCanvas } from '../components/ParticleCanvas';

export function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero introduction">
      <ParticleCanvas />

      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hi, my name is</p>

          <h1 className="hero-name">
            {identity.fullName}
            <span className="name-period">.</span>
          </h1>

          <h2 className="hero-tagline">
            I build{' '}
            <span className="tagline-accent">real-time</span> &amp;{' '}
            <span className="tagline-accent">AI-powered</span> web apps.
          </h2>

          <p className="hero-desc">
            {identity.role}. Based in {identity.location}.{' '}
            {identity.availability}.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-outline"
              id="hero-cta-projects"
            >
              View My Work
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              id="hero-cta-github"
              aria-label="GitHub profile"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        scroll
      </div>
    </section>
  );
}
