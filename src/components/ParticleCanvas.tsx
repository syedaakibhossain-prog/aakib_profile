// src/components/ParticleCanvas.tsx
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 45;
    const CONNECT_DIST = 130;
    let width = 0, height = 0;
    let rafId = 0;

    const particles: Particle[] = [];

    function resize() {
      width  = canvas!.width  = canvas!.offsetWidth;
      height = canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x:  Math.random() * width,
          y:  Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          r:  0.6 + Math.random() * 1.8,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Update + bounce
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width)  p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(100, 255, 218, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(100, 255, 218, 0.5)';
        ctx!.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
}
