import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { openResources, personalInfo } from '@/lib/data'

export default function OpenResources() {
  return (
    <section id="open" className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-20 sm:py-24">
        <Reveal>
          <p className="section-label">07 · Open resources</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading-sm mt-5 mb-6">Models, data and demos</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-12 max-w-reading font-sans text-base leading-[1.7] text-ink-muted">
            Released on Hugging Face. Licences differ between models and datasets, so check each card
            before reuse.{' '}
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-forest"
            >
              Everything on Hugging Face
              <ArrowUpRight size={13} />
            </a>
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openResources.map((r, i) => (
            <Reveal key={r.href} delay={(i % 3) * 0.05} className="h-full">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col gap-1.5 p-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest">{r.type}</span>
                <span className="flex items-center gap-1.5 break-all font-mono text-[13px] text-ink transition-colors duration-300 group-hover:text-forest">
                  {r.name}
                  <ArrowUpRight size={13} className="shrink-0" />
                </span>
                <span className="font-sans text-sm text-ink-muted">{r.note}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
