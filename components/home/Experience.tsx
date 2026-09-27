'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 55%'],
  })
  // The spine draws itself as the timeline scrolls through the viewport.
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <section id="experience" className="rule veil-night text-paper">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28">
        <Reveal>
          <p className="section-label-dark mb-14">Experience</p>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-white/12 sm:block" aria-hidden />
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-2 bottom-2 hidden w-px origin-top bg-signal sm:block"
            aria-hidden
          />

          <div className="space-y-10 sm:pl-10">
            {experience.map((item, i) => (
              <Reveal key={`${item.role}-${i}`} delay={i * 0.05}>
                <div className="group relative">
                  <span
                    className={`absolute -left-[2.85rem] top-2 hidden h-2.5 w-2.5 rounded-full border-2 transition-transform duration-300 group-hover:scale-150 sm:block ${
                      item.current ? 'border-signal bg-signal' : 'border-white/30 bg-transparent'
                    }`}
                    aria-hidden
                  />
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                    <h3 className="font-serif text-xl leading-snug text-paper sm:text-2xl">
                      {item.role}
                      {item.org && <span className="text-signal"> — {item.org}</span>}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] text-white/40">{item.period}</span>
                  </div>
                  <p className="max-w-reading font-sans text-[15px] leading-[1.7] text-white/55">
                    {item.description}
                  </p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3 max-w-reading space-y-1.5">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="relative pl-4 font-sans text-[15px] leading-[1.7] text-white/55 before:absolute before:left-0 before:text-signal before:content-['–']"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



