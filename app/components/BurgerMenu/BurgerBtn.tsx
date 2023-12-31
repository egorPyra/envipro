import { motion } from 'framer-motion';
import style from './burger-menu.module.css';

interface IBurgerBtn {
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerBtn({ activateMenuFunc }: IBurgerBtn) {
  const variants = {
    initial: {
      y: 50,
      x: 50,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
    }
  }

  return (
    <motion.button onClick={(event) => {
      event.stopPropagation();
      activateMenuFunc(true);
    }} className={style.btn}
    variants={variants}
    initial='initial'
    animate='animate'
    transition={{ 
      duration: 0.5,
      delay: 0.4,
    }}>
      <span className={style.line}/>
    </motion.button>
  );
}
