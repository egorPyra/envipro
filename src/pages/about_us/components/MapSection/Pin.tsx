import React from 'react';
import styles from './Pin.module.css';

interface PinProps {
  h3: string;
  text: string;
  x: number;
  y: number;
  PinSize: number;
  right: boolean;
}

const Pin: React.FC<PinProps> = ({ h3, text, x, y, PinSize, right }) => {
  const pinStyle = {
    left: `${x}%`,
    top: `${y}%`,
    
  };

  const Popup = {
    ...(right && {
      transform: `translate(${-100}%,${-20}%)`,
      
  })
  };

  const ImgSize = {
    width: `${PinSize}vw`,
  };

  return (
    <div className={styles.pin} style={pinStyle}>
      <div className={styles.hoverme}>
      <img className={styles.img} src="src/assets/img/pin.svg" alt="1" style={ImgSize}/>
      <div className={styles.pop} style={Popup}>
          <h3 className={styles.h3}>{h3}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Pin;
