'use client'

import styles from "./page.module.css";
import Header from '../components/Header/Header';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import ContactPage from "./components/ContactPage";


export default function Contacts() {

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
  })

  return (
    <>
    <main className={styles.main}>
      <Header/>
      <ContactPage/>
      </main>
    </>
  )
}
