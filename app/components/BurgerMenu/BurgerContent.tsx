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
              <li><Link href={'/services#monitoring'}>ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ</Link></li>
              <li><Link href={'/services#ecoShadow'}>Производственный экологический контроль</Link></li>
              <li><Link href={'/services#ppa'}>Разработка&nbsp;И&nbsp;СОГЛАСОВАНИЕ&nbsp;ПРИРОДООХРАННОЙ РАЗРЕШИТЕЛЬНОЙ ДОКУМЕНТАЦИИ</Link></li>
              <li><Link href={'/services#earth'}>НЕДРОПОЛЬЗОВАНИЕ</Link></li>
              <li><Link href={'/services#engineer'}>Инженерные&nbsp;изыскания</Link></li>
              <li><Link href={'/services#ecology'}>ЭКОЛОГИЧЕСКОЕ СОПРОВОЖДЕНИЕ ДЕЯТЕЛЬНОСТИ</Link></li>
              <li><Link href={'/services#documentation'}>РАЗРАБОТКА проектной документации</Link></li>
              <li><Link href={'/services#geo'}>геодезия и картография</Link></li>
              <li><Link href={'/services#save'}>Сохранение биологического разнообразия</Link></li>
              <li><Link href={'/services#forest'}>ЛЕСОПОЛЬЗОВАНИЕ</Link></li>
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
