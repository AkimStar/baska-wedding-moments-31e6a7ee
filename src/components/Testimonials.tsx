
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const testimonials = {
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
      quote: "Baska took the most beautiful photos of our special day. He managed to capture every emotion, every moment that would otherwise be forgotten. Professionalism of the highest quality!",
      couple: "Maria and George",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      quote: "Incredible talent! Baska has the unique ability to capture moments and emotions in a way that takes us back to our wedding day every time we look at the photos.",
      couple: "Elena and Dimitar",
      image: "https://images.unsplash.com/photo-1722717629761-0451cb26d134?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      quote: "We never dreamed that our wedding photos could be so beautiful. Baska turned every shot into a true work of art. We are endlessly grateful!",
      couple: "Sofia and Mark",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
    }
  ]
};

const Testimonials = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  
  const currentTestimonials = language === 'bg' ? testimonials.bg : testimonials.en;

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className={cn(
          "heading-2 text-center mb-16",
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        )}>
          {t("Избрани щастливи двойки")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={cn(
                "testimonial-card hover-lift transition-all duration-300",
                theme === "dark" ? "bg-gray-800/80 border-gray-700/50" : "bg-white/80 border-[#E6D7C3]/50"
              )}
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.couple} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <blockquote className={cn(
                "italic mb-4",
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              )}>
                "{testimonial.quote}"
              </blockquote>
              <p className={cn(
                "font-medium",
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              )}>
                — {testimonial.couple}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
