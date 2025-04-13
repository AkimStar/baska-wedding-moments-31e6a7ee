
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Баска ни направи най-прекрасните снимки от нашия специален ден. Тя успя да улови всяка емоция, всеки момент, който иначе щеше да бъде забравен. Професионализъм от най-високо качество!",
    couple: "Мария и Георги",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    quote: "Невероятен талант! Баска има уникалното умение да улавя моменти и емоции по начин, който ни връща към деня на нашата сватба всеки път, когато погледнем снимките.",
    couple: "Елена и Димитър",
    image: "https://images.unsplash.com/photo-1513725673171-537abba17912?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    quote: "Никога не сме мечтали, че сватбените ни снимки могат да бъдат толкова красиви. Баска превърна всеки кадър в истинско произведение на изкуството. Благодарим ви безкрайно!",
    couple: "София и Марк",
    image: "https://images.unsplash.com/photo-1583939411023-c22e67fc0322?auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-16 text-gray-800">Избрани щастливи двойки</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card hover-lift transition-all duration-300">
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.couple} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-medium text-gray-800">— {testimonial.couple}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
