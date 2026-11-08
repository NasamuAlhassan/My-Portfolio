'use client'

import Disclosure from '@/components/Disclosure'
import Reveal from '@/components/motion/Reveal'
import CorpusBar from '@/components/CorpusBar'
import { papers } from '@/lib/data'

const METHOD = [
  {
    n: '01',
    title: 'Seeding kus_Latn from Dagbani',
    body: 'The new Kusaal token was warm-started from the Dagbani embedding rather than randomly. Dagbani is the closest Gur relative already in NLLB-200, so the model starts from a related point in embedding space instead of noise.',
  },
  {
    n: '02',
    title: 'Splitting speech by book, not at random',
    body: 'Random clip-level splits let the same narrator and the same passage appear in both training and test, which inflates the score. Holding out whole books keeps the evaluation honest.',
  },
  {
    n: '03',
    title: 'Measuring narrator leakage',
    body: 'Several languages in the 42-language speech corpus contain the same scripture read by different narrators, so a random split can put identical text on both sides. The splits were rebuilt to be source-disjoint, and the leaked and honest WER were reported side by side.',
  },
  {
    n: '04',
    title: 'Mining Wikipedia for a second register',
    body: 'Anchor-first alignment on shared numbers and proper names (no GPU), then MT-bridged verification with sentence embeddings and chrF++, then 503 borderline pairs judged by hand. From 1,170 comparable articles it produced 13,659 verified pairs and lifted English to Kusaal by 12.8 BLEU on the Wikipedia benchmark, while the original test set held steady.',
  },
  {
    n: '05',
    title: 'Freezing a public benchmark, and saying where it is biased',
    body: 'A 1,000-pair Kusaal Wikipedia test set is frozen and published with its evaluation protocol, so anyone can check the numbers. It was mined with MT assistance, which flatters absolute scores, so the before and after change on it is the result that matters.',
  },
  {
    n: '06',
    title: 'Keeping the letters a tokenizer drops',
    body: 'The existing Kusaal voice silently deleted ɔ, ɛ and ʋ, which appear in 99.5% of verses. Extending its vocabulary from 28 to 37 tokens, while keeping the trained embeddings, puts them back.',
  },
]

export default function Research() {
  return (
    <section id="research" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label">05 · Research</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading mt-5 max-w-[20ch]">
            Data, models and evaluation, released openly.
          </h2>
        </Reveal>

        {/* Corpus */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="font-sans text-base leading-[1.75] text-ink-muted">
              The Kusaal-English corpus was assembled pair by pair from scripture, dictionaries, GhanaNLP
              data and a small Wikipedia subset (34,568 pairs after back-translation), then extended with 13,659 verified
              pairs mined from Kusaal Wikipedia: roughly 48,000 pairs in all, published under CC BY 4.0
              with the full construction pipeline.
            </p>
            <p className="mt-5 font-sans text-base leading-[1.75] text-ink-muted">
              The speech corpus is separate: 30,820 verse-level clips totalling 81.7 hours at 16 kHz
              mono. Beyond Kusaal, the speech work covers 42 Ghanaian languages in one model, and the
              applied systems work in Twi, Ewe, Hausa, Dagbani and Ghanaian English.
            </p>
          </div>

          <Reveal delay={0.15} className="lg:pt-2">
            <CorpusBar />
          </Reveal>
        </div>

        {/* Method, on request */}
        <div className="mt-12">
          <Disclosure label="Six decisions that changed the numbers" openLabel="Hide the decisions">
            <ol className="grid gap-4 md:grid-cols-2">
              {METHOD.map((step) => (
                <li key={step.n} className="card flex gap-4 p-6">
                  <span className="pt-1.5 font-mono text-[11px] text-forest">{step.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-snug text-ink">{step.title}</h3>
                    <p className="mt-3 max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Disclosure>
        </div>

        {/* Papers */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">Papers in preparation</p>
            <p className="mt-4 max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">{papers.status}</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">Talk</p>
            <p className="mt-3 max-w-reading font-sans text-[15px] leading-[1.7] text-ink-muted">
              Presented the Kusaal-English MT work at the Google Research Africa Monthly Student Tech-Talk,
              AICC Accra, 31 July 2026, and at a GhanaNLP community session.
            </p>
          </Reveal>
          <ol className="grid gap-3">
            {papers.titles.map((t, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <li className="card flex gap-5 p-5">
                  <span className="pt-1 font-mono text-[11px] text-forest">P{i + 1}</span>
                  <span className="font-serif text-xl leading-snug text-ink">{t}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}


