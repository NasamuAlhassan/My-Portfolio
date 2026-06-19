'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Star, Clock } from 'lucide-react'
import { projects, type Project } from '@/lib/data'

type RepoMeta = { stars: number; updatedAt: string } | null

const fetchRepoData = async (repo: string): Promise<RepoMeta> => {
  try {
    const res = await fetch(`https://api.github.com/repos/NasamuAlhassan/${repo}`)
    if (!res.ok) return null
    const data = await res.json()
    return {
      stars: data.stargazers_count,
      updatedAt: new Date(data.updated_at).toLocaleDateString('en-GB', {
        month: 'short',
        year: 'numeric',
      }),
    }
  } catch {
    return null
  }
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  )
}

function LinkRow({ links }: { links: Project['links'] }) {
  if (!links.length) return null
  return (
    <div className="flex flex-wrap gap-4 mt-auto pt-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-sans text-xs font-medium text-forest
                     hover:underline underline-offset-4 transition-colors"
        >
          {link.label}
          <ArrowUpRight size={12} />
        </a>
      ))}
    </div>
  )
}

function BleuCallout({ forward, backward }: { forward: number; backward: number }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      <span className="font-mono text-[11px] border border-stone bg-paper px-2.5 py-1 rounded-sm text-forest">
        BLEU {forward} ↑ (ks→en)
      </span>
      <span className="font-mono text-[11px] border border-stone bg-paper px-2.5 py-1 rounded-sm text-ink-muted">
        BLEU {backward} ↓ (en→ks)
      </span>
    </div>
  )
}

function RepoMeta({ meta }: { meta: RepoMeta }) {
  if (!meta) return null
  return (
    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-stone">
      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-muted">
        <Star size={11} />
        {meta.stars}
      </span>
      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-muted">
        <Clock size={11} />
        {meta.updatedAt}
      </span>
    </div>
  )
}

function FeaturedCard({
  project,
  meta,
  index,
  isInView,
}: {
  project: Project
  meta: RepoMeta
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card p-7 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-forest">
          Featured
        </span>
      </div>

      <h3 className="font-serif text-2xl text-ink leading-snug mb-3">
        {project.title}
      </h3>

      <p className="font-sans text-sm leading-[1.75] text-ink-muted mb-4 flex-1">
        {project.description}
      </p>

      {project.bleu && (
        <BleuCallout forward={project.bleu.forward} backward={project.bleu.backward} />
      )}

      {project.githubRepo && <RepoMeta meta={meta} />}

      <div className="mt-4">
        <TagList tags={project.tags} />
      </div>

      <LinkRow links={project.links} />
    </motion.div>
  )
}

function OtherCard({
  project,
  meta,
  index,
  isInView,
}: {
  project: Project
  meta: RepoMeta
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card p-5 flex flex-col h-full"
    >
      <h3 className="font-sans text-base font-semibold text-ink mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="font-sans text-sm leading-[1.7] text-ink-muted mb-3 flex-1">
        {project.description}
      </p>

      {project.githubRepo && <RepoMeta meta={meta} />}

      <div className="mt-3">
        <TagList tags={project.tags} />
      </div>

      <LinkRow links={project.links} />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const [repoMeta, setRepoMeta] = useState<Record<string, RepoMeta>>({})

  useEffect(() => {
    const reposToFetch = projects
      .filter((p) => p.githubRepo)
      .map((p) => p.githubRepo as string)

    Promise.all(
      reposToFetch.map(async (repo) => {
        const data = await fetchRepoData(repo)
        return { repo, data }
      })
    ).then((results) => {
      const map: Record<string, RepoMeta> = {}
      results.forEach(({ repo, data }) => {
        map[repo] = data
      })
      setRepoMeta(map)
    })
  }, [])

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label">Work</p>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* Featured — 3 equal columns on desktop */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {featured.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              meta={project.githubRepo ? repoMeta[project.githubRepo] ?? null : null}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="divider my-10" />

        {/* Other projects */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-6"
        >
          More projects
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <OtherCard
              key={project.id}
              project={project}
              meta={project.githubRepo ? repoMeta[project.githubRepo] ?? null : null}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
