import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import gsap from 'gsap';

const Hero = () => {
  const { t } = useLanguage();
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Cinematic intro sequence
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial overlay fade
    tl.to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0.4)", duration: 2 })
      .fromTo(title1Ref.current, 
        { y: 100, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, 
        "-=1"
      )
      .fromTo(title2Ref.current, 
        { y: 100, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, 
        "-=1.2"
      )
      .fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2 }, 
        "-=1"
      )
      .fromTo(buttonRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.8"
      )
      .fromTo(scrollIndicatorRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }, 
        "-=0.5"
      );

    // Continuous soft bounce for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
      delay: 2
    });

    return () => { tl.kill(); };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black selection:bg-white/20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transform scale-105" // Slight scale to avoid edge artifacts
          style={{ transition: 'transform 10s ease-out' }} // Slow pan if reactivated later
        >
          <source src="/videos/wedding-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Luxury Gradients & Overlays (Noise + Vignette + Fade) */}
      <div className="absolute inset-0 noise-overlay" />
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 mix-blend-multiply transition-colors duration-[3000ms]" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-60" />

      {/* Content Container */}
      <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        
        {/* Subtitle / Eyebrow */}
        <div className="overflow-hidden mb-6">
          <p 
            ref={subtitleRef} 
            className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold font-montserrat"
          >
            {t('hero_subtitle')}
          </p>
        </div>

        {/* Massive Luxury Title */}
        <div className="mb-4">
           {/* Splitting title for staggered elegant reveal if desired */}
          <div className="overflow-hidden">
            <h1 
              ref={title1Ref}
              className="heading-1 text-white text-glow mb-2"
            >
              BASKA
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 
              ref={title2Ref}
              className="heading-1 text-white text-glow"
            >
              PRODUCTION
            </h1>
          </div>
        </div>

        {/* Optional small description */}
        <p className="subtitle text-white/70 max-w-xl mx-auto mb-12 mt-6 font-light">
          {t('hero_desc')}
        </p>

        {/* Premium Button */}
        <button
          ref={buttonRef}
          onClick={() => scrollToSection('about')}
          className="group relative flex items-center justify-center px-10 py-4 rounded-full glass-panel border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-medium font-montserrat mt-0.5">
            {t('hero_button')}
          </span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-12 inset-x-0 flex justify-center z-40 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <div ref={scrollIndicatorRef} className="flex flex-col items-center opacity-0">
          <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-4 font-montserrat group-hover:text-white transition-colors duration-300">
            {t('hero_scroll')}
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[30%] bg-white animate-[bounce_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
