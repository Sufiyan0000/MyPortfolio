import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DETAILS = [
  { icon: '📍', bg: 'bg-blue-50 dark:bg-blue-950/40',  label: 'Location',  value: 'Ranchi, Jharkhand, India' },
  { icon: '🎓', bg: 'bg-purple-50 dark:bg-purple-950/40', label: 'Education', value: 'BCA (Bachelor of Computer Application)' },
  { icon: '💼', bg: 'bg-emerald-50 dark:bg-emerald-950/40', label: 'Experience', value: 'Fresher' },
  { icon: '✅', bg: 'bg-amber-50 dark:bg-amber-950/40', label: 'Status',    value: 'Available for hire', valueClass: 'text-emerald-600 dark:text-emerald-400' },
];

const STATS = [
  { num: '10+', label: 'Projects built' },
  { num: '6+', label: 'Technologies' },
  { num: '0→∞', label: 'Exprience goal' },
];

const TECH = ['React', 'Next.js', 'TailwindCSS', 'Zustand', 'Axios','TypeScript', 'Python', 'Django', 'DRF','MySql', 'Docker'];

export default function About() {
  const sectionRef  = useRef(null);
  const cardRef     = useRef(null);
  const textRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set([cardRef.current, textRef.current], { opacity: 1, x: 0 });
        gsap.set('.about-stat-card', { opacity: 1, y: 0 });
        gsap.set('.about-tech-badge', { opacity: 1, scale: 1 });
        return;
      }

      /* Card slides in from left */
      gsap.fromTo(cardRef.current,
        { opacity: 0, x: -36 },
        {
          opacity: 1, x: 0, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 86%', once: true },
        }
      );

      /* Text slides in from right */
      gsap.fromTo(textRef.current,
        { opacity: 0, x: 36 },
        {
          opacity: 1, x: 0, duration: 0.95, delay: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 86%', once: true },
        }
      );

      /* Stat cards pop in */
      gsap.fromTo('.about-stat-card',
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.about-stats-grid', start: 'top 90%', once: true },
        }
      );

      /* Tech badges */
      gsap.fromTo('.about-tech-badge',
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1, scale: 1, duration: 0.38, stagger: 0.055, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.about-tech-row', start: 'top 92%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1200px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Profile card ── */}
        <div ref={cardRef} className="relative opacity-0">
          <div
            className="bg-white dark:bg-neutral-900
                       border border-neutral-100 dark:border-neutral-800
                       rounded-[28px] overflow-hidden
                       shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
          >
            {/* Card header — gradient band */}
            <div
              className="relative px-8 pt-10 pb-8 flex flex-col items-center gap-4
                         bg-gradient-to-br from-[#dce8ff] to-[#c8f5de]
                         dark:from-[#1a2540] dark:to-[#0f2820]"
            >
              {/* Decorative rings */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/30 dark:border-white/10" />
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/20 dark:border-white/10" />

              {/* Avatar ring */}
              <div
                className="w-[88px] h-[88px] rounded-full p-[3px]
                           bg-gradient-to-br from-[#6b8cff] to-[#4ade80]
                           shadow-[0_0_28px_rgba(107,140,255,0.35)]"
              >
                <div
                  className="w-full h-full rounded-full bg-white dark:bg-neutral-900
                             flex items-center justify-center
                             font-playfair text-[2.2rem] font-bold text-[#3a5a8a]"
                >
                  S
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-playfair text-[1.15rem] font-bold text-neutral-900 dark:text-neutral-100">
                  Md Sufiyan Ali
                </h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Detail rows */}
            <div className="px-6 py-4">
              {DETAILS.map(({ icon, bg, label, value, valueClass }) => (
                <div
                  key={label}
                  className="flex items-center gap-3.5 py-3
                             border-b border-neutral-50 dark:border-neutral-800 last:border-b-0"
                >
                  <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center text-[14px] ${bg}`}>
                    {icon}
                  </div>
                  <div>
                    <span className="block text-[11px] text-neutral-400 dark:text-neutral-500 mb-0.5">
                      {label}
                    </span>
                    <span className={`text-[13px] font-medium ${valueClass ?? 'text-neutral-800 dark:text-neutral-200'}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge 1 */}
          <div
            className="absolute -top-3.5 -right-4 hidden sm:flex
                       items-center gap-2 px-3.5 py-2 rounded-2xl text-[12px] font-medium
                       bg-white dark:bg-neutral-900
                       border border-neutral-100 dark:border-neutral-800
                       shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
          >
            <span className="text-[16px]">⚡</span>
            10+ Projects
          </div>

          {/* Floating badge 2 */}
          <div
            className="absolute bottom-8 -right-6 hidden sm:flex
                       items-center gap-2 px-3.5 py-2 rounded-2xl text-[12px] font-medium
                       bg-white dark:bg-neutral-900
                       border border-neutral-100 dark:border-neutral-800
                       shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
            Open to work
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div ref={textRef} className="opacity-0">
          <span className="block text-[11px] uppercase tracking-[0.12em] text-neutral-400 mb-3">
            About me
          </span>
          <h2 className="font-playfair text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold
                         leading-[1.12] mb-6">
            Crafting digital experiences with <em className="italic">purpose.</em>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-[1.85]
                        mb-4 font-light text-[0.98rem]">
            I'm a full stack developer who believes great software is equal parts engineering
            and art. I obsess over performance, accessibility, and the subtle details that
            make users smile.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 leading-[1.85]
                        font-light text-[0.98rem]">
            From pixel-perfect UIs to scalable backend architectures — I thrive across the
            entire stack, bringing both technical precision and creative vision to every build.
          </p>
          <br />
          <p className="text-neutral-500 dark:text-neutral-400 leading-[1.85] font-light text-[0.97rem]">
            I'm at the beginning of my professional journey, and that excites me. I bring fresh energy, a hunger to learn fast, and the proven ability to build production-quality applications independently.
          </p>

          {/* Stats */}
          <div className="about-stats-grid grid grid-cols-3 gap-3 mt-8">
            {STATS.map(({ num, label }) => (
              <div
                key={label}
                className="about-stat-card opacity-0
                           bg-white dark:bg-neutral-900
                           border border-neutral-100 dark:border-neutral-800
                           rounded-2xl p-4 text-center
                           hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]
                           transition-all duration-200"
              >
                <div
                  className="font-playfair text-[1.8rem] font-bold
                             bg-gradient-to-br from-[#6b8cff] to-[#4ade80]
                             bg-clip-text text-transparent"
                >
                  {num}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="about-tech-row flex flex-wrap gap-2 mt-6">
            {TECH.map((t) => (
              <span
                key={t}
                className="about-tech-badge opacity-0
                           text-[12px] px-3.5 py-1.5 rounded-full
                           bg-neutral-50 dark:bg-neutral-800
                           border border-neutral-200 dark:border-neutral-700
                           text-neutral-500 dark:text-neutral-400
                           hover:-translate-y-0.5 transition-transform duration-150 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}