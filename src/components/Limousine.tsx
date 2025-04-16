import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Star, Shield, Clock } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Limousine = () => {
  const { t } = useLanguage();
  return (
    <section id="limousine" className="section-padding overflow-hidden relative bg-gradient-to-b from-white/80 to-cream/40 dark:from-darkBg/80 dark:to-black/60">
      {/* Enhanced background decoration */}
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-gradient-to-br from-[#F9F4EC] to-[#E6D7C3] dark:from-[#23262e] dark:to-[#181a20] rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-gradient-to-tl from-[#F9F4EC] to-[#E6D7C3] dark:from-[#23262e] dark:to-[#181a20] rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content with improved typography and layout */}
          <div className="space-y-8 transform transition-all duration-700 hover:translate-x-2">
            <div>
              <h2 className="heading-2 text-gray-800 dark:text-white relative font-playfair">
                <span className="inline-block pb-2 relative">
                  {t('limousine_title')}
                  <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-[#E6D7C3] to-transparent dark:from-[#2A2A35]"></span>
                </span>
              </h2>
              <p className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mt-2 font-playfair">{t('limousine_subtitle')}</p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-montserrat">
              {t('limousine_desc1')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed italic font-montserrat">
              {t('limousine_desc2')}
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-4 bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-sm">
                <Star className="w-6 h-6 text-gray-700 dark:text-gray-200 mb-2" />
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat">{t('limousine_feature1_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('limousine_feature1_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-sm">
                <Shield className="w-6 h-6 text-gray-700 dark:text-gray-200 mb-2" />
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat">{t('limousine_feature2_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('limousine_feature2_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-sm">
                <Clock className="w-6 h-6 text-gray-700 dark:text-gray-200 mb-2" />
                <h4 className="font-medium text-gray-800 dark:text-white font-montserrat">{t('limousine_feature3_title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-montserrat">{t('limousine_feature3_desc')}</p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-elegant hover:shadow-soft px-8 py-6 rounded-full transition-all duration-500 group" asChild>
                <a href="#contact" className="flex items-center gap-3 font-montserrat tracking-wide">
                  <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>{t('limousine_button')}</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side - Limousine image with enhanced presentation */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-elegant group transform transition-all duration-700 hover:-translate-x-2 hover:shadow-soft">
            <img 
              alt={t('limousine_title')} 
              className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1676107648535-931375db52e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 z-20 bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white font-medium font-montserrat">{t('limousine_label')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limousine;
