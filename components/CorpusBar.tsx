'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { corpusSources } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

// One colour per source, in data order. Greens are collected text, darkest
// first; back-translation is clay because it is synthetic, not collected.
const SHADES = ['#1D4A2F', '#3E8C5C', '#B4643A', '#6BAE87', '#8FBFA3', '#A8CBB6', '#C7D9CC']

export default function CorpusBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [active, setActive] = useState<number | null>(null)

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          Corpus provenance
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint num">
          ~63,100 pairs
        </p>
      </div>

      {/* Stacked bar */}
      <div className="flex h-14 w-full gap-px overflow-hidden rounded-sm bg-stone">
        {corpusSources.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ flexGrow: 0 }}
            animate={inView ? { flexGrow: s.share } : undefined}
            transition={{ duration: 1.1, delay: 0.12 + i * 0.09, ease: EASE }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              backgroundColor: SHADES[i % SHADES.length],
              flexBasis: 0,
              opacity: active === null || active === i ? 1 : 0.45,
            }}
            className="relative cursor-default transition-opacity duration-300"
          >
            <span className="sr-only">
              {s.name}: {s.share}%
            </span>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {corpusSources.map((s, i) => (
          <li
            key={s.name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center gap-2.5 py-0.5"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-[2px] transition-transform duration-300"
              style={{
                backgroundColor: SHADES[i % SHADES.length],
                transform: active === i ? 'scale(1.35)' : 'scale(1)',
              }}
            />
            <span className="font-sans text-sm text-ink-muted flex-1">{s.name}</span>
            <span className="font-mono text-[11px] text-ink-faint num">{s.share}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
