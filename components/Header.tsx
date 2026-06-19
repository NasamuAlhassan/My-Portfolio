'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

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
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/75"
      onClick={onClose}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-5 py-3 bg-paper border-b border-stone shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          Resume — Prince Nasamu Alhassan
        </span>
        <div className="flex items-center gap-3">
          <a
            href="/Resume.pdf"
            download="Prince_Nasamu_Alhassan_Resume.pdf"
            className="flex items-center gap-1.5 font-sans text-xs font-medium text-forest border border-forest
                       px-3 py-1.5 rounded-sm hover:bg-forest hover:text-white transition-all duration-150"
          >
            <Download size={12} />
            Download
          </a>
          <button
            onClick={onClose}
            className="text-ink-muted hover:text-ink transition-colors p-1"
            aria-label="Close preview"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <div
        className="flex-1 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src="/Resume.pdf#toolbar=0"
          className="w-full h-full"
          title="Resume preview"
        />
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  const openResume = useCallback(() => {
    setMenuOpen(false)
    setResumeOpen(true)
  }, [])

  const closeResume = useCallback(() => setResumeOpen(false), [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-stone">
        <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-base text-ink hover:text-forest transition-colors duration-150"
          >
            Prince N. Alhassan
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-ink-muted hover:text-forest transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openResume}
              className="font-sans text-sm font-medium text-forest border border-forest px-3.5 py-1.5 rounded-sm
                         hover:bg-forest hover:text-white transition-all duration-150"
            >
              Resume
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ink-muted hover:text-ink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="md:hidden border-t border-stone bg-paper px-6 py-5"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-sans text-sm text-ink-muted hover:text-forest transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={openResume}
                  className="font-sans text-sm font-medium text-forest border border-forest w-fit
                             px-4 py-2 rounded-sm hover:bg-forest hover:text-white transition-all duration-150 mt-1 text-left"
                >
                  Resume
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100]"
          >
            <ResumeModal onClose={closeResume} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
