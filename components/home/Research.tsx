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
    title: 'Testing narrator leakage across 42 languages',
    body: 'Six languages in the corpus contain the same scripture read by different narrators, so a random split can put byte-identical text on both sides. The splits were rebuilt to be book-disjoint — and the cost of the leak was then measured directly and published as a negative result: on these weights, the difference sat within noise.',
  },
  {
    n: '04',
    title: 'Mining Wikipedia for a second register',
    body: 'A shared-anchor alignment pipeline, verified by the model and partially human-adjudicated, mined 13,659 encyclopedic sentence pairs from Kusaal Wikipedia — lifting the weaker direction by 12.8 BLEU on encyclopedic text, with no forgetting on the original test set.',
  },
  {
    n: '05',
    title: 'Freezing a public benchmark',
    body: 'A 1,000-pair test set from the Wikipedia corpus is frozen and published with its evaluation protocol and reference results, so anyone can verify the numbers independently — and no one, including the author, trains on it.',
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
              The corpus behind the translation system was assembled pair by pair from six separate
              sources, then extended with back-translation and a sentence-aligned corpus mined from
              Kusaal Wikipedia — roughly 63,100 pairs, published under CC BY 4.0 and CC BY-SA 4.0.
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


