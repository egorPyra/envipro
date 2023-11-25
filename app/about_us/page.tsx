'use client'

import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import HistorySection from "@/app/components/AboutUsSections/HistorySection/HistorySection";
import TeamSection from "@/app/components/AboutUsSections/TeamSection/TeamSection";
import MapSection from "../components/MapSection/MapSection";
import KeepImprove from "../components/KeepImprove/KeepImprove";

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
