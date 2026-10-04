// src/sections/Contact.tsx
import { contactSection, contact } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-inner reveal" ref={ref}>
          <p className="contact-eyebrow mono">{contactSection.eyebrow}</p>

          <h2 className="contact-heading" id="contact-title">
            {contactSection.heading}
          </h2>

          <p className="contact-body">{contactSection.body}</p>

          <a
            href={contactSection.cta.href}
            className="btn-outline"
            id="contact-cta-email"
            aria-label={`Send email to ${contact.email}`}
          >
            {contactSection.cta.label} →
          </a>

          <div className="contact-details" aria-label="Contact information">
            <p className="contact-detail">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="contact-detail">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
