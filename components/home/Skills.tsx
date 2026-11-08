import Reveal from '@/components/motion/Reveal'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label mb-8">10 · Stack</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 0.05} className="h-full">
              <div className="card h-full p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-kred">
                  {group}
                </p>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.8] text-ink-muted">
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
