import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },
      colors: {
        paper: '#FAFAF7',
        'paper-warm': '#F2F1EA',
        ink: '#0B0C0B',
        'ink-muted': '#4A4E4A',
        'ink-faint': '#8A8F8A',
        forest: '#1D4A2F',
        'forest-lift': '#2A6B44',
        signal: '#4FD18B',
        clay: '#B4643A',
        stone: '#E4E3DC',
        'stone-dark': '#232722',
        night: '#0C0F0D',
        'night-soft': '#141814',
      },
      maxWidth: {
        content: '1180px',
        reading: '68ch',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseBar: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        /* Translate only — no scale, no filter. These stay on the
           compositor and never trigger a repaint. */
        driftA: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '33%': { transform: 'translate3d(7vw,-5vh,0)' },
          '66%': { transform: 'translate3d(-5vw,6vh,0)' },
        },
        driftB: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%': { transform: 'translate3d(-8vw,7vh,0)' },
          '75%': { transform: 'translate3d(6vw,4vh,0)' },
        },
        driftC: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(5vw,8vh,0)' },
        },
        barPulse: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        marquee: 'marquee 44s linear infinite',
        pulseBar: 'pulseBar 1.1s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        driftA: 'driftA 34s ease-in-out infinite',
        driftB: 'driftB 44s ease-in-out infinite',
        driftC: 'driftC 54s ease-in-out infinite',
        barPulse: 'barPulse 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
