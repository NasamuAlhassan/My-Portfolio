import { ArrowUpRight, FileText, Github, Linkedin, Mail, Presentation, Layers, Play } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { nexus, personalInfo } from '@/lib/data'

const deck = nexus.more.find((m) => m.kind === 'Pitch deck')!

/**
 * The quickest way in. Everything a founder or funder usually hunts for,
 * as big visual tiles, so nothing important is buried.
 */
export default function StartHere() {
  const tiles = [
    {
      href: '#nexus',
      label: 'Watch',
      title: 'A blind user running Nexus',
      note: 'About three minutes of real use.',
      image: nexus.video.poster,
      alt: '',
      icon: <Play size={18} className="fill-current" />,
      tone: 'text-white',
    },
    {
      href: '#live',
      label: 'Try',
      title: 'Six live apps',
      note: 'Running right now, open any of them.',
      image: '/previews/tek.jpg',
      alt: '',
      icon: <Layers size={18} />,
      tone: 'text-white',
    },
    {
      href: deck.href,
      external: true,
      label: 'Slideshow',
      title: 'The grand-finale pitch deck',
      note: 'Open on Drive, then press Present.',
      icon: <Presentation size={18} />,
      bg: 'linear-gradient(135deg,#0F5132 0%,#0B2A1E 100%)',
      tone: 'text-white',
    },
    {
      href: personalInfo.huggingface,
      external: true,
      label: 'Open',
      title: 'Models and datasets',
      note: 'Kusaal translation and speech, on Hugging Face.',
      icon: <ArrowUpRight size={18} />,
      bg: 'linear-gradient(135deg,#B5361F 0%,#7a2314 100%)',
      tone: 'text-white',
    },
  ]

  return (
    <section id="start" className="bg-paper">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="section-label">Start here</p>
          <h2 className="section-heading-sm mt-3 max-w-[22ch]">Short on time? These four say it best.</h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06} className="h-full">
              <a
                href={t.href}
                {...(t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group relative flex aspect-[4/5] h-full w-full flex-col justify-end overflow-hidden rounded-[22px] border border-stone p-4 sm:aspect-[5/6] sm:p-5"
                style={t.bg ? { background: t.bg } : undefined}
              >
                {t.image && (
                  <>
                    <img
                      src={t.image}
                      alt={t.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/0" aria-hidden />
                  </>
                )}
                {!t.image && <span className="kente absolute inset-x-0 top-0 h-1.5 opacity-80" aria-hidden />}
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-night transition-transform group-hover:scale-110 sm:right-4 sm:top-4">
                  {t.icon}
                </span>
                <span className="relative">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{t.label}</span>
                  <span className={`mt-1.5 block font-serif text-xl leading-tight sm:text-2xl ${t.tone}`}>{t.title}</span>
                  <span className="mt-1.5 hidden font-sans text-[13px] leading-snug text-white/75 sm:block">{t.note}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-sans text-sm">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="link-underline font-semibold text-ink">
              <FileText size={15} /> CV (PDF)
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-muted hover:text-ink">
              <Github size={15} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-muted hover:text-ink">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="link-underline text-ink-muted hover:text-ink">
              <Mail size={15} /> {personalInfo.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
