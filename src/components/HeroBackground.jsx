import ParticleCanvas from './ParticleCanvas';

export default function HeroBackground() {
  return (
    <>
      <ParticleCanvas />
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'repeating-linear-gradient(0deg,rgba(255,255,255,0.02) 0px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.02) 0px,transparent 1px,transparent 40px)', 
        zIndex: 0, 
        pointerEvents: 'none', 
        opacity: 0.5 
      }} />
    </>
  );
}
