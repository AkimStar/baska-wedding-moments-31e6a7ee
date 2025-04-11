
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#F9F6F2] to-[#F1EBE2]">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-16 text-gray-800">Запознай се с Баска Продъкшън</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-md hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3" 
              alt="Фотограф Баска" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 champagne-card p-8 rounded-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              С повече от 10 години опит в заснемането на любовни истории, нашата мисия е да уловим най-съкровените моменти от вашия специален ден по естествен и дискретен начин.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Нашият стил е естествен, романтичен и ненатрапчив. Вярваме, че най-красивите снимки са тези, които улавят истинските емоции, спонтанните жестове и неподправената радост от деня на вашата сватба.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Фокусираме се върху това да преживеете пълноценно всеки момент от вашия специален ден, докато ние тихо записваме историята ви, готова да бъде преживявана отново и отново през годините.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
