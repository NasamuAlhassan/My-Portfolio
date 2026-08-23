'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.18 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
