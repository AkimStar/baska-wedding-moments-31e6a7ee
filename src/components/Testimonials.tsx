import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = {
  bg: [
    {
      id: 1,
      quote: "Баска ни направи най-прекрасните снимки от нашия специален ден. Той успя да улови всяка емоция, всеки момент, който иначе щеше да бъде забравен. Професионализъм от най-високо качество!",
      couple: "Мария и Георги",
      date: "Септември 2025"
    },
    {
      id: 2,
      quote: "Невероятен талант! Баска има уникалното умение да улавя моменти и емоции по начин, който ни връща към деня на нашата сватба всеки път, когато погледнем снимките.",
      couple: "Елена и Димитър",
      date: "Април 2025"
    },
    {
      id: 3,
      quote: "Никога не сме мечтали, че сватбените ни снимки могат да бъдат толкова красиви. Баска превърна всеки кадър в истинско произведение на изкуството. Благодарим ви безкрайно!",
      couple: "София и Марк",
      date: "Октомври 2024"
    }
  ],
  en: [
    {
      id: 1,
      quote: "Baska took the most wonderful photos of our special day. He managed to capture every emotion, every moment that would otherwise have been forgotten. Top-notch professionalism!",
      couple: "Maria & George",
      date: "September 2025"
    },
    {
      id: 2,
      quote: "Incredible talent! Baska has a unique ability to capture moments and emotions in a way that brings us back to our wedding day every time we look at the photos.",
      couple: "Elena & Dimitar",
      date: "April 2025"
    },
    {
      id: 3,
      quote: "We never dreamed our wedding photos could be so beautiful. Baska turned every shot into a true work of art. Thank you endlessly!",
      couple: "Sofia & Mark",
      date: "October 2024"
    }
  ]
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const testimonials = testimonialsData[language];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [activeIndex, language]);

  return (
    <section id="testimonials" className="section-padding bg-muted border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <span className="caption-text flex justify-center">{t('testimonials_title')}</span>
        
        <div className="relative min-h-[300px] flex items-center justify-center mt-16 mb-16">
           
           <div className="transition-opacity duration-700 w-full max-w-3xl animate-in fade-in zoom-in-95" key={activeIndex}>
             <h3 className="heading-3 md:text-3xl leading-relaxed text-foreground mb-10 font-light italic text-foreground/90">
               "{testimonials[activeIndex].quote}"
             </h3>
             
             <div className="flex flex-col items-center">
               <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-foreground mb-2">
                 {testimonials[activeIndex].couple}
               </span>
               <span className="text-[10px] md:text-xs text-muted-foreground font-montserrat tracking-widest uppercase opacity-70">
                 {testimonials[activeIndex].date}
               </span>
             </div>
           </div>
        </div>
        
        {/* Minimal Controls */}
        <div className="flex items-center justify-center gap-12 text-muted-foreground">
          <button onClick={handlePrev} className="hover:text-foreground transition-colors p-2">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-foreground scale-125" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="hover:text-foreground transition-colors p-2">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
