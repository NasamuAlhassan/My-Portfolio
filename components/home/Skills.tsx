'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import { skills } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Skills() {
  return (
    <section id="skills" className="rule veil-warm">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">Stack</p>
        </Reveal>
        <TextReveal text="What I work with." as="h2" className="section-heading mt-5 mb-14" />

        <div className="space-y-px bg-stone">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 0.06}>
              <div className="row grid gap-4 py-7 sm:grid-cols-[220px_1fr] sm:gap-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest pt-1.5">
                  {group}
                </p>
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
                >
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      className="tag"
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.96 },
                        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}



