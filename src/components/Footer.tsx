
import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-3">BASKA PRODUCTION</h3>
            <p className="text-sm text-gray-600">Сватбен фотограф</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {[
              { name: "Начало", id: "home" },
              { name: "За нас", id: "about" },
              { name: "Галерия", id: "gallery" },
              { name: "Ресторант", id: "restaurant" },
              { name: "Отзиви", id: "testimonials" },
              { name: "Контакти", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-700 hover:text-black transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="https://www.instagram.com/baskaproduction" 
              className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/baskaproduction" 
              className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="tel:+359888123456" 
              className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <div className="w-full max-w-lg mx-auto border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 text-center">
              © 2025 Baska Production. Всички права запазени.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
