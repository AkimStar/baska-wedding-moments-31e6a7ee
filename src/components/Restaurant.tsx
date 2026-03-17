import React from 'react';
import { useLanguage } from './LanguageProvider';

const Restaurant = () => {
  const { t } = useLanguage();

  const features = [
    { title: t('restaurant_garden'), desc: t('restaurant_card1_desc') },
    { title: t('restaurant_menu'), desc: t('restaurant_card2_desc') },
    { title: t('restaurant_staff'), desc: t('restaurant_card3_desc') },
    { title: t('restaurant_decor'), desc: t('restaurant_card4_desc') }
  ];

  return (
    <section id="restaurant" className="bg-background text-foreground py-32 border-y border-border transition-colors duration-1000">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Massive Typographic Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 md:gap-8 text-center md:text-left">
          <div className="max-w-4xl flex flex-col items-center md:items-start">
            <span className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-foreground/50 mb-4 md:mb-8 block">
              {t('restaurant_title')}
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair tracking-tight leading-none text-foreground">
              {t('restaurant_main_title').replace(/Ресторант |"/g, '') || "Черно и Бяло"}
            </h2>
          </div>
          <div className="max-w-xs pb-2 mt-2 md:mt-0 md:text-right">
            <p className="font-serif italic text-xl md:text-2xl text-foreground/70">
              {t('restaurant_desc')}
            </p>
          </div>
        </div>

        {/* Cinematic Wide Image */}
        <div className="w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden bg-muted mb-12 lg:mb-16 relative group">
          <img 
            src="https://i.ibb.co/HfRs9WjC/restaurant-image.jpg" 
            alt="Restaurant Cherno i Byalo"
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-20 px-4">
           <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
             {t('restaurant_main_desc')}
           </p>
        </div>

        {/* Minimal Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-border pt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              <span className="font-montserrat text-[10px] tracking-widest text-foreground/40 block transition-colors duration-500 group-hover:text-foreground">
                0{idx + 1} —
              </span>
              <h4 className="font-playfair text-2xl text-foreground">{feature.title}</h4>
              <p className="font-light text-sm text-foreground/70 leading-relaxed font-montserrat">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Location Bar */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl mt-32">
        <div className="bg-muted/30 border border-border p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-muted/50 transition-colors duration-500 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-3xl mb-3 text-foreground">
              {t('restaurant_location_name')}
            </h3>
            <p className="text-foreground/70 text-sm font-light font-montserrat">
              {t('restaurant_location_address')}
            </p>
          </div>
          <a 
            href="https://maps.app.goo.gl/GAHXmcU6UY78Kbjt5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-foreground text-background font-montserrat text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
          >
            {t('restaurant_get_directions')}
          </a>
        </div>
      </div>

    </section>
  );
};

export default Restaurant;
