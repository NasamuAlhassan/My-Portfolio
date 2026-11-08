import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const display = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const text = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-text',
  weight: ['400', '500', '600', '700', '800'],
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
    default: 'Prince Nasamu Alhassan · Accessibility and language technology for Africa',
    template: '%s · Prince Nasamu Alhassan',
  },
  description:
    'Prince Nasamu Alhassan is an independent researcher in Ghana building accessibility tools and language technology for African languages: Nexus, a voice-first assistant for blind users, open Kusaal translation and speech models, and voice-first systems for health and agriculture.',
  keywords: ['accessibility', 'assistive technology', 'speech recognition', 'machine translation', 'African languages', 'Kusaal', 'Twi', 'Ghana'],
  authors: [{ name: 'Prince Nasamu Alhassan' }],
  openGraph: {
    title: 'Prince Nasamu Alhassan · Independent researcher',
    description: 'Speech, translation and assistive AI for African languages and the people mainstream technology leaves out.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${text.variable} ${jetbrains.variable} font-sans antialiased text-ink`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
