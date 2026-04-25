'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';
import { COOKIE_SETTINGS_EVENT } from '@/app/lib/cookieConsent';

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState<null | 'sochi' | 'spb'>(null)

  const openCookieSettings = () => {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
  }
  
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.address}>
          <h1>АДРЕСА НАШИХ ОФИСОВ</h1>
          <ul className={styles.addressList}>
            <li
              className={activeOffice === 'sochi' ? styles.activeOffice : ''}
              onMouseEnter={() => setActiveOffice('sochi')}
              onMouseLeave={() => setActiveOffice(null)}
            >
              <h3>Сочи</h3>
              <p>354024, Краснодарский край, г. Сочи, ул. Благодатная, д. 11, оф. 7</p>
            </li>
            <li
              className={activeOffice === 'spb' ? styles.activeOffice : ''}
              onMouseEnter={() => setActiveOffice('spb')}
              onMouseLeave={() => setActiveOffice(null)}
            >
              <h3>Санкт-Петербург</h3>
              <p>192019, Санкт-Петербург, ул. Глиняная, д. 11, к. 1</p>
            </li>
          </ul>
          <div className={styles.contactInfo}>
            <p><strong>Телефон:</strong> 8-800-333-22-84</p>
            <p><strong>E-mail:</strong> <a href="mailto:info@envi-pro.ru">info@envi-pro.ru</a></p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/cookies">Политика cookies</Link>
            <button type="button" className={styles.cookiesButton} onClick={openCookieSettings}>
              Настройки cookies
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.Map}
          src="/MapContact.png"
          alt="Map"
        />
        <button
          type="button"
          className={`${styles.pin} ${styles.pinSpb} ${activeOffice === 'spb' ? styles.pinActive : ''}`}
          onMouseEnter={() => setActiveOffice('spb')}
          onMouseLeave={() => setActiveOffice(null)}
          onFocus={() => setActiveOffice('spb')}
          onBlur={() => setActiveOffice(null)}
          aria-label="Офис Санкт-Петербург"
        >
          <img src="/pin.svg" alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`${styles.pin} ${styles.pinSochi} ${activeOffice === 'sochi' ? styles.pinActive : ''}`}
          onMouseEnter={() => setActiveOffice('sochi')}
          onMouseLeave={() => setActiveOffice(null)}
          onFocus={() => setActiveOffice('sochi')}
          onBlur={() => setActiveOffice(null)}
          aria-label="Офис Сочи"
        >
          <img src="/pin.svg" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
