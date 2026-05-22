'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Clock } from 'lucide-react'
import { certifications } from '@/lib/data'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Certifications</h2>
          <p className="text-slate-500 mt-3 text-sm">Actively pursuing these credentials to deepen my expertise.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0e1018] border border-white/[0.06] border-dashed rounded-2xl p-5 flex flex-col gap-4 hover:border-amber-500/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Award size={17} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-200 font-semibold text-sm leading-snug">{cert.title}</h3>
                <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Clock size={11} />
                <span>In progress</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
