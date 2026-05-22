'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

const levelStyle: Record<string, string> = {
  Advanced: 'text-violet-700 border-violet-300/70 bg-violet-100/60',
  Intermediate: 'text-fuchsia-700 border-fuchsia-300/60 bg-fuchsia-100/50',
  Beginner: 'text-slate-500 border-slate-300/50 bg-slate-100/50',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">Stack</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">What I Work With</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + catIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-shine rounded-3xl p-6"
              style={{ '--hover-y': '-5px' } as React.CSSProperties}
              whileHover={{ y: -5 }}
            >
              {/* Category label */}
              <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold backdrop-blur-sm ${
                      levelStyle[skill.level] ?? levelStyle.Beginner
                    }`}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  >
                    {skill.name}
                    <span className="opacity-55 font-normal text-[10px]">{skill.level}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
