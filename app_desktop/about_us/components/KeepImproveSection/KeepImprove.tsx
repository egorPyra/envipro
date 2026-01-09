"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./KeepImprove.module.css";
import { useRef } from "react";

export default function KeepImprove() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 0'],
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [-2000, 2000])
    const y2 = useTransform(scrollYProgress, [0, 1], [1300, -1300])
    const x1 = useTransform(scrollYProgress, [0, 1], [-1000, 1000])
    const x2 = useTransform(scrollYProgress, [0, 1], [1000, -1000])

    return (
        <section ref={ref} id="keep" className={styles.keepContainer}>
            <div className={styles.keepBg}></div>
            <div className={styles.keepTitleContainer}>
                <motion.h1 
                className={styles.title}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                }}>сохраняя - улучшать</motion.h1>
                <motion.p 
                className={styles.subTitle}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                }}>суть нашей компании!</motion.p> 
                <motion.div style={{ x: x1 }} className={styles.support}>
                    <p>Обеспечение достойных условий труда и уровня заработной платы, соблюдение требований промышленной безопасности и охраны труда, а также забота о здоровье сотрудников являются главными целями по отношению к персоналу компании.</p>
                </motion.div>
            </div>
            <div className={styles.overflowHidden}>
            <motion.div style={{ y: y1 }} className={styles.we}>
                <p>Мы работаем для достижения самых высоких целей в области охраны окружающей среды, которые ставят перед собой наши клиенты. Каждый сотрудник компании чувствует свой вклад в сохранение качественной окружающей среды для будущих поколений.</p>
                <p>Качество выполнения работ, полнота и достоверность результатов нашей работы являются приоритетными целями Команды ЭнвиПро в области политики качества.</p>
            </motion.div>
            </div>
            <div className={styles.understandAndAlsoContainer}>
                <motion.div style={{ x: x2 }} className={styles.understand}>
                    <p>Понимая важность и значимость вопроса подготовки молодых кадров, ООО «ЭнвиПро»участвует в учебном процессе и обеспечивает возможность прохождения производственных практик студентов Института наук о Земле Санкт-Петербургского государственного университета.</p>
                </motion.div>
                <motion.div style={{ y: y2 }} className={styles.also}>
                    <p>а также, является одним из организаторов Межрегиональной экологической полевой школы «Голубинские мела», реализуемой совместно с Молодёжным клубом Русского географического Общества и АНО «Излучина Дона» для школьников и студентов</p>
                </motion.div>
            </div>
        </section>
    );
}
