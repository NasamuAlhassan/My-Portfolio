import { ArrowUpRight } from 'lucide-react'
import { personalInfo, navLinks } from '@/lib/data'

const socials = [
  { label: 'GitHub', href: personalInfo.github },
  { label: 'Hugging Face', href: personalInfo.huggingface },
  { label: 'LinkedIn', href: personalInfo.linkedin },
]

export default function Footer() {
  return (
    <footer className="relative veil-night text-paper overflow-hidden">
      <div className="hairline-grid-dark absolute inset-0 opacity-60" aria-hidden />

      <div className="relative max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28">
        <p className="section-label-dark">Get in touch</p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="link-underline display-lg text-paper mt-6 block w-fit"
        >
          {personalInfo.email}
        </a>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 rule-dark pt-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Sections</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline font-sans text-sm text-white/75">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-sm text-white/75"
                  >
                    {s.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Affiliations</p>
            <ul className="space-y-2">
              {personalInfo.affiliations.map((a) => (
                <li key={a} className="font-sans text-sm text-white/75">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-[11px] text-white/35">
            {personalInfo.name} Â· {personalInfo.university}
          </p>
          <p className="font-mono text-[11px] text-white/35">Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}


