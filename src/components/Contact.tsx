
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-8">Нека създадем магия</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Искате да запечатаме вашите специални моменти? Свържете се с нас, за да обсъдим детайлите и да създадем вашата сватбена история.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          <Card className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Имейл</h3>
              <p className="text-gray-700 mb-4">Пишете ни по всяко време</p>
              <a href="mailto:hello@baskaproduction.com" className="text-black hover:text-gray-700 transition-colors">
                hello@baskaproduction.com
              </a>
            </div>
          </Card>
          
          <Card className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-gray-700 mb-4">На линия сме всеки ден</p>
              <a href="tel:+359888123456" className="text-black hover:text-gray-700 transition-colors">
                +359 888 123 456
              </a>
            </div>
          </Card>
          
          <Card className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Адрес</h3>
              <p className="text-gray-700 mb-4">Посетете ни на място</p>
              <address className="not-italic text-black">
                ул. Витоша 15, гр. София
              </address>
            </div>
          </Card>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center" asChild>
              <a href="https://www.facebook.com/baskaproduction" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center" asChild>
              <a href="https://www.instagram.com/baskaproduction" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center" asChild>
              <a href="https://www.tiktok.com/@baskaproduction" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v8"></path>
                  <path d="M12 16v4"></path>
                  <path d="M17 17v.01"></path>
                  <path d="M12 12v8"></path>
                  <path d="M5 8v.01"></path>
                  <path d="M16.243 3.757c1.562 1.562 2.325 3.57 2.157 5.643h3.6v2.4H16v4.8h-2.4v-8.486c0-2.684-3.201-4.029-5.114-2.114c-1.514 1.514-1.212 4.228.6 6.043">
                  </path>
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-3">Предпочитате да ви се обадим?</p>
            <Button className="bg-black hover:bg-gray-800 text-white" asChild>
              <a href="tel:+359888123456">
                Обадете се сега
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
