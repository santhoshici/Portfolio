import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Code, ChevronRight } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { projects } from '../../data/projects';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="card project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        overflow: 'hidden',
        marginBottom: '4rem',
        background: 'var(--color-bg-elevated)',
      }}
    >
      <div
        className="project-layout"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top: Image or Abstract Space */}
        {project.image ? (
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)' }} className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'contain',
                background: '#111',
              }}
            />
          </div>
        ) : (
          <div style={{ display: 'none' }} className="project-no-image"></div>
        )}

        {/* Bottom (or Full): Content */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {project.category}
          </p>
          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            {project.title}
          </h3>
          <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontWeight: 400 }}>
            {project.subtitle}
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ margin: 0, color: 'var(--color-text-primary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {project.summary}
            </p>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '2rem', padding: '1.25rem', background: 'rgba(64,152,145,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-soft)' }}>
            <h4 style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Key Achievements</h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.highlights.slice(0, 3).map((item, i) => (
                <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, position: 'relative' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {Object.entries(project.stack).map(([category, techArray]) => (
              techArray.map(tech => (
                <span key={tech} className="skill-badge" style={{ background: 'var(--color-bg-card)' }}>
                  {tech}
                </span>
              ))
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                <Code size={14} /> Source
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {!project.github && !project.demo && (
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                Proprietary / Internal
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured projects" style={{ background: 'var(--color-bg)' }}>
      <div className="section-wrapper">
        <SectionTitle 
          label="Work" 
          title="Featured Projects" 
          subtitle="Production-ready applications, ML pipelines, and deployed automation systems."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .project-image-container {
          background: #111 !important;
        }
        @media (max-width: 1024px) {
          .project-image-container img {
            object-fit: cover !important;
          }
        }
      `}</style>
    </section>
  );
}
