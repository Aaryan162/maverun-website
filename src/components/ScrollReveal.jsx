import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up:    visible ? 'translateY(0)'  : 'translateY(32px)',
    down:  visible ? 'translateY(0)'  : 'translateY(-32px)',
    left:  visible ? 'translateX(0)'  : 'translateX(-32px)',
    right: visible ? 'translateX(0)'  : 'translateX(32px)',
    scale: visible ? 'scale(1)'       : 'scale(0.95)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: transforms[direction] || transforms.up,
        transition: `opacity 0.45s ease ${delay * 0.5}s, transform 0.45s ease ${delay * 0.5}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
