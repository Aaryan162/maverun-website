const marqueeItems = [
  'META ADS', 'GOOGLE ADS', 'TIKTOK ADS', 'SNAPCHAT ADS', 'LINKEDIN ADS',
  'PERFORMANCE MARKETING', 'WEB DEVELOPMENT', 'AGENTIC AI', 'SEO', 'BRAND STRATEGY',
];

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{
      background: 'var(--color-soft-dark)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
        background: 'linear-gradient(90deg, var(--color-soft-dark), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
        background: 'linear-gradient(270deg, var(--color-soft-dark), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div className="marquee-track" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'rgba(244, 244, 244, 0.35)',
            whiteSpace: 'nowrap',
            padding: '0 20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 20,
          }}>
            {item}
            <span style={{ color: 'var(--color-blue-electric)', fontSize: 8 }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
