'use client'

import styles from './page.module.css'
import React, {useState} from "react";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";
import BurgerContent from "@/app/components/BurgerMenu/BurgerContent";
import LogoPreloader from "@/app/components/LogoPreloader/LogoPreloader";
import MainPageBlocks from "@/app/components/MainPageBlocks/MainPageBlocks";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <main className={styles.main} onClick={() => setIsMenuActive(false)}>
      <LogoPreloader/>
      <section className={styles.content}>
        <BurgerBtn activateMenuFunc={setIsMenuActive}/>
        <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
        <MainPageBlocks/>
      </section>
    </main>
  )
}
