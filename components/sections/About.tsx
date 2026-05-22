'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music, Code2, MapPin, Trophy } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const interests = [
  { icon: Code2, label: 'Building in public' },
  { icon: Music, label: 'Drums & church sound' },
  { icon: MapPin, label: 'From Bawku, N. Ghana' },
  { icon: Trophy, label: 'First Class standing' },
]

const quickFacts = [
  { label: 'University', value: 'University of Ghana, Legon' },
  { label: 'Degree', value: 'BSc Maths with CS' },
  { label: 'Expected', value: '2029' },
  { label: 'GPA', value: '4.0 / 4.0' },
  { label: 'Hometown', value: 'Bawku, Northern Ghana' },
  { label: 'Languages', value: 'Kusaal, English' },
  { label: 'Status', value: 'Open to opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">About</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {personalInfo.bio.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-slate-800 text-lg font-semibold'
                    : i === 1
                    ? 'text-slate-700 text-base'
                    : 'text-slate-500 text-sm'
                }`}
              >
                {para}
              </p>
            ))}

            {/* Interest chips */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  className="glass glass-shine rounded-2xl p-4 flex flex-col items-center gap-2.5 text-center cursor-default"
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  <Icon size={17} className="text-violet-600" />
                  <span className="text-xs text-slate-600 leading-snug font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <div className="glass glass-shine rounded-3xl p-6">
              <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                Quick Facts
              </h3>
              <div className="space-y-3.5">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4">
                    <span className="text-slate-400 text-sm shrink-0">{item.label}</span>
                    <span className="text-slate-700 text-sm text-right font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href="/Resume.pdf"
              download
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass-btn text-sm font-bold"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
