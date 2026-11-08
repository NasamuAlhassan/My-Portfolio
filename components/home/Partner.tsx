'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { partner, personalInfo } from '@/lib/data'

export default function Partner() {
  const channels = [
    { label: 'GitHub', href: personalInfo.github },
    { label: 'Hugging Face', href: personalInfo.huggingface },
    { label: 'LinkedIn', href: personalInfo.linkedin },
  ]

  return (
    <section id="partner" className="bg-paper px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
      <div
        className="mx-auto max-w-[1280px] overflow-hidden rounded-[28px] border border-signal/25 text-paper"
        style={{ background: 'radial-gradient(120% 140% at 0% 0%, #164a30 0%, #0b2117 45%, #07090A 100%)' }}
      >
        <div className="kente h-2.5 w-full" aria-hidden />
        <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-24">
          <Reveal>
            <p className="section-label-dark">For funders and partners</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-lg mt-5 max-w-[18ch]">{partner.heading}</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {partner.asks.map((a, i) => (
              <Reveal key={a.title} delay={0.1 + i * 0.06} className="h-full">
                <div className="h-full rounded-[18px] border border-white/15 bg-white/[0.03] p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">{a.title}</p>
                  <p className="mt-3 font-sans text-[15px] leading-[1.6] text-white/80">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a href={`mailto:${personalInfo.email}`} className="btn-signal">
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                <span>Download CV</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-sans text-sm text-white/65 hover:text-white"
                >
                  {c.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
