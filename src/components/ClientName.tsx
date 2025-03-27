
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ClientNameProps {
  name: string;
  imageSrc: string;
  onMouseEnter: (imageSrc: string) => void;
  onMouseLeave: () => void;
}

export const ClientName: React.FC<ClientNameProps> = ({ 
  name, 
  imageSrc,
  onMouseEnter,
  onMouseLeave
}) => {
  const clientRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = () => {
    if (!isMobile) {
      onMouseEnter(imageSrc);
    }
  };

  return (
    <span 
      ref={clientRef}
      className="client-name"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {name}
    </span>
  );
};

export default ClientName;
