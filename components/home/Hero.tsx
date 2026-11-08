'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { personalInfo, positioning, proof } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12])

  const plain = positioning.claim.slice(0, positioning.claim.length - positioning.accent.length)

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden bg-night text-paper">
      <div className="relative flex min-h-[100svh] items-end">
        <motion.img
          src={positioning.photo}
          alt={positioning.photoAlt}
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover object-[60%_30%] opacity-80 saturate-[.85]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,9,10,.6) 0%, rgba(7,9,10,.2) 32%, rgba(7,9,10,.88) 72%, #07090A 100%), linear-gradient(90deg, rgba(7,9,10,.75) 0%, rgba(7,9,10,0) 65%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-14 pt-32 sm:px-6 sm:pb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label-dark"
          >
            {positioning.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="display-xl mt-6 max-w-[12ch]"
          >
            {plain}
            <em className="text-signal">{positioning.accent}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="mt-7 max-w-[56ch] font-sans text-base leading-[1.6] text-white/75 sm:text-lg"
          >
            {positioning.support}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#nexus" className="btn-signal">
              <span className="play-dot" aria-hidden />
              <span>Watch a blind user run Nexus</span>
            </a>
            <a href="#partner" className="btn-outline-dark">
              <span>Fund or partner</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline ml-1 font-sans text-sm font-medium text-white/70 hover:text-white"
            >
              Hugging Face
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Album corner: framed photo and gold badge (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="absolute bottom-16 right-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] z-10 hidden w-[300px] xl:block"
        >
          <img
            src="/moments/google-tech-talk-group.jpg"
            alt="After the Google Research Africa Student Tech-Talk in Accra"
            className="framed aspect-[4/3] w-full rounded-[18px] object-cover"
          />
          <div className="gold-badge absolute -bottom-6 -left-10 max-w-[200px] rotate-3 text-[13px] leading-snug">
            <span className="block font-serif text-3xl font-normal leading-none">Top 5</span>
            MTN Ghana Tɛkyerɛma Pa Hackathon 2026
          </div>
        </motion.div>
      </div>

      {/* Proof strip */}
      <div className="relative z-10 border-y border-white/10">
        <div className="mx-auto grid max-w-content grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
              className={`px-5 py-6 sm:px-6 ${i % 2 === 0 ? 'border-r border-white/10' : ''} ${
                i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''
              } ${i === 1 ? 'lg:border-r' : ''}`}
            >
              <p className="font-serif text-xl leading-tight text-paper sm:text-2xl">{p.title}</p>
              <p className="mt-1.5 font-sans text-[12.5px] leading-snug text-white/50">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
