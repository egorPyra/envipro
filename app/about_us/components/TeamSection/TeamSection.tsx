"use client"

import { useEffect, useRef } from "react";
import styles from "./teamSection.module.css";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";


export default function TeamSection() {
  // const [isShown, setIsShown] = useState(false);
  // const [keepActive, setKeepActive] = useState('');
  const container = useRef(null)
  const isInView = useInView(container, { amount: 0.08, once: true })

  useEffect(() => {
    if(isInView) {
      animate('#img1', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 0.2, ease: 'easeInOut'})
      animate('#img2', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 0.5, ease: 'easeInOut'})
      animate('#img4', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 0.7, ease: 'easeInOut'})
      animate('#img3', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 1, ease: 'easeInOut'})
      animate('#img5', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 1.2, ease: 'easeInOut'})
      animate('#img6', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 1.4, ease: 'easeInOut'})
      animate('#img7', { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4, delay: 1.5, ease: 'easeInOut'})
    }
  }, [isInView])


  return (
    <section ref={container} id="team" className={styles.teamContainer}>
      <div className={styles.teamBg}></div>
      <div className={styles.imageContainer}>
        <div className={styles.containerOne}>
        <motion.h1 
        className={styles.title}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}>Наша команда</motion.h1>
        <motion.p 
        className={styles.subTitle}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
         transition={{ 
           duration: 0.5,
           delay: 0.2,
         }}>Лучшие специалисты в своем деле!</motion.p>
        <div
          id="img1"
          className={styles.img1}>
          <p>ДРОЗДОВА<br/> АЛЕКСАНДРА<br/> АЛЕКСАНДРОВНА</p>
          <p>Руководитель отдела закупок и разрешительной документации</p>
        </div>
        </div>
        <div 
          id="img2"
          className={styles.img2}>
          <p>Зубова<br/> Наталья<br/> Викторовна</p>
          <p>Генеральный директор</p>
        </div>
        <div className={styles.group1}>
          <div 
          id="img3"
          className={styles.img3}>
            <p>Пучнина<br/> Екатерина<br/> Валерьевна</p>
            <p>Руководитель отдела инженерно-экологических изысканий</p>
          </div>
          <div
          id="img4"
          className={styles.img4}>
            <p>Зубов<br/> Антон<br/> Игоревич</p>
            <p>Технический директор</p>
          </div>
        </div>
        <div 
        id="img5"
        className={styles.img5}>
          <p>Блинова<br/> Елена<br/> Валентиновна</p>
          <p>Заместитель директора по развитию&nbsp;и&nbsp;управлению проектами</p>
        </div>
        <div className={styles.group2}>
          <div
          id="img6"
          className={styles.img6}>
            <p>Зибаровская<br/> Раиса<br/> АЛЕКСАНДРОВНА</p>
            <p>Заместитель директора по проектированию и разработке разрешительной документации</p>
          </div>
          <div
          id="img7"
          className={styles.img7}>
            <p>Митрофанова<br/> Екатерина<br/> Сергеевна</p>
            <p>Руководитель отдела производственного экологического мониторинга</p>
          </div>
        </div>
      </div>
    </section>
  );
}
