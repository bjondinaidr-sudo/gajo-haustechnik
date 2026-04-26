import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gajo Haustechnik GmbH | Premium Haustechnik aus Ziegelbrücke',
  description:
    'Gajo Haustechnik GmbH – Ihr zuverlässiger Partner für hochwertige Sanitär-, Heizungs-, Lüftungs- und Wassertechnik in der Schweiz. Präzision und Qualität seit über 15 Jahren.',
  keywords: 'Haustechnik, Heizung, Sanitär, Lüftung, Wasseraufbereitung, Ziegelbrücke, Schweiz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
