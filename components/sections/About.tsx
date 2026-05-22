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

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          {...fadeInUp(0)}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">About</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {personalInfo.bio.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-slate-200 text-lg font-medium'
                    : i === 1
                    ? 'text-slate-300 text-base'
                    : 'text-slate-400 text-sm'
                }`}
              >
                {para}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-[#0e1018] border border-white/[0.06] rounded-xl p-4 flex flex-col items-center gap-2.5 text-center hover:border-indigo-500/20 transition-colors"
                >
                  <Icon size={17} className="text-indigo-400" />
                  <span className="text-xs text-slate-400 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <div className="bg-[#0e1018] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4">
                    <span className="text-slate-500 text-sm shrink-0">{item.label}</span>
                    <span className="text-slate-200 text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/Resume.pdf"
              download
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 transition-all text-sm font-semibold"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
