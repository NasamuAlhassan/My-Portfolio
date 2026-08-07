'use client'

import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import Glass from '@/components/glass/Glass'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">Background</p>
        </Reveal>
        <TextReveal text="Education." as="h2" className="section-heading mt-5 mb-14" />

        <div className="grid gap-4 lg:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.institution} delay={i * 0.1}>
                <Glass className="h-full p-6 sm:p-7 md:p-9">
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                      {entry.institution}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] text-ink-faint">{entry.period}</span>
                  </div>

                  <p className="mt-3 font-sans text-sm text-ink-muted">{entry.degree}</p>
                  <p className="mt-2 font-mono text-[11px] text-forest">{entry.grade}</p>

                  {entry.details && (
                    <p className="mt-5 max-w-reading font-sans text-sm leading-[1.7] text-ink-muted">
                      {entry.details}
                    </p>
                  )}

                  {entry.highlights.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex gap-3 font-sans text-sm text-ink-muted">
                          <span className="mt-0.5 shrink-0 text-forest" aria-hidden>
                            â€”
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

