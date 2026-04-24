import Link from 'next/link';
import styles from './page.module.css'
import Header from '../components/Header/Header';

export default function Envilab() {

  return (
    <div className={styles.preloader}>
      <Header />
      <div className={styles.bg}></div>
      <Link href={'/'}>
        <img className={styles.logo} src="/MAIN_ENVILAB_404.svg" alt="SVG Image" width="400" height="400" />
      </Link>
    </div>
  );
};
