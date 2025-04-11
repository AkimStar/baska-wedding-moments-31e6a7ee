
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero-background');
      if (heroSection) {
        // Create a parallax effect
        heroSection.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0" id="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
          alt="Сватбена двойка" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div className="animate-fade-in-up p-8 rounded-lg backdrop-blur-sm bg-black/10 max-w-xl">
          <h1 className="animate-fade-in-up heading-1 mb-4">BASKA PRODUCTION</h1>
          <p className="animate-fade-in-up opacity-0 [animation-delay:300ms] text-xl md:text-2xl mb-6 font-light">Сватбен фотограф</p>
          <p className="animate-fade-in-up opacity-0 [animation-delay:600ms] max-w-2xl text-lg md:text-xl mb-10">
            Улавяме безвременни сватбени моменти със сърце и душа
          </p>
          <Button 
            onClick={scrollToGallery}
            className="animate-fade-in-up opacity-0 [animation-delay:900ms] bg-white text-black hover:bg-blush uppercase text-sm tracking-wider font-medium py-6 px-8"
          >
            Вижте повече
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
