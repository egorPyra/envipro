import React from 'react';
import Image from 'next/image';
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

      <div class="hoverme">
        <Image
          src="/pin.svg"
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <div class="pop">
          <h2 className={styles.h2Popup}>ямало-ненецкий автономный округ</h2>
          <p className={styles.textPopup}>

            Среди выполненных и реализуемых проектов - производственный экологический контроль и мониторинг многих объектов и месторождений. среди которых Заполярное, Ямбургское, Бованенковское, Уренгойское, Ямсовейское, Медвежье, Юбилейное и многие другие.
            Наши заказчики: ООО "Газпром инвест", ООО "Газпром добыча Ямбург", ООО "Газпром переработка", ООО "ГазЭнергоСервис", ООО "ГазЭнергоСтрой" и многие другие.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapGrid;
