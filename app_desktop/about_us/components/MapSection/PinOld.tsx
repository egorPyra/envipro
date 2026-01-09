"use client"

import React from 'react';
import styles from './Pin.module.css';
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
  delay: number;
}

const Pin: React.FC<PinProps> = ({ h3, text, x, y, PinSize, right, textSecond, root, delay }) => {
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
    <motion.div className={styles.pin} style={pinStyle} transition={{ delay:  delay, duration: 0.9}}
    initial={{ opacity: 0 }}
    whileInView={{
      scale: [0, 1, 1.1, 0.9, 1],
      rotate: [-10, -5, 10, -5, 0],
      y: 0,
      opacity: 1
    }}
    viewport={{ once: true }}>
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


// .pin {
//   position: absolute;
//   z-index: 4;
//   /* pointer-events: none; Allows clicks to go through the pin to the map */
// }

// .hoverme {
//   position: absolute;
//     width: 20px;
//     height: 20px;
//     /* background-color: green;  */
//     border-radius: 50%;
//     /* transform: translate(-50%, -50%); */
// }

// .hoverme:hover > .pop {
//   opacity: 1;
//   width: 30vw;
//   height: auto;
//   padding: 20px;
//   display: block;
// }

// .hoverme > p {
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
// }

// .pop {
//   opacity: 0;
//   width: 35vw;
//   height: 0;
//   display: none;
//   background: rgba(255, 255, 255, 0.9);
//   border: 5px solid white;
//   border-radius: 0%;
//   position: absolute;
//   z-index: -1;
//   margin: auto;
//   /* top: 0; */
//   left: 50%;
//   transition: all 0.4s ease;
// }

// .pop .h3 {
//   text-align: center;
//   font-size: 24px;
//   font-family: 'Bebas Neue Bold';
//   padding: 5px;
// }

// .pop .text {
//   font-size: 12px;
//   line-height: 12px;
//   margin-bottom: 12px;
// }

// .pop .text:last-child {
//   margin-bottom: 0;
// }

// .pop > p {
//   color: #353535;
//   font-size: 20px;
// }