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
            <Link className={styles.menuListLink} href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle}>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us#history'}>НАША ИСТОРИЯ</Link></li>
              <li><Link  href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us#team'}>НАША КОМАНДА</Link></li>
              <li><Link  href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us#map'}>КЛИЕНТЫ</Link></li>
              <li><Link  href={'https://se.ifmo.ru/~s338844/other/enviroment/about_us#keep'}>СОХРАНЯЯ УЛУЧШАТЬ</Link></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>Услуги</Link>
            <ul className={styles.menuListSubTitle}>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ПРОИЗВОДСТВЕННЫЙ ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>РАЗРАБОТКА&nbsp;РАЗРЕШИТЕЛЬНОЙ&nbsp;ПРИРОДООХРАННОЙ ДОКУМЕНТАЦИИ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>НЕДРОПОЛЬЗОВАНИЕ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ПРОЕКТИРОВАНИЕ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ЭКОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ ДЕЯТЕЛЬНОСТИ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ЛАБОРАТОРНЫЕ АНАЛИЗЫ</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>ГЕОДЕЗИЯ, КАРТОГРАФИЯ, ГИС</Link></li>
              <li><Link href={'https://se.ifmo.ru/~s338844/other/enviroment/services'}>РАЗРЕШЕНИЯ&nbsp;НА&nbsp;ДОБЫВАНИЕ&nbsp;ОБЪЕКТОВ&nbsp;ИЗ&nbsp;КРАСНОЙ КНИГИ И КОМПЕНСАЦИОННЫЕ МЕРОПРИЯТИЯ</Link></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} href={'https://se.ifmo.ru/~s338844/other/enviroment/contacts'}>Контакты</Link>
          </li>
        </ul>
        }
      </div>
    </>
  );
}
