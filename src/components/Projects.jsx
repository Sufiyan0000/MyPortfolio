import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ui/ProjectCard';
import { SourceCodeButton } from './ui/SourceCodeButton';
import { SeeAllProjects } from './ui/SeeAllProjects';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    icon: '👟',
    iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    tag: 'E-Commerce',
    title: 'Nike Clone',
    desc: 'Modern e-commerce platform with product browsing, cart, and responsive UI inspired by Nike.',
    tech: ['Next.js', 'Tailwind CSS', 'Zustand', 'Django', 'DRF', 'SQLite'],
    accent: 'from-blue-200 to-cyan-100',
    github: 'https://github.com/Sufiyan0000/nike-ecommerce',
    live: null
  },
  {
    icon: '🎟️',
    iconBg: 'bg-red-50 dark:bg-red-950/40',
    tag: 'Booking Platform',
    title: 'BookMyShow Clone',
    desc: 'Full-stack ticket booking system for movies, events, and sports with dynamic seat selection.',
    tech: ['Next.js','Tailwindcss','Django', 'DRF', 'SQLite'],
    accent: 'from-red-200 to-pink-100',
    github: 'https://github.com/Sufiyan0000/BookMyShow',
    live: null
  },
  {
    icon: '💬',
    iconBg: 'bg-purple-50 dark:bg-purple-950/40',
    tag: 'Social App',
    title: 'DropPost',
    desc: 'Social media app with real-time chat, posts, and user interactions.',
    tech: ['Django', 'DRF', 'SQLite'],
    accent: 'from-purple-200 to-pink-100',
    github: 'https://github.com/Sufiyan0000/DropPost/tree/main/TwitterProject',
    live: null
  },
  {
    icon: '🐙',
    iconBg: 'bg-gray-100 dark:bg-gray-900/40',
    tag: 'Developer Tool',
    title: 'GitHub User Finder',
    desc: 'Search and explore GitHub profiles using GitHub API with user stats and repos.',
    tech: ['React', 'GitHub API', 'TailwindCSS'],
    accent: 'from-gray-300 to-slate-200',
    github: 'https://github.com/Sufiyan0000/React-Projects/tree/main/github-user-finder',
    live: null
  },
];


export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const reveal = (el, vars) => {
        if (reduced) { gsap.set(el, { opacity: 1, y: 0 }); return; }
        gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 90%', once: true }, ...vars });
      };

      reveal('.projects-label', { opacity: 1, duration: 0.6, ease: 'power2.out' });
      reveal('.projects-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });

      if (!reduced) {
        gsap.to('.project-card-wrap', {
          scrollTrigger: { trigger: '.projects-grid', start: 'top 86%', once: true },
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        });
      } else {
        gsap.set('.project-card-wrap', { opacity: 1, y: 0 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-[1200px] mx-auto"
    >
      <span className="projects-label block text-[11px] uppercase tracking-[0.12em] text-neutral-400 mb-3 opacity-0">
        Work
      </span>
      <h2 className="projects-title font-playfair text-[clamp(1.8rem,3.8vw,2.8rem)]
                     font-bold leading-[1.12] mb-14 opacity-0 translate-y-5">
        Selected projects.
      </h2>

      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card-wrap opacity-0 translate-y-7">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
      <div className='w-full flex items-center justify-center mt-15'>
        <SeeAllProjects text={'See All Projects'} href={'https://github.com/Sufiyan0000?tab=repositories'} />
      </div>
    </section>
  );
}