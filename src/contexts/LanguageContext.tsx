
import React, { createContext, useState, useContext, ReactNode } from 'react';

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
    
    // Language toggle
    "English": "English",
    "Bulgarian": "Bulgarian",
    
    // Testimonials
    "Избрани щастливи двойки": "Избрани щастливи двойки",
    
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
    
    // Language toggle
    "English": "English",
    "Bulgarian": "Bulgarian",
    
    // Testimonials
    "Избрани щастливи двойки": "Selected Happy Couples",
    
    // Common sections and buttons
    "Тъмен режим": "Dark Mode",
    "Светъл режим": "Light Mode",
    "Език": "Language"
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bg');

  // Translation function
  const t = (key: string): string => {
    if (!translations[language][key as keyof typeof translations[typeof language]]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[language][key as keyof typeof translations[typeof language]];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
