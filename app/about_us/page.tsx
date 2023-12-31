'use client'

import styles from "./page.module.css";
import MapSection from "./components/MapSection/MapSection";
import KeepImprove from "./components/KeepImproveSection/KeepImprove";
import HistorySection from "./components/HistorySection/HistorySection";
import TeamSection from "./components/TeamSection/TeamSection";
import Header from '../components/Header/Header';
import Lenis from "@studio-freight/lenis";


export default function AboutUs() {

  const lenis = new Lenis()

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

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
