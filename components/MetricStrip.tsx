'use client'

import Counter from '@/components/motion/Counter'
import Reveal from '@/components/motion/Reveal'
import type { Metric } from '@/lib/data'

/**
 * Figures set like a print annual report: each number under its own
 * hairline rule. No tiles, no chrome — the numbers are the design.
 */
export default function MetricStrip({
  metrics,
  dark = false,
  size = 'lg',
}: {
  metrics: Metric[]
  dark?: boolean
  size?: 'sm' | 'lg'
}) {
  const valueClass =
    size === 'lg'
      ? 'font-serif text-4xl sm:text-5xl md:text-[3.6rem] tracking-tightest'
      : 'font-serif text-2xl sm:text-3xl tracking-tightest'

  const rule = dark ? 'border-white/20' : 'border-ink/15'

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.07} className={`border-t pt-6 sm:pt-7 ${rule}`}>
          <p className={`${valueClass} num ${dark ? 'text-paper' : 'text-ink'}`}>
            <Counter value={m.value} />
            {m.unit && (
              <span
                className={`ml-1.5 align-top font-mono text-sm sm:text-base ${
                  dark ? 'text-signal' : 'text-forest'
                }`}
              >
                {m.unit}
              </span>
            )}
          </p>
          <p
            className={`mt-3 font-mono text-[10px] uppercase tracking-[0.2em] ${
              dark ? 'text-white/50' : 'text-ink-faint'
            }`}
          >
            {m.label}
          </p>
        </Reveal>
      ))}
    </div>
  )
}
