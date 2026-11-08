import Reveal from '@/components/motion/Reveal'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label mb-8">13 · Education</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.institution} delay={i * 0.08} className="h-full">
              <div className="card flex h-full flex-col gap-5 p-6 sm:p-8" style={{ borderTop: '4px solid #D99A1E' }}>
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
                            –
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
