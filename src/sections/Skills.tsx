// src/sections/Skills.tsx
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Skills() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-number mono">02.</span>
          <h2 className="section-title" id="skills-title">Skills</h2>
          <span className="section-line" aria-hidden="true" />
        </div>

        <div className="skills-grid">
          {skills.map((cat) => (
            <SkillCard key={cat.category} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  icon: string;
  category: string;
  skills: string[];
}

function SkillCard({ icon, category, skills: items }: SkillCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="skill-card reveal" ref={ref} role="article" aria-label={`${category} skills`}>
      <div className="skill-card-icon" aria-hidden="true">{icon}</div>
      <div className="skill-card-category mono">{category}</div>
      <div className="skill-tags">
        {items.map((skill) => (
          <span key={skill} className="tag-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}
