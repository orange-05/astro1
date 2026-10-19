import React, { useEffect, useRef } from 'react';

interface CelestialCanvasProps {
  theme?: 'dark' | 'light';
}

export const CelestialCanvas: React.FC<CelestialCanvasProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate stars (lightweight on mobile for 60fps and battery conservation)
    const maxStars = width < 768 ? 32 : 75;
    const numStars = Math.min(maxStars, Math.floor(width / 22));
    const stars: { x: number; y: number; radius: number; alpha: number; speed: number; gold: boolean }[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        speed: (Math.random() * 0.004 + 0.002) * (prefersReducedMotion ? 0 : 1),
        gold: Math.random() > 0.4
      });
    }

    const isLight = theme === 'light';

    // Constellation points (Sacred geometry connections)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle radial celestial sky gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );

      if (isLight) {
        // Luxury warm ivory ambient gradient
        bgGrad.addColorStop(0, 'rgba(237, 227, 207, 0.22)');
        bgGrad.addColorStop(0.5, 'rgba(242, 238, 230, 0.12)');
        bgGrad.addColorStop(1, 'rgba(250, 248, 243, 0)');
      } else {
        bgGrad.addColorStop(0, 'rgba(17, 24, 62, 0.4)');
        bgGrad.addColorStop(0.5, 'rgba(11, 18, 44, 0.2)');
        bgGrad.addColorStop(1, 'rgba(7, 11, 25, 0)');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle constellation connecting lines between nearest stars
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * (isLight ? 0.12 : 0.12);
            ctx.strokeStyle = isLight
              ? `rgba(146, 113, 58, ${lineAlpha})`
              : `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate stars / sacred stardust
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.alpha += star.speed;
          if (star.alpha > 0.85 || star.alpha < 0.2) {
            star.speed = -star.speed;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        if (isLight) {
          if (star.gold) {
            // Antique gold accent stardust
            ctx.fillStyle = `rgba(146, 113, 58, ${star.alpha * 0.5})`;
          } else {
            // Pale champagne stardust
            ctx.fillStyle = `rgba(237, 227, 207, ${star.alpha * 0.7})`;
          }
        } else {
          if (star.gold) {
            ctx.fillStyle = `rgba(230, 202, 101, ${star.alpha})`;
          } else {
            ctx.fillStyle = `rgba(203, 213, 225, ${star.alpha * 0.8})`;
          }
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
        theme === 'light' ? 'opacity-60' : 'opacity-80'
      }`}
      aria-hidden="true"
    />
  );
};
