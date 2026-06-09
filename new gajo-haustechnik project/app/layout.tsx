import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GAJO Haustechnik GmbH | Ihr Partner für Sanitär- und Haustechniklösungen',
  description:
    'GAJO Haustechnik GmbH – Ihr zuverlässiger Partner für Sanitärinstallationen, Wasseraufbereitung, Neu- & Umbauten sowie Service in der Schweiz. Präzision und Qualität aus einer Hand.',
  keywords:
    'Sanitär, Sanitärinstallationen, Wasseraufbereitung, Haustechnik, Neubau, Umbau, Service, Wartung, Ziegelbrücke, Schweiz',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport = {
  themeColor: '#131F4A',
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
