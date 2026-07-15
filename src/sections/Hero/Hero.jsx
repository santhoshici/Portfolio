import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { typingRoles, socials } from '../../data/socials';

function TypingText({ roles }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, roles]);

  return (
    <span style={{ color: 'var(--color-accent)', display: 'inline-block', minWidth: '18ch' }}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: 'var(--color-accent)',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
        }}
        aria-hidden="true"
      />
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(var(--section-py) + 5rem) var(--section-px) var(--section-py)',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p variants={itemVariants} className="text-label" style={{ marginBottom: '1.5rem' }}>
          Available for campus placements · 2027
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-hero"
          style={{ margin: 0, marginBottom: '1.25rem', maxWidth: '16ch' }}
        >
          Building AI systems that work in the real world.
        </motion.h1>

        {/* Typing subtitle */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}
        >
          Santhosh Kumar —{' '}
          <TypingText roles={typingRoles} />
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          B.Tech CSE (AI/ML) at VIT Chennai · GPA 8.68 · Interned building deployed voice AI
          and ML pipelines at a logistics startup. 5 projects across deep learning,
          automation, and full-stack.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to projects section"
          >
            View Projects
            <ArrowDown size={16} />
          </button>
          <a
            href={socials.resume}
            download
            className="btn-secondary"
            aria-label="Download resume PDF"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div
            style={{
              width: '32px',
              height: '1px',
              background: 'var(--color-border)',
            }}
          />
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
