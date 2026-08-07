'use client'

import { useRef, useState, type ReactNode } from 'react'

/**
 * A liquid-glass panel.
 *
 * The pointer position is written straight to CSS custom properties
 * (--mx/--my/--spec) rather than through React state, so moving the cursor
 * drives the specular highlight without re-rendering the panel's children.
 */
export default function Glass({
  children,
  dark = false,
  className = '',
  as: Tag = 'div',
  interactive = true,
}: {
  children: ReactNode
  dark?: boolean
  className?: string
  as?: 'div' | 'article' | 'li' | 'section'
  interactive?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!interactive || reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    el.style.setProperty('--spec', '1')
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--spec', '0')
  }

  const Component = Tag as React.ElementType

  return (
    <Component
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${dark ? 'glass-dark' : 'glass'} ${className}`}
    >
      {children}
    </Component>
  )
}
