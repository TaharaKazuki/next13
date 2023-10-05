import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from './components/navigation/footer'
import Navigation from './components/navigation/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
