'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Star } from 'lucide-react'
import { timeline } from '@/lib/data'

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/30',
  },
  work: {
    icon: Briefcase,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
  milestone: {
    icon: Star,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
  },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0b12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-3 bottom-3 w-px bg-white/[0.05] hidden sm:block" />

          <div className="space-y-5">
            {timeline.map((item, index) => {
              const config = typeConfig[item.type as keyof typeof typeConfig]
              const Icon = config.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="sm:pl-16 relative"
                >
                  <div
                    className={`hidden sm:flex absolute left-0 top-4 w-12 h-12 rounded-xl border items-center justify-center ${config.bg}`}
                  >
                    <Icon size={17} className={config.color} />
                  </div>

                  <div className="bg-[#0e1018] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-bold">{item.title}</h3>
                        <p className="text-indigo-400/80 text-sm mt-0.5">{item.org}</p>
                      </div>
                      <span className="text-slate-500 text-xs shrink-0 sm:mt-0.5 font-mono">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
