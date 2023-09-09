import styles from './page.module.css'
import React from "react";
import Link from "next/link";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href={'/about_us'}>about us</Link>
        </li>
        <li>
          <Link href={'/services'}>services</Link>
        </li>
        <li>
          <Link href={'/contacts'}>contacts</Link>
        </li>
      </ul>
      <BurgerBtn/>
    </main>
  )
}
