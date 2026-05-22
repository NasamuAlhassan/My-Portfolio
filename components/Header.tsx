'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#08090e]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          <span className="text-slate-600">&lt;</span>
          <span className="gradient-text-subtle">PA</span>
          <span className="text-slate-600">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0e1018] border-t border-white/[0.06] px-6 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 w-fit px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white mt-2"
            >
              <FileDown size={14} />
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
