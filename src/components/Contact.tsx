import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
const Contact = () => {
  const { t } = useLanguage();
  return <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-8 text-gray-800">{t('contact_title')}</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          {t('contact_intro')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Mail className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('contact_email_label')}</h3>
            <p className="text-gray-700 mb-2">{t('contact_email_desc')}</p>
            <a 
              href="mailto:djanbasri@abv.bg" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              djanbasri@abv.bg
            </a>
          </div>

          <div className="text-center">
            <Phone className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('contact_name_label')}</h3>
            <p className="text-gray-700 mb-2">{t('contact_name_desc')}</p>
            <a 
              href="tel:+359897660627" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              +359 897 650 627
            </a>
          </div>

          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('contact_address_label')}</h3>
            <p className="text-gray-700 mb-2">{t('contact_address_desc')}</p>
            <a 
              href="https://maps.app.goo.gl/GAHXmcU6UY78Kbjt5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {t('contact_address_value')}
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
                href="https://www.tiktok.com/@baska_tm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <Button className="champagne-button shadow-md px-8 py-6" asChild>
              <a href="tel:+359897660627">
                {t('contact_call_now')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;