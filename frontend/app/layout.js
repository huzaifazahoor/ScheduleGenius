import Head from 'next/head'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Schedule Genius',
  description: 'Schedule Genius is a scheduling app for the modern developers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
          src="https://kit.fontawesome.com/e8b8ab9d2f.js"
          strategy='beforeInteractive'
          crossOrigin='anonymous'
        />
      <body className='bg-black max-w-screen overflow-x-hidden'>{children}</body>
    </html>
  )
}
