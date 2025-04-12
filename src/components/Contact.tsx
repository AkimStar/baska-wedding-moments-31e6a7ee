import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const Contact = () => {
  return <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-8 text-gray-800">Нека създадем магия</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Искате да запечатаме вашите специални моменти? Свържете се с нас, за да обсъдим детайлите и да създадем вашата сватбена история.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Mail className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Имейл</h3>
            <p className="text-gray-700 mb-2">Пишете ни по всяко време</p>
            <a 
              href="mailto:djanbasri@abv.bg" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              djanbasri@abv.bg
            </a>
          </div>

          <div className="text-center">
            <Phone className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <p className="text-gray-700 mb-2">На линия сме всеки ден</p>
            <a 
              href="tel:+359897660627" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              +359 897 650 627
            </a>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p className="text-gray-700 mb-2">Посетете ни на място</p>
            <a 
              href="https://maps.app.goo.gl/GAHXmcU6UY78Kbjt5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              бул. Велико Търново №35, гр. Силистра
            </a>
          </div>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center champagne-button hover-lift" asChild>
              <a href="https://www.facebook.com/djankooo" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center champagne-button hover-lift" asChild>
              <a href="https://www.instagram.com/djan.bm" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center champagne-button hover-lift" asChild>
              <a
                href="https://www.tiktok.com/@baskaproduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.9 5.82s-.51.5 0 0zm-1.84-2.16a4.278 4.278 0 01-8.24 2.16s-.51.5 0 0a4.278 4.278 0 018.24-2.16s.51-.5 0 0z"/>
                  <path d="M19 10.5V8.8h-2.6v9.4a2.93 2.93 0 01-2.93 2.93 2.93 2.93 0 01-2.93-2.93 2.93 2.93 0 012.93-2.93c.16 0 .31.02.46.05v-1.72a4.78 4.78 0 00-6.78 4.6A4.78 4.78 0 0013.4 22a4.78 4.78 0 004.78-4.78V10.5H19z"/>
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <Button className="champagne-button shadow-md px-8 py-6" asChild>
              <a href="tel:+359897660627">
                Обадете се сега
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;