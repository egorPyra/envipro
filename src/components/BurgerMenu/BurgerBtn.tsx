import style from './burger-menu.module.css';

interface IBurgerBtn {
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerBtn({ activateMenuFunc }: IBurgerBtn) {
  return (
    <button onClick={(event) => {
      event.stopPropagation();
      activateMenuFunc(true);
    }} className={style.btn}>
      <span className={style.line}/>
    </button>
  );
}
