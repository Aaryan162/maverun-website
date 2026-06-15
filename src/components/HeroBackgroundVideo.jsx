import { useRef, useEffect, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isMounted = true;

    // 1. If video is already loaded from cache, trigger loaded state immediately
    if (video.readyState >= 3) {
      setVideoLoaded(true);
    }

    const onCanPlay = () => {
      if (isMounted) setVideoLoaded(true);
    };
    
    const onError = () => {
      if (isMounted) setVideoLoaded(false);
    };

    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('error', onError);

    // 2. Resilient Play Function (handles AbortError on unmount)
    const playVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch (err) {
        // Autoplay policy or route-change abort, ignore gracefully
      }
    };
    
    playVideo();

    // 3. Mobile/Browser Visibility Handler
    // Pauses video when tab is hidden, resumes when active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('error', onError);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
          fetchPriority="high"
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
