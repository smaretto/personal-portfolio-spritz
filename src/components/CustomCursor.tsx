
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  visible: boolean;
  currentImage: string;
  isVideo?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ visible, currentImage, isVideo = false }) => {
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
      }}
    >
      {isVideo ? (
        <video
          src={currentImage}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          src={currentImage || 'lovable-uploads/6d419859-837e-40cd-a567-22c3401f6e30.png'}
          alt="Client work"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default CustomCursor;
