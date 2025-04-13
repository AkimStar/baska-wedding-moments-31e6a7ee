import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';

const Limousine = () => {
  return (
    <section id="limousine" className="section-padding overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#F9F4EC] to-[#E6D7C3] rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tl from-[#F9F4EC] to-[#E6D7C3] rounded-full opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content with improved typography and layout */}
          <div className="space-y-8 transform transition-all duration-700 hover:translate-x-2">
            <h2 className="heading-2 text-gray-800 relative">
              <span className="inline-block pb-2 relative">
                Зашеметяваща бяла лимузина
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#E6D7C3] to-transparent"></span>
              </span>
              <span className="block text-2xl sm:text-3xl text-gray-600 mt-2">за вашето специално събитие</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Предлагаме стилна и просторна лимузина под наем за сватби, абитуриентски балове и други специални поводи.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed italic">
              Подарете си лукс, удобство и незабравимо присъствие.
            </p>
            
            <div className="pt-4">
              <Button className="champagne-button shadow-lg px-8 py-6 hover:shadow-xl transition-all duration-300 group" asChild>
                <a href="#contact" className="flex items-center gap-3">
                  <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Резервирайте своята дата</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side - Limousine image with enhanced presentation */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl group transform transition-all duration-700 hover:-translate-x-2">
            <img 
              alt="Бяла лимузина под наем" 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1676107648535-931375db52e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
              <span className="text-white font-medium">Луксозен транспорт</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limousine;
