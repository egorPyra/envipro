import Image from "next/image";
import style from './burger-menu.module.css';

export default function BurgerBtn() {
  return (
    <button className={style.btn}>
      <Image
          src='/burgerBtn.svg'
        alt="menu"
        height={30}
        width={30}
      />
    </button>
  );
}
