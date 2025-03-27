
import React, { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
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
    <div className="h-screen w-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Bio Section */}
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-inter font-light leading-relaxed">
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
      <div className="mt-auto mb-4 md:mb-8 text-center animate-fade-in">
        <p className="text-lg md:text-xl font-inter font-light">
          Need some product design work, design strategy or management help?
          <br />
          <a
            href="mailto:sylvain.maretto@gmail.com"
            className="contact-link"
            onMouseEnter={() => setShowCustomCursor(false)}
          >
            <span className="flex items-center justify-center gap-1 mt-4 md:inline md:mt-0">
              <Mail className="inline-block w-4 h-4 md:mr-1" /> Email me
            </span>
          </a>
          {' '} or {' '}
          <a 
            href="https://www.linkedin.com/in/sylvainmaretto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
            onMouseEnter={() => setShowCustomCursor(false)}
          >
            <span className="flex items-center justify-center gap-1 mt-4 md:inline md:mt-0">
              <Linkedin className="inline-block w-4 h-4 md:mr-1" /> linkedin
            </span>
          </a>
        </p>
      </div>
      
      {/* Custom Cursor - only on non-mobile */}
      {!isMobile && <CustomCursor visible={showCustomCursor} currentImage={currentImage} />}
    </div>
  );
};

export default Index;
