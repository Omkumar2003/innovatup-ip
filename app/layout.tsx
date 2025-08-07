import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InnovatUp - College Tech Community',
  description: 'A community of student developers, designers, startup enthusiasts, and open-source contributors. Innovate. Collaborate. Build.',
  keywords: 'tech community, college, developers, designers, startups, open source',
  authors: [{ name: 'InnovatUp Team' }],
  openGraph: {
    title: 'InnovatUp - College Tech Community',
    description: 'Innovate. Collaborate. Build.',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
