import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-sm">
          <p className="font-semibold text-slate-600">{personalInfo.name}</p>
          <p>© {new Date().getFullYear()} &middot; {personalInfo.university}</p>
        </div>
      </div>
    </footer>
  )
}
