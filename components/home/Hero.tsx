'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { nexus, personalInfo, positioning, proof } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  // A short muted loop of Nexus in real use. Skipped for visitors who prefer
  // reduced motion or have data saver on; the still frame stays.
  const [loop, setLoop] = useState(false)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saver = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    setLoop(!reduce && !saver)
  }, [])

  const plain = positioning.claim.slice(0, positioning.claim.length - positioning.accent.length)

  return (
    <section id="hero" className="relative overflow-hidden bg-paper">
      {/* soft colour wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 85% 10%, rgba(217,154,30,.16), transparent 70%), radial-gradient(50% 45% at 0% 100%, rgba(15,81,50,.10), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-[86svh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label"
          >
            {positioning.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="display-xl mt-6 text-ink"
            style={{ fontSize: 'clamp(2.9rem, 7.4vw, 6.6rem)' }}
          >
            {plain}
            <em className="relative whitespace-nowrap text-forest">
              <span className="relative z-10">{positioning.accent}</span>
              <span
                className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.22em] rounded-full bg-gold/70"
                aria-hidden
              />
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-7 max-w-[52ch] font-sans text-base leading-[1.6] text-ink-muted sm:text-lg"
          >
            {positioning.support}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#nexus" className="btn-primary">
              <span className="play-dot" aria-hidden />
              <span>Watch a blind user run Nexus</span>
            </a>
            <a href="#live" className="btn-outline">
              <span>Try the live apps</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline ml-1 font-sans text-sm font-medium text-ink-muted hover:text-ink"
            >
              Hugging Face
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* The product, moving */}
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <a
            href="#nexus"
            aria-label="Watch the Nexus video: a blind user running Nexus"
            className="group relative block overflow-hidden rounded-[26px] border-[6px] border-surface bg-night shadow-[0_30px_60px_-28px_rgba(20,16,10,.55)]"
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
              <img
                src={nexus.video.poster}
                alt={nexus.video.posterAlt}
                width={1280}
                height={720}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {loop && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={nexus.video.poster}
                  aria-hidden
                  tabIndex={-1}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={nexus.clip.webm} type="video/webm" />
                  <source src={nexus.clip.mp4} type="video/mp4" />
                </video>
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" aria-hidden />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
                <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" aria-hidden />
                Real use
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <span className="font-serif text-xl leading-tight text-white sm:text-2xl">
                  Nexus, in a blind user’s hands
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-signal px-4 py-2 font-sans text-sm font-semibold text-night transition-transform group-hover:scale-105">
                  Watch
                  <ArrowRight size={14} />
                </span>
              </span>
            </div>
          </a>

          <div className="gold-badge absolute -right-2 -top-7 max-w-[200px] rotate-3 text-[13px] leading-snug sm:-right-5">
            <span className="block font-serif text-3xl font-normal leading-none">Top 5</span>
            MTN Ghana Tɛkyerɛma Pa Hackathon 2026
          </div>
        </motion.div>
      </div>

      <div className="kente h-1.5 w-full" aria-hidden />

      {/* Proof strip */}
      <div className="relative z-10 border-b border-stone bg-surface">
        <div className="mx-auto grid max-w-content grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
              className={`px-5 py-6 sm:px-6 ${i % 2 === 0 ? 'border-r border-stone' : ''} ${
                i < 2 ? 'border-b border-stone lg:border-b-0' : ''
              } ${i === 1 ? 'lg:border-r' : ''}`}
            >
              <p className="font-serif text-xl leading-tight text-ink sm:text-2xl">{p.title}</p>
              <p className="mt-1.5 font-sans text-[12.5px] leading-snug text-ink-muted">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
