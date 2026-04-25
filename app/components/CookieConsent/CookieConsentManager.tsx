'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import YandexMetrika from '../YandexMetrika/YandexMetrika'
import styles from './cookie-consent.module.css'
import {
  COOKIE_CONSENT_KEY,
  COOKIE_SETTINGS_EVENT,
  CookieConsentStatus,
  isCookieConsentStatus,
} from '@/app/lib/cookieConsent'

export default function CookieConsentManager() {
  const [consent, setConsent] = useState<CookieConsentStatus | null>(null)
  const [bannerOpen, setBannerOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_KEY)

    if (isCookieConsentStatus(storedValue)) {
      setConsent(storedValue)
      setBannerOpen(false)
    } else {
      const bannerTimer = window.setTimeout(() => {
        setBannerOpen(true)
      }, 10000)

      setIsReady(true)

      return () => {
        window.clearTimeout(bannerTimer)
      }
    }

    setIsReady(true)
  }, [])

  useEffect(() => {
    const openSettings = () => setBannerOpen(true)

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings)

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings)
    }
  }, [])

  const handleConsent = (value: CookieConsentStatus) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)

    if (consent === 'accepted' && value === 'rejected') {
      window.location.reload()
      return
    }

    setConsent(value)
    setBannerOpen(false)
  }

  return (
    <>
      {isReady && bannerOpen && (
        <div className={styles.overlay}>
          <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Настройки cookies">
            <div className={styles.content}>
              <p className={styles.text}>
                Сайт использует cookies и Яндекс Метрику для аналитики и улучшения работы.
                Подробнее в{' '}
                <Link href="/cookies" className={styles.link}>
                  политике cookies
                </Link>
                &nbsp;и&nbsp;
                <Link href="/privacy" className={styles.link}>
                  политике конфиденциальности
                </Link>
              </p>
              <div className={styles.actions}>
                <button type="button" className={styles.secondaryButton} onClick={() => handleConsent('rejected')}>
                  Отклонить
                </button>
                <button type="button" className={styles.primaryButton} onClick={() => handleConsent('accepted')}>
                  Принять
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {isReady && consent && (
        <button type="button" className={styles.settingsButton} onClick={() => setBannerOpen(true)}>
          Настройки cookies
        </button>
      )} */}

      {consent === 'accepted' && <YandexMetrika />}
    </>
  )
}
