'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects, type ProjectKind } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

const FILTERS: { key: ProjectKind | 'all'; label: string }[] = [
  { key: 'all', label: 'Everything' },
  { key: 'research', label: 'Research' },
  { key: 'product', label: 'Products' },
  { key: 'engineering', label: 'Engineering' },
]

export default function AllProjects() {
  const [filter, setFilter] = useState<ProjectKind | 'all'>('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.kind === filter)

  return (
    <>
      {/* Filter rail */}
      <LayoutGroup id="project-filter">
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const on = filter === f.key
            const count =
              f.key === 'all' ? projects.length : projects.filter((p) => p.kind === f.key).length
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`relative rounded-sm px-4 py-2 font-sans text-sm transition-colors duration-300 ${
                  on ? 'text-paper' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-sm bg-ink"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative z-10">
                  {f.label}
                  <span className={`ml-2 font-mono text-[10px] ${on ? 'text-signal' : 'text-ink-faint'}`}>
                    {count}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </LayoutGroup>

      {/* Grid */}
      <motion.div
        layout
        transition={{ duration: 0.5, ease: EASE }}
        className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
