'use client'

import Counter from '@/components/motion/Counter'
import Reveal from '@/components/motion/Reveal'
import Glass from '@/components/glass/Glass'
import type { Metric } from '@/lib/data'

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
      ? 'font-serif text-4xl sm:text-5xl md:text-[3.4rem] tracking-tightest'
      : 'font-serif text-2xl sm:text-3xl tracking-tightest'

  return (
    <div
      className={`grid gap-4 ${
        metrics.length >= 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'
      }`}
    >
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.08}>
          {/* glass-blur: real backdrop blur, kept to these few tiles only */}
          <Glass dark={dark} className="glass-blur h-full px-5 py-7 sm:px-7 sm:py-11">
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
          </Glass>
        </Reveal>
      ))}
    </div>
  )
}
