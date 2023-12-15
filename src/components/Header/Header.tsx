'use client'

import { useState } from 'react';
import styles from './header.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgUrl from '/src/assets/img/logo.svg';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  
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
      <Link to={'/'}>
        <img
          src={imgUrl}
          alt="envipro"
          height={30}
          width={30}
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to={'/about_us'}>about us</Link>
          </li>
          <li>
            <Link to={'/services'}>services</Link>
          </li>
          <li>
            <Link to={'/contacts'}>contacts</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
