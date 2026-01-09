'use client';
import type { MouseEvent } from "react";
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: "#about", label: "О НАС" },
  { href: "#services", label: "УСЛУГИ" },
  { href: "#contacts", label: "КОНТАКТЫ" },
];

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let frame: number | null = null;

    const updateProgress = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      frame = null;
    };

    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(updateProgress);
    };

    const handleResize = () => {
      updateProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const shade = Math.round(17 + 238 * scrollProgress);
  const backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
  const textColor = scrollProgress > 0.7 ? '#111' : '#fff';
  const borderColor = scrollProgress > 0.85 ? '#e5e5e5' : 'transparent';

  const handleToggle = () => setIsOpen((prev) => !prev);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={styles.header}
      style={{ backgroundColor, color: textColor, borderColor }}
    >
      <button
        className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
        aria-label="Открыть меню"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={styles.brand}>ЭнвиПро</div>

      <nav
        className={`${styles.ctaList} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        {navLinks.map((link, index) => (
          <a
            key={`${link.href}-${index}`}
            className={styles.cta}
            href={link.href}
            onClick={(event) => {
              scrollToSection(event, link.href);
              setIsOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
