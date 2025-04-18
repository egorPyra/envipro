"use client";

import React, { useState, useEffect } from 'react';
import styles from './Pin.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [read, setRead] = useState(initialRead); // <- теперь управляемо

  const pinStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };

  const ImgSize = {
    width: `${PinSize}vw`,
    ...(right && {
      transform: `translateY(${-PinSize}vw)`,
    }),
    opacity: read ? 0.5 : 1,
  };

  const Popup = {
    bottom: root === 'bottom' ? `-100%` : `auto`,
    top: root === 'top' ? 0 : `auto`,
    ...(right && {
      transform: `translate(${-100}%,${0}%)`,
      bottom: root === 'bottom' ? `-20px` : `auto`,
      top: root === 'top' ? `-100%` : `auto`,
      left: `20px`,
    })
  };

  useEffect(() => {
    if (isOpen && !read) {
      setRead(true); // <- устанавливаем "прочитан"
      console.log("Marked as read");
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
      initial={{ y: -30, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: [1.1, 0.95, 1],
      }}
      viewport={{ once: true }}
    >
      <div className={styles.hoverme} onClick={() => setIsOpen(!isOpen)}>
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
          initial={{
            y: right ? -PinSize * 10 : 0, // или экспериментируй
          }}
          animate={{
            y: 0,
            scale: 1,
          }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        />
        <AnimatePresence>
        {isOpen && (
          <motion.div className={styles.pop} style={Popup} 
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0, left: '10px', width: '35.5vw ' }}
          animate={{ opacity: 1, left: right ? '20px' : '0px', width: '35vw' }}
          exit={{ opacity: 0,left: '-10px' }}>
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
