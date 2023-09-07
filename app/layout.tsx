import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'envipro',
  description: 'static pages with animations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      header
    </header>
  );

  const footer = (
    <footer>
      footer content :)
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
