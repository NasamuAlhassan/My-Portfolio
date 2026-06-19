'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const links = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'NasamuAlhassan',
    href: personalInfo.github,
    external: true,
  },
  {
    label: 'HuggingFace',
    value: 'PrinceAlhassanNasamu',
    href: personalInfo.huggingface,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'alhassan-prince',
    href: personalInfo.linkedin,
    external: true,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get in Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-base leading-[1.8] text-ink-muted max-w-prose">
              I&apos;m open to research collaborations, engineering roles, and conversations
              about language technology and African NLP. Reach out through any of the channels below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between py-3.5 border-b border-stone group
                           hover:border-forest transition-colors duration-150"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted group-hover:text-forest transition-colors">
                  {link.label}
                </span>
                <span className="flex items-center gap-1.5 font-sans text-sm text-ink group-hover:text-forest transition-colors">
                  {link.value}
                  {link.external && <ArrowUpRight size={13} />}
                  {!link.external && <Mail size={13} />}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
