import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Captur App',
  description: 'Cool Sharks and nature pictures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero heading='Captur' message='I capture moments in nature and keep them alive.' />
        {children}
      </body>
    </html>
  )
}
