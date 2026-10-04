// src/sections/About.tsx
import { useState } from 'react';
import { about } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/aakib_pic.jpeg';

export function About() {
  const titleRef  = useScrollReveal<HTMLDivElement>();
  const textRef   = useScrollReveal<HTMLDivElement>();
  const imageRef  = useScrollReveal<HTMLDivElement>();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        {/* Section header */}
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-number mono">01.</span>
          <h2 className="section-title" id="about-title">About Me</h2>
          <span className="section-line" aria-hidden="true" />
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text reveal" ref={textRef}>
            {about.paragraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}

            <ul
              className="bullet-list focus-list"
              aria-label="Technical focus areas"
            >
              {about.focusList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <blockquote
              className="about-pull-quote"
              dangerouslySetInnerHTML={{ __html: about.pullQuote }}
            />
          </div>

          {/* Image */}
          <div
            className="about-image-wrap reveal reveal-delay-1"
            ref={imageRef}
          >
            {imgError ? (
              <div
                className="profile-initials"
                aria-label="Syed Aakib Hossain — SAH initials placeholder"
              >
                SAH
              </div>
            ) : (
              <img
                src={profileImg}
                alt="Syed Aakib Hossain — profile photo"
                className="about-img"
                width={300}
                height={300}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
