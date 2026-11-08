import { ArrowUpRight, Mic, Brain, Route, Hand, ShieldCheck } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import MetricStrip from '@/components/MetricStrip'
import VideoPreview from '@/components/VideoPreview'
import Disclosure from '@/components/Disclosure'
import { nexus } from '@/lib/data'

const STEP_ICONS = [Mic, Brain, Route, Hand, ShieldCheck]

export default function Nexus() {
  return (
    <section id="nexus" className="veil-warm">
      <div className="kente h-1.5 w-full" aria-hidden />
      <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="section-label">01 · Flagship · Accessibility</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[14ch] text-ink">
              Nexus. <span className="text-forest">Your phone, your voice.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Formerly {nexus.formerly}</p>
          </Reveal>
        </div>

        {/* Video + the three things to know */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <Reveal>
            <VideoPreview {...nexus.video} dark={false} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                ['The problem', 'Many blind Mobile Money users hand over their phone, and sometimes their PIN, to someone else.'],
                ['What Nexus does', 'Say “Soma sidi anum ma me yere” (send five cedis to my wife) in Asante Twi or Ghanaian English. Nexus walks the Mobile Money menu for you and stops at the PIN.'],
                ['Why it is safe', 'The PIN never leaves the phone. The user types it privately with the volume buttons.'],
              ].map(([k, v], i) => (
                <div key={k} className="card p-5" style={{ borderLeft: `4px solid ${['#B5361F', '#D99A1E', '#0F5132'][i]}` }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">{k}</p>
                  <p className="mt-2 font-sans text-[15px] leading-[1.6] text-ink">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The loop, as a row of steps */}
        <Reveal>
          <ol className="mt-14 grid gap-3 sm:grid-cols-5">
            {nexus.loop.map((s, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <li key={s.step} className="rounded-2xl border border-stone bg-surface p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-forest/10 text-forest">
                    <Icon size={18} aria-hidden />
                  </span>
                  <p className="mt-3 font-serif text-xl text-ink">
                    <span className="mr-1.5 font-mono text-[10px] text-gold">0{i + 1}</span>
                    {s.step}
                  </p>
                  <p className="mt-1 font-sans text-[13px] leading-snug text-ink-muted">{s.body}</p>
                </li>
              )
            })}
          </ol>
        </Reveal>

        <div className="mt-14">
          <MetricStrip metrics={nexus.metrics} size="sm" />
        </div>

        <Reveal>
          <p className="mt-10 max-w-[60ch] font-sans text-[15px] leading-[1.7] text-ink-muted">{nexus.recognition}</p>
        </Reveal>

        {/* Detail, on request */}
        <div className="mt-10">
          <Disclosure label="Read the full case: privacy, capabilities and what is next">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <dl className="divide-y divide-stone border-y border-stone">
                {[
                  ['Solution', nexus.summary],
                  ['Privacy', nexus.privacy],
                  ['Next', nexus.next],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-6">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint sm:pt-1">{k}</dt>
                    <dd className="font-sans text-[15px] leading-[1.7] text-ink-muted">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="grid gap-4 sm:grid-cols-2">
                {nexus.capabilities.map((c) => (
                  <div key={c.title} className="card p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-kred">{c.title}</p>
                    <ul className="mt-3 space-y-2">
                      {c.items.map((item) => (
                        <li key={item} className="font-sans text-[14px] leading-snug text-ink-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Disclosure>
        </div>

        {/* More, in the Drive folder */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-[24px] border border-stone bg-surface">
            <div className="kente h-1.5 w-full" aria-hidden />
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">More in the Nexus folder</p>
                  <h3 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">More features and the app</h3>
                </div>
                <a href={nexus.folder} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">
                  <span>Open the Nexus folder</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {nexus.more.map((m) => (
                  <li key={m.href}>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group flex h-full flex-col p-5"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kred">{m.kind}</span>
                      <span className="mt-3 font-serif text-xl leading-snug text-ink">{m.title}</span>
                      <span className="mt-2 flex-1 font-sans text-[14px] leading-relaxed text-ink-muted">{m.note}</span>
                      <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-forest">
                        {m.cta}
                        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
