// src/sections/Education.tsx
import { education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Education() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const cardRef  = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section section--alt" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-number mono">04.</span>
          <h2 className="section-title" id="education-title">Education</h2>
          <span className="section-line" aria-hidden="true" />
        </div>

        <div className="education-card reveal" ref={cardRef} role="article">
          <div className="education-icon" aria-hidden="true">🎓</div>
          <div>
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-spec mono">{education.specialization}</p>
            <div className="education-meta">
              <span>{education.institution}</span>
              <span>{education.location}</span>
              <span>
                {education.status} · Expected {education.graduation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
