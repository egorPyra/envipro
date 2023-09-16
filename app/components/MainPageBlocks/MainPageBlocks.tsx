import styles from './mainPageBlocks.module.css'

export default function MainPageBlocks() {
  return (
    <>
      <div className={styles.sectionOne}>
        <div className={styles.ecoRandom}>eco</div>
        <div className={styles.ecology}>ecology</div>
      </div>

      <div className={styles.sectionTwo}>
          <div className={styles.earth}>earth</div>
          <div className={styles.ecoShadow}>eco(shadow)</div>
          <div className={styles.engineer}>engineer costs</div>
          <div className={styles.saveNature}>save nature</div>
      </div>

      <div className={styles.sectionThree}>
        <div>cat track</div>
        <div>plasma</div>
        <div>calculations</div>
        <div>formula</div>
      </div>
    </>
  );
}
