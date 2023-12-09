import React, { useEffect, useRef } from 'react';
import './MapSection.module.css'; 

const MapBg = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove: EventListener = (event) => {
      const mouseX = (event as MouseEvent).clientX;
      const mouseY = (event as MouseEvent).clientY;

      // Get all path elements with class "line"
      const lines = document.querySelectorAll('.line') as NodeListOf<SVGPathElement>;

      // Apply wobbling animation to each path element based on mouse position
      lines.forEach((line, index) => {
        const distance = calculateDistance(line, mouseX, mouseY);
        const animationDuration = 0.3; // You can adjust the duration as needed

        // Apply animation to the current line
        line.style.animation = `wiggle ${animationDuration}s ease-in-out infinite alternate`;

        // Apply animation delay based on the distance from the cursor
        const animationDelay = distance * 0.01;
        line.style.animationDelay = `-${animationDelay}s`;
      });
    };

    const calculateDistance = (element: SVGPathElement, mouseX: number, mouseY: number) => {
      const elementRect = element.getBoundingClientRect();
      const elementX = elementRect.left + elementRect.width / 2;
      const elementY = elementRect.top + elementRect.height / 2;

      return Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2);
    };

    // Add mousemove event listener to the container element
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);

      // Remove the event listener when the component is unmounted
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div ref={containerRef} className="map-bg-container">
      {/* The SVG background is applied through CSS */}
    </div>
  );
};

export default MapBg;
