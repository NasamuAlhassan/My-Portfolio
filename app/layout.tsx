import type { Metadata } from 'next'
import { DM_Serif_Display, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Prince Nasamu Alhassan — AI Researcher · Low-Resource NLP',
    template: '%s — Prince Nasamu Alhassan',
  },
  description:
    "Portfolio of Prince Nasamu Alhassan — AI researcher at the University of Ghana, building open machine translation and speech recognition for African languages, starting with Northern Ghana.",
  keywords: ['AI research', 'NLP', 'Kusaal', 'machine translation', 'African languages', 'low-resource MT'],
  authors: [{ name: 'Prince Nasamu Alhassan' }],
  openGraph: {
    title: 'Prince Nasamu Alhassan — AI Researcher',
    description: "Building language technology for Africa's most ignored languages.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${outfit.variable} ${jetbrains.variable} font-sans antialiased text-ink`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
