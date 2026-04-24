"use client";

import React, { useState, useEffect } from 'react';
import styles from './Pin.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import type { CSSProperties } from 'react';

interface PinProps {
  h3: string;
  text: string;
  textSecond?: string;
  x: number;
  y: number;
  PinSize: number;
  right: boolean;
  root: 'top' | 'bottom';
  delay: number;
  read?: boolean; // <- теперь опционально
}

const Pin: React.FC<PinProps> = ({
  h3, text, x, y, PinSize, right, textSecond, root, delay, read: initialRead = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [read, setRead] = useState(initialRead);

  const pinStyle: CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
  };

  const popupStyle: CSSProperties = right
    ? {
        right: 0,
        top: root === 'top' ? '-100%' : 'auto',
        bottom: root === 'bottom' ? '-20px' : 'auto',
      }
    : {
        left: 0,
        top: root === 'top' ? 0 : 'auto',
        bottom: root === 'bottom' ? '-100%' : 'auto',
      };

  useEffect(() => {
    if (isOpen && !read) {
      setRead(true);
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`.${styles.hoverme}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, read]);

  return (
    <motion.div
      className={styles.pin}
      style={pinStyle}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      initial={{ y: -16, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
    >
      <div className={styles.hoverme}>
        <button
          type="button"
          className={styles.pinButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
        <motion.img
          className={styles.img}
          src="/pin.svg"
          alt="1"
          style={{
            width: `${PinSize}vw`,
            opacity: read ? 0.5 : 1,
            transformOrigin: 'bottom center',
            transition: 'opacity 0.3s ease',
          }}
          whileHover={{ scale: 1.07 }}
        />
        </button>
        <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.pop}
            style={popupStyle}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            initial={{ opacity: 0, x: right ? 12 : -12, y: 2 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: right ? 8 : -8, y: 2 }}
          >
            <button onClick={() => setIsOpen(false)} className={styles.close}>×</button>
            <h3 className={styles.h3}>{h3}</h3>
            <p className={styles.text}>{text}</p>
            {textSecond && <p className={styles.text}>{textSecond}</p>}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Pin;
