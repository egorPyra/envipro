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

  const ImgSize = `${PinSize}vw`;

  return (
    <div className={styles.pin} style={pinStyle}>
      <div className={styles.hoverme}>
      {/* <img className={styles.img} src="./assets/img/pin.svg" alt="1" style={ImgSize}/> */}
      <svg width={ImgSize} height={ImgSize} viewBox="0 0 103 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M102.396 55C99.5956 80.6 67.2289 146 51.3956 175.5C35.7289 145 3.59556 78.2 0.395556 55C-3.60444 26 23.3956 0 51.3956 0C79.3956 0 105.896 23 102.396 55Z" fill="white"/>
      </svg>

      <div className={styles.pop} style={Popup}>
          <h3 className={styles.h3}>{h3}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Pin;
