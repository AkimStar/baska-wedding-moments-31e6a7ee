
import React from 'react';
import { Button } from '@/components/ui/button';

const Limousine = () => {
  return (
    <section id="limousine" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="heading-2 text-gray-800">Зашеметяваща бяла лимузина за вашето събитие</h2>
            <p className="text-gray-700">
              Предлагаме стилна и просторна лимузина под наем за сватби, абитуриентски балове и други специални поводи.
            </p>
            <p className="text-gray-700">
              Подарете си лукс, удобство и незабравимо присъствие.
            </p>
            <div className="pt-2">
              <Button className="champagne-button shadow-md px-8 py-6 hover-lift" asChild>
                <a href="#contact">
                  Свържете се с нас, за да резервирате вашата дата
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side - Limousine image */}
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg hover-lift">
            <img 
              alt="Бяла лимузина под наем" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limousine;
