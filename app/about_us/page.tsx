'use client'

import styles from "./page.module.css";
import MapSection from "./components/MapSection/MapSection";
import KeepImprove from "./components/KeepImproveSection/KeepImprove";
import HistorySection from "./components/HistorySection/HistorySection";
import TeamSection from "./components/TeamSection/TeamSection";
import Header from '../components/Header/Header';
import Lenis from "lenis";
import { useEffect } from "react";


export default function AboutUs() {

  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
  
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [])

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
