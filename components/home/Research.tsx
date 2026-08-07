'use client'

import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import Waveform from '@/components/motion/Waveform'
import CorpusBar from '@/components/CorpusBar'

const METHOD = [
  {
    n: '01',
    title: 'Seeding kus_Latn from Dagbani',
    body: 'The new language token was initialised from the Dagbani embedding rather than randomly. Dagbani is the closest well-resourced Mabia relative, so the model starts from a related point in embedding space instead of noise.',
  },
  {
    n: '02',
    title: 'Splitting speech by book, not at random',
    body: 'Random clip-level splits let the same narrator and the same passage appear in both train and test, which inflates the score. Splitting at book level keeps the evaluation honest.',
  },
  {
    n: '03',
    title: 'Catching narrator leakage across 42 languages',
    body: 'The Asante Twi Bible audio had one reader present on both sides of the split. The splits were rebuilt to be source-disjoint and both the leaked and honest word error rates were published, so the difference is visible rather than hidden.',
  },
  {
    n: '04',
    title: 'Back-translation to extend coverage',
    body: 'A back-translation pipeline generates synthetic pairs from monolingual Kusaal text, pushing the corpus toward the 100,000-pair target without waiting on manual alignment.',
  },
]

export default function Research() {
  return (
    <section id="research" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">Research</p>
        </Reveal>
        <TextReveal
          text="Built from scratch, released for everyone."
          as="h2"
          className="section-heading mt-5 max-w-[20ch]"
        />

        {/* Corpus */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-sans text-base leading-[1.75] text-ink-muted">
              The corpus behind the translation system did not exist until it was assembled, pair by
              pair, from five separate sources. It is now the largest structured Kusaal linguistic
              dataset in existence, published under CC BY 4.0.
            </p>
            <p className="mt-5 font-sans text-base leading-[1.75] text-ink-muted">
              The speech corpus is separate: 30,820 verse-level clips totalling 81.71 hours at 16kHz
              mono, verified at zero integrity errors.
            </p>
            <div className="mt-8">
              <Waveform />
            </div>
          </div>

          <Reveal delay={0.15} className="lg:pt-2">
            <CorpusBar />
          </Reveal>
        </div>

        {/* Method */}
        <div className="mt-24">
          <Reveal>
            <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              Decisions that changed the numbers
            </p>
          </Reveal>

          <ol className="space-y-px bg-stone">
            {METHOD.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <li className="group grid gap-4 row py-8 transition-colors duration-300 hover:bg-paper-warm/60 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-2">
                  <span className="pt-1.5 font-mono text-[11px] text-forest transition-transform duration-300 group-hover:translate-x-1">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-snug text-ink">{step.title}</h3>
                    <p className="mt-3 max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}


