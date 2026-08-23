'use client'

import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const channels = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: 'GitHub', value: 'NasamuAlhassan', href: personalInfo.github },
    { label: 'Hugging Face', value: 'PrinceAlhassanNasamu', href: personalInfo.huggingface },
    { label: 'LinkedIn', value: 'alhassan-prince', href: personalInfo.linkedin },
  ]

  return (
    <section id="contact" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="section-label">Contact</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading mt-5 max-w-[16ch]">Open to research collaboration.</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-7 max-w-reading font-sans text-base leading-[1.75] text-ink-muted">
            Working on low-resource language technology, or funding people who do? I would like to
            hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary mt-10">
            <span>Email me</span>
            <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 max-w-2xl space-y-px bg-stone">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="row group flex items-baseline justify-between gap-6 py-4 sm:px-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                  {c.label}
                </span>
                <span className="flex min-w-0 items-center gap-1.5 font-sans text-sm text-ink transition-colors duration-300 group-hover:text-forest">
                  <span className="truncate">{c.value}</span>
                  <ArrowUpRight size={13} className="shrink-0" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
