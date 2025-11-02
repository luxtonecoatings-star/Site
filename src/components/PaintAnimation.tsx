import { useEffect, useRef } from 'react';
import styles from './PaintAnimation.module.css';

// Paint colors with higher saturation for vibrant effect
const PAINT_COLORS = [
  'hsla(205, 95%, 50%, 0.85)', // Vibrant blue
  'hsla(355, 95%, 60%, 0.85)', // Rich red
  'hsla(150, 85%, 40%, 0.85)', // Deep green
  'hsla(45, 95%, 50%, 0.85)',  // Golden yellow
  'hsla(275, 85%, 45%, 0.85)', // Royal purple
];

// More drips for a richer effect
const DRIPS_PER_COLOR = 12;

// Generate wave path for SVG
const generateWavePath = (width: number, height: number, amplitude: number): string => {
  const points: [number, number][] = [];
  const segments = 20;
  
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const y = height + Math.sin(i * 2) * amplitude;
    points.push([x, y]);
  }
  
  return `
    M 0,${height + amplitude}
    L ${points[0][0]},${points[0][1]}
    ${points.map(([x, y]) => `L ${x},${y}`).join(' ')}
    L ${width},${height + amplitude}
    L ${width},${height * 2}
    L 0,${height * 2}
    Z
  `;
};

export default function PaintAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Generate paint elements with drips and waves
    const paintElements = PAINT_COLORS.map((color, colorIndex) => {
      const baseDelay = colorIndex * 0.3;
      
      // Generate multiple drips with different sizes and speeds
      const drips = Array.from({ length: DRIPS_PER_COLOR }, (_, dripIndex) => {
        const left = 2 + (96 / DRIPS_PER_COLOR) * dripIndex;
        const delay = baseDelay + (dripIndex * 0.1);
        const height = 45 + Math.random() * 30; // More variable heights
        const width = 3 + Math.random() * 5; // Variable width drips
        const speed = 3 + Math.random() * 2; // Variable speed
        
        return `
          <div 
            class="${styles.drip}" 
            style="
              --left: ${left}%;
              --delay: ${delay}s;
              --height: ${height}%;
              --width: ${width}px;
              --speed: ${speed}s;
              --color: ${color};
            "
          ></div>
        `;
      }).join('');

      // Generate waves at the bottom
      const wavePath = generateWavePath(100, 70, 5);
      
      return `
        <div class="${styles.paintColumn}" style="--color: ${color}; --delay: ${baseDelay}s">
          ${drips}
          <svg class="${styles.wave}" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="${wavePath}" fill="currentColor">
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                  ${generateWavePath(100, 70, 5)};
                  ${generateWavePath(100, 70, 3)};
                  ${generateWavePath(100, 70, 7)};
                  ${generateWavePath(100, 70, 5)}
                "
              />
            </path>
          </svg>
        </div>
      `;
    });

    containerRef.current.innerHTML = paintElements.join('');
  }, []);

  return (
    <div className={styles.background} ref={containerRef} aria-hidden="true">
      <div className={styles.overlay}></div>
    </div>
  );
}