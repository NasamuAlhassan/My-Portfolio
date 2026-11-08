import Counter from '@/components/motion/Counter'
import Reveal from '@/components/motion/Reveal'
import { glance } from '@/lib/data'

export default function Glance() {
  return (
    <section id="glance" className="relative bg-kgreen text-paper">
      <div className="kente h-2.5 w-full" aria-hidden />
      <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-4 md:grid-cols-[280px_1fr] md:gap-10">
          <Reveal>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-gold">02 · At a glance</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl leading-[1] text-paper sm:text-5xl max-w-[20ch]">
              Built and measured. Every figure says what it measures.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[20px] border border-white/15 lg:grid-cols-4">
          {glance.map((m, i) => (
            <Reveal
              key={m.label}
              delay={(i % 4) * 0.05}
              className={`border-white/15 p-5 sm:p-7 ${i % 2 === 0 ? 'border-r' : ''} ${
                (i + 1) % 4 !== 0 ? 'lg:border-r' : 'lg:border-r-0'
              } ${i < glance.length - 2 ? 'border-b' : ''} ${i < glance.length - 4 ? 'lg:border-b' : 'lg:border-b-0'}`}
            >
              <p className="num font-sans text-[2.1rem] font-extrabold leading-none tracking-[-0.04em] text-gold sm:text-5xl">
                <Counter value={m.value} />
                {m.unit && <span className="ml-0.5 text-paper/80">{m.unit}</span>}
              </p>
              <p className="mt-3 font-sans text-[13px] leading-snug text-white/75">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
