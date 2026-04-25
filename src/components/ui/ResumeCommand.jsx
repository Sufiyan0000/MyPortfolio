import { useState, useRef } from 'react';
/**
 * ResumeTerminal — Next.js CLI-inspired download widget.
 * Drop this anywhere in your layout (Hero, About, etc.)
 * Pass `resumeUrl` as the path to your PDF in /public
 */
export default function ResumeTerminal() {
  const [copied, setCopied] = useState(false);
  const COMMAND = 'npx download-resume@latest';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent */
    }
  };

  return (
    <div className="relative inline-block mt-8">
      {/* Copied toast */}
      <div className={`
        absolute -top-9 left-1/2 -translate-x-1/2
        bg-neutral-900 dark:bg-neutral-100
        text-white dark:text-neutral-900
        font-mono text-[11px] px-3 py-1 rounded-md
        whitespace-nowrap pointer-events-none
        transition-all duration-200
        ${copied ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-1'}
      `}>
        Copied!
      </div>

      <div className="
        inline-flex items-center overflow-hidden
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-700
        rounded-[13px] shadow-[0_2px_16px_rgba(0,0,0,0.07)]
        transition-all duration-200
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]
        hover:-translate-y-0.5
      ">
        {/* macOS traffic dots */}
        {/* <div className="flex items-center gap-[5px] px-3.5 py-2.5
          border-r border-neutral-100 dark:border-neutral-800
          bg-neutral-50 dark:bg-neutral-800/50">
          <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f56]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#27c93f]" />
        </div> */}

        {/* Command text */}
        <div className="flex items-center gap-2.5 px-4 py-2.5">
          <span className="font-mono text-[12px] text-neutral-400 dark:text-neutral-500 select-none">~$</span>
          <span className="font-mono text-[12px] font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
            <span className="text-[#6b8cff]">npx </span>
            <span className="text-[#4ade80]">download-resume</span>
            @latest
          </span>
          {/* Blinking cursor */}
          <span className="inline-block w-[7px] h-[13px] rounded-[1px] bg-[#6b8cff]
            animate-[cursorBlink_1.1s_ease-in-out_infinite]" />
        </div>

        {/* Download button */}
        <a
          href={'resume.pdf'}
          download = "Md_Sufiyan_Ali_Resume.pdf"
          target='_blank'
          className="flex items-center gap-1.5 px-4 py-2.5
            bg-neutral-900 dark:bg-neutral-100
            text-white dark:text-neutral-900
            font-mono text-[12px] font-medium
            transition-opacity duration-150
            hover:opacity-85 active:opacity-70"
          aria-label="Download resume PDF"
        >
          <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {/* Download */}
        </a>

        {/* Copy button */}
        {/* <button
          onClick={handleCopy}
          title="Copy command"
          aria-label="Copy npx command"
          className="px-3 py-2.5
            border-l border-neutral-100 dark:border-neutral-800
            text-neutral-400 dark:text-neutral-500
            transition-colors duration-150
            hover:text-neutral-700 dark:hover:text-neutral-300
            hover:bg-neutral-50 dark:hover:bg-neutral-800
            active:scale-95"
        >
          {copied ? (
            <svg className="w-[13px] h-[13px] text-[#4ade80]" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
          )}
        </button> */}
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}