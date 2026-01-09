'use client'
import Link from 'next/link';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  
    return (
      <section className={styles.container}>
        <div className={styles.textContainer}>
            {/* <div className={styles.text}>
                <p>ЗАКАЖИТЕ КАКОЙ-ТО ТАМ МОНИТОРУНГ ЭКО-ШМЕКО</p>
                <p>МЫ БУДЕМ РАДЫ ВАМ ПОМОЧЬ ТОСИ БОСИ</p>
                <p>МЫ НА СВЯЗИ:</p>
                <p>КОНТАКТЫ...</p>
            </div> */}
            <div className={styles.address}>
            <h1>АДРЕСА НАШИХ ОФИСОВ</h1>
            <ul className={styles.addressList}>
            <li>
                    <h3>Сочи</h3>
                    <p>354024, Краснодарский край, г. Сочи, ул. Благодатная, д. 11, оф. 7</p>
                </li>
                <li>  
                    <h3>Санкт-Петербург</h3>
                    <p>192019, Санкт-Петербург, ул. Глиняная, д. 11, к. 1</p>
                </li>
            </ul>
            <div className={styles.contactInfo}>
                <p><strong>Телефон:</strong> 8-800-333-22-84</p>
                <p><strong>E-mail:</strong> <a href="mailto:info@envi-pro.ru">info@envi-pro.ru</a></p>
            </div>
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