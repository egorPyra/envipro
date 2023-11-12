import styles from './mainPageBlocks.module.css'
import {useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group';

export default function MainPageBlocks() {
  const [isShown, setIsShown] = useState(false);
  const [keepActive, setKeepActive] = useState('');
  // const nodeRef = useRef(null);

  return (
    <div className={styles.blocksContainer}>
      <div className={styles.sectionOne}>
        <div className={styles.circleLogoContainer}>
          <div className={styles.circleLogo}></div>
        </div>
        {/* <CSSTransition
            in={showMessage}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
        > */}
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('ecoMonitoring')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.ecoMonitoring}>
              <div className={`${isShown && keepActive !== 'ecoMonitoring' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ЭКОЛОГИЧЕСКИЙ<br/> МОНИТОРИНГ</span>
          </div>
        {/* </CSSTransition> */}
        <div
          onMouseEnter={() => {setIsShown(true); setKeepActive('ecology')}}
          onMouseLeave={() => setIsShown(false)}
          className={styles.ecology}>
          <div className={`${isShown && keepActive !== 'ecology' ? 'greyBlock' : 'greyBlock hide'}`}></div>
          <span>ЭКОЛОГИЧЕСКОЕ<br/> СОПРОВОЖДЕНИЕ<br/> ДЕЯТЕЛЬНОСТИ</span>
          <div className={styles.ecologyCircle}></div>
        </div>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.sectionTwo_subBlock}>
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('earth')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.earth}>
            <div className={`${isShown && keepActive !== 'earth' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>НЕДРО<br/> ПОЛЬЗО<br/> ВАНИЕ</span>
          </div>
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('ecoShadow')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.ecoShadow}>
            <div className={`${isShown && keepActive !== 'ecoShadow' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ПРОИЗВОДСТВЕННЫЙ<br/> ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</span>
          </div>
        </div>
        <div className={styles.sectionTwo_ppaEngineer}>
          <div className={styles.sectionTwo__engineerSaveNature}>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('engineer')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.engineer}>
              <div className={`${isShown && keepActive !== 'engineer' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>ИНЖЕНЕРНЫЕ<br/> ИЗЫСКАНИЯ</span>
            </div>
            <div className={styles.saveNature}>СОХРАНЯЯ ПРИРОДУ<br/> ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ</div>
          </div>
          <div className={styles.ppa}>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('ppaAbove')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.ppaAbove}/>
            <div
              className={styles.ppaUnder}>
              <div className={`${isShown && keepActive !== 'ppaAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>РАЗРАБОТКА<br/> РАЗРЕШИТЕЛЬНОЙ<br/> ПРИРОДООХРАННОЙ<br/> ДОКУМЕНТАЦИИ</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionThree}>
        <div className={styles.catPlasmaContainer}>
          <div className={styles.cat}>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('catAbove')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.catAbove}/>
            <div className={styles.catUnder}>
              <div className={`${isShown && keepActive !== 'catAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>КРАСНАЯ<br/> КНИГА</span>
            </div>
          </div>
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('plasma')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.plasma}>
            <div className={`${isShown && keepActive !== 'plasma' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <div className={styles.plasmaCircle}></div>
            <span>ГЕОДЕЗИЯ И<br/> КАРТОГРАФИЯ</span>
          </div>
        </div>
        <div className={styles.calcFormulaContainer}>
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('calc')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.calc}>
            <div className={`${isShown && keepActive !== 'calc' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ПРОЕКТИРОВАНИЕ</span>
          </div>
          <div>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('forest')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.forest}>
              <div className={`${isShown && keepActive !== 'forest' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <div className={styles.foresCircle}></div>
              <span>ЛЕСОПОЛЬЗОВАНИЕ</span>
            </div>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('formula')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.formula}>
              <div className={`${isShown && keepActive !== 'formula' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
