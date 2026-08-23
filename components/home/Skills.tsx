import Reveal from '@/components/motion/Reveal'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <Reveal>
          <p className="section-label mb-12">Stack</p>
        </Reveal>

        <div className="space-y-px bg-stone">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 0.05}>
              <div className="row grid gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest pt-1">
                  {group}
                </p>
                <p className="font-sans text-[15px] leading-[1.9] text-ink-muted">
                  {items.join(' · ')}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
