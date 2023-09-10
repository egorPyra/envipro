'use client'

import styles from './page.module.css'
import React, {useState} from "react";
import Link from "next/link";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";
import BurgerContent from "@/app/components/BurgerMenu/BurgerContent";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <main className={styles.main} onClick={() => setIsMenuActive(false)}>
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
      <BurgerBtn activateMenuFunc={setIsMenuActive}/>
      <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
    </main>
  )
}
