'use client'

import { motion } from 'framer-motion';
import styles from './mainPageBlocks.module.css'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function MainPageBlocks() {

  const [isShown, setIsShown] = useState(false);
  const [keepActive, setKeepActive] = useState('');

  const variants = {
    initial: {
      y: 0,
      x: 0,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    logoCenter: {
      y: '37vh',
      x: '40vw',
      scale: 2
    },
    logoCorner: {
      y: 0,
      x: 0,
      scale: 1,
      transition: { 
        duration: 1.5,
        delay: 5.2,
        ease: 'easeInOut'
      }
    }
  }

  return (

      <div className={styles.blocksContainer}>
        <div className={`${isShown ? 'greyBlockUnder' : 'greyBlockUnder hide'}`}></div>
        <div className={styles.sectionOne}>
          <motion.div className={styles.circleLogoContainer}
          variants={variants}
          initial='logoCenter'
          animate='logoCorner'
          >
            <Image
              src="/MAIN_ENVI_new.svg"
              alt="Landscape picture"
              width={150}
              height={150}
              className={styles.mainLogo}
            />
            <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.7,
                ease: 'easeInOut'
              }}
              className={styles.circleLogo}
              >
            </motion.div>
          </motion.div>
          <Link href={'/about_us'} className={styles.link}>
            <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.7,
                ease: 'easeInOut'
              }}
              onMouseEnter={() => {setIsShown(true); setKeepActive('ecoMonitoring')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.ecoMonitoring}>
              <div className={`${isShown && keepActive !== 'ecoMonitoring' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>ЭКОЛОГИЧЕСКИЙ<br/> МОНИТОРИНГ</span>
            </motion.div>
          </Link>
          <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.7,
                ease: 'easeInOut'
              }}
            onMouseEnter={() => {setIsShown(true); setKeepActive('ecology')}}
            onMouseLeave={() => setIsShown(false)}
            className={styles.ecology}>
            <div className={`${isShown && keepActive !== 'ecology' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ЭКОЛОГИЧЕСКОЕ<br/> СОПРОВОЖДЕНИЕ<br/> ДЕЯТЕЛЬНОСТИ</span>
            <Link href={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link>
            <motion.div 
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.8,
                ease: 'easeInOut'
              }}
              className={styles.ecologyCircle}
            ></motion.div>
          </motion.div>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwo_subBlock}>
              <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.85,
                ease: 'easeInOut'
              }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('earth')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.earth}>
                <Link href={'/about_us'} className={styles.link}>
                  <div className={`${isShown && keepActive !== 'earth' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>НЕДРО<br/> ПОЛЬЗО<br/> ВАНИЕ</span>
                </Link>
              </motion.div>
              <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 6.95,
                ease: 'easeInOut'
              }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('ecoShadow')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.ecoShadow}>
                <Link href={'/about_us'} className={styles.link}>
                  <div className={`${isShown && keepActive !== 'ecoShadow' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ПРОИЗВОДСТВЕННЫЙ<br/> ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</span>
                </Link>
              </motion.div>
          </div>
          <div className={styles.sectionTwo_ppaEngineer}>
            <div className={styles.sectionTwo__engineerSaveNature}>
              <Link href={'/about_us'} className={styles.link}>
                <motion.div
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  transition={{ 
                    duration: 0.5,
                    delay: 7,
                    ease: 'easeInOut'
                  }}
                  onMouseEnter={() => {setIsShown(true); setKeepActive('engineer')}}
                  onMouseLeave={() => setIsShown(false)}
                  className={styles.engineer}>
                  <div className={`${isShown && keepActive !== 'engineer' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ИНЖЕНЕРНЫЕ<br/> ИЗЫСКАНИЯ</span>
                </motion.div>
              </Link>
              <motion.div 
               variants={variants}
               initial='initial'
               animate='animate'
               transition={{ 
                 duration: 0.5,
                 delay: 7.05,
                 ease: 'easeInOut'
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
                  <Link href={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link>
                </div>
              <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 7.1,
                ease: 'easeInOut'
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
                  <Link href={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link>
                </div>
              <motion.div 
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.5,
                delay: 7.15,
                ease: 'easeInOut'
              }}
              className={styles.catUnder}
              >
                <div className={`${isShown && keepActive !== 'catAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>КРАСНАЯ<br/> КНИГА</span>
              </motion.div>
            </div>
              <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.8,
                delay: 7.3,
                ease: 'easeInOut'
              }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('plasma')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.plasma}>
                <div className={`${isShown && keepActive !== 'plasma' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <motion.div 
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  transition={{ 
                    duration: 0.5,
                    delay: 7.25,
                    ease: 'easeInOut'
                  }}
                  className={styles.plasmaCircle}
                ></motion.div>
                <Link href={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link>
                <span>ГЕОДЕЗИЯ И<br/> КАРТОГРАФИЯ</span>
              </motion.div>
          </div>
          <div className={styles.calcEnvilabContainer}>
            <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.8,
                delay: 7.35,
                ease: 'easeInOut'
              }}
              onMouseEnter={() => {setIsShown(true); setKeepActive('calc')}}
              onMouseLeave={() => setIsShown(false)}
              className={styles.calc}>
              <Link href={'/about_us'} className={styles.link}>
                <div className={`${isShown && keepActive !== 'calc' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>ПРОЕКТИРОВАНИЕ</span>
              </Link>
            </motion.div>
            <div>
              <Link href={'/about_us'} className={styles.link}>
                <motion.div
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  transition={{ 
                    duration: 0.8,
                    delay: 7.3,
                    ease: 'easeInOut'
                  }}
                  onMouseEnter={() => {setIsShown(true); setKeepActive('forest')}}
                  onMouseLeave={() => setIsShown(false)}
                  className={styles.forest}>
                  <div className={`${isShown && keepActive !== 'forest' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <motion.div
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    transition={{ 
                      duration: 0.5,
                      delay: 7.5,
                      ease: 'easeInOut'
                    }}
                    className={styles.foresCircle}
                  ></motion.div>
                  <span>ЛЕСОПОЛЬЗОВАНИЕ</span>
                </motion.div>
              </Link>
              <motion.div
              variants={variants}
              initial='initial'
              animate='animate'
              transition={{ 
                duration: 0.8,
                delay: 7.5,
                ease: 'easeInOut'
              }}
                onMouseEnter={() => {setIsShown(true); setKeepActive('envilab')}}
                onMouseLeave={() => setIsShown(false)}
                className={styles.envilab}>
                <Link href={'/about_us'} className={styles.link}>
                  <div  className={`${isShown && keepActive !== 'envilab' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
}
