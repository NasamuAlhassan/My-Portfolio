import Reveal from '@/components/motion/Reveal'
import { moments } from '@/lib/data'

export default function Moments() {
  return (
    <section id="moments" className="veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-28">
        <Reveal>
          <p className="section-label">12 · Moments</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading-sm mt-5 mb-12">On stage and in the room</h2>
        </Reveal>

        <div className="grid grid-flow-row-dense auto-rows-[220px] gap-5 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal
              key={m.src}
              delay={(i % 3) * 0.06}
              className={`h-full ${m.wide ? 'sm:col-span-2' : ''} ${m.tall ? 'row-span-2' : ''}`}
            >
              <figure className={`framed group relative h-full w-full overflow-hidden rounded-[18px] bg-stone transition-transform duration-500 hover:-translate-y-1 ${i % 3 === 1 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}>
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10">
                  <p className="font-sans text-sm text-white">{m.caption}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">{m.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
