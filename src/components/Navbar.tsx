// src/components/Navbar.tsx
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { num: '01.', label: 'About',     href: '#about' },
  { num: '02.', label: 'Skills',    href: '#skills' },
  { num: '03.', label: 'Projects',  href: '#projects' },
  { num: '04.', label: 'Education', href: '#education' },
  { num: '05.', label: 'Contact',   href: '#contact' },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Highlight active nav item
      const sections = NAV_ITEMS.map(item => ({
        id: item.href.slice(1),
        el: document.getElementById(item.href.slice(1)),
      }));

      for (const { id, el } of [...sections].reverse()) {
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 860) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container">
          {/* Logo */}
          <a href="#hero" className="nav-logo" aria-label="Back to top">
            <span className="dim">&lt;</span>SAH<span className="dim">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              {NAV_ITEMS.map(({ num, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'nav-active' : ''}
                    aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                  >
                    <span className="nav-num">{num}</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(({ num, label, href }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="nav-num">{num}</span>{label}
          </a>
        ))}
      </nav>
    </>
  );
}
