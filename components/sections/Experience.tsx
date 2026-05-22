'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Star } from 'lucide-react'
import { timeline } from '@/lib/data'

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-violet-700',
    bg: 'bg-violet-100/70 border-violet-300/60',
  },
  work: {
    icon: Briefcase,
    color: 'text-emerald-700',
    bg: 'bg-emerald-100/70 border-emerald-300/60',
  },
  milestone: {
    icon: Star,
    color: 'text-amber-700',
    bg: 'bg-amber-100/70 border-amber-300/60',
  },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-5 bottom-5 w-px bg-violet-200/50 hidden sm:block" />

          <div className="space-y-4">
            {timeline.map((item, index) => {
              const config = typeConfig[item.type as keyof typeof typeConfig]
              const Icon = config.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.48, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="sm:pl-16 relative"
                >
                  {/* Icon dot */}
                  <div
                    className={`hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-2xl border items-center justify-center backdrop-blur-sm ${config.bg}`}
                  >
                    <Icon size={18} className={config.color} />
                  </div>

                  <motion.div
                    className="glass glass-shine rounded-3xl p-6"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-slate-800 font-bold">{item.title}</h3>
                        <p className="text-violet-600 text-sm mt-0.5 font-semibold">{item.org}</p>
                      </div>
                      <span className="text-slate-400 text-xs shrink-0 font-mono font-medium">{item.year}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
