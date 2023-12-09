'use client'

import styles from './page.module.css'
import React, {useState} from "react";
import BurgerBtn from "@/app/components/BurgerMenu/BurgerBtn";
import BurgerContent from "@/app/components/BurgerMenu/BurgerContent";
import LogoPreloader from "@/app/components/LogoPreloader/LogoPreloader";
import MainPageBlocks from "@/app/components/MainPageBlocks/MainPageBlocks";
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
  })

  return (
    <main className={styles.main} onClick={() => setIsMenuActive(false)}>
      {/*<LogoPreloader/>*/}
      <section className={styles.content}>
        <BurgerBtn activateMenuFunc={setIsMenuActive}/>
        <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
        <MainPageBlocks/>
      </section>
    </main>
  )
}
