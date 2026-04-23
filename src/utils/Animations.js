import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fade-up scroll reveal.
 * @param {string|Element|Element[]} targets
 */
export function revealFadeUp(targets, { delay = 0, duration = 0.75, stagger = 0, y = 24 } = {}) {
  if (reduced()) { gsap.set(targets, { opacity: 1, y: 0 }); return; }
  gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1, y: 0, duration, delay, stagger, ease: 'power3.out',
      scrollTrigger: {
        trigger: typeof targets === 'string' ? targets : (targets[0] ?? targets),
        start: 'top 88%',
        once: true,
      },
    }
  );
}

/**
 * Scale-in scroll reveal.
 */
export function revealScale(targets, { delay = 0, duration = 0.85, from = 0.92 } = {}) {
  if (reduced()) { gsap.set(targets, { opacity: 1, scale: 1 }); return; }
  gsap.fromTo(
    targets,
    { opacity: 0, scale: from },
    {
      opacity: 1, scale: 1, duration, delay, ease: 'power3.out',
      scrollTrigger: {
        trigger: typeof targets === 'string' ? targets : (targets[0] ?? targets),
        start: 'top 87%',
        once: true,
      },
    }
  );
}

/**
 * Slide-in from side.
 */
export function revealSlideX(targets, { delay = 0, duration = 0.9, x = -30 } = {}) {
  if (reduced()) { gsap.set(targets, { opacity: 1, x: 0 }); return; }
  gsap.fromTo(
    targets,
    { opacity: 0, x },
    {
      opacity: 1, x: 0, duration, delay, ease: 'power3.out',
      scrollTrigger: {
        trigger: typeof targets === 'string' ? targets : (targets[0] ?? targets),
        start: 'top 88%',
        once: true,
      },
    }
  );
}

/**
 * Staggered chip pop-in.
 */
export function revealChips(targets, { delay = 0 } = {}) {
  if (reduced()) { gsap.set(targets, { opacity: 1, scale: 1 }); return; }
  gsap.fromTo(
    targets,
    { opacity: 0, scale: 0.88 },
    { opacity: 1, scale: 1, duration: 0.4, delay, stagger: 0.045, ease: 'back.out(1.5)' }
  );
}

/**
 * Hero entrance timeline — call once on mount.
 * Returns the gsap timeline so callers can .kill() on cleanup.
 */
export function heroEntrance({ badgeEl, wordEls, subEl, ctaEl, robotEl } = {}) {
  if (reduced()) {
    [badgeEl, subEl, ctaEl, robotEl].filter(Boolean).forEach(el => gsap.set(el, { opacity: 1, y: 0, scale: 1 }));
    if (wordEls) gsap.set(wordEls, { y: '0%' });
    return null;
  }
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (badgeEl) tl.fromTo(badgeEl,  { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.1 });
  if (wordEls) tl.fromTo(wordEls,  { y: '105%' }, { y: '0%', duration: 0.9, stagger: 0.1 }, '-=0.3');
  if (subEl)   tl.fromTo(subEl,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');
  if (ctaEl)   tl.fromTo(ctaEl,    { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
  if (robotEl) tl.fromTo(robotEl,  { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.1 }, '-=0.8');
  return tl;
}