import { SourceCodeButton } from "./SourceCodeButton";

export default function ProjectCard({ project }) {
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
        <div className="flex items-center gap-2 mt-5 pt-4
        border-t border-neutral-50 dark:border-neutral-800/80">
        <SourceCodeButton text={'Source Code'} href={project.github} />
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium
              bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900
              transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5
              active:scale-95 will-change-transform">
            <ExternalIcon className="w-3 h-3" />
            Live Demo
          </a>
        )}
      </div>
      </div>
    );
  }