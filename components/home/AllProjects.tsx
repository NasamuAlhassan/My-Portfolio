'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { projects, projectKindLabels, type Project, type ProjectKind } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

const FILTERS: { key: ProjectKind | 'all'; label: string }[] = [
  { key: 'all', label: 'Everything' },
  ...(Object.entries(projectKindLabels) as [ProjectKind, string][]).map(([key, label]) => ({ key, label })),
]

/** One colour per area, shown as a bar on each row (Kente palette). */
const KIND_COLOUR: Record<ProjectKind, string> = {
  accessibility: '#0E9F6E',
  language: '#D99A1E',
  health: '#B5361F',
  product: '#0F5132',
  earlier: '#8B8F96',
}

/** Badge colour by how far along a project is. */
function badgeClass(status = ''): string {
  const s = status.toLowerCase()
  if (/released|live|deployed|built ·/.test(s)) return 'bg-[#E7F7EF] text-forest'
  if (/concept|progress|research|hackathon|submission|personal/.test(s)) return 'bg-[#FDF3E1] text-clay'
  return 'bg-paper-warm text-ink-muted'
}

function Row({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const lead = project.metrics?.[0]
  return (
    <div className="relative border-b border-stone">
      <span
        className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] max-h-12 w-1 rounded-full md:block"
        style={{ background: KIND_COLOUR[project.kind] }}
        aria-hidden
      />
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full gap-3 py-6 text-left transition-colors duration-300 hover:bg-paper-warm/70 md:grid-cols-[190px_minmax(0,1fr)_150px_110px_28px] md:items-center md:gap-6 md:pl-6 md:pr-3"
      >
        <span className={`badge ${badgeClass(project.status)}`}>{project.status ?? projectKindLabels[project.kind]}</span>
        <span>
          <span className="block font-sans text-xl font-bold tracking-[-0.02em] text-ink sm:text-[22px]">
            {project.title}
          </span>
          <span className="mt-1 block font-sans text-[15px] leading-[1.5] text-ink-muted">{project.summary}</span>
        </span>
        <span className="hidden md:block">
          {lead && (
            <>
              <span className="num block font-sans text-2xl font-extrabold tracking-[-0.03em] text-ink">
                {lead.value}
                {lead.unit && <span className="text-forest-lift">{lead.unit}</span>}
              </span>
              <span className="mt-0.5 block font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-ink-faint">
                {lead.label}
              </span>
            </>
          )}
        </span>
        <span className="hidden font-mono text-[11px] text-ink-faint md:block">{project.year}</span>
        <Plus
          size={18}
          className={`hidden text-ink-faint transition-transform duration-300 group-hover:text-ink md:block ${open ? 'rotate-45' : ''}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-6 md:pl-6 md:pr-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: KIND_COLOUR[project.kind] }}>
                {projectKindLabels[project.kind]}
              </span>
              <div>
                <p className="max-w-[72ch] font-sans text-[15px] leading-[1.75] text-ink-muted">{project.description}</p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="num font-sans text-3xl font-extrabold tracking-[-0.03em] text-ink">
                          {m.value}
                          {m.unit && <span className="ml-0.5 text-forest-lift">{m.unit}</span>}
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="tag-line mt-6">{project.tags.join(' · ')}</p>

                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-stone px-3.5 py-1.5 font-sans text-[13px] font-semibold text-ink transition-colors hover:border-ink hover:text-forest"
                      >
                        {l.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AllProjects() {
  const [filter, setFilter] = useState<ProjectKind | 'all'>('all')
  const [openId, setOpenId] = useState<number | null>(null)
  const shown = filter === 'all' ? projects : projects.filter((p) => p.kind === filter)

  return (
    <>
      <LayoutGroup id="project-filter">
        <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {FILTERS.map((f) => {
            const on = filter === f.key
            const count = f.key === 'all' ? projects.length : projects.filter((p) => p.kind === f.key).length
            return (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key)
                  setOpenId(null)
                }}
                className={`relative shrink-0 rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors duration-300 ${
                  on ? 'text-paper' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {f.label}
                  <span className={`ml-2 font-mono text-[10px] ${on ? 'text-signal' : 'text-ink-faint'}`}>{count}</span>
                </span>
              </button>
            )
          })}
        </div>
      </LayoutGroup>

      <div className="border-t border-stone">
        {shown.map((p) => (
          <Row key={p.id} project={p} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
        ))}
      </div>
    </>
  )
}
