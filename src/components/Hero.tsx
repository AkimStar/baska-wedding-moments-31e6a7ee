import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Hero background image with enhanced quality */}
      <div className="absolute inset-0" id="hero-background">
        <img
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
          alt="Wedding couple by the sea"
          className="w-full h-full object-cover md:object-[center_25%]"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Hero content with improved animations */}
      <div className="relative container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center text-white">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            BASKA<br />
            PRODUCTION
          </h1>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-xl md:text-2xl mb-4 font-light">Сватбен фотограф</p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-xl mb-12 max-w-2xl">
            Улавяме Вашите мечтани сватбени моменти със<br />
            сърце и душа
          </p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button 
            onClick={() => scrollToSection('about')} 
            className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30 transform hover:-translate-y-1"
          >
            ВИЖТЕ ПОВЕЧЕ
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce z-10">
        <div className="w-12 h-16 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
