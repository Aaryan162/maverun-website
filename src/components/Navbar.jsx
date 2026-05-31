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
        position: 'fixed', top: 0, left: 0, right: 0, height: 76, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 4vw, 3.5rem)',
        background: scrolled ? 'rgba(8, 10, 16, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.08)' : '1px solid transparent',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>

        {/* ── LEFT: Logo ── */}
        <Link 
          to="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: 'relative', zIndex: 101, flexShrink: 0, marginLeft: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}
        >
          <img src={maverunLogo} alt="MAVERUN" width="196" height="38" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* ── CENTER: Nav Pill ── */}
        <div className="nav-pill-desktop" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 4,
          background: 'rgba(10, 13, 22, 0.72)',
          border: '1px solid rgba(59,130,246,0.12)',
          borderRadius: 100,
          padding: '6px 8px',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}>
          {navLinks.map(link => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="nav-pill-link"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.02em',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.62)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: 100,
                  background: isActive ? 'rgba(59,130,246,0.14)' : 'transparent',
                  border: isActive ? '1px solid rgba(59,130,246,0.22)' : '1px solid transparent',
                  position: 'relative',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ── RIGHT: CTA + Mobile Toggle ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, marginRight: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}>
          <Link to="/contact" className="nav-cta-desktop" style={{ 
            padding: '10px 22px', fontSize: 14, borderRadius: '20px 4px 20px 4px', fontWeight: 600,
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(90deg, rgba(18,22,36,0.7), rgba(26,143,255,0.12))',
            color: '#fff', border: '1px solid rgba(59,130,246,0.28)',
            boxShadow: '0 0 18px rgba(59,130,246,0.08), inset 0 0 12px rgba(59,130,246,0.08)',
            backdropFilter: 'blur(12px)',
            position: 'relative', overflow: 'hidden', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
              Start a Project <ArrowRight size={16} />
            </span>
            <div className="btn-shimmer" style={{ position: 'absolute', top: 0, left: '-100%', width: '200%', height: '100%', background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.08) 50%, transparent 75%)', transition: 'left 0.6s ease' }} />
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="nav-mobile-btn" style={{ 
            display: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
            color: '#fff', padding: 10, borderRadius: '50%', position: 'relative', zIndex: 101,
            backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
          }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
        @media (max-width: 900px) {
          .nav-pill-desktop { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-cta-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        .nav-pill-link:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.08) !important;
        }
        .nav-cta-desktop:hover {
          transform: translateY(-2px) !important;
          background: rgba(59,130,246,0.18) !important;
          border-color: rgba(59,130,246,0.5) !important;
          box-shadow: 0 8px 28px rgba(59,130,246,0.25), inset 0 0 18px rgba(59,130,246,0.15) !important;
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
