import { useState, useEffect } from 'react';

export const useScrollEffects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for 3D effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Scroll Animation Hook
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;
        
        if (ratio > 0) {
          // Calculate 3D transform based on intersection ratio
          const translateZ = (1 - ratio) * -200;
          const rotateX = (1 - ratio) * 15;
          const opacity = Math.max(0.3, ratio);
          const scale = 0.8 + (ratio * 0.2);
          
          element.style.transform = `
            perspective(1000px) 
            translateZ(${translateZ}px) 
            rotateX(${rotateX}deg) 
            scale(${scale})
          `;
          element.style.opacity = opacity.toString();
        } else {
          // Reset when out of view
          element.style.transform = 'perspective(1000px) translateZ(-200px) rotateX(15deg) scale(0.8)';
          element.style.opacity = '0.3';
        }
      });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('.scroll-3d');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return { isMenuOpen, setIsMenuOpen, scrollY };
};