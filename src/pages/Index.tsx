
import React, { useState } from 'react';
import ClientName from '@/components/ClientName';
import CustomCursor from '@/components/CustomCursor';
import AnimatedBackground from '@/components/AnimatedBackground';
import { fallbackImages } from '@/assets/clientImages';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const isMobile = useIsMobile();

  const handleMouseEnter = (imageSrc: string) => {
    if (!isMobile) {
      setCurrentImage(imageSrc);
      setShowCustomCursor(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowCustomCursor(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between p-2 md:p-4 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Bio Section */}
      <div className="animate-fade-in text-left">
        <h1 className="text-bio-mobile md:text-bio-desktop font-inter font-light leading-[80%]">
          Based in Berlin, Sylvain Maretto is a Product Design Director & Product Generalist. 
          Previously he held IC, Lead and Director positions at{' '}
          <ClientName 
            name="Holoplot" 
            imageSrc={fallbackImages.holoplot} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />, {' '}
          <ClientName 
            name="Zalando" 
            imageSrc={fallbackImages.zalando} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />, {' '}
          <ClientName 
            name="Omio" 
            imageSrc={fallbackImages.omio} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />, {' '}
          <ClientName 
            name="McCann" 
            imageSrc={fallbackImages.mccann} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          /> or {' '}
          <ClientName 
            name="Renault-Nissan" 
            imageSrc={fallbackImages.renaultNissan} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />.
        </h1>
      </div>
      
      {/* Contact Section */}
      <div className="mt-auto mb-4 text-left animate-fade-in">
        <p className="text-contact-mobile md:text-contact-desktop font-inter font-light leading-[80%]">
          Need some product design work, design strategy or management help?
          <br />
          <a
            href="mailto:sylvain.maretto@gmail.com"
            className="contact-link"
            onMouseEnter={() => setShowCustomCursor(false)}
          >
            Email me
          </a>
          {' '} or {' '}
          <a 
            href="https://www.linkedin.com/in/sylvainmaretto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
            onMouseEnter={() => setShowCustomCursor(false)}
          >
            linkedin
          </a>
        </p>
      </div>
      
      {/* Custom Cursor - only on non-mobile */}
      {!isMobile && <CustomCursor visible={showCustomCursor} currentImage={currentImage} />}
    </div>
  );
};

export default Index;
