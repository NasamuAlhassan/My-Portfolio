import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prince Nasamu Alhassan — Data Scientist & Developer',
  description:
    'Portfolio of Prince Nasamu Alhassan — Mathematical Sciences & CS student at University of Ghana, building data tools for problems that matter.',
  keywords: ['data science', 'python developer', 'university of ghana', 'portfolio', 'machine learning'],
  authors: [{ name: 'Prince Nasamu Alhassan' }],
  openGraph: {
    title: 'Prince Nasamu Alhassan',
    description: 'Data Scientist & Python Developer — University of Ghana',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
