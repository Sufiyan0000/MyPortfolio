/* Social icon SVGs inline — no external icon lib required */

const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                   0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                   -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                   .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                   -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
                   c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
                   .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                   0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      href: 'https://twitter.com',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Dev.to',
      href: 'https://dev.to',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.28zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
        </svg>
      ),
    },
  ];
  
  const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];
  
  export default function Footer() {
    return (
      <footer className="bg-white dark:bg-neutral-900
                         border-t border-neutral-100 dark:border-neutral-800
                         px-6 sm:px-10 lg:px-16 pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto">
  
          {/* Top row */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 mb-10">
  
            {/* Brand */}
            <div className="max-w-[260px]">
              <span className="font-playfair text-[22px] font-bold block mb-3">MSA.</span>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Full Stack Developer building modern and scalable web applications with care.
              </p>
              {/* Social icons */}
              <div className="flex gap-2.5 mt-5 flex-wrap">
                {SOCIAL_LINKS.map(({ name, href, svg }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-9 h-9 rounded-[11px] flex items-center justify-center
                               border border-neutral-200 dark:border-neutral-700
                               bg-neutral-50 dark:bg-neutral-800
                               text-neutral-500 dark:text-neutral-400
                               hover:text-neutral-900 dark:hover:text-neutral-100
                               hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                               transition-all duration-200"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Navigation + Contact columns */}
            <div className="flex gap-12 sm:gap-16 flex-wrap">
              <div>
                <h4 className="text-[12px] uppercase tracking-[0.1em] text-neutral-400 mb-4">
                  Navigation
                </h4>
                <ul className="flex flex-col gap-2.5 list-none">
                  {NAV_LINKS.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-[13px] text-neutral-500 dark:text-neutral-400
                                   hover:text-neutral-900 dark:hover:text-neutral-100
                                   transition-colors duration-200 no-underline"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h4 className="text-[12px] uppercase tracking-[0.1em] text-neutral-400 mb-4">
                  Contact
                </h4>
                <ul className="flex flex-col gap-2.5 list-none">
                  <li>
                    <a
                      href="mailto:sufiyan@email.com"
                      className="text-[13px] text-neutral-500 dark:text-neutral-400
                                 hover:text-neutral-900 dark:hover:text-neutral-100
                                 transition-colors duration-200 no-underline"
                    >
                      sufiyan@email.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      className="text-[13px] text-neutral-500 dark:text-neutral-400
                                 hover:text-neutral-900 dark:hover:text-neutral-100
                                 transition-colors duration-200 no-underline"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      className="text-[13px] text-neutral-500 dark:text-neutral-400
                                 hover:text-neutral-900 dark:hover:text-neutral-100
                                 transition-colors duration-200 no-underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6
                          flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[12px] text-neutral-400 dark:text-neutral-500">
              © 2026 Md Sufiyan Ali. Built with care &amp; coffee ☕
            </p>
            <div className="flex gap-5">
              {['Privacy', 'Terms', 'Hire me'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] text-neutral-400 dark:text-neutral-500
                             hover:text-neutral-700 dark:hover:text-neutral-300
                             transition-colors duration-200 no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
  
        </div>
      </footer>
    );
  }