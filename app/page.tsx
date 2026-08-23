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
import MetricStrip from '@/components/MetricStrip'
import LivePreview from '@/components/LivePreview'
import Reveal from '@/components/motion/Reveal'
import { projects, headlineMetrics } from '@/lib/data'

export default function Home() {
  const withPreview = projects.filter((p) => p.preview)

  return (
    <>
      <Hero />

      {/* Results */}
      <section className="veil-night text-paper">
        <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-28">
          <Reveal>
            <p className="section-label-dark">Results</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg text-paper mt-5 max-w-[18ch]">Measured on held-out data.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-reading font-sans text-base leading-[1.7] text-white/55">
              Source-disjoint splits throughout: no speaker or passage appears in both training and
              test.
            </p>
          </Reveal>

          <div className="mt-16 sm:mt-20">
            <MetricStrip metrics={headlineMetrics} dark />
          </div>
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
          <Reveal delay={0.08}>
            <h2 className="section-heading-sm mt-5 mb-6">Projects</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-12 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
              Research systems, shipped products and the engineering underneath them.
            </p>
          </Reveal>

          <AllProjects />
        </div>
      </section>

      {/* Live previews */}
      <section className="rule">
        <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-28">
          <Reveal>
            <p className="section-label">Live</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-heading-sm mt-5 mb-6">Running in production</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-14 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
              The real deployments, embedded as they are at this moment — not screenshots.
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            {withPreview.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
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
