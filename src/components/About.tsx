import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import { Camera, Heart, Clock } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  
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
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F9F4EC] rounded-full opacity-20 blur-3xl -z-10 transform -translate-x-1/4 -translate-y-1/4 dark:bg-[#23262e] dark:opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F0E6D8] rounded-full opacity-20 blur-3xl -z-10 transform translate-x-1/4 translate-y-1/4 dark:bg-[#181a20] dark:opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 about-animate">
          <h2 className="heading-2 text-gray-800 dark:text-white font-playfair mb-3">
            <span className="relative inline-block">
              {t('about_title')}
              <span className="absolute -bottom-3 left-1/2 w-32 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent transform -translate-x-1/2 dark:from-[#2A2A35]"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-montserrat">
            {t('about_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl shadow-elegant hover-lift about-animate relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              alt="Baska Production Team" 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-105" 
              src="/lovable-uploads/about-image.jpeg" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-black dark:text-white font-montserrat text-sm">
                  {t('about_image_caption')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 champagne-card p-8 rounded-2xl shadow-elegant about-animate backdrop-blur-sm dark:bg-gradient-to-b dark:from-[#23262e]/80 dark:to-[#181a20]/80 dark:border-[#2A2A35]/30">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-montserrat">
              {t('about_paragraph1')}
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent dark:from-[#2A2A35]"></div>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-montserrat">
              {t('about_paragraph2')}
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent dark:from-[#2A2A35]"></div>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-montserrat">
              {t('about_paragraph3')}
            </p>
            
            {/* Added feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#E6D7C3]/30 dark:border-[#2A2A35]/30">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#F9F4EC] dark:bg-[#23262e] flex items-center justify-center mb-3">
                  <Camera className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat mb-1">{t('about_feature1_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('about_feature1_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#F9F4EC] dark:bg-[#23262e] flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat mb-1">{t('about_feature2_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('about_feature2_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#F9F4EC] dark:bg-[#23262e] flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat mb-1">{t('about_feature3_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('about_feature3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
