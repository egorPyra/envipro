"use client"

import { useState } from 'react';
import styles from './header.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [hidden, setHidden] = useState(true);

  const location = usePathname();
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevPositon = scrollY.getPrevious();

    if (latest > prevPositon && latest >= 50) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  });

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <motion.header
      className={styles.header}
      variants={variants}
      animate={hidden ? "open" : "closed"}
      transition={{ duration: 0.33, ease: "easeInOut" }}
    >
      <Link href={'https://se.ifmo.ru/~s338844/other/enviroment'}>
        <Image
            src='/~s338844/other/enviroment/logo.svg'
            alt="envipro"
            height={30}
            width={30}
          />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
        <li>
            <Link className={location === '/about_us' ? styles.active : ''} href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us'}>
              о&nbsp;нас
            </Link>
          </li>
          <li>
            <Link className={location === '/services' ? styles.active : ''} href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>
              услуги
            </Link>
          </li>
          <li>
            <Link className={location === '/contacts' ? styles.active : ''} href={'https://se.ifmo.ru/~s338844/other/enviroment/contacts'}>
              контакты
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
