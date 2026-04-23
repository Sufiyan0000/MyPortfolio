import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GROUPS = [
  {
    label: 'Frontend',
    chips: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    chips: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL'],
  },
  {
    label: 'Database & Cloud',
    chips: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const panelRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(['.skills-label', '.skills-title', panelRef.current, '.skill-chip'], {
          opacity: 1, y: 0, scale: 1,
        });
        return;
      }

      gsap.to('.skills-label', {
        scrollTrigger: { trigger: '.skills-label', start: 'top 90%', once: true },
        opacity: 1, duration: 0.6, ease: 'power2.out',
      });

      gsap.to('.skills-title', {
        scrollTrigger: { trigger: '.skills-title', start: 'top 90%', once: true },
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      });

      gsap.to(panelRef.current, {
        scrollTrigger: { trigger: panelRef.current, start: 'top 87%', once: true },
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        onComplete: () => {
          gsap.to('.skill-chip', {
            opacity: 1, scale: 1,
            duration: 0.38, stagger: 0.045,
            ease: 'back.out(1.5)',
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1200px] mx-auto"
    >
      <span className="skills-label block text-[11px] uppercase tracking-[0.12em] text-neutral-400 mb-3 opacity-0">
        Expertise
      </span>
      <h2 className="skills-title font-playfair text-[clamp(1.8rem,3.8vw,2.8rem)]
                     font-bold leading-[1.12] mb-14 opacity-0 translate-y-5">
        My toolkit.
      </h2>

      <div
        ref={panelRef}
        className="bg-white/65 dark:bg-neutral-900/70
                   backdrop-blur-[14px]
                   border border-white/85 dark:border-white/10
                   rounded-[26px] p-8 sm:p-10
                   shadow-[0_2px_16px_rgba(0,0,0,0.07)]
                   opacity-0 translate-y-6"
      >
        {GROUPS.map((group, gi) => (
          <div key={group.label} className={gi < GROUPS.length - 1 ? 'mb-8' : ''}>
            <p className="text-[12px] uppercase tracking-[0.1em] text-neutral-400 mb-4">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((chip) => (
                <span
                  key={chip}
                  className="skill-chip opacity-0 scale-90
                             px-4 py-2 rounded-full text-[13px]
                             bg-white dark:bg-neutral-800
                             border border-neutral-100 dark:border-neutral-700
                             text-neutral-700 dark:text-neutral-300
                             hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)]
                             transition-all duration-150 cursor-default will-change-transform"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}