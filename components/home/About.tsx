import Reveal from '@/components/motion/Reveal'
import { about, personalInfo } from '@/lib/data'

export default function About() {
  const [opening, rest] = splitFirstTwo(about)

  return (
    <section id="about" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">About</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <Reveal delay={0.05}>
              <p className="font-serif text-xl leading-[1.4] tracking-tight text-ink sm:text-2xl md:text-3xl lg:text-4xl">
                {opening}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-reading font-sans text-base leading-[1.8] text-ink-muted">
                {rest}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <dl className="space-y-px bg-stone">
              {[
                ['Based in', 'Accra, Ghana'],
                ['From', 'Bawku, Upper East'],
                ['Studying', personalInfo.degree],
                ['CGPA', `${personalInfo.gpa} / 4.0`],
                ['Graduating', personalInfo.graduationYear],
                ['Languages', 'Kusaal, English'],
              ].map(([k, v]) => (
                <div key={k} className="row py-3.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    {k}
                  </dt>
                  <dd className="mt-1 font-sans text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Splits the bio into a punchy opening (first two sentences) and the remainder. */
function splitFirstTwo(text: string): string[] {
  const parts = text.split('. ')
  return [parts.slice(0, 2).join('. ') + '.', parts.slice(2).join('. ')]
}
