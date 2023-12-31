import styles from './pageNotFound.module.css'

export default function PageNotFound() {

  return (
    <div className={styles.preloader}>
      <div className={styles.bg}></div>
      <img className={styles.logo} src="/MAIN_ENVI_404.svg" alt="SVG Image" width="400" height="400" />
    </div>
  );
};
