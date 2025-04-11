
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Restaurant = () => {
  return (
    <section id="restaurant" className="section-padding relative bg-gradient-to-b from-[#F9F6F2] to-[#F1EBE2]">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-10 text-gray-800">Нашият ресторант</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Идеално място за вашата сватбена церемония и тържество. Предлагаме елегантна обстановка, 
          изискана кухня и персонализирано обслужване, за да направим вашия специален ден незабравим.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 flex flex-col justify-center champagne-card p-8 rounded-lg">
            <h3 className="heading-3 text-gray-800">Ресторант "Магия"</h3>
            <p className="text-gray-700">
              Нашият ресторант с капацитет до 150 гости е разположен в живописна местност, заобиколен от природа. 
              Със своя елегантен интериор и просторна градина, мястото е идеално за вашата сватбена церемония.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F9F6F2] to-[#EAE0D0] flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Просторна градина за официална церемония</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F9F6F2] to-[#EAE0D0] flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Ексклузивно меню от нашия главен готвач</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F9F6F2] to-[#EAE0D0] flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Професионален персонал и организатори</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F9F6F2] to-[#EAE0D0] flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Възможност за персонализиране на декорацията</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-fit champagne-button hover-lift">
              Изискайте оферта
            </Button>
          </div>
          
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3" 
              alt="Ресторант Магия" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-[#EAE0D0]/30 mb-10">
          <h3 className="heading-3 mb-4 text-center text-gray-800">Нашето местоположение</h3>
          <div className="h-[400px] w-full rounded-lg overflow-hidden border border-[#EAE0D0]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.69541473586!2d23.294632287418866!3d42.69539553327771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2z0KHQvtGE0LjRjywg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1649675165883!5m2!1sbg!2sbg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm hover-lift border border-[#EAE0D0]/30">
            <CardContent className="p-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3" 
                  alt="Градинска церемония" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Градинска церемония</h4>
              <p className="text-gray-700 text-sm">Романтична обстановка за вашата официална церемония на открито.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm hover-lift border border-[#EAE0D0]/30">
            <CardContent className="p-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2344&ixlib=rb-4.0.3" 
                  alt="Изискана трапеза" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Изискана трапеза</h4>
              <p className="text-gray-700 text-sm">Гурме храна и внимание към всеки детайл за вашето тържество.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm hover-lift border border-[#EAE0D0]/30">
            <CardContent className="p-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3" 
                  alt="Приказна атмосфера" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Приказна атмосфера</h4>
              <p className="text-gray-700 text-sm">Декорация и осветление, създаващи магическа атмосфера.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
