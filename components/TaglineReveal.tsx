'use client';

import { useEffect, useRef, useState } from 'react';

export default function TaglineReveal({ text, kicker }: { text: string; kicker: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const words = text.split(/\s+/);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealedCount(words.length);
      return;
    }

    let ticking = false;
    const checkScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.82) {
        // Progressive reveal
        const interval = setInterval(() => {
          setRevealedCount((prev) => {
            if (prev >= words.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 40);
        window.removeEventListener('scroll', handleScroll);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section className="tagline-reveal-section">
      <div className="tagline-reveal-inner">
        <span className="tagline-reveal-kicker">{kicker}</span>
        <p className="tagline-reveal-text" ref={containerRef}>
          {words.map((word, index) => (
            <span
              key={index}
              className={`word ${index < revealedCount ? 'revealed' : ''}`}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
