'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Instagram, Send, ArrowDown } from 'lucide-react'
import { personalInfo, socialLinks, stats } from '@/lib/data'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  send: Send,
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text */}
        <div>
          <motion.div {...fadeUp(0)}>
            <p className="text-slate-400 text-base font-medium mb-2">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-tight">
              <span className="gradient-text">{personalInfo.firstName}</span>
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </h1>
          </motion.div>

          <motion.p {...fadeUp(0.16)} className="text-indigo-400 text-xl font-semibold mt-5">
            {personalInfo.title}
          </motion.p>

          <motion.p {...fadeUp(0.22)} className="text-slate-400 mt-3 max-w-lg leading-relaxed text-sm">
            {personalInfo.degree} &middot; {personalInfo.university}
          </motion.p>

          <motion.p {...fadeUp(0.26)} className="text-slate-500 mt-2 max-w-md leading-relaxed text-sm italic">
            &ldquo;{personalInfo.tagline}&rdquo;
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/[0.1] hover:border-indigo-500/40 hover:bg-indigo-500/10 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex items-center gap-3 mt-10">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              if (!Icon) return null
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-transparent blur-xl" />
            <div className="relative w-72 h-72 sm:w-[320px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/[0.1]">
              <Image
                src="/home.jpg"
                alt="Prince Nasamu Alhassan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#131521] border border-white/[0.08] px-4 py-3 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-white">{personalInfo.gpa}</div>
              <div className="text-xs text-slate-500 mt-0.5">GPA</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-[#131521] border border-white/[0.08] px-4 py-3 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-white">{personalInfo.yearsOfCoding}</div>
              <div className="text-xs text-slate-500 mt-0.5">Years Coding</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-14 w-full max-w-[340px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0e1018] border border-white/[0.06] rounded-xl p-3 text-center"
              >
                <div className="text-base font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-[11px] tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.a>
    </section>
  )
}
