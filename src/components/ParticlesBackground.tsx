import { useEffect, useRef } from 'react';
import styles from './ParticlesAnimation.module.css';

interface Particle {
  width: number;
  speed: number;
  delay: number;
  left: number;
  top: number;
}

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: Particle[] = Array.from({ length: 200 }, () => ({
      width: Math.random() * 15 + 10,
      speed: Math.random() * 20 + 20,
      delay: Math.random() * 10 * 0.1,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));

    containerRef.current.innerHTML = particles
      .map(
        (p) => `
        <span 
          class="${styles.particle}"
          style="
            width: ${p.width}px;
            height: ${p.width}px;
            left: ${p.left}%;
            top: ${p.top}%;
            --duration: ${p.speed}s;
            --delay: ${p.delay}s;
          "
        ></span>
      `
      )
      .join('');
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.particles} fixed inset-0 pointer-events-none -z-10`}
      aria-hidden="true"
    />
  );
}