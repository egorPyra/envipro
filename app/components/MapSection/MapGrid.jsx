import React from 'react';
import styles from './MapGrid.module.css'; 

const MapGrid = () => {

  const grid = Array.from({ length: 13 }, () => Array(27).fill(null));

  return (
    <div className={styles.mapGrid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, columnIndex) => (
            <div key={columnIndex} className={styles.cell}>
              <div className={styles.ball}></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MapGrid;
