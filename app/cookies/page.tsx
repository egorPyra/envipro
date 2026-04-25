import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal/legal.module.css'
import Header from '../components/Header/Header';


export const metadata: Metadata = {
  title: 'Политика использования cookies',
}

export default function CookiesPage() {
  return (
    <>
    <Header/>
    
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Политика использования cookies</h1>
        <p className={styles.updated}>Актуально на 25 апреля 2026 года</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Что используется на сайте</h2>
          <p className={styles.paragraph}>
            Сайт использует технические механизмы хранения данных в браузере, включая cookies, `localStorage` и
            `sessionStorage`. Они помогают сохранять выбор пользователя, обеспечивать корректную работу интерфейса и,
            при наличии согласия, подключать аналитические инструменты.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Какие типы данных применяются</h2>
          <ul className={styles.list}>
            <li>обязательные технические данные для работы интерфейса;</li>
            <li>данные о выборе пользователя по баннеру cookies;</li>
            <li>аналитические cookies и связанные идентификаторы сервиса Яндекс Метрика.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Когда загружается Яндекс Метрика</h2>
          <p className={styles.paragraph}>
            Яндекс Метрика не загружается автоматически при первом открытии сайта. Скрипт аналитики подключается только
            после явного нажатия пользователем кнопки «Принять» в баннере cookies.
          </p>
          <p className={styles.paragraph}>
            Если пользователь нажимает «Отклонить», аналитика не загружается.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Как изменить выбор</h2>
          <p className={styles.paragraph}>
            На сайте доступна кнопка «Настройки cookies». Через нее можно снова открыть баннер и изменить ранее данный выбор.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Дополнительная информация</h2>
          <p className={styles.paragraph}>
            Общие условия обработки информации изложены в{' '}
            <Link href="/privacy" className={styles.link}>
              политике конфиденциальности
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
    </>
  )
}
