import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Python Bootcamp',
    default: 'Python Bootcamp — Where coding meets healthcare',
  },
  description:
    'A free, interactive Python programming bootcamp for medical students and healthcare professionals. No prior experience needed.',
  keywords: ['python', 'bootcamp', 'healthcare', 'medical', 'DICOM', 'machine learning', 'deep learning', 'Jupyter'],
  authors: [{ name: 'Clinic of Neuroradiology, Magdeburg' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#080808] text-[#f0f0f0] font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
