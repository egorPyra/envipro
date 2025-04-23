'use client';
import Image from 'next/image';
import styles from './ServiceBlock.module.css';
import { useRef, useEffect, useState } from 'react';

interface ServiceBlockProps {
  id: string;
  title: string;
  text: string;
  list: string;
  secondText: string;
  bottomText: string;
  imageLeft: string;
  imageRight: string;
  color: string;
  size?: string;
}

export default function ServiceBlock(props: ServiceBlockProps) {
    const { id, title, text, list, secondText, bottomText, imageLeft, imageRight, color, size } = props;
    const ref = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => setIsActive(entry.isIntersecting),
        {
          root: null,            // viewport
          threshold: 0.5,        // «активна», когда секция ≥50% в области
        }
      );
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
      
  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.left}>
        <Image src={imageLeft} alt="" fill className={styles.imageLeft} />
      </div>

      <div className={styles.right}>
        <Image src={imageRight} alt="" fill className={styles.imageRight} />
        <div className={styles.container} style={{ color: color }}>
          <h2 className={styles.title} style={{ fontSize: size }}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.list}>{list}</p>
          <p className={styles.secondText}>{secondText}</p>
          <p className={styles.bottomText}>{bottomText}</p>
        </div>
      </div>
    </section>
  );
}