
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const numberOfParticles = 20;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('light-particle');
      
      // Random size between 100px and 300px
      const size = Math.random() * 200 + 100;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      
      // Add animation delays
      particle.style.animation = `shimmer ${8 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return <div ref={containerRef} className="animated-bg" />;
};

export default AnimatedBackground;
