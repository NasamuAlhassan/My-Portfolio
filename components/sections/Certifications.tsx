import fs from 'fs'
import path from 'path'
import { certifications } from '@/lib/data'
import CertificateGallery, { type CertCard } from '@/components/CertificateGallery'
import Reveal from '@/components/motion/Reveal'

/** Gallery titles, newest first — the gallery follows this order. */
const knownTitles: Record<string, string> = {
  'british-airways-forage': 'British Airways Data Science Job Simulation — Forage',
  'techcrush-data-science': 'TechCrush Data Science Bootcamp',
  'greenres-bootcamp': 'GreenRes Hackathon Virtual Bootcamp — Africa Climate Collaborative, UG',
  'DecodeLabs Cert': 'DecodeLabs Virtual Internship — Data Science',
  'Columbia +': 'Prompt Engineering & Programming with OpenAI — Columbia+',
  'Claude 101': 'Claude 101 — Anthropic',
  'Coursera': 'Foundations: Data, Data, Everywhere — Google / Coursera',
}

/** Position in knownTitles; files not listed there go last. */
function galleryRank(title: string): number {
  const i = Object.values(knownTitles).indexOf(title)
  return i === -1 ? Infinity : i
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
      image: { filename: img, path: `/certificates/${encodeURI(img)}` },
    }

    if (matchedPdf) {
      card.pdf = { filename: matchedPdf, path: `/certificates/${encodeURI(matchedPdf)}` }
      pairedPdfs.add(matchedPdf)
    }

    cards.push(card)
  }

  for (const pdf of pdfFiles) {
    if (!pairedPdfs.has(pdf)) {
      const base = pdf.replace(/\.pdf$/i, '').trim()
      cards.push({
        title: cleanTitle(base),
        pdf: { filename: pdf, path: `/certificates/${encodeURI(pdf)}` },
      })
    }
  }

  return cards.sort((a, b) => galleryRank(a.title) - galleryRank(b.title))
}

export default function Certifications() {
  const cards = getCerts()
  const certs = certifications.filter((c) => c.type === 'certification')

  return (
    <section className="rule">
      <div className="max-w-content mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <Reveal>
          <p className="section-label mb-12">Credentials</p>
        </Reveal>

        <div className="space-y-px bg-stone mb-16">
          {certs.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="row flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[15px] font-medium text-ink">{cert.title}</p>
                  <p className="font-sans text-xs text-ink-muted mt-1">{cert.issuer}</p>
                  {cert.description && (
                    <p className="mt-2 max-w-reading font-sans text-[13px] leading-[1.65] text-ink-muted">
                      {cert.description}
                    </p>
                  )}
                  {cert.credential && (
                    <p className="mt-2 font-mono text-[10px] text-ink-faint">{cert.credential}</p>
                  )}
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


