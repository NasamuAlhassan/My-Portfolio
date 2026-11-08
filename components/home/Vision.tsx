import Disclosure from '@/components/Disclosure'
import Reveal from '@/components/motion/Reveal'
import { researchAgenda } from '@/lib/data'

export default function Vision() {
  return (
    <section id="vision" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label">06 · Vision</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading-sm mt-5 mb-6">Where this is going</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-8 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
            The research agenda for the next few years. Each line is marked with its real stage: none
            of these is a finished product.
          </p>
        </Reveal>

        <Disclosure label="Read the research agenda" openLabel="Hide the agenda">
        <div className="grid gap-4 md:grid-cols-2">
          {researchAgenda.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.05} className="h-full">
              <div className="card flex h-full flex-col gap-3 p-6">
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-clay">{item.stage}</p>
                </div>
                <p className="max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        </Disclosure>
      </div>
    </section>
  )
}
