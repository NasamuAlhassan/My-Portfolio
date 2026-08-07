'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
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
      <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="bloom absolute -top-1/4 left-1/2 h-[70vh] w-[110vw] -translate-x-1/2" aria-hidden />

      <motion.div style={{ y, opacity }} className="relative max-w-content mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="section-label"
        >
          {personalInfo.title}
        </motion.p>

        <TextReveal
          text={positioning.claim}
          as="h1"
          delay={0.25}
          className="display-xl text-ink mt-7 max-w-[16ch]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
          className="lede mt-7 sm:mt-9 max-w-[52ch]"
        >
          {positioning.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          className="mt-9 sm:mt-11 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Magnetic>
            <Link href="/research" className="btn-primary">
              <span>Read the research</span>
              <ArrowUpRight size={15} />
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span>Hugging Face</span>
              <ArrowUpRight size={15} />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative max-w-content mx-auto w-full mt-12 sm:mt-16 flex items-center gap-3"
      >
        <ArrowDown size={13} className="text-ink-faint animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          {personalInfo.university} · CGPA {personalInfo.gpa}
        </span>
      </motion.div>
    </section>
  )
}
