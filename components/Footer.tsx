import { ArrowUpRight } from 'lucide-react'
import { personalInfo, navLinks } from '@/lib/data'

const socials = [
  { label: 'GitHub', href: personalInfo.github },
  { label: 'Hugging Face', href: personalInfo.huggingface },
  { label: 'LinkedIn', href: personalInfo.linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl text-ink">{personalInfo.name}</p>
          <p className="mt-2 font-sans text-sm text-ink-muted">
            Independent researcher · Accra and Bawku, Ghana ·{' '}
            <a href={`mailto:${personalInfo.email}`} className="link-underline text-ink">
              {personalInfo.email}
            </a>
          </p>
          <p className="mt-1 font-sans text-sm text-ink-faint">{personalInfo.affiliations.join(' · ')}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="link-underline font-sans text-sm font-semibold text-ink-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border-2 border-ink px-3.5 py-1.5 font-sans text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {s.label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
