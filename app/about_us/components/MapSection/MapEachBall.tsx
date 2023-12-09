// MapSection.tsx

import React, { useState, useEffect } from 'react';
import styles from './MapSection.module.css';
import  Ball  from './Ball';

const MapSection: React.FC = () => {
  const [ballsData, setBallsData] = useState<Ball[]>([]);

  useEffect(() => {
    // Fetch ball data from the JSON file and set it to ballsData state
    const fetchData = async () => {
      try {
        const response = await fetch('/balls.json');
        const data = await response.json();
        setBallsData(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    // Trigger animation by updating the position of each ball
    const updatedBallsData = ballsData.map((ball) => ({
      ...ball,
      x: ball.finalX,
      y: ball.finalY,
    }));
    setBallsData(updatedBallsData);
  };

  return (
    <section className={styles.MapContainer}>
      {/* <div className={styles.MapBg}></div>
      <h1 className={styles.title}>Наши клиенты</h1>
      <p className={styles.subTitle}>сотни объектов, более чем в 25 регионах!</p> */}

      {ballsData.map((ball) => (
        <div
          key={ball.id}
          className={styles.Ball}
          style={{ transform: `translate(${ball.x}%, ${ball.y}%)` }}
        ></div>
      ))}

      <button onClick={handleButtonClick}>Animate Balls</button>
    </section>
  );
};

export default MapSection;
