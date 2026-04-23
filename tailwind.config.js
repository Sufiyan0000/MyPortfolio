export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        robotFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%':       { transform: 'translateY(-18px) rotate(1deg)' },
        },
        shadowPulse: {
          '0%, 100%': { width: '100px', opacity: '0.8' },
          '50%':       { width: '70px',  opacity: '0.4' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 7px #4ade80' },
          '50%':       { opacity: '0.5', boxShadow: '0 0 3px #4ade80' },
        },
      },
      animation: {
        robotFloat:  'robotFloat 4s ease-in-out infinite',
        shadowPulse: 'shadowPulse 4s ease-in-out infinite',
        glow:        'glow 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};