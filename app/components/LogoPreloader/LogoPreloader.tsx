import React from 'react';
import styles from './logoPreloader.module.css'

export default function LogoPreloader() {
  return (
    <img className={styles.logo} src="/MAIN_ENVI.svg" alt="SVG Image" width="400" height="400" />
  );
};
