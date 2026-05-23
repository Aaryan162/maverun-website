import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import HeroBackground from '../components/HeroBackground';

const founders = [
  {
    name: 'Abdullah S.', role: 'Co-Founder — Strategy & Digital Marketing', initials: 'AS',
    tags: ['Paid Media', 'Strategy', 'GCC Markets'],
    bio: 'Abdullah leads campaign architecture, paid media strategy, and client growth. With deep expertise across GCC and South Asian markets, he brings precision to every campaign system.',
    skills: [{ name: 'Paid Media Expertise', pct: 95 }, { name: 'Campaign Architecture', pct: 92 }, { name: 'Multi-Market Strategy', pct: 90 }],
  },
  {
    name: 'Aaryan M.', role: 'Co-Founder — Technology & AI Solutions', initials: 'AM',
    tags: ['Full-Stack Dev', 'AI/ML', 'Systems Architecture'],
    bio: 'Aaryan leads full-stack web development, AI integration, and technical execution. He builds the infrastructure that makes performance marketing scalable — from agentic AI tools to conversion-optimized platforms.',
    skills: [{ name: 'Full-Stack Development', pct: 92 }, { name: 'AI & Automation', pct: 88 }, { name: 'Systems Architecture', pct: 85 }, { name: 'Cloud & DevOps', pct: 80 }],
  },
];

const values = [
  { title: 'Precision Over Volume', desc: 'We\'d rather run one campaign perfectly than ten campaigns poorly. Quality is not negotiable.' },
  { title: 'Data Before Opinions', desc: 'Every decision is backed by numbers. Intuition is a start, data is the answer.' },
  { title: 'Ownership Mentality', desc: 'We treat your budget like it\'s ours. No waste. No fluff. Only what works.' },
  { title: 'No Hands-Off Delivery', desc: 'We stay involved end to end. You\'ll never wonder what\'s happening with your campaigns.' },
  { title: 'Full Ownership', desc: 'We take complete accountability for outcomes. If it\'s not working, we fix it — no excuses.' },
  { title: 'Radical Transparency', desc: 'You see everything we see. Real-time dashboards, honest reporting, zero spin.' },
];

const industries = [
  'Automotive', 'Hospitality', 'Retail & E-Commerce', 'Education',
  'SaaS', 'Healthcare', 'FMCG', 'Real Estate',
  'Aviation', 'Finance', 'Luxury', 'Technology',
  'FinTech', 'EdTech', 'HealthTech', 'Travel & Tourism',
  'Apparel & Fashion', 'Logistics', 'Entertainment', 'Web3 & Crypto',
  'Manufacturing', 'Legal Services', 'Gaming', 'DTC Brands'
];

