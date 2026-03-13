import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ЭнвиПро — экологическая организаия',
    template: '%s | ЭнвиПро'
  },

  description:
    'Экологическое сопровождение деятельности, производственный экологический контроль, недропользование и инженерные изыскания. ООО «ЭнвиПро».',

  keywords: [
    'экологическое сопровождение',
    'производственный экологический контроль',
    'инженерные изыскания',
    'экологическая компания',
    'экологические услуги'
  ],

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}