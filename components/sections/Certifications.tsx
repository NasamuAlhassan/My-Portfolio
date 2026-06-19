import fs from 'fs'
import path from 'path'
import { certifications } from '@/lib/data'
import CertificateGallery, { type CertCard } from '@/components/CertificateGallery'

const knownTitles: Record<string, string> = {
  'Columbia +': 'Prompt Engineering & Programming with OpenAI — Columbia+',
  'Claude 101': 'Claude 101 — Anthropic',
  'Coursera': 'Foundations: Data, Data, Everywhere — Google / Coursera',
  'DecodeLabs Cert': 'DecodeLabs Virtual Internship — Data Science',
}

function cleanTitle(baseName: string): string {
  if (knownTitles[baseName]) return knownTitles[baseName]
  return baseName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}

function getImageBase(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/ conv \d+$/i, '')
    .trim()
}

function getCerts(): CertCard[] {
  const certsDir = path.join(process.cwd(), 'public', 'certificates')
  let files: string[] = []
  try {
    files = fs.readdirSync(certsDir)
  } catch {
    return []
  }

  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
  const pdfFiles = files.filter((f) => /\.pdf$/i.test(f))

  // Map PDF base name → filename
  const pdfByBase = new Map<string, string>()
  for (const pdf of pdfFiles) {
    const base = pdf.replace(/\.pdf$/i, '').trim()
    pdfByBase.set(base, pdf)
  }

  const pairedPdfs = new Set<string>()
  const cards: CertCard[] = []

  for (const img of imageFiles) {
    const base = getImageBase(img)
    const matchedPdf = pdfByBase.get(base)

    const card: CertCard = {
      title: cleanTitle(base),
      image: { filename: img, path: `/certificates/${encodeURIComponent(img)}` },
    }

    if (matchedPdf) {
      card.pdf = { filename: matchedPdf, path: `/certificates/${encodeURIComponent(matchedPdf)}` }
      pairedPdfs.add(matchedPdf)
    }

    cards.push(card)
  }

  // Add any PDFs that had no matching image
  for (const pdf of pdfFiles) {
    if (!pairedPdfs.has(pdf)) {
      const base = pdf.replace(/\.pdf$/i, '').trim()
      cards.push({
        title: cleanTitle(base),
        pdf: { filename: pdf, path: `/certificates/${encodeURIComponent(pdf)}` },
      })
    }
  }

  return cards
}

export default function Certifications() {
  const cards = getCerts()

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 border-t border-stone">
      <div className="max-w-content mx-auto">
        <div className="mb-12">
          <p className="section-label">Credentials</p>
          <h2 className="section-heading">Certifications & Recognition</h2>
        </div>

        {/* Recognition list */}
        <div className="mb-14 space-y-0 max-w-2xl">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 border-b border-stone last:border-0"
            >
              <div className="flex-1">
                <p className="font-sans text-sm font-medium text-ink">{cert.title}</p>
                <p className="font-sans text-xs text-ink-muted mt-0.5">{cert.issuer}</p>
              </div>
              {cert.date && (
                <span className="font-mono text-[11px] text-ink-muted shrink-0">{cert.date}</span>
              )}
            </div>
          ))}
        </div>

        {/* Certificate gallery */}
        {cards.length > 0 && (
          <>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-6">
              Certificate gallery
            </p>
            <CertificateGallery cards={cards} />
          </>
        )}
      </div>
    </section>
  )
}
