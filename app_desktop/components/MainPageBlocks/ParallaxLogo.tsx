import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import styles from './mainPageBlocks.module.css';

const ParallaxLogo = () => {
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
          x: (mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) + 1.3) * 170,
          y: (mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 70
        }}
      />
    </div>
  );
};

export default ParallaxLogo;
