
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define available languages
export type Language = 'bg' | 'en';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'bg',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translation data
const translations = {
  bg: {
    // Navbar items
    "НАЧАЛО": "НАЧАЛО",
    "ЗА МЕН": "ЗА МЕН",
    "ГАЛЕРИЯ": "ГАЛЕРИЯ",
    "ОТЗИВИ": "ОТЗИВИ",
    "РЕСТОРАНТ": "РЕСТОРАНТ",
    "ЛИМУЗИНА": "ЛИМУЗИНА",
    "КОНТАКТИ": "КОНТАКТИ",
    
    // Hero section
    "Улавям незабравими моменти": "Улавям незабравими моменти",
    "Професионална сватбена фотография": "Професионална сватбена фотография",
    "Запази дата": "Запази дата",
    
    // About section
    "За мен": "За мен",
    "Здравейте, аз съм Васил Баска": "Здравейте, аз съм Васил Баска",
    "Професионален фотограф с над 10 години опит": "Професионален фотограф с над 10 години опит",
    "Моята страст е да улавям най-специалните моменти от вашия живот": "Моята страст е да улавям най-специалните моменти от вашия живот",
    
    // Gallery section
    "Моите творби": "Моите творби",
    "Избрани снимки": "Избрани снимки",
    "Разгледай повече": "Разгледай повече",
    
    // Testimonials section
    "Отзиви": "Отзиви",
    "Избрани щастливи двойки": "Избрани щастливи двойки",
    
    // Restaurant section
    "Ресторант": "Ресторант",
    "Перфектното място за вашето събитие": "Перфектното място за вашето събитие",
    "Разгледай ресторанта": "Разгледай ресторанта",
    
    // Limousine section
    "Лимузина": "Лимузина",
    "Пътувайте със стил": "Пътувайте със стил",
    "Резервирай сега": "Резервирай сега",
    
    // Contact section
    "Свържете се с мен": "Свържете се с мен",
    "Изпрати запитване": "Изпрати запитване",
    "Тел": "Тел",
    "Имейл": "Имейл",
    "Адрес": "Адрес",
    
    // Footer
    "Всички права запазени": "Всички права запазени",
    
    // Common sections and buttons
    "Тъмен режим": "Тъмен режим",
    "Светъл режим": "Светъл режим",
    "Език": "Език"
  },
  en: {
    // Navbar items
    "НАЧАЛО": "HOME",
    "ЗА МЕН": "ABOUT ME",
    "ГАЛЕРИЯ": "GALLERY",
    "ОТЗИВИ": "TESTIMONIALS",
    "РЕСТОРАНТ": "RESTAURANT",
    "ЛИМУЗИНА": "LIMOUSINE",
    "КОНТАКТИ": "CONTACTS",
    
    // Hero section
    "Улавям незабравими моменти": "Capturing Unforgettable Moments",
    "Професионална сватбена фотография": "Professional Wedding Photography",
    "Запази дата": "Book a Date",
    
    // About section
    "За мен": "About Me",
    "Здравейте, аз съм Васил Баска": "Hello, I'm Vasil Baska",
    "Професионален фотограф с над 10 години опит": "Professional photographer with over 10 years of experience",
    "Моята страст е да улавям най-специалните моменти от вашия живот": "My passion is capturing the most special moments of your life",
    
    // Gallery section
    "Моите творби": "My Works",
    "Избрани снимки": "Selected Photos",
    "Разгледай повече": "View More",
    
    // Testimonials section
    "Отзиви": "Testimonials",
    "Избрани щастливи двойки": "Selected Happy Couples",
    
    // Restaurant section
    "Ресторант": "Restaurant",
    "Перфектното място за вашето събитие": "The Perfect Place for Your Event",
    "Разгледай ресторанта": "View Restaurant",
    
    // Limousine section
    "Лимузина": "Limousine",
    "Пътувайте със стил": "Travel in Style",
    "Резервирай сега": "Book Now",
    
    // Contact section
    "Свържете се с мен": "Contact Me",
    "Изпрати запитване": "Send Inquiry",
    "Тел": "Phone",
    "Имейл": "Email",
    "Адрес": "Address",
    
    // Footer
    "Всички права запазени": "All Rights Reserved",
    
    // Common sections and buttons
    "Тъмен режим": "Dark Mode",
    "Светъл режим": "Light Mode",
    "Език": "Language"
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or use default (Bulgarian)
    const savedLang = localStorage.getItem('language') as Language | null;
    return savedLang || 'bg';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    if (!currentTranslations[key as keyof typeof currentTranslations]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return currentTranslations[key as keyof typeof currentTranslations];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
