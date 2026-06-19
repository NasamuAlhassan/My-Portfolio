'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label">Journey</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-stone hidden sm:block" />

          <div className="space-y-8 sm:pl-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`hidden sm:block absolute -left-[2.35rem] top-[5px] w-2.5 h-2.5 rounded-full border-2
                    ${item.current
                      ? 'bg-forest border-forest'
                      : 'bg-white border-stone'
                    }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 mb-1.5">
                  <h3 className="font-sans font-semibold text-base text-ink leading-snug">
                    {item.role}
                    {item.org && (
                      <span className="font-normal text-forest"> — {item.org}</span>
                    )}
                  </h3>
                  <span className="font-mono text-[11px] text-ink-muted shrink-0">{item.period}</span>
                </div>

                <p className="font-sans text-sm leading-[1.75] text-ink-muted max-w-prose">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
