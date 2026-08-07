'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight, Globe, MonitorPlay } from 'lucide-react'

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
 * On small screens the iframe is not mounted at all: embedding two full
 * applications is far too expensive on a phone, so a static panel with a
 * direct link takes its place.
 */
export default function LivePreview({
  url,
  title,
  className,
}: {
  url: string
  title: string
  className?: string
}) {
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
        {/* Browser chrome */}
        <div className="flex items-center gap-2.5 border-b border-white/55 bg-white/25 px-3 py-2.5 sm:gap-3 sm:px-4">
          <div className="hidden gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
          </div>
          <div className="glass-inset flex min-w-0 flex-1 items-center gap-1.5 px-2.5 py-1">
            <Globe size={10} className="shrink-0 text-ink-faint" />
            <span className="truncate font-mono text-[10px] text-ink-faint">{host}</span>
          </div>
          <a
            href={url}
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
        <div ref={shellRef} className="relative aspect-[16/10] w-full overflow-hidden bg-white/55">
          {allowEmbed ? (
            <>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-ink/10 border-t-forest"
                      aria-hidden
                    />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      Loading live site
                    </p>
                  </div>
                </div>
              )}

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
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <MonitorPlay size={22} className="text-forest/60" aria-hidden />
              <p className="font-sans text-sm text-ink-muted">
                Live preview available on a larger screen
              </p>
            </div>
          )}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Open ${title} in a new tab`}
          />
        </div>
      </div>
    </div>
  )
}
