import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import { Check, MapPin, Utensils, Users } from 'lucide-react';

const Restaurant = () => {
  const { t } = useLanguage();
  return (
    <section id="restaurant" className="section-padding relative bg-gradient-to-b from-white/80 to-cream/40 dark:from-darkBg/80 dark:to-black/60 dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-3 text-gray-800 dark:text-white font-playfair">{t('restaurant_title')}</h2>
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-montserrat">
            {t('restaurant_desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="space-y-6 flex flex-col justify-center champagne-card p-8 rounded-xl shadow-elegant dark:bg-gradient-to-b dark:from-[#23262e]/80 dark:to-[#181a20]/80 dark:border-[#2A2A35]/30 transform transition-all duration-500 hover:shadow-soft">
            <h3 className="heading-3 text-gray-800 dark:text-white font-playfair">{t('restaurant_main_title')}</h3>
            <p className="text-gray-700 dark:text-gray-200 font-montserrat leading-relaxed">
              {t('restaurant_main_desc')}
            </p>
            
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F9F4EC] to-[#E6D7C3] dark:from-[#2A2A35] dark:to-[#23262e] flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_garden')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F9F4EC] to-[#E6D7C3] dark:from-[#2A2A35] dark:to-[#23262e] flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_menu')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F9F4EC] to-[#E6D7C3] dark:from-[#2A2A35] dark:to-[#23262e] flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_staff')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F9F4EC] to-[#E6D7C3] dark:from-[#2A2A35] dark:to-[#23262e] flex items-center justify-center shadow-sm">
                  <Check className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_decor')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[450px] overflow-hidden rounded-xl shadow-elegant hover-lift group">
            <img 
              alt="Черно и Бяло - Елегантна обстановка" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105" 
              src="https://i.ibb.co/HfRs9WjC/restaurant-image.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <section className="py-16 bg-gradient-to-b from-[#F9F4EC]/80 to-[#F0E6D8]/80 dark:from-[#23262e]/90 dark:to-[#181a20]/90 rounded-xl shadow-elegant transition-colors duration-500 mb-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-playfair mb-12 text-center text-gray-800 dark:text-white">{t('restaurant_location_title')}</h2>
            
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-elegant mb-12 transform transition-all duration-500 hover:shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.8042459183503!2d27.259390277379826!3d44.108031022893385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01feecfb988e9%3A0xa76846ef80ee6169!2z0KfQtdGA0L3QviDQuCDQkdGP0LvQvg!5e0!3m2!1sbg!2sbg!4v1744448324163!5m2!1sbg!2sbg" 
                className="w-full h-full border-0" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>

            <div className="md:flex md:justify-center">
              <div className="text-center bg-white/80 dark:bg-black/40 backdrop-blur-sm py-6 px-8 rounded-xl shadow-sm inline-block mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-200 mr-2" />
                  <h3 className="text-2xl font-playfair text-gray-800 dark:text-white">{t('restaurant_location_name')}</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-montserrat">
                  {t('restaurant_location_address')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <Card className="bg-white/60 backdrop-blur-sm shadow-elegant hover-lift border border-[#E6D7C3]/30 dark:bg-[#23262e]/60 dark:border-[#2A2A35]/30 transition-all duration-500 overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3" 
                  alt="Градинска церемония" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-white font-playfair text-xl">{t('restaurant_card1_title')}</h4>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_card1_desc')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm shadow-elegant hover-lift border border-[#E6D7C3]/30 dark:bg-[#23262e]/60 dark:border-[#2A2A35]/30 transition-all duration-500 overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2344&ixlib=rb-4.0.3" 
                  alt="Изискана трапеза" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-white font-playfair text-xl">{t('restaurant_card2_title')}</h4>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_card2_desc')}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm shadow-elegant hover-lift border border-[#E6D7C3]/30 dark:bg-[#23262e]/60 dark:border-[#2A2A35]/30 transition-all duration-500 overflow-hidden rounded-xl">
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3" 
                  alt="Приказна атмосфера" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-white font-playfair text-xl">{t('restaurant_card3_title')}</h4>
                <p className="text-gray-700 dark:text-gray-200 font-montserrat">{t('restaurant_card3_desc')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
