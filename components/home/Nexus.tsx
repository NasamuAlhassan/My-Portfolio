import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import MetricStrip from '@/components/MetricStrip'
import { nexus } from '@/lib/data'

export default function Nexus() {
  return (
    <section id="nexus" className="veil-night text-paper">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-28 md:py-32">
        <Reveal>
          <p className="section-label-dark">01 · Flagship · Accessibility</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[14ch]">
              Nexus. <span className="text-white/55">Your phone, your voice.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Formerly {nexus.formerly}</p>
          </Reveal>
        </div>

        {/* Videos */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {nexus.videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.08}>
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
                <div className="aspect-video w-full">
                  <iframe
                    src={v.src}
                    title={v.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <p className="font-serif text-2xl text-paper">{v.title}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {i === 0 ? 'Real use' : 'Features'}
                </span>
              </div>
              <p className="mt-1 font-sans text-sm text-white/55">{v.caption}</p>
            </Reveal>
          ))}
        </div>

        {/* Case table + numbers */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {[
                ['Problem', 'Many blind Mobile Money users hand over their phone, and sometimes their PIN, to someone else. Twi is not on the Google Assistant SDK or Alexa language lists.'],
                ['Solution', nexus.summary],
                ['Privacy', nexus.privacy],
                ['Recognition', nexus.recognition],
                ['Next', nexus.next],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-2 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 sm:pt-1">{k}</dt>
                  <dd className="font-sans text-[15px] leading-[1.7] text-white/80">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">How it works</p>
              <ol className="mt-4 flex flex-wrap gap-2">
                {nexus.loop.map((s, i) => (
                  <li key={s.step} className="rounded-full border border-white/15 px-3.5 py-2 font-sans text-[13px] text-white/85">
                    <span className="mr-1.5 font-mono text-[10px] text-signal">0{i + 1}</span>
                    {s.step}
                  </li>
                ))}
              </ol>
            </Reveal>

            <div className="mt-10">
              <MetricStrip metrics={nexus.metrics} dark size="sm" />
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                {nexus.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                    <span>{l.label}</span>
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nexus.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="h-full">
              <div className="card-dark h-full p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="font-sans text-[15px] leading-snug text-white/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pitch deck */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">The pitch deck from the grand finale</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-[22px] border border-white/10 bg-black">
              <iframe src={nexus.deck} title="Nexus pitch deck" allowFullScreen loading="lazy" className="h-full w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
