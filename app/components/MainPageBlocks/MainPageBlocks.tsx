import styles from './mainPageBlocks.module.css'

export default function MainPageBlocks() {
  return (
    <div className={styles.blocksContainer}>
      <div className={styles.sectionOne}>
        <div className={styles.ecoRandom}></div>
        <div className={styles.ecology}></div>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwo_subBlock}>
          <div className={styles.earth}></div>
          <div className={styles.ecoShadow}></div>
        </div>
        <div>
          <div className={styles.sectionTwo__engineerSaveNature}>
            <div className={styles.engineer}></div>
            <div className={styles.saveNature}>СОХРАНЯЯ ПРИРОДУ ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ</div>
          </div>
          <div className={styles.ppa}></div>
        </div>
      </div>

      <div className={styles.sectionThree}>
        <div className={styles.catPlasmaContainer}>
          <div className={styles.cat}></div>
          <div className={styles.plasma}></div>
        </div>
        <div className={styles.calcFormulaContainer}>
          <div className={styles.calc}></div>
          <div className={styles.formula}></div>
        </div>
      </div>
    </div>
  );
}
