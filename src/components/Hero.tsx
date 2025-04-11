
import React from 'react';

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
          alt="Сватбена двойка" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="animate-fade-in-up heading-1 mb-4">BASKA PRODUCTION</h1>
        <p className="animate-fade-in-up opacity-0 [animation-delay:300ms] text-xl md:text-2xl mb-6">Сватбен фотограф</p>
        <p className="animate-fade-in-up opacity-0 [animation-delay:600ms] max-w-2xl text-lg md:text-xl mb-10">Улавяме безвременни сватбени моменти със сърце и душа</p>
        <button 
          onClick={scrollToGallery}
          className="animate-fade-in-up opacity-0 [animation-delay:900ms] btn-primary rounded-sm"
        >
          Вижте повече
        </button>
      </div>
    </section>
  );
};

export default Hero;
