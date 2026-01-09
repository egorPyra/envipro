'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // наблюдаем за героем: когда он выходит из вьюпорта — делаем шапку белой
    const el = document.getElementById('heroSentinel');
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setLight(!entries[0].isIntersecting),
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`${styles.header} ${light ? styles.light : styles.dark}`}>
      <button className={styles.burger} aria-label="Открыть меню">☰</button>
      <div className={styles.brand}>ENVIPRO</div>
    </header>
  );
}