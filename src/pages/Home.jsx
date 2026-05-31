import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import Marquee from '../components/Marquee';
import HeroBackgroundVideo from '../components/HeroBackgroundVideo';

const cases = [
  { name: 'Automotive', cat: 'Automotive · Paid Media', metric: '+340%', metricLabel: 'Lead Volume', desc: 'Multi-dealer, multi-platform campaign architecture across GCC markets.', hoverBg: '#020617' },
  { name: 'Retail & E-Commerce', cat: 'Retail · Google & Meta', metric: '4.8x', metricLabel: 'ROAS', desc: 'Europe-wide performance campaign with Demand Gen and Shopping integration.', hoverBg: '#020617' },
  { name: 'Education', cat: 'Education · Full Funnel', metric: '2,100+', metricLabel: 'Qualified Leads', desc: 'CRM-integrated lead gen across 12 cities with custom audience segmentation.', hoverBg: '#020617' },
  { name: 'Hospitality', cat: 'Hospitality · Multi-Channel', metric: '24x', metricLabel: 'ROAS', desc: '200+ luxury properties managed globally across Google, Meta, and Publisher.', hoverBg: '#020617' },
];

const processSteps = [
  { num: '01', title: 'Research', desc: 'We deep-dive into your market, audience, competitors, and data landscape.' },
  { num: '02', title: 'Wireframe', desc: 'We map the structure — campaign architecture, funnel flow, landing pages.' },
  { num: '03', title: 'Design', desc: 'Every creative, copy asset, and visual is built to convert.' },
  { num: '04', title: 'Prototype', desc: 'We test before we launch. A/B setups, tracking verification.' },
  { num: '05', title: 'Deployment', desc: 'We go live with full tracking in place. Every click measured.' },
  { num: '06', title: 'Optimization', desc: 'Ongoing optimization, reporting, and growth.' },
];

const whyCards = [
  { title: '360° Coverage', desc: "Every channel, every funnel stage, every format. We don't leave gaps." },
  { title: 'Founder-Led Execution', desc: 'No junior handoffs. Abdullah and Aaryan are in every campaign.' },
  { title: 'Built on Data', desc: 'Every decision is backed by numbers. Intuition starts it; data finishes it.' },
  { title: 'Value of Time', desc: 'We move fast. No long onboarding cycles, no delays. Speed is a competitive advantage.' },
  { title: 'Partners in Success', desc: 'Your growth is our growth. We measure ourselves by your results.' },
  { title: 'High-Quality Delivery', desc: "We'd rather do one thing perfectly than ten things poorly." },
];

const testimonials = [
  { quote: "Maverun didn't just run our ads. They rebuilt our entire acquisition system.", name: 'Priya S.', role: 'CMO, Automotive Brand' },
  { quote: 'The best agency we\'ve worked with across three continents. Execution is flawless.', name: 'James T.', role: 'Head of Growth, UK Retail' },
  { quote: 'Data-first. Creative-smart. They understand scale.', name: 'Nadia K.', role: 'Marketing Director, EdTech' },
];

