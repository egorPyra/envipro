'use client'

import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import MapSection from "../components/MapSection/MapSection";
import KeepImprove from "../components/KeepImprove/KeepImprove";
import HistorySection from "./components/HistorySection/HistorySection";
import TeamSection from "./components/TeamSection/TeamSection";

export default function AboutUs() {
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
