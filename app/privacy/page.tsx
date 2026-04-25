import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal/legal.module.css'
import Header from '../components/Header/Header'


export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
}

export default function PrivacyPage() {
  return (
    <>
    <Header/>
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Политика конфиденциальности</h1>
        <p className={styles.updated}>Актуально на 25 апреля 2026 года</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Общие положения</h2>
          <p className={styles.paragraph}>
            Настоящая политика описывает, как сайт ООО «ЭнвиПро» обрабатывает информацию посетителей.
            Сайт носит информационный характер и не предусматривает регистрацию, личный кабинет или оформление заказов.
          </p>
          <p className={styles.paragraph}>
            При использовании сайта могут обрабатываться технические данные, необходимые для корректной работы сайта,
            а также аналитические данные при наличии согласия пользователя.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Какие данные могут обрабатываться</h2>
          <ul className={styles.list}>
            <li>технические данные браузера и устройства;</li>
            <li>IP-адрес, данные о посещенных страницах и действиях на сайте;</li>
            <li>cookies, `localStorage` и `sessionStorage` для запоминания пользовательских настроек;</li>
            <li>контактные данные, если пользователь самостоятельно обращается по телефону или электронной почте.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Цели обработки</h2>
          <ul className={styles.list}>
            <li>обеспечение стабильной и безопасной работы сайта;</li>
            <li>анализ посещаемости и улучшение структуры и содержания сайта;</li>
            <li>обработка обращений, направленных пользователем по контактным каналам связи.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Аналитика</h2>
          <p className={styles.paragraph}>
            На сайте может использоваться Яндекс Метрика. Скрипт аналитики загружается только после того, как пользователь
            нажмет кнопку согласия в баннере cookies. До такого согласия аналитика не подключается.
          </p>
          <p className={styles.paragraph}>
            Подробнее о применяемых cookies и способе управления согласием указано на странице{' '}
            <Link href="/cookies" className={styles.link}>
              политики использования cookies
            </Link>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Передача и защита данных</h2>
          <p className={styles.paragraph}>
            Компания принимает разумные организационные и технические меры для защиты информации от неправомерного доступа,
            изменения, раскрытия или уничтожения.
          </p>
          <p className={styles.paragraph}>
            Передача данных третьим лицам допускается только в случаях, предусмотренных законодательством Российской Федерации,
            либо когда это необходимо для работы используемых сервисов аналитики при наличии согласия пользователя.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Контакты</h2>
          <p className={styles.paragraph}>
            По вопросам, связанным с обработкой информации и работой сайта, можно связаться по адресу{' '}
            <a href="mailto:info@envi-pro.ru" className={styles.link}>
              info@envi-pro.ru
            </a>
            .
          </p>
        </section>
      </div>
    </main>
    </>
  )
}

