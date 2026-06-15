import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Monitor, Code2, Bot, Search, Share2, Palette, BarChart3, Briefcase, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import servicesLogo from '../assets/services.png';
import HeroBackground from '../components/HeroBackground';

const servicesData = [
  { icon: Bot, name: 'Agentic AI Solutions', headline: 'Agentic AI Solutions', desc: 'We build AI agents that work while you sleep. Automated campaign audits, intelligent reporting, lead qualification, chatbots, and custom LLM workflows.', items: ['Campaign audit agents', 'Automated performance reports', 'LLM-powered content pipelines', 'Custom chatbots', 'CRM automation', 'Predictive analytics'], tools: ['OpenAI', 'Python', 'Zapier', 'Make', 'HubSpot'], cta: 'Talk to us about Agentic →', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { icon: Monitor, name: 'Web Development', headline: 'Web Development', desc: 'We build websites that are fast, beautiful, and built to convert. Not just good-looking — strategically designed around your customer journey.', items: ['Custom frontend development', 'WordPress solutions', 'Shopify e-commerce', 'Landing pages', 'CRO-focused UI/UX', 'Page speed optimization', 'Mobile-first responsive design', 'CMS integration'], tools: ['React', 'Next.js', 'WordPress', 'Shopify', 'Figma'], cta: 'Talk to us about Web →', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
  { icon: Code2, name: 'Software Development', headline: 'Software Development', desc: 'Full-cycle custom software, mobile apps, and scalable web applications built securely from the ground up.', items: ['Web Applications', 'Mobile Apps (iOS/Android)', 'SaaS Architecture', 'Enterprise Software', 'API Development', 'Database Design'], tools: ['Node.js', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Python', 'AWS', 'Firebase'], cta: 'Build your software →', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
  { icon: Zap, name: 'Performance Marketing', headline: 'Performance Marketing', desc: 'We run paid media that pays back. Our campaign architecture spans every major platform and every funnel stage — awareness to conversion to retention.', items: ['Google Search & Shopping', 'Performance Max', 'Demand Gen', 'Meta (FB + IG)', 'TikTok Ads', 'Snapchat Ads', 'Multi-market management', 'Budget optimization', 'Creative strategy', 'A/B testing'], tools: ['Google Ads', 'Meta', 'TikTok', 'Snapchat', 'GA4'], cta: 'Talk to us about Performance →', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { icon: Search, name: 'SEO & Content Strategy', headline: 'SEO & Content Strategy', desc: 'We get you ranked and keep you there. Technical foundation, content architecture, and link authority — the full stack of organic growth.', items: ['Technical SEO audit', 'Keyword architecture', 'On-page optimization', 'Content strategy & writing', 'Link building', 'Core Web Vitals', 'Schema markup', 'GSC management'], tools: ['Ahrefs', 'Semrush', 'Search Console', 'Screaming Frog'], cta: 'Talk to us about SEO →', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800' },
  { icon: Palette, name: 'Brand Strategy & Identity', headline: 'Brand Strategy & Identity', desc: 'We define who you are so everything else makes sense. Positioning, messaging, visual identity, and go-to-market strategy.', items: ['Brand positioning workshop', 'Naming and tagline', 'Visual identity system', 'Messaging framework', 'Brand guidelines', 'Competitor differentiation'], tools: ['Figma', 'Adobe'], cta: 'Talk to us about Brand →', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
  { icon: BarChart3, name: 'Analytics, Tracking & CRM', headline: 'Analytics, Tracking & CRM', desc: 'See everything. Miss nothing. We build the data infrastructure that tells you what\'s working and what to scale.', items: ['GA4 setup & configuration', 'GTM implementation', 'Custom dashboards', 'Multi-touch attribution', 'CRM setup (HubSpot/Salesforce)', 'Funnel tracking', 'Lead scoring'], tools: ['GA4', 'GTM', 'HubSpot', 'Looker Studio', 'Hotjar'], cta: 'Talk to us about Analytics →', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { icon: Share2, name: 'Social Media Marketing', headline: 'Social Media Marketing', desc: 'We manage your brand\'s voice online. Content that builds community, ads that convert, and strategy that compounds month over month.', items: ['Content calendar & creation', 'Community management', 'Influencer coordination', 'Paid social integration', 'Platform analytics', 'Story & Reel production'], tools: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube'], cta: 'Talk to us about Social →', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
  { icon: Briefcase, name: 'Growth Consulting', headline: 'Growth Consulting', desc: 'For brands that need direction before activation. We consult on go-to-market strategy, channel selection, and growth planning to set the right foundation.', items: ['Go-to-market strategy', 'Channel selection', 'Budget allocation', 'Growth planning', 'Market analysis', 'Competitive positioning'], tools: ['Strategy', 'Planning'], cta: 'Book a consultation →', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
];

const serviceIcons = [Zap, Monitor, Code2, Bot, Search, Palette, BarChart3, Share2];

const serviceFaqs = [
  { q: 'Can you handle just one service?', a: 'Absolutely. Most clients start with one and expand. No lock-ins, no forced bundles.' },
  { q: 'What industries do you specialize in?', a: 'Automotive, education, e-commerce, SaaS, real estate, retail, and B2B services. We adapt fast to any vertical.' },
  { q: 'How do you price your services?', a: 'Project-based for websites and branding. Monthly retainers for ongoing marketing, SEO, and AI. We scope everything upfront — no surprises.' },
  { q: 'Do you white-label for other agencies?', a: 'Selectively, yes. Reach out and we\'ll discuss scope and fit.' },
];

export default function Services() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(null);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        <div className="container" style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h1 style={{ marginBottom: 24, fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>One agency. <span className="gradient-text-animated">Every capability.</span></h1></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', maxWidth: 650 }}>Whatever your brand needs to grow — we have the team, the tools, and the track record.</p></ScrollReveal>
        </div>
      </section>

      {servicesData.map((s, i) => (
        <section key={i} style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', background: 'transparent', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }} className="service-detail-grid">
              
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  <img src={s.image} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) contrast(1.2)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: 32, left: 32 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: '0 10px 20px rgba(18,55,216,0.4)' }}>
                      <s.icon size={28} style={{ color: '#fff' }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <span className="section-label" style={{ display: 'inline-block', marginBottom: 16 }}>Service 0{i + 1}</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 20, lineHeight: 1.1 }}>{s.headline}</h2>
                <p style={{ marginBottom: 32, fontSize: 18, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
                
                <div style={{ marginBottom: 32 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff', marginBottom: 20 }}>What's Included</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
                    {s.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: 'var(--color-text-secondary)' }}>
                        <Check size={18} style={{ color: 'var(--color-blue-electric)', flexShrink: 0, marginTop: 2 }} />
                        <span style={{ lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
                  {s.tools.map(t => <span key={t} className="tag" style={{ padding: '8px 16px', fontSize: 14 }}>{t}</span>)}
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>{s.cta}</Link>
              </ScrollReveal>

            </div>
          </div>
        </section>
      ))}

      {/* 360° Orbital */}
      <section style={{ padding: '12rem 0', background: '#000000', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <div className="container text-center">
          <ScrollReveal><h2 className="section-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>This is what 360° <br/><span className="gradient-text-animated">actually means.</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p className="section-sub centered" style={{ marginBottom: 80, fontSize: 20 }}>Not a buzzword. A blueprint. One system. Total coverage.</p></ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px 0' }}>
              <div className="orbital-wrapper" style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 440, height: 440, transform: 'scale(var(--orbital-scale, 1))', transformOrigin: 'top left' }} className="orbital-container">
                  {/* Center Logo */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 100, height: 100, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                    <img src={servicesLogo} alt="MAVERUN" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 24px rgba(26, 143, 255, 0.6))' }} />
                  </div>
                  
                  {/* Orbital Rings */}
                  <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', inset: 40, border: '1px solid rgba(26,143,255,0.2)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', inset: 80, border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                  
                  {/* Orbiting Icons */}
                  {serviceIcons.map((Icon, i) => {
                    return (
                      <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: 56, height: 56, marginLeft: -28, marginTop: -28, animation: `orbit 24s linear infinite`, animationDelay: `${-(i / 8) * 24}s`, zIndex: 2 }}>
                        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#000000', border: '1px solid rgba(26,143,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(26,143,255,0.2)' }}>
                          <Icon size={24} style={{ color: '#fff' }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
          }
        `}</style>
      </section>

      {/* Common Questions */}
      <section style={{ padding: '8rem clamp(1.5rem,5vw,4rem)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <ScrollReveal><h2 className="section-heading text-center" style={{ marginBottom: 56 }}>Common questions.</h2></ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {serviceFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ 
                    padding: '28px 32px', borderRadius: 16, cursor: 'pointer',
                    border: `1px solid ${openFaq === i ? 'rgba(26,143,255,0.3)' : 'var(--color-border)'}`,
                    background: openFaq === i ? 'rgba(26,143,255,0.03)' : 'transparent',
                    transition: 'all 0.3s ease'
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{faq.q}</h4>
                    <ChevronDown size={20} style={{ color: 'var(--color-blue-electric)', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </div>
                  <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section onMouseMove={handleMouseMove} style={{ padding: '10rem clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', top: mousePos.y, left: mousePos.x, width: 600, height: 600, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(26,143,255,0.15) 0%, transparent 70%)', pointerEvents: 'none', transition: 'all 0.1s ease', zIndex: 0 }} />
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: 24, lineHeight: 1.1 }}>Ready to talk about<br/><span className="gradient-text-animated">what you need?</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', fontSize: 18, borderRadius: 12, boxShadow: '0 0 30px rgba(18,55,216,0.4)', border: '1px solid rgba(255,255,255,0.1)', marginTop: 32 }}>
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .service-detail-grid > * { order: unset !important; }
        }
        @media (max-width: 480px) {
          :root { --orbital-scale: 0.65; }
          .orbital-wrapper { width: 286px; height: 286px; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          :root { --orbital-scale: 0.8; }
          .orbital-wrapper { width: 352px; height: 352px; }
        }
        @media (min-width: 769px) {
          .orbital-wrapper { width: 440px; height: 440px; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
        }
      `}</style>
    </>
  );
}
