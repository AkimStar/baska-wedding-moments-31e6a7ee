import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { Quote } from 'lucide-react';

const testimonialsData = {
  bg: [
    {
      id: 1,
      quote: "Баска ни направи най-прекрасните снимки от нашия специален ден. Той успя да улови всяка емоция, всеки момент, който иначе щеше да бъде забравен. Професионализъм от най-високо качество!",
      couple: "Мария и Георги",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      quote: "Невероятен талант! Баска има уникалното умение да улавя моменти и емоции по начин, който ни връща към деня на нашата сватба всеки път, когато погледнем снимките.",
      couple: "Елена и Димитър",
      image: "https://images.unsplash.com/photo-1722717629761-0451cb26d134?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      quote: "Никога не сме мечтали, че сватбените ни снимки могат да бъдат толкова красиви. Баска превърна всеки кадър в истинско произведение на изкуството. Благодарим ви безкрайно!",
      couple: "София и Марк",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
    }
  ],
  en: [
    {
      id: 1,
      quote: "Baska took the most wonderful photos of our special day. He managed to capture every emotion, every moment that would otherwise have been forgotten. Top-notch professionalism!",
      couple: "Maria & George",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      quote: "Incredible talent! Baska has a unique ability to capture moments and emotions in a way that brings us back to our wedding day every time we look at the photos.",
      couple: "Elena & Dimitar",
      image: "https://images.unsplash.com/photo-1722717629761-0451cb26d134?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      quote: "We never dreamed our wedding photos could be so beautiful. Baska turned every shot into a true work of art. Thank you endlessly!",
      couple: "Sofia & Mark",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
    }
  ]
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const testimonials = testimonialsData[language];
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Reset visible items when language changes
    setVisibleItems([]);
    
    // Staggered animation for testimonial cards
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        const nextIndex = prev.length;
        if (nextIndex >= testimonials.length) {
          clearInterval(timer);
          return prev;
        }
        return [...prev, testimonials[nextIndex].id];
      });
    }, 300);

    return () => clearInterval(timer);
  }, [language, testimonials]);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-cream/40 to-white/60 dark:from-darkBg/40 dark:to-black/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-3 text-gray-800 dark:text-white font-playfair">{t('testimonials_title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-montserrat">
            {t('testimonials_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card hover-lift transition-all duration-700 opacity-0 transform translate-y-8 ${
                visibleItems.includes(testimonial.id) ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 h-56 overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.couple} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-medium text-white font-montserrat tracking-wide">— {testimonial.couple}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 dark:text-gray-700 opacity-50" />
                <blockquote className="elegant-quote text-gray-700 dark:text-gray-200 mb-4 pl-6 pr-2 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-montserrat uppercase tracking-widest text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {t('testimonials_cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
