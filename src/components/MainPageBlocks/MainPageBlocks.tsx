import { motion } from 'framer-motion';
import styles from './mainPageBlocks.module.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import BurgerBtn from '../BurgerMenu/BurgerBtn';
import BurgerContent from '../BurgerMenu/BurgerContent';


export default function MainPageBlocks() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [isShown, setIsShown] = useState(false);
  const [keepActive, setKeepActive] = useState('');

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
  });

  return (
    <section className="content" onClick={() => setIsMenuActive(false)}>
      {/*<LogoPreloader/>*/}
      <BurgerBtn activateMenuFunc={setIsMenuActive}/>
      <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
      <div className={styles.blocksContainer}>
        <div className={`${isShown ? 'greyBlockUnder' : 'greyBlockUnder hide'}`}></div>
        <div className={styles.sectionOne}>
          <div className={styles.circleLogoContainer}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
              }}
              className={styles.circleLogo}
              >
            </motion.div>
          </div>
          <Link to={'/about_us'} className={styles.link}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => {setIsShown(true); setKeepActive('ecoMonitoring')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.ecoMonitoring}>
                <div className={`${isShown && keepActive !== 'ecoMonitoring' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>ЭКОЛОГИЧЕСКИЙ<br/> МОНИТОРИНГ</span>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
            }}
            onMouseEnter={() => {setIsShown(true); setKeepActive('ecology')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.ecology}>
            <div className={`${isShown && keepActive !== 'ecology' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ЭКОЛОГИЧЕСКОЕ<br/> СОПРОВОЖДЕНИЕ<br/> ДЕЯТЕЛЬНОСТИ</span>
            <Link to={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 1,
              }}
              className={styles.ecologyCircle}
            ></motion.div>
          </motion.div>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwo_subBlock}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('earth')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.earth}>
                <Link to={'/about_us'} className={styles.link}>
                  <div className={`${isShown && keepActive !== 'earth' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>НЕДРО<br/> ПОЛЬЗО<br/> ВАНИЕ</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('ecoShadow')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.ecoShadow}>
                <Link to={'/about_us'} className={styles.link}>
                  <div className={`${isShown && keepActive !== 'ecoShadow' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ПРОИЗВОДСТВЕННЫЙ<br/> ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</span>
                </Link>
              </motion.div>
          </div>
          <div className={styles.sectionTwo_ppaEngineer}>
            <div className={styles.sectionTwo__engineerSaveNature}>
              <Link to={'/about_us'} className={styles.link}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.4,
                  }}
                  onMouseEnter={() => {setIsShown(true); setKeepActive('engineer')}}
                  onMouseLeave={() => setIsShown(false)}
                  className={styles.engineer}>
                  <div className={`${isShown && keepActive !== 'engineer' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ИНЖЕНЕРНЫЕ<br/> ИЗЫСКАНИЯ</span>
                </motion.div>
              </Link>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                }}
                className={styles.saveNature}
              >
                СОХРАНЯЯ ПРИРОДУ<br/> ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ
              </motion.div>
            </div>
            <div className={styles.ppa}>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('ppaAbove')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.ppaAbove}>
                  <Link to={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link>
                </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                }}
                className={styles.ppaUnder}>
                <div className={`${isShown && keepActive !== 'ppaAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>РАЗРАБОТКА<br/> РАЗРЕШИТЕЛЬНОЙ<br/> ПРИРОДООХРАННОЙ<br/> ДОКУМЕНТАЦИИ</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.sectionThree}>
          <div className={styles.catPlasmaContainer}>
            <div className={styles.cat}>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('catAbove')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.catAbove}>
                  <Link to={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link>
                </div>
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.8,
              }}
              className={styles.catUnder}
              >
                <div className={`${isShown && keepActive !== 'catAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>КРАСНАЯ<br/> КНИГА</span>
              </motion.div>
            </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1,
                }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('plasma')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.plasma}>
                <div className={`${isShown && keepActive !== 'plasma' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 2,
                  }}
                  className={styles.plasmaCircle}
                ></motion.div>
                <Link to={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link>
                <span>ГЕОДЕЗИЯ И<br/> КАРТОГРАФИЯ</span>
              </motion.div>
          </div>
          <div className={styles.calcEnvilabContainer}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 1,
              }}
              onMouseEnter={() => {setIsShown(true); setKeepActive('calc')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.calc}>
              <Link to={'/about_us'} className={styles.link}>
                <div className={`${isShown && keepActive !== 'calc' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>ПРОЕКТИРОВАНИЕ</span>
              </Link>
            </motion.div>
            <div>
              <Link to={'/about_us'} className={styles.link}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 1.2,
                  }}
                  onMouseEnter={() => {setIsShown(true); setKeepActive('forest')}}
                  onMouseLeave={() => setIsShown(false)}
                  className={styles.forest}>
                  <div className={`${isShown && keepActive !== 'forest' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      delay: 2,
                    }}
                    className={styles.foresCircle}
                  ></motion.div>
                  <span>ЛЕСОПОЛЬЗОВАНИЕ</span>
                </motion.div>
              </Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('envilab')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.envilab}>
                <Link to={'/about_us'} className={styles.link}>
                  <div  className={`${isShown && keepActive !== 'envilab' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
