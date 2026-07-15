import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { navItems, socials } from '../../data/socials';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => item.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.5rem 1rem',
          background: scrolled ? 'rgba(230,229,225,0.85)' : 'rgba(230,229,225,0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(212,210,204,0.6)',
          borderRadius: '999px',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: '0.25rem 0.75rem',
            marginRight: '0.25rem',
            letterSpacing: '0.04em',
          }}
          aria-label="Go to top"
        >
          SK
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '0.125rem' }} className="nav-desktop-links">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              style={{
                background: activeSection === item.href.slice(1) ? 'rgba(64,152,145,0.12)' : 'transparent',
                border: 'none',
                borderRadius: '999px',
                padding: '0.35rem 0.9rem',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: activeSection === item.href.slice(1) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 200ms',
                fontFamily: 'var(--font-body)',
                letterSpacing: '-0.01em',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href={socials.resume}
          download
          className="btn-primary"
          style={{ padding: '0.4rem 1rem', fontSize: '0.82rem', marginLeft: '0.5rem' }}
          aria-label="Download resume PDF"
        >
          <FileDown size={14} />
          Resume
        </a>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.35rem',
            color: 'var(--color-text-primary)',
          }}
          className="nav-hamburger"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              zIndex: 99,
              background: 'rgba(230,229,225,0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '1rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={socials.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              <FileDown size={14} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
