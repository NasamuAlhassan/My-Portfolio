'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import { about, personalInfo } from '@/lib/data'

/**
 * The opening statement lights up as the section scrolls.
 *
 * A single motion value drives a gradient wipe through `background-position`
 * on text clipped to the background. The previous version created one
 * `useTransform` per word — around sixty motion values all recomputing on
 * every scroll tick, which was a measurable chunk of the jank.
 */
function ScrollLitText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.35'] })
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ['100% 0', '0% 0'])

  return (
    <motion.p
      ref={ref}
      style={{
        backgroundPosition,
        backgroundImage:
          'linear-gradient(90deg, #0B0C0B 0%, #0B0C0B 42%, rgba(11,12,11,0.20) 58%, rgba(11,12,11,0.20) 100%)',
        backgroundSize: '220% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      className="font-serif text-xl leading-[1.4] tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
    >
      {text}
    </motion.p>
  )
}

export default function About() {
  const [opening, ...rest] = splitFirstTwo(about)

  return (
    <section id="about" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">About</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <ScrollLitText text={opening} />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-reading font-sans text-base leading-[1.8] text-ink-muted">
                {rest.join(' ')}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
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
  return [parts.slice(0, 2).join('. ') + '.', ...parts.slice(2)]
}


