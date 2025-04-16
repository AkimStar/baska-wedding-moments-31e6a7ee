import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Hero = () => {
  const { t } = useLanguage();
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
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Hero content with improved animations and typography */}
      <div className="relative container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center text-white">
        <div className="animate-text-focus-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h1 className="heading-1 text-5xl md:text-7xl font-bold mb-6 tracking-tight text-shadow">
            {t('hero_title').split(' ').map((word, i) => (
              <React.Fragment key={i}>{word}<br /></React.Fragment>
            ))}
          </h1>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="font-playfair text-xl md:text-2xl mb-4 font-light tracking-wide">{t('hero_subtitle')}</p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <p className="font-montserrat text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            {t('hero_desc')}
          </p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button 
            onClick={() => scrollToSection('about')} 
            className="btn-primary bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-500 border border-white/30 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] uppercase tracking-widest font-montserrat"
          >
            {t('hero_button')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 inset-x-0 flex justify-center animate-bounce z-10">
        <div className="w-12 h-16 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm hover:border-white transition-all duration-300 cursor-pointer" onClick={() => scrollToSection('about')}>
          <ArrowDown className="w-4 h-4 text-white/70 hover:text-white transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
