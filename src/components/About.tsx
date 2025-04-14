
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.about-animate');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9F4EC] rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F0E6D8] rounded-full opacity-30 blur-3xl -z-10 transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-16 text-gray-800 about-animate">
          <span className="relative inline-block">
            {t("Запознай се с Баска Продъкшън")}
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-[#E6D7C3] to-transparent transform -translate-x-1/2"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl hover-lift about-animate relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              alt="Baska Production Team" 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" 
              src="/lovable-uploads/about-image.jpeg" 
            />
          </div>
          
          <div className="space-y-6 champagne-card p-8 rounded-2xl shadow-lg about-animate backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-gray-700">
              {t("С повече от")} <span className="font-semibold">10 {t("години опит")}</span> {t("в заснемането на любовни истории, нашата мисия е да уловим най-съкровените моменти от вашия специален ден по естествен и дискретен начин.")}
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent"></div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              {t("Нашият стил е")} <span className="italic">{t("естествен, романтичен и ненатрапчив")}</span>. {t("Вярваме, че най-красивите снимки са тези, които улавят истинските емоции, спонтанните жестове и неподправената радост от деня на вашата сватба.")}
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent"></div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              {t("Фокусираме се върху това да преживеете пълноценно всеки момент")} {t("от вашия специален ден, докато ние тихо записваме историята ви, готова да бъде преживявана отново и отново през годините.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
