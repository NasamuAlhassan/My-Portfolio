'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react'
import { personalInfo, socialLinks, stats } from '@/lib/data'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  send: Send,
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text ── */}
        <div>
          <motion.div {...fade(0.05)}>
            <p className="text-slate-500 text-base font-medium mb-3">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.0] tracking-tight">
              <span className="gradient-text">{personalInfo.firstName}</span>
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </h1>
          </motion.div>

          <motion.p {...fade(0.14)} className="text-violet-700 font-bold text-xl mt-5">
            {personalInfo.title}
          </motion.p>

          <motion.p {...fade(0.2)} className="text-slate-600 mt-3 max-w-md leading-relaxed text-sm">
            {personalInfo.degree} &middot; {personalInfo.university}
          </motion.p>

          <motion.p {...fade(0.24)} className="text-slate-500 mt-2 max-w-md leading-relaxed text-sm italic">
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.3)} className="flex flex-wrap gap-3 mt-9">
            <motion.a
              href="#projects"
              className="glass-btn px-7 py-3 rounded-full text-sm font-bold"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="glass-btn-outline px-7 py-3 rounded-full text-sm font-bold text-slate-700 hover:text-violet-700 transition-colors"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fade(0.38)} className="flex items-center gap-2.5 mt-9">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              if (!Icon) return null
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-violet-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                >
                  <Icon size={15} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 via-fuchsia-300/15 to-pink-400/20 blur-2xl" />

            {/* Glass photo frame */}
            <motion.div
              className="relative glass glass-shine rounded-[2rem] p-2.5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div className="w-64 h-64 sm:w-[300px] sm:h-[300px] rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/home.jpg"
                  alt="Prince Nasamu Alhassan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating chip — GPA */}
            <motion.div
              className="absolute -bottom-5 -left-6 glass glass-shine rounded-2xl px-4 py-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className="text-2xl font-extrabold gradient-text-subtle">{personalInfo.gpa}</div>
              <div className="text-[11px] text-slate-500 mt-0.5 font-medium">GPA</div>
            </motion.div>

            {/* Floating chip — Years */}
            <motion.div
              className="absolute -top-5 -right-6 glass glass-shine rounded-2xl px-4 py-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className="text-2xl font-extrabold gradient-text-subtle">{personalInfo.yearsOfCoding}</div>
              <div className="text-[11px] text-slate-500 mt-0.5 font-medium">Years Coding</div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2.5 mt-14 w-full max-w-[340px]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass glass-shine rounded-2xl p-3 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.04 }}
              >
                <div className="text-base font-extrabold gradient-text-subtle">{stat.value}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-tight font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
