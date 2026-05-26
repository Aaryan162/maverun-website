import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

function LinkedInIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}
function InstagramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
}
function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}
function FacebookIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
}

export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid var(--color-border)', paddingTop: 64 }}>
      <div className="container">
        {/* Top Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 48, paddingBottom: 48 }} className="footer-grid">
          {/* Logo & Description */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img src={footerLogo} alt="MAVERUN" width="242" height="80" style={{ height: 80, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 24px rgba(26, 143, 255, 0.5))' }} />
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.7, maxWidth: 320, marginBottom: 20 }}>
              Performance Marketing · Web Development · AI Solutions
            </p>
            <a href="mailto:maverunn@gmail.com" style={{ color: 'var(--color-blue-electric)', fontSize: 15, transition: 'all 0.2s', fontWeight: 600 }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'var(--color-blue-electric)'}>maverunn@gmail.com</a>
          </div>

          {/* Navigation Links */}
          <div>
            <div role="heading" aria-level="2" style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff', marginBottom: 24 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} style={{ color: 'var(--color-text-muted)', fontSize: 15, transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.target.style.color = 'var(--color-text-muted)'; e.target.style.transform = 'translateX(0)'; }}
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <div role="heading" aria-level="2" style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff', marginBottom: 24 }}>Connect</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/company/maverun/?viewAsMember=true" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.boxShadow = '0 0 15px rgba(10,102,194,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}><LinkedInIcon /></a>
              <a href="https://www.instagram.com/maverun.co/?utm_source=ig_web_button_share_sheet" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.borderColor = '#E1306C'; e.currentTarget.style.boxShadow = '0 0 15px rgba(225,48,108,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}><InstagramIcon /></a>
              <a href="https://x.com/maverun01?s=20" aria-label="X Profile" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}><XIcon /></a>
              <a href="https://www.facebook.com/people/Maverun/61589162194579/" aria-label="Facebook Profile" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1877F2'; e.currentTarget.style.borderColor = '#1877F2'; e.currentTarget.style.boxShadow = '0 0 15px rgba(24,119,242,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}><FacebookIcon /></a>
            </div>
            <p style={{ color: 'var(--color-text-steel)', fontSize: 14, marginTop: 24 }}>Mumbai, India</p>
          </div>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(26,143,255,0.2), transparent)', width: '100%' }} />

        <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'var(--color-text-steel)', fontSize: 13 }}>© {new Date().getFullYear()} Maverun. All rights reserved.</span>
          <span style={{ color: 'var(--color-text-steel)', fontSize: 13 }}>Built with precision.</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { 
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; } 
        }
      `}</style>
    </footer>
  );
}
