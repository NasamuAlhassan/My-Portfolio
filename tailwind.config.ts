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
        // Theme-aware (flip in dark mode)
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'paper-warm': 'rgb(var(--c-warm) / <alpha-value>)',
        cream: 'rgb(var(--c-warm) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--c-muted) / <alpha-value>)',
        'ink-faint': 'rgb(var(--c-faint) / <alpha-value>)',
        stone: 'rgb(var(--c-stone) / <alpha-value>)',
        forest: 'rgb(var(--c-forest) / <alpha-value>)',
        kred: 'rgb(var(--c-kred) / <alpha-value>)',
        clay: 'rgb(var(--c-clay) / <alpha-value>)',
        // Fixed brand colours
        gold: '#D99A1E',
        kgreen: '#0F5132',
        'forest-lift': '#0E9F6E',
        signal: '#5EE39A',
        amber: '#F2B84B',
        night: '#07090A',
        'night-soft': '#0F1312',
        'stone-dark': '#1B201E',
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
