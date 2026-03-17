import React from 'react';
import { useLanguage } from './LanguageProvider';

const Limousine = () => {
  const { t } = useLanguage();
  return (
    <section id="limousine" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <img 
           alt={t('limousine_title')} 
           className="w-full h-full object-cover grayscale-[30%]" 
           src="https://images.unsplash.com/photo-1676107648535-931375db52e2?q=80&w=2670" 
         />
      </div>
      
      {/* Centered Content */}
      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl py-32">
         
         <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-white/70 block mb-6">
           {t('limousine_label')}
         </span>
         
         <h2 className="heading-1 text-white mb-8">
           {t('limousine_title')}
         </h2>
         
         <p className="font-playfair text-2xl md:text-3xl text-white/90 italic mb-12 font-light">
           {t('limousine_subtitle')}
         </p>
         
         <div className="flex flex-col md:flex-row gap-8 justify-center text-left max-w-2xl mx-auto mb-16">
            <p className="font-montserrat text-white/80 leading-relaxed font-light flex-1">
              {t('limousine_desc1')}
            </p>
            <p className="font-montserrat text-white/80 leading-relaxed font-light flex-1">
              {t('limousine_desc2')}
            </p>
         </div>

         {/* Features List */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-3xl mx-auto mb-16">
            <div>
               <h4 className="font-montserrat text-xs uppercase tracking-widest text-white mb-2">{t('limousine_feature1_title')}</h4>
               <p className="font-montserrat text-xs text-white/60 leading-relaxed">{t('limousine_feature1_desc')}</p>
            </div>
            <div>
               <h4 className="font-montserrat text-xs uppercase tracking-widest text-white mb-2">{t('limousine_feature2_title')}</h4>
               <p className="font-montserrat text-xs text-white/60 leading-relaxed">{t('limousine_feature2_desc')}</p>
            </div>
            <div>
               <h4 className="font-montserrat text-xs uppercase tracking-widest text-white mb-2">{t('limousine_feature3_title')}</h4>
               <p className="font-montserrat text-xs text-white/60 leading-relaxed">{t('limousine_feature3_desc')}</p>
            </div>
         </div>
         
         <a 
           href="#contact" 
           className="inline-flex items-center justify-center px-10 py-5 bg-white text-black hover:bg-white/90 transition-colors font-montserrat text-xs tracking-[0.2em] uppercase font-medium"
         >
           {t('limousine_button')}
         </a>
      </div>
      
    </section>
  );
};

export default Limousine;
