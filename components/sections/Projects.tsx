'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, Clock } from 'lucide-react'
import { projects } from '@/lib/data'

const badgeStyle: Record<string, string> = {
  'Full-Stack': 'text-violet-700 bg-violet-100/70 border-violet-300/60',
  'Web Dev': 'text-blue-700 bg-blue-100/70 border-blue-300/60',
  Analytics: 'text-amber-700 bg-amber-100/70 border-amber-300/60',
  'Coming Soon': 'text-slate-500 bg-slate-100/50 border-slate-300/40',
}

type Project = (typeof projects)[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`glass glass-shine rounded-3xl overflow-hidden flex flex-col ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={{ transition: undefined }}
    >
      {/* Thumbnail */}
      {project.image ? (
        <div className={`relative overflow-hidden ${project.featured ? 'h-52' : 'h-44'}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center bg-white/20 ${
            project.featured ? 'h-52' : 'h-44'
          }`}
        >
          {project.comingSoon ? (
            <div className="flex flex-col items-center gap-3 text-slate-400">
              <Clock size={28} />
              <span className="text-xs font-medium">Coming Soon</span>
            </div>
          ) : (
            <span className="text-6xl font-black text-violet-200">{project.title[0]}</span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-slate-800 font-bold text-lg leading-tight">{project.title}</h3>
          <span
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${
              badgeStyle[project.badge] ?? badgeStyle['Coming Soon']
            }`}
          >
            {project.badge}
          </span>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-slate-500 bg-white/40 border border-white/60 px-2.5 py-1 rounded-lg font-medium backdrop-blur-sm"
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
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-violet-700 transition-colors font-medium"
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
                className="flex items-center gap-1.5 text-xs text-violet-600 hover:text-violet-800 transition-colors font-medium"
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
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.22em] mb-3">Work</p>
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
