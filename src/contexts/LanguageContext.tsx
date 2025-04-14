
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
    "Запознай се с Баска Продъкшън": "Запознай се с Баска Продъкшън",
    "С повече от 10 години опит": "С повече от 10 години опит",
    "Нашият стил е": "Нашият стил е",
    "естествен, романтичен и ненатрапчив": "естествен, романтичен и ненатрапчив",
    "Фокусираме се върху това да преживеете пълноценно всеки момент": "Фокусираме се върху това да преживеете пълноценно всеки момент",
    
    // Gallery section
    "Моите творби": "Моите творби",
    "Избрани снимки": "Избрани снимки",
    "Разгледай повече": "Разгледай повече",
    "Магията в кадри": "Магията в кадри",
    "Всички": "Всички",
    "На открито": "На открито",
    "Интимни": "Интимни",
    "Градски": "Градски",
    "Планински": "Планински",
    "Сватбена двойка в градина": "Сватбена двойка в градина",
    "Булка с букет": "Булка с букет",
    "Сватбена церемония": "Сватбена церемония",
    "Младоженци танцуват": "Младоженци танцуват",
    "Булченски пръстен": "Булченски пръстен",
    "Приготвяне на булката": "Приготвяне на булката",
    "Сватбени детайли": "Сватбени детайли",
    "Младоженци в природата": "Младоженци в природата",
    "Сватбен прием": "Сватбен прием",
    
    // Testimonials section
    "Отзиви": "Отзиви",
    "Избрани щастливи двойки": "Избрани щастливи двойки",
    
    // Restaurant section
    "Ресторант": "Ресторант",
    "Перфектното място за вашето събитие": "Перфектното място за вашето събитие",
    "Разгледай ресторанта": "Разгледай ресторанта",
    "Нашият ресторант": "Нашият ресторант",
    "Идеално място за вашата сватбена церемония и тържество": "Идеално място за вашата сватбена церемония и тържество",
    "Ресторант \"Черно и бяло\"": "Ресторант \"Черно и бяло\"",
    "Нашият ресторант с капацитет до 150 гости": "Нашият ресторант с капацитет до 150 гости",
    "Просторна градина за официална церемония": "Просторна градина за официална церемония",
    "Ексклузивно меню от нашия главен готвач": "Ексклузивно меню от нашия главен готвач",
    "Професионален персонал и организатори": "Професионален персонал и организатори",
    "Възможност за персонализиране на декорацията": "Възможност за персонализиране на декорацията",
    "Нашето местоположение": "Нашето местоположение",
    "Градинска церемония": "Градинска церемония",
    "Изискана трапеза": "Изискана трапеза",
    "Приказна атмосфера": "Приказна атмосфера",
    "Романтична обстановка за вашата официална церемония на открито": "Романтична обстановка за вашата официална церемония на открито",
    "Гурме храна и внимание към всеки детайл за вашето тържество": "Гурме храна и внимание към всеки детайл за вашето тържество",
    "Декорация и осветление, създаващи магическа атмосфера": "Декорация и осветление, създаващи магическа атмосфера",
    
    // Limousine section
    "Лимузина": "Лимузина",
    "Пътувайте със стил": "Пътувайте със стил",
    "Резервирай сега": "Резервирай сега",
    "Зашеметяваща бяла лимузина": "Зашеметяваща бяла лимузина",
    "за вашето специално събитие": "за вашето специално събитие",
    "Предлагаме стилна и просторна лимузина под наем": "Предлагаме стилна и просторна лимузина под наем",
    "Подарете си лукс, удобство и незабравимо присъствие": "Подарете си лукс, удобство и незабравимо присъствие",
    "Резервирайте своята дата": "Резервирайте своята дата",
    "Бяла лимузина под наем": "Бяла лимузина под наем",
    "Луксозен транспорт": "Луксозен транспорт",
    
    // Contact section
    "Свържете се с мен": "Свържете се с мен",
    "Изпрати запитване": "Изпрати запитване",
    "Тел": "Тел",
    "Имейл": "Имейл",
    "Адрес": "Адрес",
    "Нека създадем магия": "Нека създадем магия",
    "Искате да запечатаме вашите специални моменти?": "Искате да запечатаме вашите специални моменти?",
    "Пишете ни по всяко време": "Пишете ни по всяко време",
    "На линия сме всеки ден": "На линия сме всеки ден",
    "Посетете ни на място": "Посетете ни на място",
    "Обадете се сега": "Обадете се сега",
    
    // Footer
    "Всички права запазени": "Всички права запазени",
    "Сватбен фотограф": "Сватбен фотограф",
    "Начало": "Начало",
    "За нас": "За нас",
    
    // Hero content
    "BASKA": "BASKA",
    "PRODUCTION": "PRODUCTION",
    "Улавяме Вашите мечтани сватбени моменти със": "Улавяме Вашите мечтани сватбени моменти със",
    "сърце и душа": "сърце и душа",
    "ВИЖТЕ ПОВЕЧЕ": "ВИЖТЕ ПОВЕЧЕ",
    
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
    "Запознай се с Баска Продъкшън": "Meet Baska Production",
    "С повече от 10 години опит": "With more than 10 years of experience",
    "Нашият стил е": "Our style is",
    "естествен, романтичен и ненатрапчив": "natural, romantic and unobtrusive",
    "Фокусираме се върху това да преживеете пълноценно всеки момент": "We focus on letting you fully experience every moment",
    
    // Gallery section
    "Моите творби": "My Works",
    "Избрани снимки": "Selected Photos",
    "Разгледай повече": "View More",
    "Магията в кадри": "Magic in Frames",
    "Всички": "All",
    "На открито": "Outdoor",
    "Интимни": "Intimate",
    "Градски": "City",
    "Планински": "Mountain",
    "Сватбена двойка в градина": "Wedding couple in garden",
    "Булка с букет": "Bride with bouquet",
    "Сватбена церемония": "Wedding ceremony",
    "Младоженци танцуват": "Newlyweds dancing",
    "Булченски пръстен": "Wedding ring",
    "Приготвяне на булката": "Bride preparation",
    "Сватбени детайли": "Wedding details",
    "Младоженци в природата": "Newlyweds in nature",
    "Сватбен прием": "Wedding reception",
    
    // Testimonials section
    "Отзиви": "Testimonials",
    "Избрани щастливи двойки": "Selected Happy Couples",
    
    // Restaurant section
    "Ресторант": "Restaurant",
    "Перфектното място за вашето събитие": "The Perfect Place for Your Event",
    "Разгледай ресторанта": "View Restaurant",
    "Нашият ресторант": "Our Restaurant",
    "Идеално място за вашата сватбена церемония и тържество": "Perfect place for your wedding ceremony and celebration",
    "Ресторант \"Черно и бяло\"": "Restaurant \"Black and White\"",
    "Нашият ресторант с капацитет до 150 гости": "Our restaurant with capacity for up to 150 guests",
    "Просторна градина за официална церемония": "Spacious garden for official ceremony",
    "Ексклузивно меню от нашия главен готвач": "Exclusive menu from our head chef",
    "Професионален персонал и организатори": "Professional staff and organizers",
    "Възможност за персонализиране на декорацията": "Opportunity to customize decoration",
    "Нашето местоположение": "Our Location",
    "Градинска церемония": "Garden Ceremony",
    "Изискана трапеза": "Exquisite Dining",
    "Приказна атмосфера": "Fairytale Atmosphere",
    "Романтична обстановка за вашата официална церемония на открито": "Romantic setting for your official outdoor ceremony",
    "Гурме храна и внимание към всеки детайл за вашето тържество": "Gourmet food and attention to every detail for your celebration",
    "Декорация и осветление, създаващи магическа атмосфера": "Decoration and lighting creating magical atmosphere",
    
    // Limousine section
    "Лимузина": "Limousine",
    "Пътувайте със стил": "Travel in Style",
    "Резервирай сега": "Book Now",
    "Зашеметяваща бяла лимузина": "Stunning White Limousine",
    "за вашето специално събитие": "for your special event",
    "Предлагаме стилна и просторна лимузина под наем": "We offer a stylish and spacious limousine for rent",
    "Подарете си лукс, удобство и незабравимо присъствие": "Treat yourself to luxury, comfort and an unforgettable presence",
    "Резервирайте своята дата": "Reserve your date",
    "Бяла лимузина под наем": "White limousine for rent",
    "Луксозен транспорт": "Luxury transportation",
    
    // Contact section
    "Свържете се с мен": "Contact Me",
    "Изпрати запитване": "Send Inquiry",
    "Тел": "Phone",
    "Имейл": "Email",
    "Адрес": "Address",
    "Нека създадем магия": "Let's Create Magic",
    "Искате да запечатаме вашите специални моменти?": "Want us to capture your special moments?",
    "Пишете ни по всяко време": "Write to us anytime",
    "На линия сме всеки ден": "We are available every day",
    "Посетете ни на място": "Visit us in person",
    "Обадете се сега": "Call Now",
    
    // Footer
    "Всички права запазени": "All Rights Reserved",
    "Сватбен фотограф": "Wedding Photographer",
    "Начало": "Home",
    "За нас": "About Us",
    
    // Hero content
    "BASKA": "BASKA",
    "PRODUCTION": "PRODUCTION",
    "Улавяме Вашите мечтани сватбени моменти със": "Capturing your dream wedding moments with",
    "сърце и душа": "heart and soul",
    "ВИЖТЕ ПОВЕЧЕ": "VIEW MORE",
    
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
    
    // Force re-render of all components by adding a class and removing it
    document.documentElement.classList.add('language-transition');
    setTimeout(() => {
      document.documentElement.classList.remove('language-transition');
    }, 50);
    
    console.log(`Language changed to: ${language}`);
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
