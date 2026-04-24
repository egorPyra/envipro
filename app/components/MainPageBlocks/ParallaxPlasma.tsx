import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import styles from './mainPageBlocks.module.css';

const ParallaxPrisma = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div>
      <motion.div
        id="circleLogo"
        className={styles.circleLogo}
        style={{
          x: (mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 2) - 0.8) * 165,
          y: (mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1.2) + 0.5) * 100
        }}
      />
    </div>
  );
};

export default ParallaxPrisma;
