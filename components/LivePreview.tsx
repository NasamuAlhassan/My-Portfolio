'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight, Globe } from 'lucide-react'

const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 900

/**
 * Embeds a deployed site inside browser chrome, rendered at desktop width
 * and scaled to fit its container.
 *
 * The scale is measured rather than hard-coded — the previous fixed
 * `scale(0.35)` assumed a fixed card width and overflowed badly once the
 * card got narrow.
 *
 * On small screens the iframe is not mounted at all: embedding full
 * applications is far too expensive on a phone, so a screenshot that links
 * to the live site takes its place. The same screenshot sits under the iframe
 * on desktop while the live site loads.
 */
export default function LivePreview({
  url,
  href,
  title,
  image,
  className,
}: {
  url: string
  /** Where "Open" goes, if different from the embedded URL. */
  href?: string
  title: string
  /** Screenshot of the site, used on phones and while the live site loads. */
  image?: string
  className?: string
}) {
  const openUrl = href ?? url
  const ref = useRef<HTMLDivElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [loaded, setLoaded] = useState(false)
  const [scale, setScale] = useState(0)
  const [allowEmbed, setAllowEmbed] = useState(false)

  useEffect(() => {
    const check = () => setAllowEmbed(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const measure = useCallback(() => {
    const el = shellRef.current
    if (!el) return
    setScale(el.clientWidth / FRAME_WIDTH)
  }, [])

  useEffect(() => {
    if (!allowEmbed) return
    measure()
    const el = shellRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [allowEmbed, measure])

  const host = (() => {
    try {
      return new URL(url).host
    } catch {
      return url
    }
  })()

  return (
    <div ref={ref} className={className}>
      <div className="card overflow-hidden">
        {/* Address bar */}
        <div className="flex items-center gap-2.5 border-b border-ink/10 bg-paper px-3 py-2.5 sm:gap-3 sm:px-4">
          <span className="flex gap-1.5" aria-hidden>
            <i className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-paper-warm px-3 py-1">
            <Globe size={10} className="shrink-0 text-ink-faint" />
            <span className="truncate font-mono text-[10px] text-ink-faint">{host}</span>
          </div>
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase
                       tracking-wider text-ink-muted transition-colors hover:text-forest"
          >
            Open
            <ArrowUpRight size={10} />
          </a>
        </div>

        {/* Viewport */}
        <div ref={shellRef} className="relative aspect-[16/10] w-full overflow-hidden bg-paper-warm">
          {image && (
            <img
              src={image}
              alt={allowEmbed ? '' : `Screenshot of ${title}. Opens the live site.`}
              aria-hidden={allowEmbed || undefined}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
          {allowEmbed && (
            <>
              {inView && scale > 0 && (
                <iframe
                  src={url}
                  title={`Live preview of ${title}`}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
                  style={{
                    width: `${FRAME_WIDTH}px`,
                    height: `${FRAME_HEIGHT}px`,
                    transform: `scale(${scale})`,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity .5s ease',
                  }}
                />
              )}
            </>
          )}

          {!allowEmbed && (
            <span className="absolute bottom-2 right-2 z-20 rounded-full bg-night/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
              Screenshot · tap to open
            </span>
          )}

          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-forest"
            aria-label={`Open ${title} in a new tab`}
          />
        </div>
      </div>
    </div>
  )
}
