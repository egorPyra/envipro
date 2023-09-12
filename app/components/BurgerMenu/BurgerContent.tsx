import styles from './burger-menu.module.css'
import Link from "next/link";

interface IBurgerContent {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerContent({ isActive, activateMenuFunc }: IBurgerContent) {
  return (
    <>
      <div className={isActive ? styles.blur : styles.none}/>
      <div
        className={isActive ? `${styles.menuContent} ${styles.menuActive}` : `${styles.menuContent}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.closeBtnWrap}>
          <button onClick={() => activateMenuFunc(false)} className={styles.closeBtn}/>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            <Link href={'/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle}>
              <li>НАША ИСТОРИЯ</li>
              <li>НАША КОМАНДА</li>
              <li>КЛИЕНТЫ</li>
              <li>СОХРАНЯЯ УЛУЧШАТЬ</li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link href={'/services'}>Услуги</Link>
            <ul className={styles.menuListSubTitle}>
              <li>ПРОИЗВОДСТВЕННЫЙ ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</li>
              <li>ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ</li>
              <li>РАЗРАБОТКА РАЗРЕШИТЕЛЬНОЙ ПРИРОДООХРАННОЙ ДОКУМЕНТАЦИИ</li>
              <li>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</li>
              <li>НЕДРОПОЛЬЗОВАНИЕ</li>
              <li>ПРОЕКТИРОВАНИЕ</li>
              <li>ЭКОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ ДЕЯТЕЛЬНОСТИ</li>
              <li>ЛАБОРАТОРНЫЕ АНАЛИЗЫ</li>
              <li>ГЕОДЕЗИЯ, КАРТОГРАФИЯ, ГИС</li>
              <li>РАЗРЕШЕНИЯ НА ДОБЫВАНИЕ ОБЪЕКТОВ ИЗ КРАСНОЙ КНИГИ И КОМПЕНСАЦИОННЫЕ МЕРОПРИЯТИЯ</li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link href={'/contacts'}>Контакты</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
