import Reveal from '@/components/motion/Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label mb-8">09 · Experience</p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {experience.map((item, i) => (
            <Reveal key={`${item.role}-${i}`} delay={(i % 2) * 0.05} className="h-full">
              <div className="card flex h-full flex-col p-6" style={{ borderTop: `4px solid ${item.current ? '#0F5132' : '#D99A1E'}` }}>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] text-ink-faint">{item.period}</span>
                  {item.current && (
                    <span className="rounded-full bg-forest/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-forest">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug text-ink sm:text-2xl">
                  {item.role}
                  {item.org && <span className="text-forest">, {item.org}</span>}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-ink-muted">{item.description}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="relative pl-4 font-sans text-[14.5px] leading-[1.65] text-ink-muted before:absolute before:left-0 before:text-forest before:content-['·']"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}



