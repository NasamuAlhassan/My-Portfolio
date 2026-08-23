'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import TextReveal from '@/components/motion/TextReveal'
import { personalInfo, positioning } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax: content drifts up and fades as the section leaves.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-5 sm:px-6 pt-28 pb-16"
    >
      <div className="hairline-grid absolute inset-0 opacity-60" aria-hidden />

      <motion.div style={{ y, opacity }} className="relative max-w-content mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-label"
        >
          AI researcher · University of Ghana, Legon
        </motion.p>

        <TextReveal
          text={positioning.claim}
          as="h1"
          delay={0.2}
          className="display-xl text-ink mt-7 max-w-[16ch]"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="lede mt-7 sm:mt-9 max-w-[52ch]"
        >
          {positioning.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-9 sm:mt-11 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a href="#research" className="btn-primary">
            <span>See the research</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href={personalInfo.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>Hugging Face</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative max-w-content mx-auto w-full mt-12 sm:mt-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          ↓ · {personalInfo.university} · CGPA {personalInfo.gpa}
        </span>
      </motion.div>
    </section>
  )
}
