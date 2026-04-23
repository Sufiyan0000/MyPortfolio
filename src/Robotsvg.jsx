/**
 * RobotSVG — hand-crafted SVG robot character.
 * Used in Hero on lg+ screens.
 * Glowing eyes, chest display, antenna, full body.
 */
export default function RobotSVG() {
    return (
      <svg
        width="220"
        height="300"
        viewBox="0 0 220 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bodyGrad" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#c8d8ff" />
            <stop offset="100%" stopColor="#8fa8e8" />
          </radialGradient>
          <radialGradient id="headGrad" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#dde8ff" />
            <stop offset="100%" stopColor="#9ab4f0" />
          </radialGradient>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
          </radialGradient>
          <filter id="robotGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="robotShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="rgba(100,130,255,0.25)" />
          </filter>
          <linearGradient id="antennGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b8cff" />
            <stop offset="100%" stopColor="#9ab4f0" />
          </linearGradient>
        </defs>
  
        {/* Antenna */}
        <line x1="110" y1="28" x2="110" y2="55" stroke="url(#antennGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="110" cy="22" r="7" fill="#6b8cff" filter="url(#robotGlow)" />
        <circle cx="110" cy="22" r="4" fill="#a5b4ff" />
  
        {/* Head */}
        <rect x="62" y="52" width="96" height="78" rx="22" fill="url(#headGrad)" filter="url(#robotShadow)" />
        <rect x="68" y="56" width="50" height="20" rx="10" fill="rgba(255,255,255,0.30)" />
        <rect x="66" y="85" width="88" height="24" rx="8" fill="rgba(40,60,120,0.15)" />
  
        {/* Eyes */}
        <ellipse cx="89" cy="97" rx="13" ry="10" fill="rgba(15,25,60,0.85)" />
        <ellipse cx="131" cy="97" rx="13" ry="10" fill="rgba(15,25,60,0.85)" />
        <ellipse cx="89" cy="97" rx="8" ry="7" fill="url(#eyeGlow)" filter="url(#robotGlow)" />
        <ellipse cx="131" cy="97" rx="8" ry="7" fill="url(#eyeGlow)" filter="url(#robotGlow)" />
        <circle cx="91" cy="95" r="3" fill="rgba(255,255,255,0.9)" />
        <circle cx="133" cy="95" r="3" fill="rgba(255,255,255,0.9)" />
  
        {/* Mouth / LED strip */}
        <rect x="82" y="114" width="56" height="8" rx="4" fill="rgba(40,60,140,0.2)" />
        <rect x="85" y="116" width="12" height="4" rx="2" fill="#4ade80" opacity="0.9" />
        <rect x="100" y="116" width="12" height="4" rx="2" fill="#4ade80" opacity="0.6" />
        <rect x="115" y="116" width="12" height="4" rx="2" fill="#4ade80" opacity="0.3" />
  
        {/* Ear bolts */}
        <circle cx="62" cy="91" r="6" fill="#b8c8f0" />
        <circle cx="158" cy="91" r="6" fill="#b8c8f0" />
        <circle cx="62" cy="91" r="3" fill="#8fa8e8" />
        <circle cx="158" cy="91" r="3" fill="#8fa8e8" />
  
        {/* Neck */}
        <rect x="96" y="130" width="28" height="16" rx="6" fill="#a8bcec" />
  
        {/* Body */}
        <rect x="42" y="145" width="136" height="90" rx="24" fill="url(#bodyGrad)" filter="url(#robotShadow)" />
        <rect x="50" y="150" width="70" height="24" rx="10" fill="rgba(255,255,255,0.28)" />
  
        {/* Chest panel */}
        <rect x="70" y="170" width="80" height="44" rx="12" fill="rgba(30,50,120,0.15)" />
        <circle cx="87"  cy="185" r="7" fill="#4ade80" opacity="0.9" filter="url(#robotGlow)" />
        <circle cx="110" cy="185" r="7" fill="#6b8cff" opacity="0.8" filter="url(#robotGlow)" />
        <circle cx="133" cy="185" r="7" fill="#4ade80" opacity="0.7" filter="url(#robotGlow)" />
        <rect x="78" y="200" width="64" height="4" rx="2" fill="rgba(107,140,255,0.5)" />
        <rect x="78" y="207" width="40" height="3" rx="1.5" fill="rgba(74,222,128,0.5)" />
  
        {/* Body shoulder bolts */}
        <circle cx="55"  cy="160" r="5" fill="#b8c8f0" />
        <circle cx="165" cy="160" r="5" fill="#b8c8f0" />
  
        {/* Left arm */}
        <rect x="10" y="148" width="32" height="72" rx="16" fill="url(#bodyGrad)" filter="url(#robotShadow)" />
        <rect x="14" y="152" width="14" height="20" rx="6" fill="rgba(255,255,255,0.25)" />
        <ellipse cx="26" cy="228" rx="14" ry="10" fill="#a8bcec" />
        <rect x="16" y="232" width="8" height="14" rx="4" fill="#9ab4f0" />
        <rect x="26" y="234" width="8" height="12" rx="4" fill="#9ab4f0" />
  
        {/* Right arm */}
        <rect x="178" y="148" width="32" height="72" rx="16" fill="url(#bodyGrad)" filter="url(#robotShadow)" />
        <rect x="194" y="152" width="14" height="20" rx="6" fill="rgba(255,255,255,0.25)" />
        <ellipse cx="194" cy="228" rx="14" ry="10" fill="#a8bcec" />
        <rect x="188" y="232" width="8" height="14" rx="4" fill="#9ab4f0" />
        <rect x="176" y="234" width="8" height="12" rx="4" fill="#9ab4f0" />
  
        {/* Legs */}
        <rect x="68"  y="233" width="34" height="52" rx="14" fill="url(#bodyGrad)" />
        <rect x="118" y="233" width="34" height="52" rx="14" fill="url(#bodyGrad)" />
  
        {/* Feet */}
        <rect x="62"  y="278" width="44" height="18" rx="9" fill="#a8bcec" />
        <rect x="114" y="278" width="44" height="18" rx="9" fill="#a8bcec" />
      </svg>
    );
  }