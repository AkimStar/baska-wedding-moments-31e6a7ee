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
      gallerySection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen w-full">
    {/* Hero background image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
        alt="Wedding couple by the sea"
        className="w-full h-full object-cover md:object-[center_25%]"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </div>

    {/* Hero content */}
    <div className="relative container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        BASKA<br />
        PRODUCTION
      </h1>
      <p className="text-xl md:text-2xl mb-4">Сватбен фотограф</p>
      <p className="text-lg md:text-xl mb-8">
        Улавяме Вашите мечтани сватбени моменти със<br />
        сърце и душа
      </p>
      <button 
        onClick={() => scrollToSection('about')} 
        className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        ВИЖТЕ ПОВЕЧЕ
      </button>
    </div>

    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div className="w-6 h-10 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm">
        <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>;
};
export default Hero;