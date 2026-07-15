import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3rem' }}
    >
      {label && <p className="text-label" style={{ marginBottom: '0.75rem' }}>{label}</p>}
      <h2 className="text-section-title" style={{ margin: 0, marginBottom: subtitle ? '0.75rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
