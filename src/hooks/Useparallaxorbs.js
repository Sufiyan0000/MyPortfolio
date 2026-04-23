import { useEffect, useRef } from 'react';

/**
 * Smooth mouse-parallax for multiple orb elements.
 * Each config: { dx: number, dy: number }
 * Negative dx/dy inverts direction for depth separation.
 */
export function useParallaxOrbs(configs) {
  const containerRef = useRef(null);
  const orbRefs = useRef(configs.map(() => ({ current: null })));
  const mouseRef = useRef({ x: 0, y: 0 });
  const curRef = useRef(configs.map(() => ({ x: 0, y: 0 })));
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.width / 2;
      mouseRef.current.y = e.clientY - rect.height / 2;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      configs.forEach((cfg, i) => {
        const el = orbRefs.current[i]?.current;
        if (!el) return;
        curRef.current[i].x = lerp(curRef.current[i].x, mouseRef.current.x * cfg.dx, 0.06);
        curRef.current[i].y = lerp(curRef.current[i].y, mouseRef.current.y * cfg.dy, 0.06);
        el.style.transform = `translate(${curRef.current[i].x}px, ${curRef.current[i].y}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    container.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line

  return { containerRef, orbRefs: orbRefs.current };
}