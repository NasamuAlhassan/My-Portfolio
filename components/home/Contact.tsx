'use client'

import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
import Glass from '@/components/glass/Glass'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const channels = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: 'GitHub', value: 'NasamuAlhassan', href: personalInfo.github },
    { label: 'Hugging Face', value: 'PrinceAlhassanNasamu', href: personalInfo.huggingface },
    { label: 'LinkedIn', value: 'alhassan-prince', href: personalInfo.linkedin },
  ]

  return (
    <section id="contact" className="rule relative overflow-hidden">
      <div className="bloom absolute -bottom-1/3 left-1/2 h-[60vh] w-[110vw] -translate-x-1/2" aria-hidden />

      <div className="relative max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">Contact</p>
        </Reveal>
        <TextReveal
          text="Open to research collaboration."
          as="h2"
          className="section-heading mt-5 max-w-[16ch]"
        />

        <Reveal delay={0.15}>
          <p className="mt-7 max-w-reading font-sans text-base leading-[1.75] text-ink-muted">
            Working on low-resource language technology, or funding people who do? I would like to
            hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <Magnetic className="mt-10 w-fit">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              <span>Start a conversation</span>
              <ArrowUpRight size={15} />
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.3 + i * 0.06}>
              <Glass className="h-full">
                <a
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group block h-full px-6 py-7"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    {c.label}
                  </p>
                  <p className="mt-2 flex items-center gap-1 font-sans text-sm text-ink transition-colors duration-300 group-hover:text-forest">
                    <span className="truncate">{c.value}</span>
                    <ArrowUpRight
                      size={13}
                      className="shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </p>
                </a>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

