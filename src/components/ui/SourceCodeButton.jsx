import { FaCode } from "react-icons/fa";

export function SourceCodeButton({ text, href, className = '' }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium
          bg-white/60 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80
          text-neutral-600 dark:text-neutral-300 backdrop-blur-sm
          transition-all duration-200
          hover:bg-white dark:hover:bg-neutral-700
          hover:border-[rgba(107,140,255,0.5)]
          hover:text-neutral-900 dark:hover:text-neutral-100
          hover:shadow-[0_3px_12px_rgba(107,140,255,0.15)]
          hover:-translate-y-0.5 active:scale-95 will-change-transform ${className}`}
      >
        <FaCode className="w-3.5 h-3.5" />
        {text}
      </a>
    );
  }