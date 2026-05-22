'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop: floating glass pill */}
      <motion.header
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-7 px-6 py-2.5 glass-nav rounded-full"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#hero" className="text-sm font-extrabold tracking-tight shrink-0">
          <span className="gradient-text-subtle">&lt;PA/&gt;</span>
        </a>

        <nav className="flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-violet-700 transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/Resume.pdf"
          download
          className="glass-btn flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-400/25 shrink-0"
        >
          <FileDown size={11} />
          Resume
        </a>
      </motion.header>

      {/* Mobile top bar */}
      <motion.div
        className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-5 py-3 glass-nav rounded-2xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#hero" className="text-sm font-extrabold gradient-text-subtle">&lt;PA/&gt;</a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-600 hover:text-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 480, damping: 38 }}
            className="md:hidden fixed top-[4.5rem] left-4 right-4 z-50 glass glass-shine rounded-3xl p-5"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 font-semibold hover:text-violet-700 transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Resume.pdf"
                download
                className="glass-btn flex items-center gap-2 w-fit px-5 py-2 rounded-full text-sm font-bold mt-1"
              >
                <FileDown size={13} />
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
