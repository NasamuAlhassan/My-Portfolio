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
        className={`${dmSerif.variable} ${outfit.variable} ${jetbrains.variable} font-sans antialiased text-ink`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
