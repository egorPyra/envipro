'use client'

import styles from "./page.module.css";
import MapSection from "./components/MapSection/MapSection";
import KeepImprove from "./components/KeepImproveSection/KeepImprove";
import HistorySection from "./components/HistorySection/HistorySection";
import TeamSection from "./components/TeamSection/TeamSection";
import Header from "../../components/Header/Header";

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
