'use client'

import Reveal from '@/components/motion/Reveal'
import { certifications, type Recognition as RecognitionEntry } from '@/lib/data'

function List({ entries }: { entries: RecognitionEntry[] }) {
  return (
    <div className="space-y-px bg-white/10">
      {entries.map((e, i) => (
        <Reveal key={e.title} delay={i * 0.06}>
          <div className="group flex flex-col gap-2 row-dark py-7 sm:flex-row sm:items-baseline sm:gap-8">
            <div className="flex-1">
              <p className="font-serif text-xl leading-snug text-paper transition-colors duration-300 group-hover:text-signal sm:text-2xl">
                {e.title}
              </p>
              <p className="mt-2 font-sans text-sm text-white/50">{e.issuer}</p>
            </div>
            {e.date && <span className="shrink-0 font-mono text-[11px] text-signal">{e.date}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Recognition() {
  const awards = certifications.filter((c) => c.type === 'award')
  const talks = certifications.filter((c) => c.type === 'talk')

  return (
    <section id="recognition" className="rule veil-night text-paper">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <Reveal>
          <p className="section-label-dark mb-14">Talks &amp; awards</p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {talks.length > 0 && (
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Talks
              </p>
              <List entries={talks} />
            </div>
          )}

          {awards.length > 0 && (
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Awards & programmes
              </p>
              <List entries={awards} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}



