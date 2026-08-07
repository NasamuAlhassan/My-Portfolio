'use client'

import { useEffect, useState } from 'react'
import { navLinks } from '@/lib/data'

/**
 * Fixed rail of section markers on the right edge. The active section is
 * tracked with a single IntersectionObserver across all targets.
 */
export default function SectionDots() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const nodes = ids
      .map((id) => document.getElementById(id))
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

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {navLinks.map((link) => {
        const id = link.href.slice(1)
        const on = active === id
        return (
          <a key={link.href} href={link.href} className="group flex items-center gap-3">
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                on ? 'text-forest opacity-100' : 'text-ink-faint opacity-0 group-hover:opacity-100'
              }`}
            >
              {link.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                on ? 'h-2.5 w-2.5 bg-forest' : 'h-1.5 w-1.5 bg-ink-faint/50 group-hover:bg-forest/60'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
