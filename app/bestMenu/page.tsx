'use client'

import styles from './page.module.css'
import React, {useState} from "react";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";
import BurgerContent from "@/app/components/BurgerMenu/BurgerContent";
import BurgerContent1 from "@/app/components/BurgerMenu/BurgerContent1";
import BurgerContent2 from "@/app/components/BurgerMenu/BurgerContent2";
import LogoPreloader from "@/app/components/LogoPreloader/LogoPreloader";
import MainPageBlocks from "@/app/components/MainPageBlocks/MainPageBlocks";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  return (
    <main className={styles.main} onClick={() => setIsMenuActive(false)}>
      {/*<LogoPreloader/>*/}
      <section className={styles.content}>
        <BurgerBtn activateMenuFunc={setIsMenuActive}/>
        {/* <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/> */}
        {/* <BurgerContent1 isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/> */}
        <BurgerContent2 isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
        {/* <MainPageBlocks/> */}
      </section>
    </main>
  )
}
