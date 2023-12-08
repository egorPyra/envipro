import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function Header() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  console.log(scrollY)

  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0 },
  }

  return (
    <motion.header
    className={styles.header}
      animate={isHeaderVisible ? "open" : "closed"}
      variants={variants}
    >
      <Link href={'/'}>
        <Image
          src='/logo.svg'
          alt="envipro"
          height={30}
          width={30}
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href={'/about_us'}>about us</Link>
          </li>
          <li>
            <Link href={'/services'}>services</Link>
          </li>
          <li>
            <Link href={'/contacts'}>contacts</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
