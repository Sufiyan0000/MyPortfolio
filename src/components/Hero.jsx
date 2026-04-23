import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useParallaxOrbs } from '../hooks/Useparallaxorbs';
import { heroEntrance } from '../utils/Animations';
import RobotSVG from '../Robotsvg';

const ORB_CONFIGS = [
  { dx: 0.022, dy: 0.016 },
  { dx: -0.016, dy: -0.010 },
];

export default function Hero() {
  const badgeRef = useRef(null);
  const subRef   = useRef(null);
  const ctaRef   = useRef(null);
  const robotRef = useRef(null);
  const { containerRef, orbRefs } = useParallaxOrbs(ORB_CONFIGS);

  /* Subtle 3-D tilt on the robot when mouse moves across the hero */
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !robotRef.current) return;
    const onMove = (e) => {
      const r  = container.getBoundingClientRect();
      const nx = (e.clientX - r.width  / 2) / r.width;
      const ny = (e.clientY - r.height / 2) / r.height;
      gsap.to(robotRef.current, {
        rotateY: nx * 14,
        rotateX: -ny * 9,
        duration: 0.8,
        ease: 'power2.out',
        transformPerspective: 900,
      });
    };
    container.addEventListener('mousemove', onMove);
    return () => container.removeEventListener('mousemove', onMove);
  }, []);

  /* Hero entrance sequence */
  useEffect(() => {
    const tl = heroEntrance({
      badgeEl: badgeRef.current,
      wordEls: '.hero-word-inner',
      subEl:   subRef.current,
      ctaEl:   ctaRef.current,
      robotEl: robotRef.current,
    });
    return () => tl?.kill();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] grid grid-cols-1 lg:grid-cols-[1fr_440px]
                 items-center gap-8 px-6 sm:px-10 lg:px-16 py-20
                 max-w-[1200px] mx-auto overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div
        ref={orbRefs[0]}
        className="absolute w-[520px] h-[520px] -top-28 -left-28 rounded-full
                   pointer-events-none will-change-transform"
        style={{ background: 'radial-gradient(circle, rgba(172,196,255,0.22) 0%, transparent 68%)' }}
      />
      <div
        ref={orbRefs[1]}
        className="absolute w-[380px] h-[380px] -bottom-16 right-96 rounded-full
                   pointer-events-none will-change-transform"
        style={{ background: 'radial-gradient(circle, rgba(190,242,213,0.18) 0%, transparent 68%)' }}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 text-center lg:text-left">
        {/* "Available" badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8
                     rounded-full text-xs text-neutral-500
                     bg-white/65 dark:bg-neutral-900/75
                     border border-white/85 dark:border-white/10
                     backdrop-blur-lg shadow-sm opacity-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_7px_#4ade80] animate-pulse" />
          Available for new projects
        </div>

        {/* Main heading — words split for stagger */}
        <h1 className="font-playfair text-[clamp(2.8rem,6vw,5.2rem)] font-bold
               leading-[1.08] tracking-[-0.025em] mb-6">

  {/* Line 1 */}
  <span className="block">
    <span className="hero-word inline-block overflow-hidden">
      <span className="hero-word-inner inline-block translate-y-full">
        Md
      </span>
    </span>

    <span className="hero-word inline-block overflow-hidden ml-2">
      <span className="hero-word-inner inline-block translate-y-full">
        <em className="italic bg-gradient-to-br from-[#6b8cff] to-[#4ade80]
                       bg-clip-text text-transparent">
          Sufiyan
        </em>
      </span>
    </span>
  </span>

  {/* Line 2 */}
  <span className="block">
    <span className="hero-word inline-block overflow-hidden">
      <span className="hero-word-inner inline-block translate-y-full">
        Ali.
      </span>
    </span>
  </span>

</h1>

        {/* Tagline */}
        <p
          ref={subRef}
          className="text-[1.05rem] text-neutral-500 dark:text-neutral-400
                     max-w-[400px] mx-auto lg:mx-0 mb-10
                     font-light leading-[1.75] opacity-0"
        >
          Full Stack Developer building modern and scalable web apps
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex gap-3 flex-wrap justify-center lg:justify-start opacity-0"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full text-sm font-medium
                       bg-neutral-900 text-white
                       dark:bg-neutral-100 dark:text-neutral-900
                       transition-all duration-200
                       hover:scale-[1.04] hover:shadow-[0_6px_28px_rgba(0,0,0,0.2)]
                       will-change-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium
                       border border-neutral-200 dark:border-neutral-700
                       text-neutral-900 dark:text-neutral-100
                       transition-all duration-200
                       hover:scale-[1.04] hover:bg-white dark:hover:bg-neutral-800
                       hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]
                       will-change-transform"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ── 3-D Robot — hidden on mobile / tablet ── */}
      <div className="hidden lg:flex items-center justify-center relative z-10">
        <div className="relative w-[340px] h-[400px]">
          {/* Floating robot with hover tilt */}
          <div
            ref={robotRef}
            className="absolute inset-0 flex items-center justify-center opacity-0
                       will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'robotFloat 4s ease-in-out infinite',
            }}
          >
            <RobotSVG />
          </div>

          {/* Ground shadow pulse */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2
                       w-[100px] h-4 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(100,140,255,0.25) 0%, transparent 70%)',
              animation: 'shadowPulse 4s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes shadowPulse {
          0%, 100% { width: 100px; opacity: 0.8; }
          50%       { width: 70px;  opacity: 0.4; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-word-inner { transform: none !important; }
        }
      `}</style>
    </section>
  );
}