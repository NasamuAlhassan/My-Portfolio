import Hero from '@/components/home/Hero'
import Nexus from '@/components/home/Nexus'
import Glance from '@/components/home/Glance'
import AllProjects from '@/components/home/AllProjects'
import Research from '@/components/home/Research'
import Vision from '@/components/home/Vision'
import OpenResources from '@/components/home/OpenResources'
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Recognition from '@/components/home/Recognition'
import Moments from '@/components/home/Moments'
import Education from '@/components/home/Education'
import Partner from '@/components/home/Partner'
import Certifications from '@/components/sections/Certifications'
import LivePreview from '@/components/LivePreview'
import Reveal from '@/components/motion/Reveal'
import { projects } from '@/lib/data'

export default function Home() {
  const withPreview = projects.filter((p) => p.preview)

  return (
    <>
      <Hero />
      <Nexus />
      <Glance />

      {/* Work */}
      <section id="work" className="rule bg-paper">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-4 md:grid-cols-[280px_1fr] md:gap-10">
            <Reveal>
              <p className="section-label">03 · Portfolio</p>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <h2 className="section-heading-sm max-w-[20ch]">What is built, and how far along it is.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-reading font-sans text-base leading-[1.65] text-ink-muted">
                  Accessibility, language technology, health and civic systems, and products. Open any row for
                  the full story, the numbers and the links.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="mt-12">
            <AllProjects />
          </div>
        </div>
      </section>

      {/* Live demos */}
      <section id="live" className="veil-warm">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-4 md:grid-cols-[280px_1fr] md:gap-10">
            <Reveal>
              <p className="section-label">04 · Live</p>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <h2 className="section-heading-sm">Try them now.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-reading font-sans text-base leading-[1.65] text-ink-muted">
                  The running apps, embedded as they are right now. Mabia AI runs on seeded demonstration data.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-6">
            {withPreview.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08} className="min-w-0">
                <LivePreview url={p.preview as string} href={p.links.find((l) => /live/i.test(l.label))?.href} title={p.title} />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-sans text-xl font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                  <span className="shrink-0 font-mono text-[10px] text-ink-faint">{p.year}</span>
                </div>
                <p className="mt-2 font-sans text-[15px] leading-[1.6] text-ink-muted">{p.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Research />
      <Vision />
      <OpenResources />
      <About />
      <Experience />
      <Skills />
      <Recognition />
      <Moments />
      <Education />
      <Certifications />
      <Partner />
    </>
  )
}
