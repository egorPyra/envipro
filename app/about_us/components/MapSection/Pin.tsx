"use client"

import React from 'react';
import styles from './Pin.module.css';
import Image from "next/image";
import { motion } from 'framer-motion';

interface PinProps {
  h3: string;
  text: string;
  textSecond?: string;
  x: number;
  y: number;
  PinSize: number;
  right: boolean;
  root: 'top' | 'bottom';
}

const Pin: React.FC<PinProps> = ({ h3, text, x, y, PinSize, right, textSecond, root }) => {
  const pinStyle = {
    left: `${x}%`,
    top: `${y}%`,
    
  };

  const Popup = {
    bottom: root === 'bottom' ? `-100%` : `auto`,
    top: root === 'top' ? 0 : `auto`,
    ...(right && {
      transform: `translate(${-100}%,${0}%)`,
      bottom: root === 'bottom' ? 0: `auto` ,
      top: root === 'top' ? `-100%` : `auto`,
      left: `15px`,
  })
  };

  const ImgSize = {
    width: `${PinSize}vw`,
    ...(right && {
    transform: `translateY(${-PinSize}vw)`,
    })
  };

  return (
    <motion.div className={styles.pin} style={pinStyle} initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ delay: 0.3, duration: 0.5}}>
      <div className={styles.hoverme}>
      <img className={styles.img} src="/pin.svg" alt="1" style={ImgSize}/>

      <div className={styles.pop} style={Popup}>
          <h3 className={styles.h3}>{h3}</h3>
          <p className={styles.text}>{text}</p>
          {textSecond && <p className={styles.text}>{textSecond}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Pin;
