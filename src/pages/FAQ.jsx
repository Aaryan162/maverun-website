import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroBackground from '../components/HeroBackground';

const faqs = [
  { q: 'Can you handle just one service?', a: 'Absolutely. Most clients start with one service and expand over time. No lock-ins, no forced bundles, and no unnecessary upsells.' },
  { q: 'What industries do you specialize in?', a: 'Automotive, education, e-commerce, hospitality, SaaS, real estate, retail, finance, and B2B services. Every industry has different buying behavior — we adapt strategy accordingly.' },
  { q: 'Do you work with startups or only large brands?', a: 'Both. We work with scaling startups, established businesses, and enterprise brands. What matters most is clarity, ambition, and the willingness to build properly.' },
  { q: 'How do you price your services?', a: 'Websites, branding, and development projects are typically project-based. Performance marketing, SEO, AI systems, and growth retainers operate monthly. Everything is scoped upfront with clear deliverables, timelines, and expectations.' },
  { q: 'Do you work with international brands?', a: "Yes. We've managed campaigns and projects across India, GCC markets, the UK, and other global regions. Multi-market execution is part of how we operate." },
  { q: 'How long does it take to see results?', a: 'Paid media usually shows early performance signals within the first few weeks. Meaningful optimization typically happens around weeks 6–8. SEO and organic growth are long-term systems that compound over time. We set realistic expectations — not inflated timelines.' },
  { q: 'What makes Maverun different from other agencies?', a: "Founder-led execution. No junior handoffs. No bloated communication chains. Most agencies specialize in either marketing, development, or AI. We combine all three under one system — so strategy, execution, and technology actually work together." },
  { q: 'How do your AI solutions work alongside marketing?', a: "Our AI systems help automate audits, reporting, lead qualification, workflow management, and campaign analysis. The goal isn't replacing people — it's removing inefficiency so decisions happen faster and campaigns scale smarter." },
  { q: 'Do you take project-based work or only retainers?', a: 'Both. Web development, branding, and consulting are usually project-based. Marketing, SEO, AI optimization, and growth systems are typically ongoing retainers.' },
  { q: 'Do you white-label for other agencies?', a: 'Selectively, yes. We partner with agencies that need execution support across media buying, development, AI systems, or performance infrastructure.' },
  { q: 'Who will actually work on our project?', a: 'The people you speak to are the people leading the execution. Every project receives direct founder involvement across strategy, systems, and delivery.' },
  { q: 'Are long-term contracts required?', a: 'No. We believe retention should come from performance — not paperwork. Some projects naturally evolve into long-term partnerships, but we don\'t force unnecessary commitments.' },
  { q: 'Can you rebuild or improve existing campaigns/websites?', a: "Absolutely. Many clients come to us after poor agency experiences, broken tracking, weak performance, or outdated websites. We audit first, identify the gaps, and rebuild what's necessary." },
  { q: 'Do you provide reporting and transparency?', a: 'Yes. Clear reporting is non-negotiable. Clients receive structured updates, performance breakdowns, tracking visibility, and direct communication — without inflated vanity metrics.' },
  { q: 'Where is Maverun based?', a: 'Mumbai, India — operating globally.' },
  { q: 'Are the founders involved in projects?', a: 'Yes. Abdullah and Aaryan remain directly involved in every client engagement, from strategy to execution.' },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        <div className="container" style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h1 style={{ marginBottom: 24, fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>Questions, <span className="gradient-text-animated">answered.</span></h1></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', maxWidth: 650, color: 'var(--color-text-secondary)' }}>Everything clients usually ask before we build together.</p></ScrollReveal>
          <ScrollReveal delay={0.2}><p style={{ fontSize: 16, maxWidth: 600, color: 'var(--color-text-muted)', marginTop: 16 }}>No vague promises. No agency jargon. Just clear answers about how we work, what we do, and what to expect.</p></ScrollReveal>
        </div>
      </section>

      {/* FAQ Items */}
      <section style={{ padding: '40px clamp(1.5rem,5vw,4rem) 8rem' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    padding: '28px 32px', borderRadius: 16, cursor: 'pointer',
                    border: `1px solid ${openFaq === i ? 'rgba(26,143,255,0.3)' : 'var(--color-border)'}`,
                    background: openFaq === i ? 'rgba(26,143,255,0.03)' : 'transparent',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => { if (openFaq !== i) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  onMouseLeave={e => { if (openFaq !== i) e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: openFaq === i ? 'var(--color-blue-electric)' : '#fff', margin: 0, transition: 'color 0.3s' }}>{faq.q}</h3>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                      border: `1px solid ${openFaq === i ? 'var(--color-blue-electric)' : 'var(--color-border)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s',
                      background: openFaq === i ? 'rgba(26,143,255,0.1)' : 'transparent'
                    }}>
                      <ChevronDown size={18} style={{ color: 'var(--color-blue-electric)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </div>
                  </div>
                  <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: 'hidden', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.8, marginTop: 20, marginBottom: 0, paddingRight: 48 }}>{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section onMouseMove={e => { const rect = e.currentTarget.getBoundingClientRect(); setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }} style={{ padding: '10rem clamp(1.5rem,5vw,4rem)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', top: mousePos.y, left: mousePos.x, width: 600, height: 600, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(26,143,255,0.15) 0%, transparent 70%)', pointerEvents: 'none', transition: 'all 0.1s ease', zIndex: 0 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: 24, lineHeight: 1.1 }}>Still have <span className="gradient-text-animated">questions?</span></h2></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ color: 'var(--color-text-secondary)', marginBottom: 16, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', maxWidth: 550, margin: '0 auto 8px' }}>Every great partnership starts with a conversation.</p></ScrollReveal>
          <ScrollReveal delay={0.15}><p style={{ color: 'var(--color-text-muted)', marginBottom: 48, fontSize: 16 }}>Talk directly with the founders.</p></ScrollReveal>
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



