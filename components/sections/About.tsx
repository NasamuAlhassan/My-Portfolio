'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { about, personalInfo } from '@/lib/data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label">About</p>
          <h2 className="section-heading">Who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-base leading-[1.8] text-ink-muted max-w-prose">
              {about}
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="border border-stone p-5 bg-white">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-4">
                Affiliations
              </p>
              <ul className="space-y-2">
                {personalInfo.affiliations.map((aff) => (
                  <li key={aff} className="font-sans text-sm text-ink">
                    {aff}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-stone p-5 bg-white">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-4">
                Contact
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-sans text-sm text-ink hover:text-forest transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ink hover:text-forest transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ink hover:text-forest transition-colors"
                  >
                    HuggingFace
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ink hover:text-forest transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
