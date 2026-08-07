'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Reveals a headline word by word, each word rising from behind a clipping mask.
 * Renders as a single block element — pass display classes via `className`.
 */
export default function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as: Tag = 'h1',
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const words = text.split(' ')

  const MotionTag = motion[Tag]

  return (
    <div ref={ref}>
      <MotionTag
        className={className}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: '0.08em' }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '105%' },
                show: { y: '0%', transition: { duration: 0.85, ease: EASE } },
              }}
            >
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    </div>
  )
}
