'use client'

import React, { useState } from "react";
import MainPageBlocks from "@/app/components/MainPageBlocks/MainPageBlocks";
import styles from "./page.module.css";
import BurgerBtn from "./components/BurgerMenu/BurgerBtn";
import BurgerContent from "./components/BurgerMenu/BurgerContent";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <section className={styles.content} onClick={() => setIsMenuActive(false)}>
      <BurgerBtn activateMenuFunc={setIsMenuActive}/>
      <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
      <MainPageBlocks/>
    </section>
  )
}
