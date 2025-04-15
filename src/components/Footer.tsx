import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Footer = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { name: t('nav_home'), id: 'home' },
    { name: t('nav_about'), id: 'about' },
    { name: t('nav_gallery'), id: 'gallery' },
    { name: t('nav_restaurant'), id: 'restaurant' },
    { name: t('nav_limousine'), id: 'limousine' },
    { name: t('nav_testimonials'), id: 'testimonials' },
    { name: t('nav_contact'), id: 'contact' }
  ];

  return (
    <footer className="py-12 bg-[#F9F4EC] dark:bg-[#23262e] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/logo.png" 
              alt="Baska Production Logo" 
              className="h-16 w-auto mb-3" 
            />
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('footer_photographer')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {menuItems.map(item => 
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover-lift dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </button>
            )}
          </div>
          <div className="w-full max-w-lg mx-auto border-t border-[#E6D7C3] dark:border-[#333] pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              © 2025 Baska Production. {t('footer_rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
