import fs from 'fs'
import path from 'path'
import { certifications } from '@/lib/data'
import CertificateGallery, { type CertCard } from '@/components/CertificateGallery'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'

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
  const certs = certifications.filter((c) => c.type === 'certification')

  return (
    <section className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-28">
        <Reveal>
          <p className="section-label">Credentials</p>
        </Reveal>
        <TextReveal text="Certifications." as="h2" className="section-heading mt-5 mb-14" />

        <div className="space-y-px bg-stone mb-20">
          {certs.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="row flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[15px] font-medium text-ink">{cert.title}</p>
                  <p className="font-sans text-xs text-ink-muted mt-1">{cert.issuer}</p>
                </div>
                {cert.date && (
                  <span className="font-mono text-[11px] text-ink-faint shrink-0">{cert.date}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {cards.length > 0 && (
          <>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-7">
                Certificate gallery
              </p>
            </Reveal>
            <CertificateGallery cards={cards} />
          </>
        )}
      </div>
    </section>
  )
}


