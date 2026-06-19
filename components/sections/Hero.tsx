'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14 px-6"
    >
      <div className="max-w-content mx-auto w-full py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.p variants={item} className="section-label">
            AI Researcher · Low-Resource NLP · African Language Technologies
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[1.0] tracking-tight text-ink mt-4"
          >
            Prince Nasamu
            <br />
            Alhassan
          </motion.h1>

          <motion.p
            variants={item}
            className="font-serif italic text-xl sm:text-2xl text-ink-muted mt-6 leading-snug"
          >
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Read my Research
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="font-sans text-sm text-ink-muted mt-8"
          >
            {personalInfo.university} · CGPA {personalInfo.gpa}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
