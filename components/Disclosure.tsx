import { Plus } from 'lucide-react'

/**
 * Native <details>: keyboard and screen-reader friendly with no JS. Long
 * material sits behind a clear, tappable "Read more" so the page stays short.
 */
export default function Disclosure({
  label,
  openLabel,
  children,
  className = '',
}: {
  label: string
  openLabel?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-ink/20 bg-surface px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-colors marker:hidden hover:border-ink [&::-webkit-details-marker]:hidden">
        <Plus size={16} className="transition-transform duration-300 group-open:rotate-45" aria-hidden />
        <span className="group-open:hidden">{label}</span>
        <span className="hidden group-open:inline">{openLabel ?? 'Show less'}</span>
      </summary>
      <div className="mt-6">{children}</div>
    </details>
  )
}
