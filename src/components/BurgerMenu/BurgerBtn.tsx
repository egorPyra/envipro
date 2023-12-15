import { motion } from 'framer-motion';
import style from './burger-menu.module.css';

interface IBurgerBtn {
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerBtn({ activateMenuFunc }: IBurgerBtn) {
  return (
    <motion.button onClick={(event) => {
      event.stopPropagation();
      activateMenuFunc(true);
    }} className={style.btn}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      duration: 0.8,
      delay: 1.2,
    }}>
      <span className={style.line}/>
    </motion.button>
  );
}
