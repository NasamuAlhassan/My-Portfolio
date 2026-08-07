'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/80" onClick={onClose}>
      <div
        className="flex shrink-0 items-center justify-between border-b border-stone bg-paper px-5 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          Resume â€” Prince Nasamu Alhassan
        </span>
        <div className="flex items-center gap-3">
          <a
            href="/Resume.pdf"
            download="Prince_Nasamu_Alhassan_Resume.pdf"
            className="flex items-center gap-1.5 rounded-sm border border-forest px-3 py-1.5 font-sans text-xs
                       font-medium text-forest transition-all duration-150 hover:bg-forest hover:text-white"
          >
            <Download size={12} />
            Download
          </a>
          <button
            onClick={onClose}
            className="p-1 text-ink-muted transition-colors hover:text-ink"
            aria-label="Close preview"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <iframe src="/Resume.pdf#toolbar=0" className="h-full w-full" title="Resume preview" />
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > prev && y > 200 && !menuOpen)
  })

  // Scroll-spy across the anchored sections.
  useEffect(() => {
    const nodes = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((n): n is HTMLElement => Boolean(n))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  const openResume = useCallback(() => {
    setMenuOpen(false)
    setResumeOpen(true)
  }, [])

  const closeResume = useCallback(() => setResumeOpen(false), [])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE }}
        className={`fixed left-0 right-0 top-0 z-[65] transition-all duration-500 ${
          scrolled ? 'glass-bar' : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto flex h-16 items-center justify-between px-5 sm:px-6">
          <a href="#hero" className="font-serif text-lg text-ink transition-colors duration-200 hover:text-forest">
            Prince N. Alhassan
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const on = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 font-sans text-sm transition-colors duration-200 ${
                    on ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  {on && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-forest"
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  )}
                </a>
              )
            })}
            <button
              onClick={openResume}
              className="rounded-sm border border-forest/40 px-4 py-1.5 font-sans text-sm font-medium text-forest
                         transition-all duration-300 hover:border-forest hover:bg-forest hover:text-paper"
            >
              CV
            </button>
          </nav>

          <button
            className="text-ink-muted transition-colors hover:text-ink lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="overflow-hidden border-t border-stone bg-paper lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-6 py-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: EASE }}
                    className="py-1.5 font-serif text-3xl text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <button onClick={openResume} className="w-fit py-1.5 text-left font-serif text-3xl text-forest">
                  CV
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100]"
          >
            <ResumeModal onClose={closeResume} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

