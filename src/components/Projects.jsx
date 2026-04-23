import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    icon: '🛒', iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    tag: 'E-Commerce', title: 'ShopFlow',
    desc: 'Multi-vendor marketplace with real-time inventory and Stripe payments.',
    tech: ['Next.js', 'Prisma', 'Stripe'],
    accent: 'from-blue-200 to-emerald-200',
  },
  {
    icon: '📊', iconBg: 'bg-amber-50 dark:bg-amber-950/40',
    tag: 'SaaS Dashboard', title: 'Analytics Pro',
    desc: 'Real-time analytics dashboard with complex data visualizations.',
    tech: ['React', 'D3.js', 'Node'],
    accent: 'from-amber-200 to-orange-100',
  },
  {
    icon: '💬', iconBg: 'bg-purple-50 dark:bg-purple-950/40',
    tag: 'Social App', title: 'ConnectHub',
    desc: 'Real-time chat platform supporting thousands of concurrent users.',
    tech: ['Socket.io', 'Redis', 'MongoDB'],
    accent: 'from-purple-200 to-pink-100',
  },
  {
    icon: '🤖', iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    tag: 'AI Tool', title: 'DocuMind',
    desc: 'AI-powered document analyzer that extracts key insights automatically.',
    tech: ['Python', 'FastAPI', 'OpenAI'],
    accent: 'from-emerald-200 to-teal-100',
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className="group relative bg-white dark:bg-neutral-900
                 border border-neutral-100 dark:border-neutral-800
                 rounded-[22px] p-7 overflow-hidden cursor-pointer
                 transition-all duration-300
                 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]
                 will-change-transform"
    >
      {/* Accent top bar — wipes in on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px]
                    bg-gradient-to-r ${project.accent}
                    scale-x-0 group-hover:scale-x-100
                    origin-left transition-transform duration-300`}
      />

      <div className={`w-11 h-11 rounded-xl ${project.iconBg} flex items-center justify-center text-xl mb-5`}>
        {project.icon}
      </div>

      <span
        className="inline-block text-[11px] px-2.5 py-0.5 rounded-full mb-3
                   border border-neutral-200 dark:border-neutral-700
                   text-neutral-400 dark:text-neutral-500"
      >
        {project.tag}
      </span>

      <h3 className="text-[1rem] font-medium mb-2 text-neutral-900 dark:text-neutral-100">
        {project.title}
      </h3>
      <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex gap-1.5 mt-5 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-0.5 rounded-full
                       bg-neutral-50 dark:bg-neutral-800
                       text-neutral-400 dark:text-neutral-500"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

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
    </section>
  );
}