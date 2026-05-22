import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
        <p>
          <span className="text-slate-400 font-medium">{personalInfo.name}</span>
        </p>
        <p>
          © {new Date().getFullYear()} &middot; {personalInfo.university}
        </p>
      </div>
    </footer>
  )
}
