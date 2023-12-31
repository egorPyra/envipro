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
      offset: ['0 1', '1 0'],
  });
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 1300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 1600])
  const y6 = useTransform(scrollYProgress, [0, 1], [0, 2300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 2600])
  const y7 = useTransform(scrollYProgress, [0, 1], [0, 2800])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 2800])


  return (
    <section ref={ref} id="team" className={styles.teamContainer}>
      <div className={styles.teamBg}></div>
      <div className={styles.imageContainer}>
        <div className={styles.containerOne}>
        <motion.h1 
        className={styles.title}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
        }}>Наша команда</motion.h1>
        <motion.p 
        className={styles.subTitle}
        initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ 
           duration: 0.5,
           delay: 0.2,
         }}>Лучшие специалисты в своем деле!</motion.p>
        <motion.div 
          onMouseEnter={() => {setIsShown(true); setKeepActive('img1')}}
          onMouseLeave={() => setIsShown(false)}
          style={{
            y: y1,
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
            y: y2,
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
            y: y3,
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
            y: y4,
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
          y: y5,
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
            y: y6,
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
            y: y7,
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
