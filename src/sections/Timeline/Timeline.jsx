import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { timelineItems } from '../../data/timeline';

export default function Timeline() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" aria-label="Career timeline" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div style={{ padding: 'var(--section-py) 0', overflow: 'hidden' }}>
        <div style={{ padding: '0 var(--section-px)', maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <SectionTitle label="Timeline" title="My journey so far" />
            <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '3rem' }}>
              <button
                onClick={() => scroll(-1)}
                aria-label="Scroll timeline left"
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-card)',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 200ms, background 200ms',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Scroll timeline right"
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-card)',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 200ms, background 200ms',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          role="list"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            paddingLeft: 'var(--section-px)',
            paddingRight: 'var(--section-px)',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ flexShrink: 0, width: '280px' }}
            >
              <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
                {/* Date chip */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.65rem',
                  background: 'rgba(64,152,145,0.1)',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                  letterSpacing: '0.04em',
                }}>
                  {item.date}
                </div>

                {/* Connector dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: i === timelineItems.length - 1
                      ? 'var(--color-accent-light)'
                      : 'var(--color-accent)',
                    flexShrink: 0,
                    boxShadow: `0 0 0 3px rgba(64,152,145,0.15)`,
                  }} />
                  <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ margin: '0 0 0.6rem 1.75rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.03em' }}>
                  {item.subtitle}
                </p>
                <p style={{ margin: '0 0 0 1.75rem', fontSize: '0.83rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
