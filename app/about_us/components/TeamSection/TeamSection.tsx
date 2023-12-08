import styles from "./teamSection.module.css";


export default function TeamSection() {
  return (
    <section className={styles.teamContainer}>
      <div className={styles.teamBg}></div>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.subTitle}>Лучшие специалисты в своем деле!</p>
      <div className={styles.imageContainer}>
        <div className={styles.img1}></div>
        <div className={styles.img2}></div>
        <div className={styles.group1}>
          <div className={styles.img3}></div>
          <div className={styles.img4}></div>
        </div>
        <div className={styles.img5}></div>
        <div className={styles.group2}>
          <div className={styles.img6}></div>
          <div className={styles.img7}></div>
        </div>
      </div>
    </section>
  );
}
