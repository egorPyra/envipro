import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import Header from "@/app/components/Header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'envipro',
  description: 'static pages with animations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const footer = (
    <footer>
      footer content :)
    </footer>
  );

  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header/>
        {children}
        {footer}
      </body>
    </html>
  )
}
