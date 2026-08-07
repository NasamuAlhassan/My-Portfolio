'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, FileText } from 'lucide-react'

export type CertCard = {
  title: string
  image?: { filename: string; path: string }
  pdf?: { filename: string; path: string }
}

function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div
        className="relative max-w-3xl w-full max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          className="w-full h-auto max-h-[85vh] object-contain"
        />
        <p className="text-white/50 text-xs font-sans text-center mt-3">{title}</p>
      </div>
    </div>
  )
}

export default function CertificateGallery({ cards }: { cards: CertCard[] }) {
  const [lightbox, setLightbox] = useState<CertCard | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.title} className="card flex flex-col overflow-hidden">

            {/* Image thumbnail — clickable */}
            {card.image ? (
              <button
                onClick={() => setLightbox(card)}
                className="group block w-full text-left focus-visible:outline-forest"
                aria-label={`View ${card.title}`}
              >
                <div className="relative w-full aspect-[4/3] bg-white/45 overflow-hidden">
                  <Image
                    src={card.image.path}
                    alt={card.title}
                    fill
                    className="object-contain p-3 transition-opacity duration-150 group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </button>
            ) : (
              /* PDF-only placeholder */
              <div className="flex flex-col items-center justify-center gap-2 py-10 bg-white/35">
                <FileText size={24} className="text-stone" />
              </div>
            )}

            {/* Title */}
            <div className="px-4 py-3 border-t border-white/60">
              <p className="font-sans text-xs font-medium text-ink leading-snug">
                {card.title}
              </p>
            </div>

            {/* PDF link bar */}
            {card.pdf && (
              <a
                href={card.pdf.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 border-t border-stone
                           text-ink-muted hover:text-forest hover:border-forest transition-colors duration-150 group"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider">PDF</span>
                <span className="font-mono text-[11px] group-hover:text-forest transition-colors">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>

      {lightbox?.image && (
        <Lightbox src={lightbox.image.path} title={lightbox.title} onClose={closeLightbox} />
      )}
    </>
  )
}
