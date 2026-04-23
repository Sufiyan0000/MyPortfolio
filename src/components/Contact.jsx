import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const cardRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { gsap.set(cardRef.current, { opacity: 1, y: 0 }); return; }

    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%', once: true },
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1200px] mx-auto"
    >
      <div
        ref={cardRef}
        className="relative bg-neutral-900 dark:bg-neutral-100
                   text-white dark:text-neutral-900
                   rounded-[30px] px-8 sm:px-16 py-16 sm:py-20 text-center
                   overflow-hidden opacity-0 translate-y-8"
      >
        {/* Decorative orbs inside card */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.04] dark:bg-black/[0.04] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/[0.03] dark:bg-black/[0.03] pointer-events-none" />

        <h2 className="relative font-playfair text-[clamp(1.9rem,4vw,2.6rem)] font-bold
                       leading-tight mb-4">
          Let's build something<br />
          <em className="italic">great</em> together.
        </h2>
        <p className="relative text-white/60 dark:text-neutral-900/60 mb-10 font-light
                      max-w-sm mx-auto">
          Open to freelance projects, full-time roles, and exciting collaborations.
        </p>

        <a
          href="mailto:sufiyan@email.com"
          className="relative inline-block px-9 py-3.5 rounded-full text-sm font-medium
                     bg-white dark:bg-neutral-900
                     text-neutral-900 dark:text-white
                     transition-all duration-200
                     hover:opacity-90 hover:scale-[1.04] will-change-transform"
        >
          Say hello →
        </a>
      </div>
    </section>
  );
}