const heroStackItems = [
  { name: 'Google Ads', color: '#4285F4', img: 'https://img.icons8.com/color/144/google-ads.png' },
  { name: 'Meta', color: '#0668E1', img: 'https://img.icons8.com/color/144/meta.png' },
  { name: 'GA4', color: '#E37400', img: 'https://img.icons8.com/color/144/google-analytics.png' },
  { name: 'TikTok', color: '#ffffff', img: 'https://img.icons8.com/nolan/144/tiktok.png' },
  { name: 'LinkedIn', color: '#0A66C2', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg' },
  { name: 'React', color: '#61DAFB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#ffffff', slug: 'nextdotjs' },
  { name: 'Node.js', color: '#339933', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Shopify', color: '#96BF48', img: 'https://img.icons8.com/color/144/shopify.png' },
  { name: 'Flutter', color: '#02569B', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'OpenAI', color: '#10A37F', img: 'https://img.icons8.com/color/144/chatgpt.png' },
  { name: 'AWS', color: '#FF9900', img: 'https://img.icons8.com/color/144/amazon-web-services.png' },
  { name: 'Firebase', color: '#FFCA28', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'GitHub', color: '#ffffff', slug: 'github' },
  { name: 'Vercel', color: '#ffffff', slug: 'vercel' },
  { name: 'Python', color: '#3776AB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
];

const expandedStackItems = [
  { name: 'Snapchat', color: '#FFFC00', img: 'https://img.icons8.com/color/144/snapchat.png' },
  { name: 'GTM', color: '#8AB4F8', img: 'https://img.icons8.com/color/144/google-tag-manager.png' },
  { name: 'Figma', color: '#F24E1E', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Make', color: '#8000FF', slug: 'make' },
  { name: 'Zapier', color: '#FF4A00', img: 'https://img.icons8.com/color/144/zapier.png' },
  { name: 'WordPress', color: '#21759B', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
  { name: 'Kotlin', color: '#7F52FF', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'Swift', color: '#FA7343', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Stripe', color: '#635BFF', img: 'https://img.icons8.com/color/144/stripe.png' },
  { name: 'Ahrefs', color: '#FF8C00', img: 'https://icon.horse/icon/ahrefs.com' },
  { name: 'Semrush', color: '#FF642D', slug: 'semrush' },
  { name: 'HubSpot', color: '#FF7A59', slug: 'hubspot' },
  { name: 'React Native', color: '#61DAFB', slug: 'react' },
  { name: 'Android Studio', color: '#3DDC84', slug: 'androidstudio' },
  { name: 'iOS', color: '#ffffff', slug: 'apple' },
  { name: 'SwiftUI', color: '#FA7343', slug: 'swift' },
  { name: 'Jetpack Compose', color: '#4285F4', slug: 'jetpackcompose' },
  { name: 'Expo', color: '#ffffff', slug: 'expo' },
  { name: 'TypeScript', color: '#3178C6', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Express.js', color: '#ffffff', slug: 'express' },
  { name: 'MongoDB', color: '#47A248', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', color: '#4169E1', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', color: '#2496ED', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Cloudflare', color: '#F38020', slug: 'cloudflare' },
  { name: 'LangChain', color: '#ffffff', img: 'https://icon.horse/icon/langchain.com' },
  { name: 'Pinecone', color: '#ffffff', img: 'https://icon.horse/icon/pinecone.io' },
  { name: 'n8n', color: '#FF6E4A', slug: 'n8n' },
  { name: 'Claude AI', color: '#D97757', slug: 'anthropic' },
  { name: 'Looker Studio', color: '#4285F4', slug: 'looker' },
  { name: 'Mixpanel', color: '#7856FF', slug: 'mixpanel' },
  { name: 'Hotjar', color: '#FD3A5C', slug: 'hotjar' },
  { name: 'Amplitude', color: '#2051E5', img: 'https://icon.horse/icon/amplitude.com' },
  { name: 'Screaming Frog', color: '#ffffff', img: 'https://icon.horse/icon/screamingfrog.co.uk' },
  { name: 'Search Console', color: '#4285F4', img: 'https://www.gstatic.com/images/branding/product/2x/search_console_512dp.png' },
  { name: 'Surfer SEO', color: '#563BFF', img: 'https://icon.horse/icon/surferseo.com' }
];

const homeFaqs = [
  { q: 'Do you work with startups or only large brands?', a: 'We work with both. If you have a real product, a clear market, and the ambition to scale — we\'re the right fit. Budget size matters less than intent.' },
  { q: 'How long does it take to see results from campaigns?', a: 'Paid media shows early signals within 2–3 weeks. Meaningful optimization happens by week 6–8. SEO is a 3–6 month game. We set real timelines, not fairy tales.' },
  { q: 'Can you manage just one service, or do we have to take all of them?', a: 'You can start with one service. Most clients start with paid media or web dev and expand once they see the results. No lock-ins.' },
  { q: 'Do you work with international brands?', a: 'Yes. We have managed campaigns across India, GCC (Saudi, UAE, Oman, Qatar, Kuwait), UK, and other global markets. Multi-market is our default.' },
  { q: 'What makes you different from other agencies?', a: 'Founder-led execution. No junior handoffs. We combine marketing, tech, and AI under one roof — most agencies can only do one of these well.' },
  { q: 'How do your AI solutions work alongside marketing?', a: 'Our AI agents automate campaign audits, generate performance reports, qualify leads, and flag anomalies — all feeding back into your marketing strategy in real time.' },
  { q: 'Do you take on project-based work or retainer only?', a: 'Both. Websites and brand identity are project-based. Ongoing marketing, SEO, and AI solutions run on monthly retainers with clear deliverables.' },
  { q: 'Where are your founders based and are they involved in projects?', a: 'Abdullah and Aryan are based in Mumbai, India and are directly involved in every client engagement. You talk to the founders, not a sales rep.' },
];

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section style={{
      minHeight: '95vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px clamp(2.5rem, 7vw, 6rem) 60px',
    }}>
      <HeroBackgroundVideo />

      {/* Cinematic left-side atmospheric overlay — soft blue-dark fade, not a solid box */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: [
          /* Deep blue-dark radial sweep from the left — brand-matched atmosphere */
          'radial-gradient(ellipse 70% 110% at -5% 50%, rgba(6,10,32,0.88) 0%, rgba(8,14,44,0.60) 35%, rgba(10,20,60,0.20) 60%, transparent 75%)',
          /* Horizontal linear fade — transitions smoothly into the video */
          'linear-gradient(90deg, rgba(5,9,28,0.75) 0%, rgba(6,11,35,0.40) 30%, rgba(8,14,40,0.10) 52%, transparent 65%)',
          /* Very subtle blue inner glow at the far left edge — depth cue */
          'linear-gradient(90deg, rgba(20,50,140,0.18) 0%, rgba(20,50,140,0.06) 20%, transparent 45%)',
        ].join(', '),
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Hero content — left-aligned column */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 660,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <ScrollReveal delay={0.1}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid var(--color-border)', borderRadius: 100,
            padding: '8px 24px', fontSize: 14, fontWeight: 600,
            fontFamily: 'var(--font-heading)', color: 'var(--color-text-secondary)',
            marginBottom: 32, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
          }}>
            <span style={{ color: 'var(--color-blue-electric)' }}>✦</span>
            Among the Best AI &amp; Digital Services Agencies
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 style={{ marginBottom: 24, fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', textAlign: 'left' }}>
            From Clicks<br />to <span className="gradient-text-animated">Code.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            color: 'rgba(255,255,255,0.82)', fontWeight: 400,
            maxWidth: 560, margin: '0 0 40px', lineHeight: 1.75,
            letterSpacing: '0.01em', textAlign: 'left',
          }}>
            We build performance systems that scale globally — paid media, AI automation, and web development for companies that demand results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: 16 }}>
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="btn btn-ghost" style={{ padding: '16px 32px', fontSize: 16 }}>
              See Our Work
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-left-content {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── STATS ─── */
function StatsSection() {
  const stats = [
    { value: 1, prefix: '$', suffix: 'M+', label: 'Monthly Media Managed' },
    { value: 12, suffix: '+', label: 'Active Markets' },
    { value: 40, suffix: '+', label: 'Brands Served' },
    { value: 5, suffix: '+', label: 'Years of Excellence' },
  ];
  return (
    <section style={{ padding: '40px 24px', position: 'relative' }}>
      <div className="container">
        <div className="grid-4" style={{ textAlign: 'center' }}>
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div style={{ padding: '32px 16px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 12, textShadow: '0 0 20px rgba(26,143,255,0.3)' }}>
                  <AnimatedCounter end={s.value} prefix={s.prefix || ''} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />
    </section>
  );
}

/* ─── WORK PREVIEW ─── */
function MetricCounter({ raw }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true;
        observer.disconnect();
        // Parse: prefix (+), numeric value (int or float), suffix (%, x, +)
        const prefixMatch = raw.match(/^\+/);
        const prefix = prefixMatch ? '+' : '';
        const stripped = raw.replace(/^\+/, '');
        const numMatch = stripped.match(/[\d,.]+/);
        if (!numMatch) { setDisplay(raw); return; }
        const numStr = numMatch[0].replace(/,/g, '');
        const target = parseFloat(numStr);
        const isFloat = numStr.includes('.');
        const suffix = stripped.slice(numMatch[0].length); // %, x, +
        const useComma = raw.includes(',');
        const duration = 1000;
        let start = null;
        const ease = (t) => 1 - Math.pow(1 - t, 3);
        const tick = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const value = ease(progress) * target;
          let formatted;
          if (isFloat) {
            formatted = value.toFixed(1);
          } else if (useComma && value >= 1000) {
            formatted = Math.floor(value).toLocaleString('en-US');
          } else {
            formatted = Math.floor(value).toString();
          }
          setDisplay(`${prefix}${formatted}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [raw]);

  return <span ref={ref}>{display}</span>;
}

function WorkCard({ c, i }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.background = `radial-gradient(320px circle at ${x}px ${y}px, rgba(59,130,246,0.07) 0%, transparent 70%)`;
  };

  const handleEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.borderColor = 'rgba(59,130,246,0.55)';
    card.style.transform = 'translateY(-7px)';
    card.style.boxShadow = '0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(59,130,246,0.18), 0 8px 32px rgba(59,130,246,0.10)';
    card.style.background = 'rgba(10,15,35,0.72)';
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;
    card.style.borderColor = 'var(--color-border)';
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
    card.style.background = 'transparent';
    if (glow) glow.style.background = 'transparent';
  };

  return (
    <ScrollReveal delay={i * 0.1}>
      <div
        ref={cardRef}
        className="card work-result-card"
        style={{
          cursor: 'pointer',
          height: '100%',
          background: 'transparent',
          borderColor: 'var(--color-border)',
          transition: 'border-color 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, background 0.35s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Cursor-tracking atmospheric glow */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            transition: 'background 0.1s ease', zIndex: 0, borderRadius: 'inherit',
          }}
        />

        {/* Travelling border highlight — visible on hover via CSS class */}
        <div className="work-card-border-sweep" aria-hidden="true" />

        {/* Card content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 14, color: 'var(--color-blue-electric)', fontWeight: 600, marginBottom: 12 }}>{c.cat}</p>
          <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: 12 }}>{c.name}</h3>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', marginBottom: 24 }}>{c.desc}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff' }}>
              <MetricCounter raw={c.metric} />
            </span>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>{c.metricLabel}</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function WorkSection() {
  return (
    <section style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle ambient depth gradient — barely visible, adds atmospheric warmth */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(37,99,235,0.04) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal><h2 className="section-heading" style={{ marginBottom: 56 }}>Results, not decks.</h2></ScrollReveal>
        <div className="grid-2">
          {cases.map((c, i) => <WorkCard key={i} c={c} i={i} />)}
        </div>
        <ScrollReveal delay={0.3}>
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <Link to="/work" className="btn-text" style={{ fontSize: 18 }}>View All Work <ArrowRight size={20} /></Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        /* Travelling border highlight */
        .work-result-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from var(--angle, 0deg),
            transparent 0deg,
            rgba(59,130,246,0.55) 60deg,
            transparent 120deg
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 2;
        }
        .work-result-card:hover::before {
          opacity: 1;
          animation: work-border-spin 3s linear infinite;
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes work-border-spin {
          to { --angle: 360deg; }
        }

        /* Fallback for browsers without @property support — simple pulse */
        @supports not (background: conic-gradient(from 0deg, red, blue)) {
          .work-result-card::before { display: none; }
        }
      `}</style>
    </section>
  );
}


/* ─── PROCESS JOURNEY (CINEMATIC SCROLL) ─── */
function ProcessSection() {
  const sectionRef = useRef(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) {
        setTargetProgress(0);
        return;
      }
      const scrolled = -rect.top; // positive when scrolling down
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setTargetProgress(progress * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth cinematic lerping
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateProgress = () => {
      setCurrentProgress((prev) => {
        const next = lerp(prev, targetProgress, 0.05); // Very soft lerp for luxury feel
        if (Math.abs(targetProgress - next) < 0.05) return targetProgress;
        return next;
      });
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetProgress]);

  return (
    <section ref={sectionRef} style={{ height: '400vh', position: 'relative', background: '#000' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(4rem, 8vh, 6rem) clamp(1.5rem, 5vw, 6rem)' }}>

        {/* Ambient Deep Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100vw', height: '100vh', background: 'radial-gradient(circle at center, rgba(18,55,216,0.05) 0%, transparent 60%)', transform: `translate(-50%, -50%) translateX(${-(currentProgress - 50) * 0.2}vw)`, pointerEvents: 'none' }} />

        {/* Floating Light Orbs */}
        <div style={{ position: 'absolute', top: '60%', left: '20%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 20px 2px rgba(26,143,255,0.5)', transform: `translateX(${(currentProgress / 100) * 60}vw) translateY(${Math.sin(currentProgress / 5) * 30}px)`, pointerEvents: 'none', transition: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', right: '20%', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', boxShadow: '0 0 15px 1px rgba(26,143,255,0.3)', transform: `translateX(${-(currentProgress / 100) * 30}vw) translateY(${Math.cos(currentProgress / 5) * 40}px)`, pointerEvents: 'none', transition: 'none' }} />

        {/* Top Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-block', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '30px', color: 'rgba(255,255,255,0.8)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '32px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>How we work</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', fontWeight: 400, letterSpacing: '-0.02em', maxWidth: '600px', lineHeight: 1.1, margin: 0 }}>No guesswork.<br /><span style={{ color: 'var(--color-blue-electric)', textShadow: '0 0 20px rgba(26,143,255,0.3)' }}>Just a proven system.</span></h2>
        </div>

        {/* Cinematic Stages Container */}
        <div style={{ position: 'relative', height: '50vh', width: '100%', pointerEvents: 'none', flexGrow: 1 }}>
          {processSteps.map((s, i) => {
            const stepTargetProgress = i * (100 / (processSteps.length - 1));
            const difference = currentProgress - stepTargetProgress;

            // Difference > 0: Moving left (Past)
            // Difference < 0: Coming from right (Future)
            const xOffset = -(difference * 2.5);

            const absDiff = Math.abs(difference);
            const opacity = Math.max(0, 1 - (absDiff / 25));
            const scale = 1 - (absDiff / 150);
            const blur = absDiff > 5 ? Math.min(8, (absDiff - 5) * 0.3) : 0;

            // Slight upward motion logic
            const yOffset = difference < 0 ? absDiff * 0.8 : -absDiff * 0.4;

            return (
              <div key={i} style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 'min(90vw, 500px)',
                transform: `translate(-50%, -50%) translate(${xOffset}vw, ${yOffset}px) scale(${scale})`,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                textAlign: 'left',
                pointerEvents: opacity > 0.5 ? 'auto' : 'none'
              }}>
                <div style={{ fontSize: '13px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '16px', textTransform: 'uppercase' }}>
                  <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                  {s.num}
                </div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', lineHeight: 1.8, maxWidth: '400px', fontWeight: 300 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Moving Progress Orb (Minimal indicator) */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: 'clamp(1.5rem, 5vw, 6rem)',
          width: 'calc(100% - clamp(3rem, 10vw, 12rem))',
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 10
        }}>
          <div style={{
            position: 'absolute',
            left: `${currentProgress}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 15px 2px rgba(255,255,255,0.8), 0 0 30px 5px rgba(26,143,255,0.4)',
            transform: 'translateX(-50%)',
            transition: 'none'
          }} />
        </div>

      </div>
    </section>
  );
}

function StackCard({ item, isCentered }) {
  return (
    <div className={`stack-card ${isCentered ? 'stack-card-centered' : ''}`}
      style={{
        '--card-color': item.color,
        borderColor: isCentered ? item.color : undefined,
        boxShadow: isCentered ? `0 10px 30px ${item.color}40, inset 0 0 20px ${item.color}20` : undefined,
        transform: isCentered ? 'translateY(-6px)' : undefined,
        background: isCentered ? `${item.color}10` : undefined,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}40, inset 0 0 20px ${item.color}20`; }}
      onMouseLeave={e => { if (!isCentered) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none'; } }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <img
          className="stack-img"
          src={item.img || `https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`}
          alt={item.name}
          style={{ width: 44, height: 44, objectFit: 'contain' }}
        />
      </div>
      <div style={{ fontSize: 14, fontFamily: 'var(--font-heading)', fontWeight: 600, color: isCentered ? '#fff' : 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>{item.name}</div>
    </div>
  );
}

/* ─── OUR STACK ─── */
function StackSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const velRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const CARD_W = 156;
  const [centeredIdx, setCenteredIdx] = useState(-1);
  const doubledHero = [...heroStackItems, ...heroStackItems, ...heroStackItems];
  const totalItems = heroStackItems.length;
  const totalW = totalItems * CARD_W;

  useEffect(() => {
    const BASE_SPEED = -0.5;
    const FRICTION = 0.92;
    function frame() {
      if (!isDragging.current) {
        velRef.current += (BASE_SPEED - velRef.current) * 0.05;
      } else {
        velRef.current *= FRICTION;
      }
      posRef.current += velRef.current;
      if (posRef.current <= -totalW) posRef.current += totalW;
      if (posRef.current > 0) posRef.current -= totalW;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      if (containerRef.current) {
        const cw = containerRef.current.offsetWidth;
        const center = cw / 2;
        const offset = -posRef.current;
        const rawIdx = Math.round((offset + center - CARD_W / 2) / CARD_W);
        const idx = ((rawIdx % totalItems) + totalItems) % totalItems;
        setCenteredIdx(idx);
      }
      animRef.current = requestAnimationFrame(frame);
    }
    animRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animRef.current);
  }, [totalW, totalItems]);

  const onDragStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    dragStartPos.current = posRef.current;
    velRef.current = 0;
  };
  const onDragMove = (e) => {
    if (!isDragging.current) return;
    const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const delta = x - dragStartX.current;
    posRef.current = dragStartPos.current + delta;
  };
  const onDragEnd = (e) => {
    isDragging.current = false;
    const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    velRef.current = (endX - dragStartX.current) * 0.04;
  };

  return (
    <section style={{ padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container text-center" style={{ marginBottom: 48 }}>
        <ScrollReveal><p className="section-label">Our Stack</p></ScrollReveal>
        <ScrollReveal delay={0.05}><h2 className="section-heading" style={{ margin: 0 }}>The platforms that power our work.</h2></ScrollReveal>
      </div>

      <div ref={containerRef} style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', overflow: 'hidden', cursor: 'grab', userSelect: 'none' }}
        onMouseDown={onDragStart} onMouseMove={onDragMove} onMouseUp={onDragEnd} onMouseLeave={e => { if (isDragging.current) onDragEnd(e); }}
        onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onDragEnd}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(90deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(270deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div ref={trackRef} style={{ display: 'flex', gap: 16, padding: '20px 0', width: 'fit-content', willChange: 'transform' }}>
          {doubledHero.map((item, i) => (
            <StackCard key={`hero-${i}`} item={item} isCentered={i % totalItems === centeredIdx} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 20 }}>
        <button onClick={() => setIsExpanded(!isExpanded)} className="btn btn-ghost" style={{ padding: '12px 32px', fontSize: 15, borderRadius: 100 }}>
          {isExpanded ? 'Show Less ↑' : 'View Full Stack →'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateRows: isExpanded ? '1fr' : '0fr', transition: 'grid-template-rows 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div style={{ overflow: 'hidden' }}>
          <div className="container stack-grid" style={{ opacity: isExpanded ? 1 : 0, transform: isExpanded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)', paddingTop: 20, paddingBottom: 20 }}>
            {expandedStackItems.map((item, i) => (
              <StackCard key={`exp-${i}`} item={item} isCentered={false} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .stack-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
        .stack-card { background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 24px 16px; text-align: center; transition: all 0.4s ease; min-width: 140px; flex-shrink: 0; }
        .stack-card .stack-img { filter: grayscale(0) opacity(1); transition: all 0.4s ease; }
        .stack-card:hover .stack-img, .stack-card-centered .stack-img { filter: drop-shadow(0 0 15px var(--card-color)) drop-shadow(0 0 5px var(--card-color)) brightness(1.3); transform: scale(1.1); }
      `}</style>
    </section>
  );
}

/* ─── WHY MAVERUN ─── */
function WhySection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const [centeredIdx, setCenteredIdx] = useState(-1);
  const CARD_W = 412; // minWidth + gap (380 + 32)
  const doubled = [...whyCards, ...whyCards];
  const totalItems = whyCards.length;
  const totalW = totalItems * CARD_W;

  useEffect(() => {
    const SPEED = -0.45;
    function frame() {
      const currentCardW = window.innerWidth <= 640 ? 312 : 412; // 280 width + 32 gap vs 380 + 32
      const currentTotalW = totalItems * currentCardW;

      posRef.current += SPEED;
      if (posRef.current <= -currentTotalW) posRef.current += currentTotalW;
      if (posRef.current > 0) posRef.current -= currentTotalW;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${posRef.current}px)`;

      if (containerRef.current) {
        const cw = containerRef.current.offsetWidth;
        const center = cw / 2;
        const offset = -posRef.current;
        const rawIdx = Math.round((offset + center - currentCardW / 2) / currentCardW);
        const idx = ((rawIdx % totalItems) + totalItems) % totalItems;
        setCenteredIdx(idx);
      }
      animRef.current = requestAnimationFrame(frame);
    }
    animRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animRef.current);
  }, [totalItems]);

  return (
    <section style={{ padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 56 }}>
        <ScrollReveal><h2 className="section-heading" style={{ margin: 0 }}>Why <span style={{ color: 'var(--color-blue-electric)', textShadow: '0 0 20px rgba(26,143,255,0.3)' }}>Maverun?</span></h2></ScrollReveal>
      </div>
      <div ref={containerRef} className="why-carousel-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="why-fade-left" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="why-fade-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div ref={trackRef} className="why-carousel-track" style={{ display: 'flex', gap: 32, paddingBottom: 60, paddingTop: 20, width: 'max-content', willChange: 'transform' }}>
          {doubled.map((v, i) => {
            const isCenter = i % totalItems === centeredIdx;
            return (
              <div key={i} className="why-card" style={{
                width: 380, flexShrink: 0,
                border: `1px solid ${isCenter ? 'rgba(26,143,255,0.5)' : 'rgba(255,255,255,0.05)'}`,
                borderTop: `1px solid ${isCenter ? 'var(--color-blue-electric)' : 'rgba(255,255,255,0.15)'}`,
                padding: 48, borderRadius: 32,
                background: isCenter
                  ? 'linear-gradient(180deg, rgba(26,143,255,0.06) 0%, transparent 100%)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isCenter ? 'translateY(-14px) scale(1.04)' : 'translateY(0) scale(1)',
                boxShadow: isCenter ? '0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(26,143,255,0.12)' : 'none',
                display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, background: 'var(--color-blue-electric)', filter: 'blur(80px)', opacity: isCenter ? 0.35 : 0, transition: 'opacity 0.5s ease' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 72, fontWeight: 900, marginBottom: 24, display: 'block', lineHeight: 1, position: 'relative', zIndex: 1, transition: 'all 0.5s ease',
                  color: isCenter ? '#fff' : 'transparent',
                  WebkitTextStroke: isCenter ? '0px' : '2px rgba(255,255,255,0.1)',
                  textShadow: isCenter ? '0 0 30px rgba(255,255,255,0.8)' : 'none',
                  transform: isCenter ? 'translateX(12px)' : 'translateX(0)'
                }}>
                  {String((i % totalItems) + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, position: 'relative', zIndex: 1, transition: 'color 0.4s', color: isCenter ? 'var(--color-blue-electric)' : '#fff' }}>{v.title}</h3>
                <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .why-card:hover { border-color: rgba(26,143,255,0.5) !important; border-top-color: var(--color-blue-electric) !important; transform: translateY(-12px) scale(1.05) !important; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(26,143,255,0.15) !important; }
        @media(max-width:640px) {
          .why-card { width: 280px !important; padding: 24px 18px !important; border-radius: 20px !important; }
          .why-card span { font-size: 48px !important; margin-bottom: 12px !important; }
          .why-card h3 { font-size: 18px !important; margin-bottom: 10px !important; }
          .why-card p { font-size: 14px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container text-center" style={{ maxWidth: 900, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ fontSize: 48, color: 'var(--color-blue)', marginBottom: 24, fontFamily: 'serif', lineHeight: 1 }}>"</div>
          <div style={{ minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div key={active} style={{ animation: 'fadeSlide 0.6s ease' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 32 }}>{testimonials[active].quote}</p>
              <p style={{ fontSize: 16, color: 'var(--color-blue-electric)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{testimonials[active].name} <span style={{ color: 'var(--color-text-muted)' }}>— {testimonials[active].role}</span></p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 48 }}>
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`View testimonial ${i + 1}`} onClick={() => setActive(i)} style={{ width: i === active ? 40 : 12, height: 4, borderRadius: 2, background: i === active ? 'var(--color-blue-electric)' : 'rgba(255,255,255,0.2)', transition: 'all 0.4s ease', cursor: 'pointer', border: 'none' }} />
            ))}
          </div>
        </ScrollReveal>
        <style>{`@keyframes fadeSlide{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </div>
    </section>
  );
}

/* ─── HOME FAQ ─── */
function HomeFAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <ScrollReveal><p className="section-label text-center">Quick Answers</p></ScrollReveal>
        <ScrollReveal delay={0.05}><h2 className="section-heading text-center" style={{ marginBottom: 56 }}>Frequently asked questions.</h2></ScrollReveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {homeFaqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  padding: '28px 32px', borderRadius: 16, cursor: 'pointer',
                  border: `1px solid ${openFaq === i ? 'rgba(26,143,255,0.3)' : 'var(--color-border)'}`,
                  background: openFaq === i ? 'rgba(26,143,255,0.03)' : 'transparent', transition: 'all 0.3s ease'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: openFaq === i ? 'var(--color-blue-electric)' : '#fff', margin: 0, transition: 'color 0.3s' }}>{faq.q}</h3>
                  <ChevronDown size={20} style={{ color: 'var(--color-blue-electric)', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }} />
                </div>
                <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/faq" className="btn btn-ghost" style={{ padding: '16px 40px', fontSize: 16, borderRadius: 12, border: '1px solid rgba(26,143,255,0.3)', background: 'rgba(26,143,255,0.05)' }}>
              View All FAQs <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── FINAL CTA (ALIVE) ─── */
function CTASection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section onMouseMove={handleMouseMove} style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ position: 'absolute', top: mousePos.y, left: mousePos.x, width: 600, height: 600, transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(26,143,255,0.15) 0%, transparent 70%)', pointerEvents: 'none', transition: 'all 0.1s ease', zIndex: 0 }} />
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal><h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: 24, lineHeight: 1.1 }}>Ready to build<br /><span className="gradient-text-animated">something that scales?</span></h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p style={{ color: 'var(--color-text-secondary)', marginBottom: 48, fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', maxWidth: 600, margin: '0 auto 48px' }}>From clicks to code — tell us your challenge. We'll build the system.</p></ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', fontSize: 18, borderRadius: 12, boxShadow: '0 0 30px rgba(18,55,216,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
            Start a Project <ArrowRight size={20} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Marquee />
      <WorkSection />
      <ProcessSection />
      <StackSection />
      <WhySection />
      <TestimonialsSection />
      <HomeFAQSection />
      <CTASection />
    </>
  );
}
