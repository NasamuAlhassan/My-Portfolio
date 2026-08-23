import Reveal from '@/components/motion/Reveal'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <Reveal>
          <p className="section-label mb-12">Education</p>
        </Reveal>

        <div className="space-y-px bg-stone">
          {education.map((entry, i) => (
            <Reveal key={entry.institution} delay={i * 0.08}>
              <div className="row grid gap-4 py-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] sm:gap-12 sm:px-2">
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                    {entry.institution}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] text-ink-faint">{entry.period}</p>
                </div>

                <div>
                  <p className="font-sans text-[15px] text-ink">{entry.degree}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-forest">{entry.grade}</p>

                  {entry.details && (
                    <p className="mt-4 max-w-reading font-sans text-sm leading-[1.7] text-ink-muted">
                      {entry.details}
                    </p>
                  )}

                  {entry.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex gap-3 font-sans text-sm text-ink-muted">
                          <span className="mt-0.5 shrink-0 text-forest" aria-hidden>
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
