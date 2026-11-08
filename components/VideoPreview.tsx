'use client'

import { useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'

/**
 * A poster-first video card. The Drive player is only mounted after the
 * visitor presses play, so nothing heavy loads (and nothing sits there black)
 * until it is asked for.
 */
export default function VideoPreview({
  title,
  caption,
  tag,
  src,
  href,
  poster,
  posterAlt,
  posterFit = 'cover',
  dark = true,
}: {
  title: string
  caption: string
  tag: string
  /** Drive /preview embed URL. */
  src: string
  /** Where "Open on Drive" goes. */
  href: string
  poster: string
  posterAlt: string
  /** Use "contain" for portrait stills inside the 16:9 frame. */
  posterFit?: 'cover' | 'contain'
  dark?: boolean
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="m-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-[22px] border border-white/10 bg-black">
        {playing ? (
          <iframe
            src={src}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 block h-full w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-signal"
          >
            {posterFit === 'contain' && (
              <img
                src={poster}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-2xl"
              />
            )}
            <img
              src={poster}
              alt={posterAlt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                posterFit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
            />
            <span
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25"
              aria-hidden
            />
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
              {tag}
            </span>
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-signal text-night shadow-[0_10px_40px_rgba(0,0,0,.45)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                <Play size={32} className="ml-1 fill-current" />
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <span className="block font-serif text-xl leading-tight text-white sm:text-2xl">{title}</span>
              <span className="mt-1 block font-sans text-[13px] leading-snug text-white/75 sm:text-sm">
                {caption}
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4">
        <span className={`font-sans text-sm ${dark ? 'text-white/55' : 'text-ink-muted'}`}>
          {playing ? caption : 'Press play to load the video'}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
        >
          Open on Drive
          <ArrowUpRight size={12} />
        </a>
      </figcaption>
    </figure>
  )
}
