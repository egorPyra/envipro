import styles from './mainPageBlocks.module.css'

export default function MainPageBlocks() {
  return (
    <div className={styles.blocksContainer}>
      <div className={styles.sectionOne}>
        <div className={styles.ecoRandom}>
          <span>ЭКОЛОГИЧЕСКИЙ<br/> МОНИТОРИНГ</span>
        </div>
        <div className={styles.ecology}>
          <span>ЭКОЛОГИЧЕСКОЕ<br/> СОПРОВОЖДЕНИЕ<br/> ДЕЯТЕЛЬНОСТИ</span>
        </div>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwo_subBlock}>
          <div className={styles.earth}>
            <span>НЕДРО<br/> ПОЛЬЗО<br/> ВАНИЕ</span>
          </div>
          <div className={styles.ecoShadow}>
            <span>ПРОИЗВОДСТВЕННЫЙ<br/> ЭКОЛОГИЧЕСКИЙ<br/> КОНТРОЛЬ</span>
          </div>
        </div>
        <div className={styles.sectionTwo_ppaEngineer}>
          <div className={styles.sectionTwo__engineerSaveNature}>
            <div className={styles.engineer}>
              <span>ИНЖЕНЕРНЫЕ<br/> ИЗЫСКАНИЯ</span>
            </div>
            <div className={styles.saveNature}>СОХРАНЯЯ ПРИРОДУ<br/> ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ</div>
          </div>
          <div className={styles.ppa}>
            <div className={styles.ppaAbove}/>
            <div className={styles.ppaUnder}>
              <span>РАЗРАБОТКА<br/> РАЗРЕШИТЕЛЬНОЙ<br/> ПРИРОДООХРАННОЙ<br/> ДОКУМЕНТАЦИИ</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionThree}>
        <div className={styles.catPlasmaContainer}>
          <div className={styles.cat}>
            <div className={styles.catAbove}/>
            <div className={styles.catUnder}>
              <span>КРАСНАЯ<br/> КНИГА</span>
            </div>
          </div>
          <div className={styles.plasma}>
            <span>ГЕОДЕЗИЯ И<br/> КАРТОГРАФИЯ</span>
          </div>
        </div>
        <div className={styles.calcFormulaContainer}>
          <div className={styles.calc}>
            <span>ПРОЕКТИРОВАНИЕ</span>
          </div>
          <div>
            <div className={styles.forest}>
              <span>ЛЕСОПОЛЬЗОВАНИЕ</span>
            </div>
            <div className={styles.formula}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
