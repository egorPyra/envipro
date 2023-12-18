import styles from './burger-menu.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <div className={styles.closeBtnWrap}>
          <button onClick={() => activateMenuFunc(false)} className={styles.closeBtn} />
        </div>
        }
        {isActive &&
        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} to={'/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle}>
              <li><HashLink to={'/about_us#history'}>НАША ИСТОРИЯ</HashLink></li>
              <li><HashLink to={'/about_us#team'}>НАША КОМАНДА</HashLink></li>
              <li><HashLink to={'/about_us#map'}>КЛИЕНТЫ</HashLink></li>
              <li><HashLink to={'/about_us#keep'}>СОХРАНЯЯ УЛУЧШАТЬ</HashLink></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} to={'/services'}>Услуги</Link>
            <ul className={styles.menuListSubTitle}>
              <li><HashLink to={'/services'}>ПРОИЗВОДСТВЕННЫЙ ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</HashLink></li>
              <li><HashLink to={'/services'}>ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ</HashLink></li>
              <li><HashLink to={'/services'}>РАЗРАБОТКА&nbsp;РАЗРЕШИТЕЛЬНОЙ&nbsp;ПРИРОДООХРАННОЙ ДОКУМЕНТАЦИИ</HashLink></li>
              <li><HashLink to={'/services'}>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</HashLink></li>
              <li><HashLink to={'/services'}>НЕДРОПОЛЬЗОВАНИЕ</HashLink></li>
              <li><HashLink to={'/services'}>ПРОЕКТИРОВАНИЕ</HashLink></li>
              <li><HashLink to={'/services'}>ЭКОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ ДЕЯТЕЛЬНОСТИ</HashLink></li>
              <li><HashLink to={'/services'}>ЛАБОРАТОРНЫЕ АНАЛИЗЫ</HashLink></li>
              <li><HashLink to={'/services'}>ГЕОДЕЗИЯ, КАРТОГРАФИЯ, ГИС</HashLink></li>
              <li><HashLink to={'/services'}>РАЗРЕШЕНИЯ&nbsp;НА&nbsp;ДОБЫВАНИЕ&nbsp;ОБЪЕКТОВ&nbsp;ИЗ&nbsp;КРАСНОЙ КНИГИ И КОМПЕНСАЦИОННЫЕ МЕРОПРИЯТИЯ</HashLink></li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            <Link className={styles.menuListLink} to={'/contacts'}>Контакты</Link>
          </li>
        </ul>
        }
      </div>
    </>
  );
}
