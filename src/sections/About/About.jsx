import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" aria-label="About Santhosh Kumar">
      <div className="section-wrapper">
        <SectionTitle label="About" title="Who I am" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)',
            gap: 'clamp(1.5rem, 4vw, 2.5rem)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left — Photo + Education card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                aspectRatio: '1/1',
                boxShadow: 'var(--shadow-lg)',
                maxHeight: '340px',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Santhosh Kumar — AI & ML Engineer at VIT Chennai"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="card"
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(64,152,145,0.12)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <GraduationCap size={18} color="var(--color-accent)" />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>VIT Chennai</p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    B.Tech CSE (AI & ML) · 2023–2027
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>
                    GPA: 8.62 / 10
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certification Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="card"
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(64,152,145,0.12)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Award size={18} color="var(--color-accent)" />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>IBM Generative AI</p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    Professional Certificate · June 2025
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Transformers · RAG · LangChain · HuggingFace
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Editorial text blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '0' }}>
            {/* Bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                lineHeight: 1.75,
                color: 'var(--color-text-primary)',
                margin: 0,
                fontWeight: 400,
              }}>
                I build AI systems that go beyond notebooks. From a real-time voice agent handling
                live logistics calls to ML pipelines that price truck routes, my focus is on
                deployed, working systems — not just experiments.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}>
                I'm pursuing B.Tech in CSE with an AI/ML specialization at VIT Chennai (GPA: 8.68).
                My internship at DropTruck involved building and shipping a production AI voice agent
                using Google Gemini Live and Exotel — a system that handles about 30% of their
                outbound logistics calls.
              </p>
            </motion.div>

            {/* Quick facts grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: '0.5rem'
              }}
            >
              {[
                { label: 'Current Focus', value: 'AI Automation & ML Systems' },
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Interests', value: 'LLMs, Voice AI, Data Pipelines' },
                { label: 'Status', value: 'Open to Placements · 2027' },
              ].map(fact => (
                <div
                  key={fact.label}
                  className="card"
                  style={{ padding: '0.85rem 1rem' }}
                >
                  <p style={{ margin: 0, fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', marginBottom: '0.25rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {fact.label}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
