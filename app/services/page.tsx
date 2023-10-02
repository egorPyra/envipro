'use client'

import styles from './page.module.css'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function Services() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        services content
      </main>
    </>
  )
}
