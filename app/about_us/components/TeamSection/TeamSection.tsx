"use client"

import { useRef, useState } from "react";
import styles from "./teamSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";


export default function TeamSection() {
  const [isShown, setIsShown] = useState(false);
  const [keepActive, setKeepActive] = useState('');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['0 1', '1.33 1'],
  });
  const translateYProgress = useTransform(scrollYProgress, [0, 0.6], [50, 0])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.6], [0., 1])

  return (
    <section ref={ref} id="team" className={styles.teamContainer}>
      <div className={styles.teamBg}></div>
      <div className={styles.imageContainer}>
        <div>
        <motion.h1 
        className={styles.title}
        style={{
          y: translateYProgress,
          opacity: opacityProgress,
        }}>Наша команда</motion.h1>
        <motion.p 
        className={styles.subTitle}
        style={{
          y: translateYProgress,
          opacity: opacityProgress,
        }}>Лучшие специалисты в своем деле!</motion.p>
        <motion.div 
          onMouseEnter={() => {setIsShown(true); setKeepActive('img1')}}
          onMouseLeave={() => setIsShown(false)}
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img1}>
          <div className={`${isShown && keepActive !== 'img1' ? 'greyBlock' : 'greyBlock hide'}`}></div>
          <p>ДРОЗДОВА<br/> АЛЕКСАНДРА<br/> АЛЕКСАНДРОВНА</p>
          <p>Руководитель отдела закупок и разрешительной документации</p>
        </motion.div>
        </div>
        <motion.div 
          onMouseEnter={() => {setIsShown(true); setKeepActive('img2')}}
          onMouseLeave={() => setIsShown(false)}
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img2}>
          <div className={`${isShown && keepActive !== 'img2' ? 'greyBlock' : 'greyBlock hide'}`}></div>
          <p>Зубова<br/> Наталья<br/> Викторовна</p>
          <p>Генеральный директор</p>
        </motion.div>
        <div className={styles.group1}>
          <motion.div 
          onMouseEnter={() => {setIsShown(true); setKeepActive('img3')}}
          onMouseLeave={() => setIsShown(false)}
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img3}>
            <div className={`${isShown && keepActive !== 'img3' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <p>Пучнина<br/> Екатерина<br/> Валерьевна</p>
            <p>Руководитель отдела инженерно-экологических изысканий</p>
          </motion.div>
          <motion.div
          onMouseEnter={() => {setIsShown(true); setKeepActive('img4')}}
          onMouseLeave={() => setIsShown(false)}
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img4}>
            <div className={`${isShown && keepActive !== 'img4' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <p>Зубов<br/> Антон<br/> Игоревич</p>
            <p>Технический директор</p>
          </motion.div>
        </div>
        <motion.div 
        onMouseEnter={() => {setIsShown(true); setKeepActive('img5')}}
        onMouseLeave={() => setIsShown(false)}
        style={{
          y: translateYProgress,
          opacity: opacityProgress,
        }}
        className={styles.img5}>
          <div className={`${isShown && keepActive !== 'img5' ? 'greyBlock' : 'greyBlock hide'}`}></div>
          <p>Блинова<br/> Елена<br/> Валентиновна</p>
          <p>Заместитель директора по развитию&nbsp;и&nbsp;управлению проектами</p>
        </motion.div>
        <div className={styles.group2}>
          <motion.div
          onMouseEnter={() => {setIsShown(true); setKeepActive('img6')}}
          onMouseLeave={() => setIsShown(false)} 
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img6}>
            <div className={`${isShown && keepActive !== 'img6' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <p>Зибаровская<br/> Раиса<br/> АЛЕКСАНДРОВНА</p>
            <p>Руководитель отдела <br/>экологического аудита <br/>и сопровождения</p>
          </motion.div>
          <motion.div
          onMouseEnter={() => {setIsShown(true); setKeepActive('img7')}}
          onMouseLeave={() => setIsShown(false)} 
          style={{
            y: translateYProgress,
            opacity: opacityProgress,
          }}
          className={styles.img7}>
            <div className={`${isShown && keepActive !== 'img7' ? 'greyBlock' : 'greyBlock hide'}`}></div>
            <p>Митрофанова<br/> Екатерина<br/> Сергеевна</p>
            <p>Руководитель отдела производственного экологического мониторинга</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
