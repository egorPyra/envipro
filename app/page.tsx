'use client'

import styles from './page.module.css'
import React, {useState} from "react";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";
import BurgerContent from "@/app/components/BurgerMenu/BurgerContent";
import LogoAnimation from "@/app/components/LogoPreloader/LogoPreloader";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <main className={styles.main} onClick={() => setIsMenuActive(false)}>
      <LogoAnimation/>
      <section className={styles.content}>
        <BurgerBtn activateMenuFunc={setIsMenuActive}/>
        <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
      </section>
    </main>
  )
}
