import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/config/font'
import { Providers } from '@/components'

export const metadata: Metadata = {
  // title: 'Teslo| Shop ',
  title: {
    template: '%s - Teslo| Shop ',
    default: 'Home - Teslo| Shop'
  },
  description: 'Una tienda virtual de productos'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
