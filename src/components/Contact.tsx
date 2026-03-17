import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="bg-background pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        <span className="caption-text flex justify-center mb-8">{t('contact_title')}</span>
        
        <h2 className="heading-1 text-foreground leading-none mb-6">
          {t('contact_magic_title')} <br />
          <span className="italic font-light">{t('contact_magic_subtitle')}</span>
        </h2>
        
        <p className="body-text text-xl max-w-2xl mx-auto mb-20">
          {t('contact_intro')}
        </p>
        
        {/* Massive Contact Links */}
        <div className="flex flex-col gap-12 mb-32 border-y border-border py-16">
           <a 
             href="mailto:djanbasri@abv.bg" 
             className="heading-2 hover:text-primary transition-colors inline-block"
           >
             djanbasri@abv.bg
           </a>
           <a 
             href="tel:+359897660627" 
             className="heading-2 hover:text-primary transition-colors inline-block"
           >
             +359 897 650 627
           </a>
        </div>
        
        {/* Footer Area inside Contact block */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center text-sm font-montserrat tracking-widest uppercase text-muted-foreground w-full">
           
           <div className="flex gap-6">
             <a href="https://www.facebook.com/djankooo" className="hover:text-foreground transition-colors">Facebook</a>
             <a href="https://www.instagram.com/djan.bm" className="hover:text-foreground transition-colors">Instagram</a>
             <a href="https://www.tiktok.com/@baska_tm" className="hover:text-foreground transition-colors">TikTok</a>
           </div>

           <p>
             © {new Date().getFullYear()} BASKA. {t('footer_rights')}
           </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;
