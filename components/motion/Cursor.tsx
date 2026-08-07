'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A trailing ring that follows the pointer and swells over interactive
 * elements. Mounts only for fine pointers, so touch devices are untouched.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.35 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || still) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
      const el = e.target as HTMLElement | null
      setActive(Boolean(el?.closest('a, button, [data-cursor="grow"]')))
    }
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: active ? 1.9 : 1,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      // No mix-blend-mode: blending forces the whole stacking context through
      // an extra compositing pass on every pointer move.
      className="pointer-events-none fixed left-0 top-0 z-[80] -ml-3 -mt-3 hidden h-6 w-6 rounded-full
                 border border-forest/50 xl:block"
    />
  )
}
