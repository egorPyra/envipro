import styles from "./teamSection.module.css";


export default function TeamSection() {
  return (
    <section className={styles.teamContainer}>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.subTitle}>Лучшие специалисты в своем деле!</p>
      <ul className={styles.teamList}>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="envipro"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="envipro"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
        <li className={styles.teamItem}>
          <img
            className={styles.teamImg}
            src='/avatarTeamSection.jpg'
            alt="avatar"
          />
          <span className={styles.name}>Anton Zubov</span>
          <span className={styles.role}>tech director</span>
        </li>
      </ul>
    </section>
  );
}
