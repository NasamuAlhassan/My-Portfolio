'use client'

import Disclosure from '@/components/Disclosure'
import Reveal from '@/components/motion/Reveal'
import { certifications, type Recognition as RecognitionEntry } from '@/lib/data'

function List({ entries }: { entries: RecognitionEntry[] }) {
  return (
    <div className="grid gap-3">
      {entries.map((e, i) => (
        <Reveal key={e.title} delay={i * 0.06}>
          <div className="card group flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:gap-8">
            <div className="flex-1">
              <p className="font-serif text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-forest">
                {e.title}
              </p>
              <p className="mt-2 font-sans text-sm text-ink-faint">{e.issuer}</p>
            </div>
            {e.date && <span className="shrink-0 font-mono text-[11px] text-forest">{e.date}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Recognition() {
  const awards = certifications.filter((c) => c.type === 'award')
  const talks = certifications.filter((c) => c.type === 'talk')
  const community = certifications.filter((c) => c.type === 'community')

  return (
    <section id="recognition" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label mb-8">11 · Talks &amp; awards</p>
        </Reveal>

        <Disclosure label="Show talks, awards and community roles" openLabel="Hide talks and awards">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {talks.length > 0 && (
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Talks
              </p>
              <List entries={talks} />
            </div>
          )}

          {awards.length > 0 && (
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Awards & programmes
              </p>
              <List entries={awards} />
            </div>
          )}

          {community.length > 0 && (
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Leadership &amp; community
              </p>
              <List entries={community} />
            </div>
          )}
        </div>
        </Disclosure>
      </div>
    </section>
  )
}



