import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* Typographic Left Side */}
          <div className="flex-1 md:sticky md:top-32">
            <span className="caption-text mb-8">{t('about_title')}</span>
            <h2 className="heading-2 leading-tight mb-8">
              {t('about_subtitle')}
            </h2>
            <div className="w-16 h-[1px] bg-foreground/20 mb-8" />
            <div className="space-y-6">
               <p className="body-text text-lg md:text-xl text-foreground">
                 {t('about_paragraph1')}
               </p>
               <p className="body-text">
                 {t('about_paragraph2')}
               </p>
               <p className="body-text">
                 {t('about_paragraph3')}
               </p>
            </div>
          </div>
          
          {/* Structured Imagery Right Side */}
          <div className="flex-1 w-full space-y-8">
             <div className="aspect-[4/5] w-full overflow-hidden">
               <img 
                 src="/lovable-uploads/about-image.jpeg" 
                 alt="Baska Production Team"
                 className="w-full h-full object-cover img-hover-scale grayscale-[20%]"
               />
             </div>
          </div>
          
        </div>

        {/* 3-in-1 Line Centered Features */}
        <div className="mt-24 md:mt-32 pt-16 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: t('about_feature1_title'), desc: t('about_feature1_desc') },
              { title: t('about_feature2_title'), desc: t('about_feature2_desc') },
              { title: t('about_feature3_title'), desc: t('about_feature3_desc') }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <span className="text-sm md:text-sm uppercase tracking-[0.2em] font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </span>
                <p className="body-text text-sm md:text-base text-foreground/70 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
