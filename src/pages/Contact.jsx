import { useState } from 'react';
import { ArrowRight, MapPin, Mail, Globe, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroBackground from '../components/HeroBackground';

const serviceOptions = [
  'Performance Marketing', 'Web Development', 'Software Development', 'Agentic AI Solutions',
  'SEO & Content', 'Brand Strategy', 'Analytics & Data',
  'Social Media Marketing', 'Business Consulting', 'Full Partnership',
];

const budgetRanges = {
  INR: ['Under ₹1L', '₹1L – ₹5L', '₹5L – ₹20L', '₹20L+', 'Prefer not to say'],
  USD: ['Under $5K', '$5K – $25K', '$25K – $100K', '$100K+', 'Prefer not to say'],
  EUR: ['Under €5K', '€5K – €25K', '€25K – €100K', '€100K+', 'Prefer not to say'],
};

const inputStyle = {
  width: '100%', padding: '16px 20px', background: 'transparent',
  border: '1px solid var(--color-border)', borderRadius: 12, color: '#fff',
  fontSize: 16, fontFamily: 'var(--font-body)', transition: 'all 0.3s',
  outline: 'none',
};

function LinkedInIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function InstagramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
}
function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function FacebookIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && value.length > 80) return;
    if (name === 'company' && value.length > 50) return;
    if (name === 'phone' && value.length > 20) return;
    if (name === 'message' && value.length > 400) return;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name || form.name.length < 2) e.name = 'Name is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone || form.phone.length < 5) e.phone = 'Valid phone number required';
    if (!form.company) e.company = 'Company is required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.budget) e.budget = 'Please select a budget range';
    if (!form.message || form.message.length < 20) e.message = 'Min 20 characters required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { 
      setErrors(v); 
      alert("Please fill all required information correctly.");
      return; 
    }
    
    setIsSubmitting(true);
    try {
      // Prepend an apostrophe so Google Sheets treats the phone number as text instead of a formula
      const safePhone = `'${form.phone}`;
      const dataToSend = { ...form, phone: safePhone, currency };
      await fetch("https://script.google.com/macros/s/AKfycbwkWrbOoU6qWFORbAoKDxTazkDFDQgqsrSNn9QqDApY11HzRlfccqgFL9i-KEVpekN5/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(dataToSend)
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = 'var(--color-blue-electric)';
    e.target.style.boxShadow = '0 0 15px rgba(26,143,255,0.2)';
    e.target.style.background = 'rgba(255,255,255,0.02)';
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = 'var(--color-border)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'transparent';
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        <div className="container" style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
          <ScrollReveal><h1 style={{ marginBottom: 24, fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>Let's build something<br/><span className="gradient-text-animated">that matters.</span></h1></ScrollReveal>
          <ScrollReveal delay={0.1}><p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', maxWidth: 650 }}>Tell us what you're working on. We respond within 24 hours. And the first contact you will have is directly with the co-founders.</p></ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '40px clamp(1.5rem,5vw,4rem) 12rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'flex-start' }} className="contact-grid">
            {/* Left */}
            <ScrollReveal direction="left">
              <div style={{ position: 'sticky', top: 120 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(26,143,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={20} style={{ color: 'var(--color-blue-electric)' }} />
                    </div>
                    <a href="mailto:maverunn@gmail.com" style={{ color: 'var(--color-text-secondary)', fontSize: 16, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}>maverunn@gmail.com</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(26,143,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={20} style={{ color: 'var(--color-blue-electric)' }} />
                    </div>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 16 }}>Mumbai, India</span>
                  </div>

                </div>
                
                <div style={{ display: 'flex', gap: 16, marginBottom: 48 }}>
                  <a href="https://www.linkedin.com/company/maverun/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#0A66C2'; e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.boxShadow = '0 0 15px rgba(10,102,194,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}><LinkedInIcon /></a>
                  <a href="https://www.instagram.com/maverun.co/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.borderColor = '#E1306C'; e.currentTarget.style.boxShadow = '0 0 15px rgba(225,48,108,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}><InstagramIcon /></a>
                  <a href="https://x.com/maverun01?s=20" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}><XIcon /></a>
                  <a href="https://www.facebook.com/people/Maverun/61589162194579/" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#1877F2'; e.currentTarget.style.borderColor = '#1877F2'; e.currentTarget.style.boxShadow = '0 0 15px rgba(24,119,242,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}><FacebookIcon /></a>
                </div>
                

              </div>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal direction="right">
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div className="grid-2" style={{ gap: 24 }}>
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'block' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required maxLength={80} style={inputStyle} placeholder="Your name" onFocus={focusStyle} onBlur={blurStyle} />
                      {errors.name && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'block' }}>Work Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="you@company.com" onFocus={focusStyle} onBlur={blurStyle} />
                      {errors.email && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="grid-2" style={{ gap: 24 }}>
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'block' }}>Phone Number *</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required maxLength={20} style={inputStyle} placeholder="+1 (555) 000-0000" onFocus={focusStyle} onBlur={blurStyle} />
                      {errors.phone && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.phone}</span>}
                    </div>
                    <div>
                      <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'block' }}>Company / Brand *</label>
                      <input name="company" value={form.company} onChange={handleChange} required maxLength={50} style={inputStyle} placeholder="Company name" onFocus={focusStyle} onBlur={blurStyle} />
                      {errors.company && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.company}</span>}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'block' }}>Service Interested In *</label>
                    <select name="service" value={form.service} onChange={handleChange} required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={focusStyle} onBlur={blurStyle}>
                      <option value="" style={{ background: '#000' }}>Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s} style={{ background: '#000' }}>{s}</option>)}
                    </select>
                    {errors.service && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.service}</span>}
                  </div>
                  
                  <div>
                    <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12, display: 'block' }}>Budget Range *</label>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                      {['INR', 'USD', 'EUR'].map(c => (
                        <button key={c} type="button" onClick={() => { setCurrency(c); setForm({ ...form, budget: '' }); }} style={{
                          padding: '8px 20px', borderRadius: 8, fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-heading)', cursor: 'pointer', transition: 'all 0.3s',
                          background: currency === c ? 'var(--color-blue)' : 'transparent',
                          color: currency === c ? '#fff' : 'var(--color-text-muted)',
                          border: `1px solid ${currency === c ? 'var(--color-blue)' : 'var(--color-border)'}`,
                          boxShadow: currency === c ? '0 0 15px rgba(26,143,255,0.3)' : 'none'
                        }}>
                          {c === 'INR' ? '₹' : c === 'USD' ? '$' : '€'} {c}
                        </button>
                      ))}
                    </div>
                    <select name="budget" value={form.budget} onChange={handleChange} required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={focusStyle} onBlur={blurStyle}>
                      <option value="" style={{ background: '#000' }}>Select budget range</option>
                      {budgetRanges[currency].map(b => <option key={b} value={b} style={{ background: '#000' }}>{b}</option>)}
                    </select>
                    {errors.budget && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.budget}</span>}
                  </div>
                  
                  <div>
                    <label style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                      <span>Tell us about your project *</span>
                      <span style={{ color: form.message.length > 380 ? '#ff4444' : 'var(--color-text-steel)', fontWeight: 400 }}>{form.message.length}/400</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={6} maxLength={400} required style={{ ...inputStyle, resize: 'vertical' }} placeholder="What are you looking to build or improve?" onFocus={focusStyle} onBlur={blurStyle} />
                    {errors.message && <span style={{ color: '#ff4444', fontSize: 13, marginTop: 6, display: 'block' }}>{errors.message}</span>}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '20px 48px', fontSize: 18, borderRadius: 12, marginTop: 8, boxShadow: '0 0 30px rgba(18,55,216,0.3)', border: '1px solid rgba(255,255,255,0.1)', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1, display: 'flex', alignItems: 'center', gap: 12 }}>
                      {isSubmitting ? 'Sending...' : <>Send Message <ArrowRight size={20} /></>}
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '80px 40px', background: 'linear-gradient(180deg, rgba(26,143,255,0.05) 0%, rgba(0,0,0,0) 100%)', borderRadius: 32, border: '1px solid rgba(26,143,255,0.2)', borderTop: '1px solid var(--color-blue-electric)', animation: 'fadeSlide 0.6s ease', boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(26,143,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 200, height: 200, background: 'var(--color-blue-electric)', filter: 'blur(100px)', opacity: 0.3, pointerEvents: 'none' }} />
                  <div style={{ display: 'inline-flex', padding: 24, borderRadius: '50%', background: 'rgba(26,143,255,0.1)', border: '1px solid rgba(26,143,255,0.2)', marginBottom: 32 }}>
                    <CheckCircle size={56} style={{ color: 'var(--color-blue-electric)', filter: 'drop-shadow(0 0 15px rgba(26,143,255,0.8))' }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: 16, lineHeight: 1.2 }}><span className="gradient-text-animated">Thanks! Your message</span><br/>has been sent successfully.</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 18, marginBottom: 40 }}>We'll review your details and contact you soon.</p>
                  <p style={{ color: '#fff', fontSize: 16, fontWeight: 600, letterSpacing: '0.05em' }}>— The Co-Founders</p>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr !important; gap: 64px !important; } }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
