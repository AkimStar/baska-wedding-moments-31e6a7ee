import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream/40 to-white/80 dark:from-darkBg/40 dark:to-black/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-3 text-gray-800 dark:text-white font-playfair">{t('contact_title')}</h2>
          <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-montserrat">
            {t('contact_intro')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/30 dark:border-[#2A2A35]/30 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1">
            <Mail className="w-8 h-8 mx-auto mb-4 text-gray-700 dark:text-gray-200" />
            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white font-playfair">{t('contact_email_label')}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-montserrat">{t('contact_email_desc')}</p>
            <a 
              href="mailto:djanbasri@abv.bg" 
              className="inline-block text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 font-montserrat border-b border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 pb-1"
            >
              djanbasri@abv.bg
            </a>
          </Card>

          <Card className="text-center p-8 bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/30 dark:border-[#2A2A35]/30 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1">
            <Phone className="w-8 h-8 mx-auto mb-4 text-gray-700 dark:text-gray-200" />
            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white font-playfair">{t('contact_name_label')}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-montserrat">{t('contact_name_desc')}</p>
            <a 
              href="tel:+359897660627" 
              className="inline-block text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 font-montserrat border-b border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 pb-1"
            >
              +359 897 650 627
            </a>
          </Card>

          <Card className="text-center p-8 bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/30 dark:border-[#2A2A35]/30 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-gray-700 dark:text-gray-200" />
            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white font-playfair">{t('contact_address_label')}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-montserrat">{t('contact_address_desc')}</p>
            <a 
              href="https://maps.app.goo.gl/GAHXmcU6UY78Kbjt5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 font-montserrat border-b border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 pb-1"
            >
              {t('contact_address_value')}
            </a>
          </Card>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center space-x-6 mb-16">
            <Button 
              variant="outline" 
              className="rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 text-gray-800 dark:text-gray-200 hover:bg-[#E6D7C3]/20 dark:hover:bg-[#2A2A35]/50 shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1" 
              asChild
            >
              <a href="https://www.facebook.com/djankooo" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 text-gray-800 dark:text-gray-200 hover:bg-[#E6D7C3]/20 dark:hover:bg-[#2A2A35]/50 shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1" 
              asChild
            >
              <a href="https://www.instagram.com/djan.bm" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white/70 dark:bg-black/30 backdrop-blur-sm border-[#E6D7C3]/50 dark:border-[#2A2A35]/50 text-gray-800 dark:text-gray-200 hover:bg-[#E6D7C3]/20 dark:hover:bg-[#2A2A35]/50 shadow-elegant hover:shadow-soft transition-all duration-500 transform hover:-translate-y-1" 
              asChild
            >
              <a
                href="https://www.tiktok.com/@baska_tm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-elegant hover:shadow-soft px-8 py-6 rounded-full transition-all duration-500 group font-montserrat tracking-wide" 
              asChild
            >
              <a href="tel:+359897660627" className="flex items-center gap-3">
                <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>{t('contact_call_now')}</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-gray-600 dark:text-gray-400 font-montserrat text-sm">
            © {new Date().getFullYear()} Baska Production. {t('footer_rights')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
