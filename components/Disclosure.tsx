import { ChevronDown, Plus } from 'lucide-react'

/**
 * Native <details>: keyboard and screen-reader friendly with no JS. Long
 * material sits behind a big, bold bar so it is obvious there is more here.
 */
export default function Disclosure({
  label,
  hint,
  openLabel,
  children,
  className = '',
}: {
  label: string
  /** One line saying what is inside. */
  hint?: string
  openLabel?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="disc-summary group-open:[animation:none] flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-[22px] px-5 py-5 marker:hidden sm:px-8 sm:py-7 [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-night sm:h-14 sm:w-14">
            <Plus size={28} strokeWidth={2.8} className="transition-transform duration-300 group-open:rotate-45" aria-hidden />
          </span>
          <span className="min-w-0 text-left">
            <span className="block font-serif text-2xl leading-tight sm:text-3xl">
              <span className="group-open:hidden">{label}</span>
              <span className="hidden group-open:inline">{openLabel ?? 'Show less'}</span>
            </span>
            {hint && <span className="mt-1 block font-sans text-sm leading-snug opacity-90 sm:text-base group-open:hidden">{hint}</span>}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-current px-3 py-1.5 font-sans text-sm font-bold sm:px-5 sm:py-2 sm:text-base">
          <span className="group-open:hidden">Open</span>
          <span className="hidden group-open:inline">Close</span>
          <ChevronDown size={18} strokeWidth={2.8} className="disc-bob group-open:rotate-180 group-open:animate-none" aria-hidden />
        </span>
      </summary>
      <div className="mt-8">{children}</div>
    </details>
  )
}
