import Hero from '@/components/home/Hero'
import Nexus from '@/components/home/Nexus'
import StartHere from '@/components/home/StartHere'
import Glance from '@/components/home/Glance'
import Disclosure from '@/components/Disclosure'
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
      <StartHere />
      <Nexus />
      <Glance />

      {/* Work: live first, everything else on request */}
      <section id="work" className="bg-paper">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <p className="section-label">03 · Work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-heading mt-4 max-w-[16ch]">Things you can open right now.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-reading font-sans text-base leading-[1.65] text-ink-muted sm:text-lg">
              Six running apps. On a laptop they load live; on a phone you see a screenshot that opens the real site.
              Mabia AI runs on seeded demonstration data.
            </p>
          </Reveal>

          <div id="live" className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-6 md:gap-y-12">
            {withPreview.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08} className="min-w-0">
                <LivePreview url={p.preview as string} href={p.links.find((l) => /live/i.test(l.label))?.href} title={p.title} image={p.previewImage} />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-sans text-xl font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                  <span className="shrink-0 font-mono text-[10px] text-ink-faint">{p.year}</span>
                </div>
                <p className="mt-2 font-sans text-[15px] leading-[1.6] text-ink-muted">{p.summary}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Disclosure label={`See all ${projects.length} projects`} hint="Status, numbers and links for every build" openLabel="Hide the full list">
              <p className="mb-6 max-w-reading font-sans text-base leading-[1.65] text-ink-muted">
                Accessibility, language technology, health and civic systems, and products. Open any row for the full
                story, the numbers and the links.
              </p>
              <AllProjects />
            </Disclosure>
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
