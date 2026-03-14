import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: {
    default: 'ЭнвиПро — экологическая организация',
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
      <body>
        {children}
      </body>
    </html>
  )
}