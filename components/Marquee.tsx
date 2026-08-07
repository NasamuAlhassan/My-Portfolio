'use client'

export default function Marquee({
  items,
  dark = false,
}: {
  items: string[]
  dark?: boolean
}) {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const run = [...items, ...items]

  return (
    <div className={`mask-fade-x overflow-hidden py-5 ${dark ? 'border-y border-white/10' : 'border-y border-stone'}`}>
      <div className="animate-marquee flex w-max items-center gap-10 will-change-transform">
        {run.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.2em] whitespace-nowrap ${
                dark ? 'text-white/45' : 'text-ink-faint'
              }`}
            >
              {item}
            </span>
            <span className={`h-1 w-1 rounded-full ${dark ? 'bg-signal/50' : 'bg-forest/40'}`} />
          </span>
        ))}
      </div>
    </div>
  )
}
