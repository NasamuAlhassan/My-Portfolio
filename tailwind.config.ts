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
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-text)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },
      colors: {
        paper: '#FFFFFF',
        'paper-warm': '#FBF6EA',
        cream: '#FBF6EA',
        gold: '#D99A1E',
        kred: '#B5361F',
        kgreen: '#0F5132',
        ink: '#0A0A0A',
        'ink-muted': '#5C5F66',
        'ink-faint': '#8B8F96',
        forest: '#0B6B47',
        'forest-lift': '#0E9F6E',
        signal: '#5EE39A',
        amber: '#F2B84B',
        clay: '#B26A00',
        stone: '#E6E7EA',
        'stone-dark': '#1B201E',
        night: '#07090A',
        'night-soft': '#0F1312',
      },
      maxWidth: {
        content: '1200px',
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
