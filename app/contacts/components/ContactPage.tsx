'use client'
import Link from 'next/link';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  
    return (
      <section className={styles.container}>
        <div className={styles.textContainer}>
            <div className={styles.text}>
                <p>ЗАКАЖИТЕ КАКОЙ-ТО ТАМ МОНИТОРУНГ ЭКО-ШМЕКО</p>
                <p>МЫ БУДЕМ РАДЫ ВАМ ПОМОЧЬ ТОСИ БОСИ</p>
                <p>МЫ НА СВЯЗИ:</p>
                <p>КОНТАКТЫ...</p>
            </div>
            <div className={styles.address}>
            <p>АДРЕСА НАШИХ ОФИСОВ</p>
            <ul>
            <li><Link href={'/#'}>Сочи</Link></li>
            <li><Link href={'/#'}>СПБ</Link></li>
            </ul>
            </div>
        </div>
        <div className={styles.imageContainer}>
        <img className={styles.Map}
          src="/MapBallsGrey.png"
          alt="Map"
        />
        </div>
      </section>
    )
  } 