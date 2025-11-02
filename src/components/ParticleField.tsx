import { useEffect, useRef } from 'react';
import styles from './ParticleField.module.css';

const TOTAL_PARTICLES = 600;
const ANIMATION_DURATION = 2500; // ms

function calcCoords() {
  const π = Math.PI;
  const θ = 2 * π * Math.random();
  const u = Math.random() + Math.random();
  const r = u > 1 ? 2 - u : u;
  const x = r * Math.cos(θ);
  const y = r * Math.sin(θ);
  const c = Math.sqrt(x * x + y * y);
  return { x, y, c };
}

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Generate particles
    const particles = Array.from({ length: TOTAL_PARTICLES }, (_, i) => {
      const { x, y, c } = calcCoords();
      const d = Math.sin(c * Math.PI / 2);
      const hue = 60 + d * -160;
      const lightness = 80 - 30 * d;
      const delay = -1 * Math.random() * ANIMATION_DURATION;
      
      return `
        <div
          id="particle${i + 1}"
          class="${styles.particle}"
          style="
            background: hsla(${hue}, 100%, ${lightness}%, 1);
            transform: translateX(${x * 50}vmin) translateY(${y * 50}vmin) scale(${1 - d});
            animation-delay: ${delay}ms;
          "
        ></div>
      `;
    });

    containerRef.current.innerHTML = particles.join('');
  }, []);

  return (
    <div className={styles.container} ref={containerRef} aria-hidden="true">
      <div className={styles.background}></div>
    </div>
  );
}