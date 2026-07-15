import { motion } from 'framer-motion';
import { Mail, Code, UserCircle, FileText, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { socials } from '../../data/socials';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const contactLinks = [
    {
      id: 'email',
      icon: <Mail size={20} />,
      label: 'Email',
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      id: 'linkedin',
      icon: <UserCircle size={20} />,
      label: 'LinkedIn',
      value: 'santhoshkumar546',
      href: socials.linkedin,
    },
    {
      id: 'github',
      icon: <Code size={20} />,
      label: 'GitHub',
      value: 'santhoshici',
      href: socials.github,
    },
    {
      id: 'resume',
      icon: <FileText size={20} />,
      label: 'Resume',
      value: 'Download PDF',
      href: socials.resume,
      download: true,
    },
  ];

  return (
    <section id="contact" aria-label="Contact information" style={{ paddingBottom: 'calc(var(--section-py) * 1.5)' }}>
      <div className="section-wrapper">
        <SectionTitle 
          label="Contact" 
          title="Let's build together" 
          subtitle="I'm currently seeking placement opportunities for 2027 in AI/ML and Software Engineering roles."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              variants={itemVariants}
              href={link.href}
              target={link.id === 'email' || link.id === 'resume' ? undefined : '_blank'}
              rel="noopener noreferrer"
              download={link.download}
              className="card"
              style={{
                textDecoration: 'none',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(64,152,145,0.1)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {link.icon}
                </div>
                <ArrowUpRight size={16} color="var(--color-text-muted)" style={{ opacity: 0.5 }} />
              </div>
              
              <div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>
                  {link.label}
                </p>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-primary)', wordBreak: 'break-all' }}>
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
