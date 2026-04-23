import { useState } from "react"

const links = ["About", "Projects", "Skills", "Contact"]

const Navbar = ({ dark, onToggle }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/70 border-b border-neutral-100 dark:border-neutral-800">
      <div className="flex items-center justify-between px-6 md:px-10 h-14">
        
        {/* Logo */}
        <span className="font-playfair text-lg tracking-tight">
          MSA.
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          
          {/* Dark Toggle */}
          <button
            onClick={onToggle}
            className="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-700
                       bg-white dark:bg-neutral-800 flex items-center justify-center
                       transition-all duration-300 hover:rotate-20 hover:scale-105"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
          >
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-neutral-800 dark:bg-white"></span>
              <span className="block w-5 h-[2px] bg-neutral-800 dark:bg-white"></span>
              <span className="block w-5 h-[2px] bg-neutral-800 dark:bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar