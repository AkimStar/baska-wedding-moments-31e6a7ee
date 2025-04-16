import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Parallax } from 'react-parallax';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const titleChars = titleRef.current?.querySelectorAll('.char');
    const subtitleChars = subtitleRef.current?.querySelectorAll('.char');

    tl.fromTo(titleChars, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.03 }, 0);
    tl.fromTo(subtitleChars, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.02 }, 0.5);
    tl.fromTo(descriptionRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1);
    tl.fromTo(buttonRef.current, { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.8 }, 1.3);

    gsap.fromTo(scrollIndicatorRef.current, { y: -10, opacity: 0.7 }, {
      y: 10, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
        >
          <source src="/videos/wedding-hero.mp4" type="video/mp4" />
        </video>
      </div>

      <Parallax strength={300} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-20 mix-blend-overlay opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/20" />
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-amber-200/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-blue-900/10 to-transparent" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-30 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center text-white">
          <div className="mb-6">
            <h1
              ref={titleRef}
              className="heading-1 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-shadow-lg whitespace-nowrap"
            >
              {splitText(t('hero_title').split(' ').join(' '))}
            </h1>
          </div>
          <div className="mb-4">
            <p ref={subtitleRef} className="font-playfair text-2xl md:text-3xl font-light tracking-wide text-shadow-md">
              {splitText(t('hero_subtitle'))}
            </p>
          </div>
          <div className="mb-12">
            <p ref={descriptionRef} className="font-montserrat text-lg md:text-xl max-w-2xl leading-relaxed text-shadow-sm">
              {t('hero_desc')}
            </p>
          </div>
          <div>
            <button
              ref={buttonRef}
              onClick={() => scrollToSection('about')}
              className="btn-primary bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full backdrop-blur-sm transition-all duration-700 border border-white/30 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] uppercase tracking-widest font-montserrat"
            >
              {t('hero_button')}
            </button>
          </div>
        </div>
      </Parallax>

      <div ref={scrollIndicatorRef} className="absolute bottom-10 inset-x-0 flex justify-center z-40">
        <div
          className="w-14 h-20 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm hover:border-white transition-all duration-500 cursor-pointer transform hover:scale-110"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-5 h-5 text-white/70 hover:text-white transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
