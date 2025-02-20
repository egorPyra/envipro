import Link from 'next/link';
import styles from './burger-menu.module.css';

interface IBurgerContent {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerContent({ isActive, activateMenuFunc }: IBurgerContent) {
  return (
    <>
      <div className={isActive ? styles.blur : styles.none}></div>
      <div
        className={isActive ? `${styles.menuContent} ${styles.menuActive}` : `${styles.menuContent}`}
        onClick={(event) => event.stopPropagation()}
      >
        {isActive &&
        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} href={'/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle}>
              <li><Link href={'/about_us#history'}>НАША ИСТОРИЯ</Link></li>
              <li><Link  href={'/about_us#team'}>НАША КОМАНДА</Link></li>
              <li><Link  href={'/about_us#map'}>КЛИЕНТЫ</Link></li>
              <li><Link  href={'/about_us#keep'}>СОХРАНЯЯ УЛУЧШАТЬ</Link></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} href={'/services'}>Услуги</Link>
            <ul className={styles.menuListSubTitle}>
              <li><Link href={'/services'}>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</Link></li>
              <li><Link href={'/services'}>ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ</Link></li>
              <li><Link href={'/services'}>ПРОИЗВОДСТВЕННЫЙ ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</Link></li>
              <li><Link href={'/services'}>НЕДРОПОЛЬЗОВАНИЕ</Link></li>
              <li><Link href={'/services'}>РАЗРАБОТКА ПРОЕКТНОЙ ДОКУМЕНТАЦИИ</Link></li>
              <li><Link href={'/services'}>РАЗРЕШЕНИЯ&nbsp;И&nbsp;СОГЛАСОВАНИЕ&nbsp;ПРИРОДООХРАННОЙ РАЗРЕШИТЕЛЬНОЙ ДОКУМЕНТАЦИИ</Link></li>
              <li><Link href={'/services'}>ЭКОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ</Link></li>
              <li><Link href={'/services'}>ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ</Link></li>
              <li><Link href={'/services'}>ГЕОДЕЗИЧЕСКИЕ И КАДАСТРОВЫЕ РАБОТЫ</Link></li>
              <li><Link href={'/services'}>АЭРОФОТОСЪЕМКА, КАРТОГРАФИЯ И ГИС</Link></li>
              <li><Link href={'/services'}>КОМПЕНСАЦИОННЫЕ МЕРОПРИЯТИЯ</Link></li>
              <li><Link href={'/services'}>РАЗРАБОТКА ПРОЕКТОВ РЕКУЛЬТИВАЦИИ НАРУШЕННЫХ ЗЕМЕЛЬ</Link></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} href={'/contacts'}>Контакты</Link>
          </li>
        </ul>
        }
      </div>
    </>
  );
}
