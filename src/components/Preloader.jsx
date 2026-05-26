import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const arcRef = useRef(null);
  const cometRef = useRef(null);
  const finalWelcomeRef = useRef(null);
  const lightBeamRef = useRef(null);
  const weTextRef = useRef(null);
  const wordsContainerRef = useRef(null);

  const words = ["CREATE", "BUILD", "SCALE", "TRANSFORM", "ELEVATE", "INNOVATE"];

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    // 1. Arc appearance
    tl.to(arcRef.current, {
      strokeDashoffset: 0,
      duration: 3.0,
      ease: "power3.inOut",
    }, 0);
    
    tl.to(arcRef.current, {
      opacity: 0.8,
      duration: 2.0,
      ease: "power2.inOut",
    }, 0);

    // 2. Comet sweep
    tl.fromTo(cometRef.current, 
      { strokeDashoffset: 600 },
      { strokeDashoffset: -200, duration: 3.0, ease: "power2.inOut" },
      0
    );

    // 3. Cinematic light beam sweep
    tl.fromTo(lightBeamRef.current,
      { x: "-100%" },
      { x: "200%", duration: 4, ease: "power1.inOut" },
      0
    );

    // 4. Words animation - Slightly faster but same solid style
    const wordDuration = 0.75; 

    words.forEach((word, index) => {
      const el = wordsRef.current[index];
      const startTime = 0.5 + index * wordDuration;
      
      tl.fromTo(el, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power4.out" },
        startTime
      );
      
      tl.to(el, {
        opacity: 0,
        duration: 0.01 
      }, startTime + wordDuration);
    });

    // 5. Final Welcome
    const welcomeTime = 0.5 + words.length * wordDuration + 0.2;
    
    tl.to([weTextRef.current, wordsContainerRef.current], {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, welcomeTime - 0.6);

    tl.fromTo(finalWelcomeRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
      welcomeTime
    );

    tl.to(finalWelcomeRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 1.2,
      ease: "power2.in"
    }, welcomeTime + 2.0);

  }, [onComplete]);

  const typographyStyles = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'clamp(1.4rem, 5vw, 3.5rem)', // Slightly bigger on mobile
    fontWeight: 800,
    letterSpacing: '-0.025em',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    whiteSpace: 'nowrap'
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#03050a', 
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background atmospheric glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80vw',
        height: '80vh',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, rgba(3, 5, 10, 0) 60%)',
        pointerEvents: 'none'
      }} />

      {/* Cinematic light beam */}
      <div 
        ref={lightBeamRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
          transform: 'skewX(-20deg)',
          pointerEvents: 'none'
        }}
      />

      {/* Centered Wrapper for Perfect Vertical Alignment */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}>

        {/* Arc Vector */}
        <div style={{ width: '90%', maxWidth: '800px', pointerEvents: 'none', marginBottom: '0px' }}>
          <svg viewBox="0 40 800 280" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="cometGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Main Arc */}
            <path 
              ref={arcRef}
              d="M 100 300 Q 400 50 700 300"
              fill="none"
              stroke="url(#arcGrad)"
              strokeWidth="2"
              strokeDasharray="700"
              strokeDashoffset="700"
              opacity="0"
              filter="url(#glow)"
            />

            {/* Glowing Comet Trail */}
            <path 
              ref={cometRef}
              d="M 100 300 Q 400 50 700 300"
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              strokeDasharray="80 620"
              strokeDashoffset="600"
              strokeLinecap="round"
              filter="url(#cometGlow)"
              style={{ mixBlendMode: 'screen' }}
            />
          </svg>
        </div>

        {/* Typography Container - perfectly centered as ONE unit */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px', width: '100%', transform: 'translateY(-10px)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span 
              ref={weTextRef}
              style={{ ...typographyStyles, color: '#FFFFFF', marginRight: '0.4em' }}
            >
              WE
            </span>
            
            {/* CSS Grid overlap prevents GSAP 'y' animation from overwriting CSS transforms, keeping baselines perfect */}
            <div ref={wordsContainerRef} style={{ display: 'grid', width: '6.8em', alignItems: 'center' }}>
              {words.map((word, i) => (
                <span
                  key={word}
                  ref={(el) => wordsRef.current[i] = el}
                  style={{
                    ...typographyStyles,
                    gridArea: '1 / 1 / 2 / 2', // Forces all words to perfectly stack in the same grid cell
                    justifySelf: 'start', // Aligns text to the left
                    background: 'linear-gradient(270deg, #60A5FA, #3B82F6, #2563EB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0,
                    textShadow: '0 0 30px rgba(37,99,235,0.3)'
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={finalWelcomeRef}
            style={{
              ...typographyStyles,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#FFFFFF',
              opacity: 0,
              textShadow: '0 0 40px rgba(255,255,255,0.2)',
              pointerEvents: 'none',
              width: '100%',
              textAlign: 'center'
            }}
          >
            WELCOME TO <span style={{
              background: 'linear-gradient(90deg, #3B82F6, #2563EB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(37,99,235,0.3)'
            }}>MAVERUN</span>
          </div>
        </div>

      </div>
    </div>
  );
}
