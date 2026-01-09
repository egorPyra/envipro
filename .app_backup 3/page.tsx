'use client';

import type { MouseEvent } from "react";
import Image from "next/image";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import HistorySectionMobile from "./components/HistorySectionMobile/HistorySectionMobile";
import Contacts from "./components/Contacts/Contacts";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";

const heroLinks = [
  { label: "О НАС", target: "#about" },
  { label: "УСЛУГИ", target: "#services" },
  { label: "КОНТАКТЫ", target: "#contacts" },
];

export default function MobileHome() {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.logoWrap}>
              <Image
                src="/Logo_ENVI_rus.svg"
                alt="ЭнвиПро"
                width={160}
                height={160}
                priority
                className={styles.logoImg}
              />
            </div>

            <nav className={styles.ctaList}>
              {heroLinks.map((link) => (
                <a
                  key={link.target}
                  href={link.target}
                  className={styles.cta}
                  onClick={(event) => scrollToSection(event, link.target)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#about"
            className={styles.arrow}
            aria-label="Прокрутить вниз"
            onClick={(event) => scrollToSection(event, "#about")}
          >
            ⌄
          </a>
        </section>

        {/* История */}
        <section id="about" className={styles.about}>
          <HistorySectionMobile />
        </section>

        {/* Услуги */}
        <section id="services" className={styles.services}>
          <ServiceBlock />
        </section>

        {/* Контакты */}
        <section id="contacts" className={styles.mapBlock}>
          <Contacts />
        </section>

        <div id="heroSentinel" className={styles.sentinel} />
      </main>
    </>
  );
}