function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, color: 'var(--color-text-secondary)' }}>
        <span style={{ fontSize: 14 }}>{name}</span><span style={{ color: 'var(--color-blue-electric)', fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--color-blue), var(--color-glow-bright))', boxShadow: '0 0 10px rgba(26,143,255,0.5)', borderRadius: 2, width: visible ? `${pct}%` : '0%', transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s' }} />
      </div>
    </div>
  );
}

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...values, ...values];

  // ─ Drive-track center-pop state
  const driveContainerRef = useRef(null);
  const driveTrackRef = useRef(null);
  const driveAnimRef = useRef(null);
  const drivePosRef = useRef(0);
  const [driveCenteredIdx, setDriveCenteredIdx] = useState(-1);
  const DRIVE_CARD_W = 424; // 400 min-width + 24 gap
  const driveTotal = values.length;
  const driveTotalW = driveTotal * DRIVE_CARD_W;

  useEffect(() => {
    const SPEED = -0.4;
    function frame() {
      const currentCardW = window.innerWidth <= 640 ? 304 : 424; // 280 + 24 vs 400 + 24
      const currentTotalW = driveTotal * currentCardW;

      drivePosRef.current += SPEED;
      if (drivePosRef.current <= -currentTotalW) drivePosRef.current += currentTotalW;
      if (drivePosRef.current > 0) drivePosRef.current -= currentTotalW;
      if (driveTrackRef.current) driveTrackRef.current.style.transform = `translateX(${drivePosRef.current}px)`;

      if (driveContainerRef.current) {
        const cw = driveContainerRef.current.offsetWidth;
        const center = cw / 2;
        const offset = -drivePosRef.current;
        const rawIdx = Math.round((offset + center - currentCardW / 2) / currentCardW);
        const idx = ((rawIdx % driveTotal) + driveTotal) % driveTotal;
        setDriveCenteredIdx(idx);
      }
      driveAnimRef.current = requestAnimationFrame(frame);
    }
    driveAnimRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(driveAnimRef.current);
  }, [driveTotal]);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        <div className="container" style={{ maxWidth: 1000, position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h1 style={{ marginBottom: 24, fontSize: 'clamp(3.5rem, 8vw, 5.5rem)' }}>Your 360° Partner for<br/><span className="gradient-text-animated">Digital Growth.</span></h1></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', maxWidth: 800 }}>Web Development, App Development, AI Solutions, and Digital Marketing under one roof.</p></ScrollReveal>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <ScrollReveal><h2 className="section-heading text-center" style={{ marginBottom: 64, fontSize: 'clamp(3rem, 5vw, 4rem)' }}>The Founders</h2></ScrollReveal>
          <div className="grid-2" style={{ gap: 'clamp(24px, 4vw, 48px)' }}>
            {founders.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div style={{ padding: 'clamp(24px, 5vw, 48px)', borderRadius: 24, border: '1px solid var(--color-border)', background: 'transparent', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(18,55,216,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 24px)', marginBottom: 32 }}>
                    <div style={{ width: 'clamp(60px, 15vw, 80px)', height: 'clamp(60px, 15vw, 80px)', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-blue), var(--color-glow-bright))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 800, color: '#fff', boxShadow: '0 0 30px rgba(26,143,255,0.4)' }}>{f.initials}</div>
                    <div>
                      <h3 style={{ fontSize: 'clamp(20px, 4vw, 28px)', marginBottom: 4 }}>{f.name}</h3>
                      <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--color-text-secondary)' }}>{f.role}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
                    {f.tags.map(t => <span key={t} className="tag" style={{ background: 'transparent', border: '1px solid var(--color-blue-border)' }}>{t}</span>)}
                  </div>
                  <p style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 40, color: 'var(--color-text-secondary)' }}>{f.bio}</p>
                  {f.skills.map(s => <SkillBar key={s.name} name={s.name} pct={s.pct} />)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '10rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,rgba(18,55,216,0.02) 0px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,rgba(18,55,216,0.02) 0px,transparent 1px,transparent 80px)', zIndex: 0, pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h2 className="section-heading text-center" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.2 }}>Built on the belief that <span className="gradient-text-animated">execution beats budget.</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ marginTop: 40, marginBottom: 24, fontSize: 19, lineHeight: 1.8, color: '#fff' }}>
              MAVERUN started with frustration. We watched too many brands burn money on agencies that looked impressive on calls but failed where it actually mattered — <strong style={{ color: 'var(--color-blue-electric)' }}>execution</strong>.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p style={{ marginBottom: 24, fontSize: 17, color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Big promises. Bloated retainers. Junior teams hiding behind polished presentations while campaigns underperformed in silence. At the same time, the digital world became fragmented. One partner handled ads. Another built the website. Someone else managed analytics or AI. Nothing connected.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div style={{ borderLeft: '3px solid var(--color-blue-electric)', paddingLeft: 24, margin: '32px 0' }}>
              <p style={{ fontSize: 20, color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.5 }}>So we built MAVERUN differently.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p style={{ marginBottom: 24, fontSize: 17, color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              A lean, founder-led agency where performance marketing, web development, AI systems, analytics, and strategy work as one integrated engine — not separate services stitched together after the fact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p style={{ marginBottom: 24, fontSize: 17, color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              We didn't build this company through aggressive sales or investor backing. We built it through results. One client became five. Five became forty. Today, MAVERUN manages over <strong style={{ color: '#fff' }}>$1M in monthly media spend across 12+ markets</strong> — while every project still receives founder-level attention.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p style={{ fontSize: 18, color: 'var(--color-blue-electric)', lineHeight: 1.8, fontWeight: 500 }}>
              We believe in transparency over theatrics. Systems over guesswork. Long-term partnerships over short-term wins. If that resonates, we're probably a good fit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values (Auto-scroll) */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 56 }}>
          <ScrollReveal><h2 className="section-heading" style={{ margin: 0, fontSize: 'clamp(3rem, 5vw, 4rem)' }}>What drives us.</h2></ScrollReveal>
        </div>
        <div ref={driveContainerRef} className="drive-carousel-container" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="drive-fade-left" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div className="drive-fade-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div ref={driveTrackRef} className="drive-carousel-track" style={{ display: 'flex', gap: 24, paddingBottom: 60, paddingTop: 40, width: 'max-content', willChange: 'transform' }}>
            {doubled.map((v, i) => {
              const isCenter = i % driveTotal === driveCenteredIdx;
              return (
                <div key={i} className="drive-card" style={{
                  width: 400, flexShrink: 0,
                  border: `1px solid ${isCenter ? 'rgba(26,143,255,0.4)' : 'rgba(255,255,255,0.05)'}`,
                  padding: '60px 40px', borderRadius: 24,
                  background: isCenter
                    ? 'linear-gradient(180deg, rgba(26,143,255,0.05) 0%, transparent 100%)'
                    : 'rgba(255,255,255,0.01)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: isCenter ? 'translateY(-14px) scale(1.03)' : 'translateY(0) scale(1)',
                  boxShadow: isCenter ? '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(26,143,255,0.12)' : 'none',
                  display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, background: 'var(--color-blue-electric)', filter: 'blur(70px)', opacity: isCenter ? 0.3 : 0, transition: 'opacity 0.5s ease' }} />
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontSize: 100, fontWeight: 900, marginBottom: 32,
                    display: 'block', lineHeight: 0.8, transition: 'all 0.6s ease',
                    color: isCenter ? 'var(--color-blue-electric)' : 'transparent',
                    WebkitTextStroke: isCenter ? '0px' : '2px rgba(255,255,255,0.1)',
                    textShadow: isCenter ? '0 0 30px rgba(26,143,255,0.6)' : 'none',
                    transform: isCenter ? 'scale(1.1) translateX(10px)' : 'none'
                  }}>
                    {String((i % driveTotal) + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20, transition: 'color 0.4s', color: isCenter ? '#fff' : '#fff' }}>{v.title}</h3>
                  <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media(max-width:640px) {
            .drive-carousel-track > div { width: 280px !important; padding: 24px 18px !important; border-radius: 20px !important; }
            .drive-carousel-track > div span { font-size: 60px !important; margin-bottom: 16px !important; }
            .drive-carousel-track > div h3 { font-size: 18px !important; margin-bottom: 10px !important; }
            .drive-carousel-track > div p { font-size: 14px !important; }
          }
        `}</style>
      </section>

      {/* Industries - Premium Glowing Pills */}
      <section style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <ScrollReveal><h2 className="section-heading" style={{ marginBottom: 20, fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Industries we serve.</h2></ScrollReveal>
          <ScrollReveal delay={0.05}><p className="section-sub centered" style={{ marginBottom: 64 }}>These people understand multiple business models.</p></ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
            {industries.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 0.05}>
                <div className="industry-pill" style={{ border: '1px solid var(--color-border)', borderRadius: 100, padding: '16px 32px', fontSize: 16, fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text-secondary)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'default', background: 'transparent', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--color-blue-electric)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(26,143,255,0.25), inset 0 0 20px rgba(26,143,255,0.05)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'; e.currentTarget.style.background = 'rgba(26,143,255,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.background = 'transparent'; }}>
                  {ind}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {[
              { value: 1, prefix: '$', suffix: 'M+', label: 'Monthly Media Spend' },
              { value: 40, suffix: '+', label: 'Brands Served' },
              { value: 12, suffix: '+', label: 'Active Markets' },
              { value: 5, suffix: '+', label: 'Years Experience' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div style={{ padding: '40px 16px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 16, textShadow: '0 0 30px rgba(26,143,255,0.4)' }}>
                    <AnimatedCounter end={s.value} prefix={s.prefix || ''} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section onMouseMove={handleMouseMove} style={{ padding: '10rem clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', top: mousePos.y, left: mousePos.x, width: 800, height: 800, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(26,143,255,0.1) 0%, transparent 60%)', pointerEvents: 'none', transition: 'all 0.1s ease', zIndex: 0 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h2 style={{ marginBottom: 24, fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Want to build <span className="gradient-text-animated">something that scales?</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ color: 'var(--color-text-secondary)', marginBottom: 12, fontSize: 20 }}>Every conversation starts with strategy.</p></ScrollReveal>
          <ScrollReveal delay={0.15}><p style={{ color: 'var(--color-text-muted)', marginBottom: 48, fontSize: 16 }}>Not a sales pitch.</p></ScrollReveal>
          <ScrollReveal delay={0.2}><Link to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', fontSize: 18, borderRadius: 12, boxShadow: '0 0 30px rgba(18,55,216,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>Start a Project <ArrowRight size={20} /></Link></ScrollReveal>
        </div>
      </section>
    </>
  );
}
