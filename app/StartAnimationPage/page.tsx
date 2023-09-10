'use client'

import React from 'react';
import styles from "./page.module.css";

const StartAnimationPage = () => {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0' }}>
      <div style={{}}>
        <img  src="./MAIN_ENVI.svg" alt="SVG Image" width="400" height="400"  />
      </div>

      <button className={styles.wow}>Click Me</button>
    </div>
  );
};

export default StartAnimationPage;
