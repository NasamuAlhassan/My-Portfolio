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
    },
  },
  plugins: [],
}

export default config
