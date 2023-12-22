"use client"

import { useState } from 'react';
import Ball from './Ball';
import Image from 'next/image';
import styles from './MapSection.module.css';
import ballData from '../../../../public/Balls.json';
// import MapBg from './MapBg';
import Pin from './Pin';

export default function MapSection() {
  const [ballsData] = useState(ballData);

  return (
    <section id='map' className={styles.MapContainer}>
      <div className={styles.MapBg}></div>
      <h1 className={styles.title}>Наши клиенты</h1>
      <p className={styles.subTitle}>сотни объектов, более чем в 25 регионах!</p>
      <div className={styles.MapAndPins}>
        <img className={styles.MapBalls}
          src="/MapBalls.png"
          alt="Picture of the author"
        />
        <div className={styles.PinContainer} style={{ left: '50%', top: '50%' }}>
          <Pin
            h3={'Камчатский край'}
            text={'Разработка разрешительной природоохранной документации, экологический мониторинг и контроль качества почв после рекультивации выполняют специалисты компании на объектах транспорта газа в регионе'}
            x={93.5} y={40} PinSize={1.5} right={true} />
          <Pin 
            h3={'Чукотский автономный округ'} 
            text={'Работы по разработке регламента биолого-химического мониторинга водохранилища Билибинской АЭС выполнены специалистами компании'} 
            x={90} y={30} PinSize={1.5} right={true} />
          <Pin 
          h3={'Амурская область'} 
          text={'Уже несколько лет мы оказываем услуги по выполнению производственного экологического контроля объекта транспорта угля'} 
          x={80} y={80} PinSize={1} right={true} />

        </div>
      </div>
    </section>
  );
}

