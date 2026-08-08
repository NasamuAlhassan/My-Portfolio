import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Research from '@/components/home/Research'
import AllProjects from '@/components/home/AllProjects'
import Experience from '@/components/home/Experience'
import Education from '@/components/home/Education'
import Recognition from '@/components/home/Recognition'
import Contact from '@/components/home/Contact'
import Certifications from '@/components/sections/Certifications'
import Marquee from '@/components/Marquee'
import MetricStrip from '@/components/MetricStrip'
import LivePreview from '@/components/LivePreview'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import { projects, headlineMetrics, marqueeItems } from '@/lib/data'

export default function Home() {
  const withPreview = projects.filter((p) => p.preview)

  return (
    <>
      <Hero />

      <Marquee items={marqueeItems} />

      {/* Results */}
      <section className="relative overflow-hidden veil-night text-paper">
        <div className="hairline-grid-dark absolute inset-0 opacity-50" aria-hidden />
        <div className="relative max-w-content mx-auto px-5 sm:px-6 pt-16 sm:pt-24 md:pt-32">
          <Reveal>
            <p className="section-label-dark">Results</p>
          </Reveal>
          <TextReveal
            text="Measured, not estimated."
            as="h2"
            className="display-lg text-paper mt-5 max-w-[18ch]"
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-reading font-sans text-base leading-[1.7] text-white/55">
              Every figure below is measured on held-out data with source-disjoint splits, so no
              speaker or passage appears in both training and test.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
          <MetricStrip metrics={headlineMetrics} dark />
        </div>
      </section>

      <About />
      <Skills />
      <Research />

      {/* All projects */}
      <section id="projects" className="rule veil-warm">
        <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
          <Reveal>
            <p className="section-label">Work</p>
          </Reveal>
          <TextReveal text="Everything I have built." as="h2" className="section-heading mt-5 mb-6" />
          <Reveal delay={0.12}>
            <p className="mb-12 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
              Research systems, shipped products and the engineering underneath them. Filter to
              narrow it down.
            </p>
          </Reveal>

          <AllProjects />
        </div>
      </section>

      {/* Live previews */}
      <section className="rule">
        <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
          <Reveal>
            <p className="section-label">Live</p>
          </Reveal>
          <TextReveal text="Running in production right now." as="h2" className="section-heading mt-5 mb-6" />
          <Reveal delay={0.12}>
            <p className="mb-14 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
              These are the real sites, embedded as they are at this moment — not screenshots.
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            {withPreview.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.12}>
                <LivePreview url={p.preview as string} title={p.title} />
                <div className="mt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl leading-snug text-ink md:text-3xl">{p.title}</h3>
                    <span className="shrink-0 font-mono text-[10px] text-ink-faint">{p.year}</span>
                  </div>
                  <p className="mt-3 font-sans text-[15px] leading-[1.7] text-ink-muted">{p.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <Education />
      <Recognition />
      <Certifications />
      <Contact />
    </>
  )
}



