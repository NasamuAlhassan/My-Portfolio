'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, Clock } from 'lucide-react'
import { projects } from '@/lib/data'

const badgeStyle: Record<string, string> = {
  'Full-Stack': 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  'Web Dev': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Analytics: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'Coming Soon': 'text-slate-500 bg-white/[0.03] border-white/[0.08]',
}

type Project = (typeof projects)[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-[#0e1018] border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-indigo-500/20 transition-all duration-300 flex flex-col ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Thumbnail */}
      {project.image ? (
        <div className={`relative overflow-hidden ${project.featured ? 'h-56' : 'h-44'}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1018] via-transparent to-transparent" />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center bg-[#0a0b12] ${
            project.featured ? 'h-56' : 'h-44'
          }`}
        >
          {project.comingSoon ? (
            <div className="flex flex-col items-center gap-3 text-slate-700">
              <Clock size={28} />
              <span className="text-xs">Coming Soon</span>
            </div>
          ) : (
            <span className="text-6xl font-black text-white/[0.04]">{project.title[0]}</span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
              badgeStyle[project.badge] ?? badgeStyle['Coming Soon']
            }`}
          >
            {project.badge}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {!project.comingSoon && (
          <div className="flex items-center gap-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Github size={13} />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Work</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Projects</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
