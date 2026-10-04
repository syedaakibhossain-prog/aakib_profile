// src/components/SidebarSocial.tsx
import { contact } from '../data/portfolio';

export function SidebarSocial() {
  return (
    <>
      {/* Left — social links */}
      <div className="sidebar sidebar-left" aria-label="Social links">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
          aria-label="GitHub profile"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>

      {/* Right — email */}
      <div className="sidebar sidebar-right" aria-label="Email">
        <a
          href={`mailto:${contact.email}`}
          className="sidebar-link"
          aria-label="Send email"
        >
          {contact.email}
        </a>
      </div>
    </>
  );
}
