import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Bot, BarChart3, Code2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroBackground from '../components/HeroBackground';

const categories = ['All', 'Automotive', 'Education', 'Retail & E-Commerce', 'Hospitality', 'Air Travel', 'FMCG', 'Web, AI & Software'];

const caseStudies = [
  { name: 'Automotive', category: 'Automotive', tag: 'Automotive · Paid Media', budget: '~USD 400K/month', metric: '+340%', metricLabel: 'Lead Volume', subMetric: '62% Reduction in CPL', desc: 'Multi-dealer, multi-brand paid media across GCC markets.', services: 'Meta Ads, TikTok Ads, Snapchat Ads', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800' },
  { name: 'Education', category: 'Education', tag: 'Education · Full Funnel', budget: '~INR 1 Cr/month', metric: '2,100+', metricLabel: 'Qualified Leads', subMetric: '', desc: 'Multi-school lead generation across India. CRM-integrated campaign architecture.', services: 'Meta Ads, Google Ads, DV360', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
  { name: 'Retail & E-Commerce', category: 'Retail & E-Commerce', tag: 'Retail · Google Ads', budget: '~GBP 1M/month', metric: '4.8x', metricLabel: 'ROAS', subMetric: '', desc: 'Europe-wide performance campaign with Shopping, PMax, and Demand Gen integration.', services: 'Google Ads', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Hospitality', category: 'Hospitality', tag: 'Hospitality · Multi-Channel', budget: '~INR 1Cr/month', metric: '24x', metricLabel: 'ROAS', subMetric: '', desc: '200+ luxury properties managed globally.', services: 'Google Ads, Meta Ads, Publisher, LinkedIn', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
  { name: 'Air Travel', category: 'Air Travel', tag: 'Air Travel · Performance', budget: '~INR 1 Cr/month', metric: '22x', metricLabel: 'ROAS', subMetric: '', desc: '12+ international routes and 50+ domestic routes.', services: 'Google, Meta, Bing, Affiliate, Programmatic', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800' },
  { name: 'FMCG', category: 'FMCG', tag: 'FMCG · Africa Region', budget: '~USD 200K/month', metric: '5,000+', metricLabel: 'Store Visits', subMetric: '', desc: '40+ stores managed across Africa.', services: 'Meta Ads, Google Ads', image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=800' },
];

const capabilities = [
  { icon: Code, title: 'Custom Web Platforms', desc: 'Custom React and Next.js websites, e-commerce platforms, and marketing sites — built for speed, SEO, and conversion.', tags: ['React', 'Next.js', 'E-commerce'] },
  { icon: Code2, title: 'Software Development', desc: 'Full-cycle custom software, mobile apps (iOS/Android), and enterprise web applications built securely.', tags: ['Node.js', 'React Native', 'SaaS'] },
  { icon: Bot, title: 'AI Agents & Automation', desc: 'AI agents that audit ad accounts, generate reports, optimize bids, and automate repetitive workflows.', tags: ['LLM', 'AI Agents', 'Automation'] },
  { icon: BarChart3, title: 'Data Pipelines', desc: 'GA4 setup, custom attribution models, real-time reporting dashboards, and deep CRM integrations.', tags: ['GA4', 'Attribution', 'CRM'] },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const filtered = activeFilter === 'All'
    ? caseStudies
    : activeFilter === 'Web, AI & Software'
    ? []
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        <div className="container" style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h1 style={{ marginBottom: 24, fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>Work that <span className="gradient-text-animated">speaks for itself.</span></h1></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', maxWidth: 650 }}>Case studies from brands across automotive, retail, education, hospitality, and beyond.</p></ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                  fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 700,
                  padding: '12px 24px', borderRadius: 100, cursor: 'pointer',
                  background: activeFilter === cat ? 'var(--color-blue)' : 'transparent',
                  color: activeFilter === cat ? '#fff' : 'var(--color-text-secondary)',
                  border: `1px solid ${activeFilter === cat ? 'var(--color-blue)' : 'var(--color-border)'}`,
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === cat ? '0 0 20px rgba(18,55,216,0.3)' : 'none'
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      {(activeFilter !== 'Web, AI & Software') && (
        <section style={{ paddingBottom: 100 }}>
          <div className="container">
            <div className="grid-2" style={{ gap: 40 }}>
              {filtered.map((c, i) => (
                <ScrollReveal key={c.name + c.tag} delay={i * 0.1}>
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9', border: '1px solid var(--color-border)', cursor: 'pointer' }} 
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-blue-electric)'; e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
                      <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'brightness(0.7)' }} />
                      <div style={{ position: 'absolute', top: 20, left: 20 }}>
                        <span style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>{c.tag}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 8 }}>{c.name}</h3>
                      <p style={{ fontSize: 15, color: 'var(--color-text-steel)', marginBottom: 16, fontFamily: 'monospace' }}>BUDGET: {c.budget}</p>
                      <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>{c.desc}</p>
                      
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--color-blue-electric)', textShadow: '0 0 20px rgba(26,143,255,0.3)' }}>{c.metric}</span>
                        <span style={{ fontSize: 16, color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.metricLabel}</span>
                      </div>
                      
                      {c.subMetric && <p style={{ fontSize: 14, color: 'var(--color-blue-neon)', marginBottom: 12, fontWeight: 600 }}>✦ {c.subMetric}</p>}
                      <p style={{ fontSize: 14, color: 'var(--color-text-steel)' }}>Platforms: {c.services}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Web & AI Section */}
      {(activeFilter === 'All' || activeFilter === 'Web, AI & Software') && (
        <section style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <ScrollReveal><h2 className="section-heading" style={{ marginBottom: 16, fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Web, AI & Software</h2></ScrollReveal>
            <ScrollReveal delay={0.05}><p className="section-sub" style={{ marginBottom: 64, fontSize: 20 }}>Built to perform. Engineered to scale. Here's what our technical team builds.</p></ScrollReveal>
            <div className="grid-2" style={{ gap: 32 }}>
              {capabilities.map((cap, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div style={{ height: '100%', padding: 40, borderRadius: 20, border: '1px solid var(--color-border)', background: 'transparent', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(18,55,216,0.15)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: '#000000', border: '1px solid rgba(26,143,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 0 20px rgba(26,143,255,0.2)' }}>
                      <cap.icon size={32} style={{ color: 'var(--color-blue-electric)' }} />
                    </div>
                    <h3 style={{ fontSize: 24, marginBottom: 16 }}>{cap.title}</h3>
                    <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>{cap.desc}</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      {cap.tags.map(t => <span key={t} className="tag" style={{ background: 'transparent', border: '1px solid var(--color-blue-border)' }}>{t}</span>)}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Metrics (ALIVE) */}
      <section onMouseMove={handleMouseMove} style={{ padding: '10rem 24px', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', top: mousePos.y, left: mousePos.x, width: 800, height: 800, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(26,143,255,0.1) 0%, transparent 60%)', pointerEvents: 'none', transition: 'all 0.1s ease', zIndex: 0 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ display: 'inline-block', marginBottom: 32, padding: '12px 24px', borderRadius: 100, border: '1px solid var(--color-blue-electric)', background: 'rgba(18,55,216,0.1)', color: 'var(--color-blue-neon)', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>MEASURABLE IMPACT</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: 1000, margin: '0 auto', lineHeight: 1.2 }}>
              Combined, our campaigns have driven <span style={{ color: '#fff', textShadow: '0 0 30px rgba(26,143,255,0.6)' }} className="gradient-text-animated">$50M+</span> in measurable client revenue.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA (ALIVE) */}
      <section style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <ScrollReveal><h2 style={{ marginBottom: 24, fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Want results <span className="gradient-text-animated">like these?</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ color: 'var(--color-text-secondary)', marginBottom: 48, fontSize: 20 }}>Let's build your next case study together.</p></ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', fontSize: 18, borderRadius: 12, boxShadow: '0 0 30px rgba(18,55,216,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              Start a Project <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
