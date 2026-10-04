// src/sections/Projects.tsx
import { useState } from 'react';
import { projects, type Project } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Projects() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-number mono">03.</span>
          <h2 className="section-title" id="projects-title">Projects</h2>
          <span className="section-line" aria-hidden="true" />
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getLinkIcon(label: string): string {
  if (label === 'GitHub')    return '⌥';
  if (label === 'Live Demo') return '↗';
  if (label === 'API')       return '⚙';
  return '→';
}

function ProjectItem({ project }: { project: Project }) {
  const ref = useScrollReveal<HTMLElement>();
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={`project-item reveal${project.reverse ? ' reverse' : ''}`}
      ref={ref}
      aria-label={`${project.title} — ${project.subtitle}`}
    >
      {/* Image */}
      <div className="project-img-wrap">
        {imgError ? (
          <div
            className="project-placeholder"
            role="img"
            aria-label={project.imageAlt}
          >
            <span>{project.title} — {project.subtitle}</span>
          </div>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-img"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="project-img-overlay" aria-hidden="true" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="project-content">
        <p className="project-label">{project.label}</p>
        <h3 className="project-title-el">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-description">
          {project.description}
        </div>

        <ul
          className="bullet-list project-highlights"
          aria-label="Project highlights"
        >
          {project.highlights.map((h, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
          ))}
        </ul>

        <div className="project-tech" aria-label="Technologies used">
          {project.techStack.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-link${link.label === 'Live Demo' ? ' project-link--demo' : ''}`}
              aria-label={`${link.label} for ${project.title}`}
            >
              <span className="project-link-icon" aria-hidden="true">
                {getLinkIcon(link.label)}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
