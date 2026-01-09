'use client'

import React from 'react';
import styles from './Ball.module.css';

interface BallProps {
  isHidden: boolean;
}

const Ball: React.FC<BallProps> = ({ isHidden }) => {
  return <div className={isHidden ? styles.hidden : styles.ball}></div>;
};

export default Ball;
