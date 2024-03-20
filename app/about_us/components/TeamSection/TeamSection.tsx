"use client"

import styles from "./teamSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";


export default function TeamSection() {
  // const [isShown, setIsShown] = useState(false);
  // const [keepActive, setKeepActive] = useState('');


  return (
    <section id="team" className={styles.teamContainer}>
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
          className={styles.img1}>
          <p>ДРОЗДОВА<br/> АЛЕКСАНДРА<br/> АЛЕКСАНДРОВНА</p>
          <p>Руководитель отдела закупок и разрешительной документации</p>
        </motion.div>
        </div>
        <motion.div 
          className={styles.img2}>
          <p>Зубова<br/> Наталья<br/> Викторовна</p>
          <p>Генеральный директор</p>
        </motion.div>
        <div className={styles.group1}>
          <motion.div 
          className={styles.img3}>
            <p>Пучнина<br/> Екатерина<br/> Валерьевна</p>
            <p>Руководитель отдела инженерно-экологических изысканий</p>
          </motion.div>
          <motion.div
          className={styles.img4}>
            <p>Зубов<br/> Антон<br/> Игоревич</p>
            <p>Технический директор</p>
          </motion.div>
        </div>
        <motion.div 
        className={styles.img5}>
          <p>Блинова<br/> Елена<br/> Валентиновна</p>
          <p>Заместитель директора по развитию&nbsp;и&nbsp;управлению проектами</p>
        </motion.div>
        <div className={styles.group2}>
          <motion.div
          className={styles.img6}>
            <p>Зибаровская<br/> Раиса<br/> АЛЕКСАНДРОВНА</p>
            <p>Руководитель отдела <br/>экологического аудита <br/>и сопровождения</p>
          </motion.div>
          <motion.div
          className={styles.img7}>
            <p>Митрофанова<br/> Екатерина<br/> Сергеевна</p>
            <p>Руководитель отдела производственного экологического мониторинга</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
