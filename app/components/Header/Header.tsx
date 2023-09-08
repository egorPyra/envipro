import React from 'react';
import styles from './header.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src='/vercel.svg'
        alt="logo"
        height={30}
        width={90}
      />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href={'/'}>about us</Link>
          </li>
          <li>
            <Link href={'/services'}>services</Link>
          </li>
          <li>
            <Link href={'/contacts'}>contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
