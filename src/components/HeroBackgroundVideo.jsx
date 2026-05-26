import { useRef, useEffect, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setVideoLoaded(true);
    const onError = () => setVideoLoaded(false);

    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('error', onError);

    video.play().catch(() => {});

    return () => {
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('error', onError);
    };
  }, []);

  return (
    <>
      {/* Background Video Layer — Home page only */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          fetchpriority="high"
          preload="auto"
          aria-hidden="true"
          style={{ opacity: videoLoaded ? 1 : 0 }}
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Existing effects */}
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
