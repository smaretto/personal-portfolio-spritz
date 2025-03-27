
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  visible: boolean;
  currentImage: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ visible, currentImage }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${visible ? 'visible' : ''}`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
};

export default CustomCursor;
