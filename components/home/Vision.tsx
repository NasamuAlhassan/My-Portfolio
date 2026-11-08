import Reveal from '@/components/motion/Reveal'
import { researchAgenda } from '@/lib/data'

export default function Vision() {
  return (
    <section id="vision" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-28">
        <Reveal>
          <p className="section-label">06 · Vision</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading-sm mt-5 mb-6">Where this is going</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-12 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
            The research agenda for the next few years. Each line is marked with its real stage: none
            of these is a finished product.
          </p>
        </Reveal>

        <div className="space-y-px bg-stone">
          {researchAgenda.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="row grid gap-3 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-10 sm:px-2">
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-clay">{item.stage}</p>
                </div>
                <p className="max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
