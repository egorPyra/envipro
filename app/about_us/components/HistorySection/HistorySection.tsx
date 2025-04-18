"use client"

import { useState } from 'react';
import styles from './historySection.module.css'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function HistorySection() {
  const [isShow, setIsShow] = useState(false);

  return (
    <section id='history' className={styles.historyContainer}>
      <div className={styles.historyBg}></div>
      <div className={styles.historyContent}>
        <motion.h1 
         className={styles.title}
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ 
           duration: 0.5,
           delay: 0.2,
         }}
         >Наша история</motion.h1>
        <motion.p
         className={styles.subTitle}
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ 
           duration: 0.5,
           delay: 0.2,
         }}
         >Это была любовь с первого взгляда!</motion.p>
        <motion.p
         className={styles.historyTextTitle}
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ 
           duration: 0.5,
           delay: 0.5,
         }}>
          ЭнвиПро&nbsp;&mdash; это больше, чем просто компания. 
        </motion.p>
        <motion.p 
        className={styles.historyText}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.7,
          delay: 0.8,
        }}>
          Мы&nbsp;действительно Команда, в&nbsp;которой каждый является не&nbsp;только профессионалом своего дела, но&nbsp;и&nbsp;немного его фанатом. Уже более пяти лет мы&nbsp;оказываем различные экологические услуги во&nbsp;многих уголках нашей необъятной страны. И&nbsp;где&nbsp;бы мы&nbsp;ни&nbsp;находились, мы&nbsp;всегда получаем огромное удовольствие решая для вас даже самые сложные задачи. 
        </motion.p>
        <motion.p
         className={styles.historyText}
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ 
           duration: 0.7,
           delay: 1.2,
         }}>
          ООО «ЭнвиПро» обладает всеми необходимыми разрешительными документами, широкой базой подрядных лабораторий, а также сотрудничает с лучшими узкопрофильными специалистами ведущих научных учреждений страны.
        </motion.p>
        <motion.p 
        className={styles.historyText}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.7,
          delay: 1.6,
        }}>
          Мы одинаково высоко ценим каждого из наших заказчиков и прилагаем все усилия, обеспечивая комфортное взаимодействие с нами. Благодаря такому подходу нас уже выбрали: ООО «Газпром Инвест», ООО «Газпром переработка», ООО «Газпром добыча Ямбург», ООО «Газпром добыча Иркутск», ООО «Газпром бурение», ПАО «Транснефть», ООО «Свод Интернешнл», АО «Объединённая Энергостроительная корпорация», ГК «Геоизол», ООО «ГазАртСтрой», ООО «ГазЭнергоСервис», ООО «Газпром ПХГ», ООО «Газпром морские проекты», ЗАО «Нортгаз», АО «Гипротрубопровод», ООО «Газпром добыча Ноябрьск», ООО «Роза Хутор», ООО «ЭльгаТранс», ООО «Еврохим терминал Усть-Луга», АО «Росинжиниринг» и многие другие.
        </motion.p>
        <motion.p 
        className={styles.historyText}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.7,
          delay: 2,
        }}>
          Постоянно развиваясь, совершенствуя свои знания, навыки и умения, осваивая и внедряя самые передовые технологии и используя современное оборудование и программное обеспечение, мы стараемся быть лучшими. Лучшими для вас. И вы несомненно останетесь довольны нашим подходом и результатом.
        </motion.p>
        {/* <AnimatePresence>
          {isShow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <p className={styles.historyText}>
                Мы&nbsp;действительно Команда, в&nbsp;которой каждый является не&nbsp;только профессионалом своего дела, но&nbsp;и&nbsp;немного его фанатом. Уже более пяти лет мы&nbsp;оказываем различные экологические услуги во&nbsp;многих уголках нашей необъятной страны. И&nbsp;где&nbsp;бы мы&nbsp;ни&nbsp;находились, мы&nbsp;всегда получаем огромное удовольствие решая для вас даже самые сложные задачи. 
              </p>
              <p className={styles.historyText}>
                ООО «ЭнвиПро» обладает всеми необходимыми разрешительными документами, широкой базой подрядных лабораторий, а также сотрудничает с лучшими узкопрофильными специалистами ведущих научных учреждений страны.
              </p>
              <p className={styles.historyText}>
                Мы одинаково высоко ценим каждого из наших заказчиков и прилагаем все усилия, обеспечивая комфортное взаимодействие с нами. Благодаря такому подходу нас уже выбрали: ООО «Газпром Инвест», ООО «Газпром переработка», ООО «Газпром добыча Ямбург», ООО «Газпром добыча Иркутск», ООО «Газпром бурение», ПАО «Транснефть», ООО «Свод Интернешнл», АО «Объединённая Энергостроительная корпорация», ГК «Геоизол», ООО «ГазАртСтрой», ООО «ГазЭнергоСервис» и многие другие.
              </p>
              <p className={styles.historyText}>
                Постоянно развиваясь, совершенствуя свои знания, навыки и умения, осваивая и внедряя самые передовые технологии и используя современное оборудование и программное обеспечение, мы стараемся быть лучшими. Лучшими для вас. И вы несомненно останетесь довольны нашим подходом и результатом.
              </p>
            </motion.div>
          )}
        </AnimatePresence> */}
        {/* <motion.button 
        className={styles.showBtn} 
        onClick={() => setIsShow(!isShow)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.3,
          delay: 2.4,
        }}
        >{isShow ? 'Свернуть' : 'Читать далее'}</motion.button> */}
      </div>

    </section>
  );
}
