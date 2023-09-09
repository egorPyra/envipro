import styles from './burger-menu.module.css'

interface IBurgerContent {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerContent({ isActive, activateMenuFunc }: IBurgerContent) {
  return (
    <>
      <div className={isActive ? styles.blur : styles.none}/>
      <div className={isActive ? `${styles.menuContent} ${styles.menuActive}` : `${styles.menuContent}`}>
        <div className={styles.closeBtnWrap}>
          <button onClick={() => activateMenuFunc(false)} className={styles.closeBtn}/>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            About Us
            <ul className={styles.menuListSubTitle}>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>
            Services
            <ul className={styles.menuListSubTitle}>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </li>
          <li className={styles.menuListTitle}>Contacts</li>
        </ul>
      </div>
    </>
  );
}
