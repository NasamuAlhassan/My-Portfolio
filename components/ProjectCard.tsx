'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article className={`card group flex h-full flex-col ${featured ? 'p-8 md:p-10' : 'p-6 md:p-7'}`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-forest">
          {project.kind}
        </span>
        <span className="whitespace-nowrap font-mono text-[10px] text-ink-faint">{project.year}</span>
      </div>

      <h3
        className={`mt-5 leading-[1.15] tracking-tight text-ink ${
          featured ? 'font-serif text-3xl md:text-4xl' : 'font-serif text-2xl'
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-3 font-sans text-[15px] leading-[1.65] text-ink-muted">
        {featured ? project.description : project.summary}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="num font-serif text-2xl leading-none text-ink">
                {m.value}
                {m.unit && <span className="ml-1 font-mono text-xs text-forest">{m.unit}</span>}
              </p>
              <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-faint">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="tag-line mt-6 leading-relaxed">{project.tags.join(' · ')}</p>

      {project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-5 pt-6">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-xs font-medium text-forest"
            >
              {link.label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
