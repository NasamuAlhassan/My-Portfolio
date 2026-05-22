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
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Certifications</h2>
          <p className="text-slate-500 mt-3 text-sm font-medium">Actively pursuing these credentials.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-shine rounded-3xl p-5 flex flex-col gap-4 border-dashed"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-100/70 border border-amber-300/60 flex items-center justify-center backdrop-blur-sm">
                <Award size={18} className="text-amber-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-800 font-bold text-sm leading-snug">{cert.title}</h3>
                <p className="text-slate-500 text-xs mt-1.5 font-medium">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
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
