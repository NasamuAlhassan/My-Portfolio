import { Plus } from 'lucide-react'

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
      <summary className="disc-summary flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-[20px] px-5 py-4 marker:hidden sm:px-7 sm:py-5 [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-night sm:h-12 sm:w-12">
            <Plus size={24} strokeWidth={2.6} className="transition-transform duration-300 group-open:rotate-45" aria-hidden />
          </span>
          <span className="min-w-0 text-left">
            <span className="block font-serif text-xl leading-tight sm:text-2xl">
              <span className="group-open:hidden">{label}</span>
              <span className="hidden group-open:inline">{openLabel ?? 'Show less'}</span>
            </span>
            {hint && <span className="mt-0.5 block font-sans text-[13px] leading-snug opacity-80 sm:text-sm group-open:hidden">{hint}</span>}
          </span>
        </span>
        <span className="hidden shrink-0 rounded-full border-2 border-current px-4 py-1.5 font-sans text-sm font-bold sm:inline-block">
          <span className="group-open:hidden">Open</span>
          <span className="hidden group-open:inline">Close</span>
        </span>
      </summary>
      <div className="mt-8">{children}</div>
    </details>
  )
}
