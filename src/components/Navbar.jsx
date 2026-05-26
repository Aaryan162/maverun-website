import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import maverunLogo from '../assets/maverun.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 72, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 5vw, 4rem)',
        background: scrolled ? 'rgba(18, 20, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: 'relative', zIndex: 101 }}>
          <img src={maverunLogo} alt="MAVERUN" width="196" height="38" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }} className="nav-desktop">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{
              fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 500, letterSpacing: '0.02em',
              color: pathname === link.path ? '#fff' : 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
              onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { if (pathname !== link.path) { e.target.style.color = 'rgba(255,255,255,0.7)'; e.target.style.textShadow = 'none'; } }}
            >
              {link.label}
              {pathname === link.path && (
                <span style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--color-blue-electric)', boxShadow: '0 0 10px var(--color-blue-electric)' }} />
              )}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="nav-cta-desktop" style={{ 
          padding: '12px 28px', fontSize: 16, borderRadius: '24px 4px 24px 4px', fontWeight: 600,
          background: 'linear-gradient(90deg, rgba(28,30,36,0.6), rgba(26,143,255,0.1))',
          color: '#fff', border: '1px solid rgba(26,143,255,0.3)',
          boxShadow: '0 0 20px rgba(26,143,255,0.1), inset 0 0 15px rgba(26,143,255,0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative', overflow: 'hidden', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
            Start a Project <ArrowRight size={18} />
          </span>
          <div className="btn-shimmer" style={{ position: 'absolute', top: 0, left: '-100%', width: '200%', height: '100%', background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)', transition: 'left 0.6s ease' }} />
        </Link>

        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="nav-mobile-btn" style={{ 
          display: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
          color: '#fff', padding: 10, borderRadius: '50%', position: 'relative', zIndex: 101,
          backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
        }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Premium Mobile Menu overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} style={{
        position: 'fixed', inset: 0, zIndex: 99, 
        background: 'radial-gradient(circle at top right, rgba(37,99,235,0.05) 0%, #0F1115 80%)', 
        backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
          {navLinks.map((link, index) => (
            <Link key={link.path} to={link.path} className={`mobile-link ${mobileOpen ? 'visible' : ''}`} style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 500, letterSpacing: '0.01em',
              color: pathname === link.path ? '#fff' : 'rgba(255,255,255,0.6)', textDecoration: 'none',
              transition: 'all 0.3s ease', transitionDelay: `${index * 0.05}s`
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" className={`mobile-link mobile-cta ${mobileOpen ? 'visible' : ''}`} style={{ 
            marginTop: 32, width: '80%', maxWidth: 280, padding: '14px 24px', borderRadius: '24px 4px 24px 4px',
            background: 'var(--color-blue-electric)', color: '#fff', fontSize: '1.1rem', fontWeight: 600,
            textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
            boxShadow: '0 8px 25px rgba(26,143,255,0.3)', transitionDelay: '0.35s'
          }}>
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
        
        {/* Mobile ambient bottom glow */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20vh', background: 'linear-gradient(0deg, rgba(37,99,235,0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop, .nav-cta-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        .nav-cta-desktop:hover {
          transform: translateY(-2px) !important;
          background: rgba(26,143,255,0.2) !important;
          border-color: rgba(26,143,255,0.6) !important;
          box-shadow: 0 10px 30px rgba(26,143,255,0.3), inset 0 0 20px rgba(26,143,255,0.2) !important;
        }
        .nav-cta-desktop:hover .btn-shimmer {
          left: 100% !important;
        }
        .nav-mobile-btn:hover {
          background: rgba(255,255,255,0.1) !important;
        }
        .mobile-link {
          transform: translateY(30px);
          opacity: 0;
        }
        .mobile-link.visible {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-link:active {
          color: var(--color-blue-electric) !important;
        }
      `}</style>
    </>
  );
}
