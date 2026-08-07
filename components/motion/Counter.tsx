'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts up to a numeric target parsed out of `value`, preserving the
 * decimal places and thousands separators of the original string.
 * Non-numeric values are rendered verbatim.
 */
export default function Counter({
  value,
  duration = 1500,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  const target = Number(value.replace(/,/g, ''))
  const decimals = value.includes('.') ? value.split('.')[1].length : 0
  const grouped = value.includes(',')

  const [display, setDisplay] = useState(() => (Number.isFinite(target) ? format(0, decimals, grouped) : value))

  useEffect(() => {
    if (!inView || !Number.isFinite(target)) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setDisplay(format(target, decimals, grouped))
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setDisplay(format(target * eased, decimals, grouped))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, decimals, grouped, duration])

  return (
    <span ref={ref} className={className}>
      {Number.isFinite(target) ? display : value}
    </span>
  )
}

function format(n: number, decimals: number, grouped: boolean) {
  return n.toLocaleString('en-GB', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouped,
  })
}
