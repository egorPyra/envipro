import { animate } from 'framer-motion';
import style from './burger-menu.module.css';
import { useEffect } from 'react';

interface IBurgerBtn {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerBtn({ isActive, activateMenuFunc }: IBurgerBtn) {

  useEffect(() => {
    if(!sessionStorage.getItem('animationEnvipro')) {
      animate('#burgerBtn', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.4, ease: 'easeInOut'})
    }
  }, [])

  return (
    <button onClick={(event) => {
      event.stopPropagation();
      activateMenuFunc(!isActive);
    }} id='burgerBtn' className={`${style.btn} ${isActive ? style.on : ''}`}>
      <span></span><span></span><span></span>
    </button>
  );
}
