import React, { useState } from 'react';
import Ball from './Ball';
import styles from './MapSection.module.css';
import ballData from '@/public/Balls.json'; 
import MapBg from './MapBg';

const MapSection: React.FC = () => {
  const [ballsData, setBallsData] = useState(ballData);

  const handleClick = () => {
    // Your logic for animation here
    // Update ballsData state accordingly
  };

  return (
    
    <section className={styles.MapContainer}>
        
      <div className={styles.MapBg}></div>
      <h1 className={styles.title}>Наши клиенты</h1>
      <p className={styles.subTitle}>сотни объектов, более чем в 25 регионах!</p>
      {/* <button onClick={handleClick}>Start Animation</button> */}
      <div className={styles.ballContainer}>
        {ballsData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.rowContainer}>
            {row.map((isHidden, colIndex) => (
              <Ball key={colIndex} isHidden={isHidden === 0} />
            ))}
          </div>
        ))}
      </div>
      <MapBg />
    </section>
  );
};

export default MapSection;
