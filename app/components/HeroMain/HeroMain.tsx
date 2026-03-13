'use client'

import type { MouseEvent } from 'react'
import Image from 'next/image'
import styles from '../../page.module.css'

type HeroMainProps = {
  onClose: () => void
}

const heroLinks = [
  { label: 'О НАС', target: '#about' },
  { label: 'УСЛУГИ', target: '#services' },
  { label: 'КОНТАКТЫ', target: '#contacts' },
]

export default function HeroMain({ onClose }: HeroMainProps) {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()
    onClose()
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={styles.hero}>
      <button type="button" className={styles.heroClose} onClick={onClose} aria-label="Закрыть hero">
        <span className={styles.heroCloseIcon}>✕</span>
      </button>

      <div className={styles.heroContent}>
        <div className={styles.logoWrap}>
          <Image
            src="/logoBlackRus.png"
            alt="ЭнвиПро"
            width={360}
            height={360}
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

      {/* <a
        href="#about"
        className={styles.arrow}
        aria-label="Прокрутить вниз"
        onClick={(event) => scrollToSection(event, '#about')}
      >
        ⌄
      </a> */}
    </section>
  )
}
