export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{ 
      borderTop: '1px solid var(--color-border)', 
      padding: '2rem var(--section-px)', 
      background: 'var(--color-bg)' 
    }}>
      <div style={{ 
        maxWidth: '1600px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.5rem',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '0.85rem', 
          color: 'var(--color-text-secondary)',
          fontFamily: 'var(--font-body)'
        }}>
          Designed & Developed by Santhosh Kumar
        </p>
        <p style={{ 
          margin: 0, 
          fontSize: '0.75rem', 
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-mono)'
        }}>
          &copy; {year}
        </p>
      </div>
    </footer>
  );
}
