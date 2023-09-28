import styles from './mainPageBlocks.module.css'

export default function MainPageBlocks() {
  return (
    <div className={styles.blocksContainer}>
      <div className={styles.sectionOne}>
        <div className={styles.ecoRandom}>eco</div>
        <div className={styles.ecology}>ecology</div>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwo_subBlock}>
          <div className={styles.earth}>earth</div>
          <div className={styles.ecoShadow}>eco(shadow)</div>
        </div>
        <div className={styles.engineer}>engineer costs</div>
        <div className={styles.saveNature}>save nature</div>
      </div>

      <div className={styles.sectionThree}>
        <div className={styles.catPlasmaContainer}>
          <div className={styles.cat}>cat track</div>
          <div className={styles.plasma}>plasma</div>
        </div>
        <div className={styles.calcFormulaContainer}>
          <div className={styles.calc}>calculations</div>
          <div className={styles.formula}>formula</div>
        </div>
      </div>
    </div>
  );
}
