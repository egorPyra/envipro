"use client";

"use client";

import Image from "next/image";
import styles from "./Contacts.module.css";

export default function Contacts() {
    return (
        <section className={styles.contactContainer}>
            <div className={styles.imageWrap}>
                <Image
                    src="/MapBallsGrey.png"
                    alt="ЭнвиПро география"
                    width={3235}
                    height={2362}
                    priority
                    className={styles.mapImg}
                />
            </div>

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

            <Image
                    src="/footer.png"
                    alt="footer"
                    width={2704}
                    height={872}
                    priority
                    className={styles.footer}
                />
        </section>
    );
}
