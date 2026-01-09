'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  // true = показываем хэдер
  const [show, setShow] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = usePathname()
  const { scrollY } = useScroll()

  // Функция для автоскрытия через delay мс
  const scheduleHide = (delay = 3000) => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      setShow(false)
    }, delay)
  }

  // При монтировании показываем 3 сек, потом скрываем
  useEffect(() => {
    scheduleHide(3000)
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  // Слушаем скролл: при прокрутке вверх — показываем + ресет таймера,
  // при прокрутке вниз за 50px — сразу скрываем
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? latest
    if (latest < prev) {
      setShow(true)
      scheduleHide(3000)
    } else if (latest > prev && latest >= 50) {
      setShow(false)
    }
  })

  // Слушаем движение мыши: если курсор <50px от верха — показываем + таймер
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setShow(true)
        scheduleHide(3000)
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const variants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: '-100%' },
  }

  return (
    <motion.header
      className={styles.header}
      variants={variants}
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.33, ease: 'easeInOut' }}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="envipro" height={30} width={30} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <motion.li whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link className={location === '/about_us' ? styles.active : ''} href="/about_us">
              о&nbsp;нас
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link className={location === '/services' ? styles.active : ''} href="/services">
              услуги
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link className={location === '/contacts' ? styles.active : ''} href="/contacts">
              контакты
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}
