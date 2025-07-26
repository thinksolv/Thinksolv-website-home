// svgIcons.tsx

export const WavyBackground = () => (
  <svg
    viewBox="0 0 1200 400"
    className="absolute inset-0 w-full h-full animate-wave"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
    </defs>
    <path
      d="M0,100 C300,150 600,50 1200,100 L1200,400 L0,400 Z"
      fill="url(#waveGradient1)"
      opacity="0.6"
      className="animate-wave-slow"
    />
    <path
      d="M0,150 C400,200 800,100 1200,150 L1200,400 L0,400 Z"
      fill="url(#waveGradient2)"
      opacity="0.4"
      className="animate-wave-medium"
    />
    <path
      d="M0,200 C200,250 800,150 1200,200 L1200,400 L0,400 Z"
      fill="#f1f5f9"
      opacity="0.3"
      className="animate-wave-fast"
    />
  </svg>
);
