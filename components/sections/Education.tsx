'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '@/lib/data'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="education" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label">Background</p>
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <div className="space-y-5">
          {education.map((entry, index) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-8 mb-3">
                <div>
                  <h3 className="font-serif text-xl text-ink leading-snug">
                    {entry.institution}
                  </h3>
                  <p className="font-sans text-sm text-forest font-medium mt-0.5">
                    {entry.degree}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-[11px] text-ink-muted">{entry.period}</p>
                  <p className="font-mono text-[11px] text-forest mt-0.5">{entry.grade}</p>
                </div>
              </div>

              {entry.details && (
                <p className="font-sans text-sm text-ink-muted leading-[1.7] mt-3 max-w-prose">
                  {entry.details}
                </p>
              )}

              {entry.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="font-sans text-sm text-ink-muted flex gap-2.5">
                      <span className="text-stone select-none mt-[3px]">–</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
