'use client'

import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import MapSection from "./components/MapSection/MapSection";
import KeepImprove from "./components/KeepImproveSection/KeepImprove";
import HistorySection from "./components/HistorySection/HistorySection";
import TeamSection from "./components/TeamSection/TeamSection";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function AboutUs() {

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
  })

  // useEffect(() => {
  //   console.log('heool')
  //   const unsub = scrollY.on("change", (latest) => console.log(latest));
  //   return () => unsub();
  // }, [scrollY])

  return (
    <>
      <main className={styles.main}>
        <Header/>
        <HistorySection/>
        <TeamSection/>
        <MapSection />
        <KeepImprove />
      </main>
    </>
)
}
