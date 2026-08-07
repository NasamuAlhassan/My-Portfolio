/**
 * Decorative audio waveform.
 *
 * Pure CSS animation with a per-bar delay — the previous version ran 48
 * independent framer-motion loops, which kept the main thread busy forever.
 * This is a server component now: no JS ships for it at all.
 */
const BARS = [
  0.22, 0.41, 0.68, 0.95, 0.72, 0.48, 0.31, 0.57, 0.83, 1.0, 0.76, 0.52,
  0.29, 0.44, 0.71, 0.9, 0.62, 0.38, 0.25, 0.5, 0.79, 0.97, 0.66, 0.43,
  0.28, 0.55, 0.81, 0.93, 0.7, 0.46, 0.33, 0.6,
]

export default function Waveform({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex h-20 w-full items-center justify-between gap-[3px]" aria-hidden>
      {BARS.map((amp, i) => (
        <span
          key={i}
          className={`animate-barPulse flex-1 rounded-full ${
            dark ? 'bg-signal/40' : 'bg-forest/25'
          } ${i > 23 ? 'hidden sm:block' : ''}`}
          style={{
            height: `${amp * 100}%`,
            animationDelay: `${(i % 10) * 0.13}s`,
          }}
        />
      ))}
    </div>
  )
}
