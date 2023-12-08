import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Header() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevPosition, setPrevPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;

      /* if scrolling down, let it scroll out of view as normal */
      if (prevPosition <= position){
        setIsHeaderVisible(false);
      }
      /* otherwise if we're scrolling up, fix the nav to the top */
      else{  
          setIsHeaderVisible(true)
      }

      setPrevPosition(position)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setPrevPosition(window.scrollY)
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
