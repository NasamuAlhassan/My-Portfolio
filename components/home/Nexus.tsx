import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import MetricStrip from '@/components/MetricStrip'
import { nexus } from '@/lib/data'

export default function Nexus() {
  return (
    <section id="nexus" className="rule veil-night text-paper">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label-dark">Flagship · Accessibility</p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="display-lg text-paper">{nexus.title}</h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                Formerly {nexus.formerly}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 font-serif text-2xl leading-snug text-signal sm:text-3xl">{nexus.claim}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-reading font-sans text-base leading-[1.75] text-white/65">
                {nexus.summary}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-reading border-l-2 border-signal pl-4 font-sans text-sm leading-[1.7] text-white/80">
                {nexus.recognition}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <figure>
              <img
                src={nexus.photo}
                alt={nexus.photoAlt}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-sm object-cover"
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Grand finale · University of Ghana · 31 Oct 2026
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* The loop */}
        <Reveal delay={0.1}>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-5">
            {nexus.loop.map((s, i) => (
              <li key={s.step} className="bg-night px-5 py-6">
                <span className="font-mono text-[10px] text-signal">0{i + 1}</span>
                <p className="mt-2 font-serif text-xl text-paper">{s.step}</p>
                <p className="mt-1.5 font-sans text-sm leading-snug text-white/55">{s.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Videos */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {nexus.videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.08}>
              <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
                <iframe
                  src={v.src}
                  title={v.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <p className="mt-4 font-serif text-xl text-paper">{v.title}</p>
              <p className="mt-1 font-sans text-sm text-white/55">{v.caption}</p>
            </Reveal>
          ))}
        </div>

        {/* Pitch deck */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              The pitch deck from the grand finale
            </p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black">
              <iframe src={nexus.deck} title="Nexus pitch deck" allowFullScreen loading="lazy" className="h-full w-full" />
            </div>
          </div>
        </Reveal>

        {/* Capabilities */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {nexus.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="font-sans text-[15px] leading-snug text-white/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-reading font-sans text-[15px] leading-[1.75] text-white/60">
            <span className="text-paper">Privacy. </span>
            {nexus.privacy}
          </p>
        </Reveal>

        <div className="mt-16">
          <MetricStrip metrics={nexus.metrics} dark size="sm" />
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-reading font-sans text-[15px] leading-[1.7] text-white/60">{nexus.next}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {nexus.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                <span>{l.label}</span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
