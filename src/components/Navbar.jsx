import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/msa1.png'

const NAV_ITEMS = ['About', 'Projects', 'Skills', 'Contact'];

export default function Nav({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const themeRef = useRef(null);
  const drawerRef = useRef(null);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = (e) => { if (e.matches) setOpen(false); };
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  /* Animate drawer open/close */
  useEffect(() => {
    if (!drawerRef.current) return;
    if (open) {
      gsap.fromTo(drawerRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
      );
    } else {
      gsap.to(drawerRef.current, { opacity: 0, y: -8, duration: 0.2, ease: 'power2.in' });
    }
  }, [open]);

  const handleToggleTheme = () => {
    onToggle();
    if (themeRef.current) {
      gsap.to(themeRef.current, { rotation: '+=90', duration: 0.3, ease: 'power2.out' });
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className="sticky top-0 z-[200] flex items-center justify-between
                 px-6 sm:px-8 h-[58px]
                 bg-white/65 dark:bg-neutral-900/75
                 border-b border-neutral-100 dark:border-neutral-800
                 backdrop-blur-[16px]"
    >
      {/* Logo */}
      <a href="">
        <img src={logo} alt="logo" className='h-8 w-auto dark:invert' />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-sm text-neutral-700 dark:text-neutral-300
                         hover:text-neutral-900 dark:hover:text-neutral-100
                         transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        {/* Theme toggle */}
        <button
          ref={themeRef}
          onClick={handleToggleTheme}
          aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-full flex items-center justify-center text-[15px]
                     border border-neutral-200 dark:border-neutral-700
                     bg-white dark:bg-neutral-800
                     hover:shadow-sm transition-shadow duration-200 cursor-pointer"
        >
          {dark ? '🌙' : '☀️'}
        </button>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
        >
          <span
            className="block w-[22px] h-[2px] rounded-sm transition-transform duration-300"
            style={{
              background: 'var(--ham-color, currentColor)',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[2px] rounded-sm transition-all duration-300"
            style={{
              background: 'var(--ham-color, currentColor)',
              width: open ? '0' : '22px',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-sm transition-transform duration-300"
            style={{
              background: 'var(--ham-color, currentColor)',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          ref={drawerRef}
          className="absolute top-[58px] left-0 right-0 z-[190]
                     bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl
                     border-b border-neutral-100 dark:border-neutral-800
                     px-6 pb-4 opacity-0"
        >
          <ul className="list-none flex flex-col">
            {NAV_ITEMS.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={`block py-3.5 text-[16px]
                             text-neutral-800 dark:text-neutral-200
                             no-underline transition-colors duration-200
                             hover:text-neutral-500 dark:hover:text-neutral-400
                             ${i < NAV_ITEMS.length - 1
                      ? 'border-b border-neutral-100 dark:border-neutral-800'
                      : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}