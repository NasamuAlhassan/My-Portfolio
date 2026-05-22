'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

const levelStyle: Record<string, string> = {
  Advanced: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Intermediate: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
  Beginner: 'text-slate-400 border-slate-500/20 bg-white/[0.03]',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0b12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Stack</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">What I Work With</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0e1018] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300"
            >
              <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${
                      levelStyle[skill.level] ?? levelStyle.Beginner
                    }`}
                  >
                    {skill.name}
                    <span className="opacity-50 font-normal text-[10px]">{skill.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
