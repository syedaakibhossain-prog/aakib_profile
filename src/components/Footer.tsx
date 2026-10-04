// src/components/Footer.tsx
import { contact } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <ul className="footer-links" aria-label="Social links">
        <li>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" id="footer-github">
            GitHub
          </a>
        </li>
        <li>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" id="footer-linkedin">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} id="footer-email">
            Email
          </a>
        </li>
      </ul>
      <p className="footer-copy">
        Designed &amp; Built by{' '}
        <span className="accent">&lt;SAH/&gt;</span>
        {' '}— Syed Aakib Hossain
      </p>
    </footer>
  );
}
