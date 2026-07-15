import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';
import { skillGroups } from '../../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills">
      <div className="section-wrapper" style={{ paddingTop: 'calc(var(--section-py) * 0.75)' }}>
        <SectionTitle
          label="Skills"
          title="What I build with"
          subtitle="Organized by category, focusing on production-ready technologies I use for AI, ML, and automation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div key={group.label} variants={itemVariants} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ 
                  color: 'var(--color-accent)', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.75rem', 
                  opacity: 0.5 
                }}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>{group.label}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
