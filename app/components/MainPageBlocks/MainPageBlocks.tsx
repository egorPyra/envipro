'use client'

import { animate } from 'framer-motion';
import styles from './mainPageBlocks.module.css'
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import PopUpMainPageBlock from './PopUpMainPageBlock';
import { Content } from './PopUpContent';


export default function MainPageBlocks() {

  const [isShown, setIsShown] = useState(false);
  const [keepActive, setKeepActive] = useState('');
  const [popupVisible, setPopupVisible] = useState<{show: boolean, contentName?: Content}>(
    { show: false, contentName: 'ecoMonitoring' }
  );


  useEffect(() => {
    if(!sessionStorage.getItem('animationEnvipro')) {
      sessionStorage.setItem('animationEnvipro', 'played');

      const temp = document.getElementById('logoBackgroundBlock')
      if(temp) temp.style.display = 'block'
      setTimeout(() => {
        if(temp) temp.style.display = 'none'
      }, 7000)

      const temp2 = document.getElementById('circleLogoContainer')
      if(temp2) animate(
        '#logoAnimate', 
        { opacity: [1, 0, 0, 1],
          x: [window.innerWidth/2 - temp2.clientWidth/2, window.innerWidth/2 - temp2.clientWidth/2, 0, 0], 
          y: [window.innerHeight/2 - temp2.clientHeight/2, window.innerHeight/2 - temp2.clientHeight/2, 0, 0], 
          scale: [4, 0, 0, 1] 
        },
        { duration: 1.4, delay: 6.7, ease: 'easeInOut'})
      animate('#circleLogo', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 1.5, delay: 7.7, ease: 'easeInOut'})
      animate('#ecoMonitoring', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.2, ease: 'easeInOut'})
      animate('#ecology', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.2, ease: 'easeInOut'})
      animate('#ecologyCircle', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 1.5, delay: 7.8, ease: 'easeInOut'})
      animate('#earth', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.35, ease: 'easeInOut'})
      animate('#engineer', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.5, ease: 'easeInOut'})
      animate('#ecoShadow', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.45, ease: 'easeInOut'})
      animate('#saveNature', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.55, ease: 'easeInOut'})
      animate('#ppaUnder', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.6, ease: 'easeInOut'})
      animate('#catUnder', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 7.65, ease: 'easeInOut'})
      animate('#plasma', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 7.8, ease: 'easeInOut'})
      animate('#plasmaCircle', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 1.5, delay: 8.35, ease: 'easeInOut'})
      animate('#forest', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 7.8, ease: 'easeInOut'})
      animate('#calc', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 7.85, ease: 'easeInOut'})
      animate('#foresCircle', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 1.5, delay: 8.5, ease: 'easeInOut'})
      animate('#envilab', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 8, ease: 'easeInOut'})
    }
  }, [])

  return (

      <div className={styles.blocksContainer}>
        <div className={`${isShown ? 'greyBlockUnder' : 'greyBlockUnder hide'}`}></div>
        <div id='logoBackgroundBlock' className={styles.logoBackgroundBlock}></div>
        <div className={styles.sectionOne}>
          <div id='circleLogoContainer' className={styles.circleLogoContainer}>
            <Image
              src="/MAIN_ENVI_new.svg"
              alt="Landscape picture"
              width={150}
              height={150}
              className={styles.mainLogo}
              id='logoAnimate'
            />
            <div
              id='circleLogo'
              className={styles.circleLogo}
              >
            </div>
          </div>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('ecoMonitoring')}}
              onMouseLeave={() => setIsShown(false)}
              onClick={() => setPopupVisible({show: true, contentName: 'ecoMonitoring'})}
              id='ecoMonitoring'
              className={styles.ecoMonitoring}>
              <div className={`${isShown && keepActive !== 'ecoMonitoring' ? 'greyBlock' : 'greyBlock hide'}`}></div>
              <span>ЭКОЛОГИЧЕСКИЙ<br/> МОНИТОРИНГ</span>
            </div>
          <div
            onMouseEnter={() => {setIsShown(true); setKeepActive('ecology')}}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setPopupVisible({show: true, contentName: 'ecology'})}
            id='ecology'
            className={styles.ecology}>
            <div className={`${isShown && keepActive !== 'ecology' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <span>ЭКОЛОГИЧЕСКОЕ<br/> СОПРОВОЖДЕНИЕ<br/> ДЕЯТЕЛЬНОСТИ</span>
            {/* <Link href={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link> */}
            <div 
              id='ecologyCircle'
              className={styles.ecologyCircle}
            ></div>
          </div>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwo_subBlock}>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('earth')}}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setPopupVisible({show: true, contentName: 'earth'})}
                id='earth'
                className={styles.earth}>
                {/* <Link href={'/about_us'} className={styles.link}> */}
                  <div className={`${isShown && keepActive !== 'earth' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>НЕДРО<br/> ПОЛЬЗО<br/> ВАНИЕ</span>
                {/* </Link> */}
              </div>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('ecoShadow')}}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setPopupVisible({show: true, contentName: 'ecoShadow'})}
                id='ecoShadow'
                className={styles.ecoShadow}>
                {/* <Link href={'/about_us'} className={styles.link}> */}
                  <div className={`${isShown && keepActive !== 'ecoShadow' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ПРОИЗВОДСТВЕННЫЙ<br/> ЭКОЛОГИЧЕСКИЙ КОНТРОЛЬ</span>
                {/* </Link> */}
              </div>
          </div>
          <div className={styles.sectionTwo_ppaEngineer}>
            <div className={styles.sectionTwo__engineerSaveNature}>
              {/* <Link href={'/about_us'} className={styles.link}> */}
                <div
                  onMouseEnter={() => {setIsShown(true); setKeepActive('engineer')}}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={() => setPopupVisible({show: true, contentName: 'engineer'})}
                  id='engineer'
                  className={styles.engineer}>
                  <div className={`${isShown && keepActive !== 'engineer' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <span>ИНЖЕНЕРНЫЕ<br/> ИЗЫСКАНИЯ</span>
                </div>
              {/* </Link> */}
              <div id='saveNature' className={styles.saveNature}>
                СОХРАНЯЯ ПРИРОДУ<br/> ДЛЯ БУДУЩИХ ПОКОЛЕНИЙ
              </div>
            </div>
            <div className={styles.ppa}>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('ppaAbove')}}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setPopupVisible({show: true, contentName: 'ppaAbove'})}
                className={styles.ppaAbove}>
                  {/* <Link href={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link> */}
                </div>
              <div id='ppaUnder' className={styles.ppaUnder}>
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
                onClick={() => setPopupVisible({show: true, contentName: 'catAbove'})}
                className={styles.catAbove}>
                  {/* <Link href={'/about_us'} className={`${styles.linkContainer} ${styles.link}`}></Link> */}
                </div>
              <div id='catUnder' className={styles.catUnder}>
                <div className={`${isShown && keepActive !== 'catAbove' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>КРАСНАЯ<br/> КНИГА</span>
              </div>
            </div>
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('plasma')}}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setPopupVisible({show: true, contentName: 'plasma'})}
                id='plasma'
                className={styles.plasma}>
                <div className={`${isShown && keepActive !== 'plasma' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <div id='plasmaCircle' className={styles.plasmaCircle}></div>
                {/* <Link href={'/about_us'} className={`${styles.linkAbsolut} ${styles.link}`}></Link> */}
                <span>ГЕОДЕЗИЯ И<br/> КАРТОГРАФИЯ</span>
              </div>
          </div>
          <div className={styles.calcEnvilabContainer}>
            <div
              onMouseEnter={() => {setIsShown(true); setKeepActive('calc')}}
              onMouseLeave={() => setIsShown(false)}
              onClick={() => setPopupVisible({show: true, contentName: 'calc'})}
              id='calc'
              className={styles.calc}>
              {/* <Link href={'/about_us'} className={styles.link}> */}
                <div className={`${isShown && keepActive !== 'calc' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                <span>ПРОЕКТИРОВАНИЕ</span>
              {/* </Link> */}
            </div>
            <div>
              {/* <Link href={'/about_us'} className={styles.link}> */}
                <div
                  onMouseEnter={() => {setIsShown(true); setKeepActive('forest')}}
                  onMouseLeave={() => setIsShown(false)}
                  onClick={() => setPopupVisible({show: true, contentName: 'forest'})}
                  id='forest'
                  className={styles.forest}>
                  <div className={`${isShown && keepActive !== 'forest' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                  <div id='foresCircle' className={styles.foresCircle}></div>
                  <span>ЛЕСОПОЛЬЗОВАНИЕ</span>
                </div>
              {/* </Link> */}
              <div
                onMouseEnter={() => {setIsShown(true); setKeepActive('envilab')}}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => setPopupVisible({show: true, contentName: 'envilab'})}
                id='envilab'
                className={styles.envilab}>
                {/* <Link href={'/about_us'} className={styles.link}> */}
                  <div  className={`${isShown && keepActive !== 'envilab' ? 'greyBlock' : 'greyBlock hide'}`}></div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        {popupVisible.show && (
          <PopUpMainPageBlock close={setPopupVisible} contentName={popupVisible.contentName}/>
        )}
      </div>
  );
}
