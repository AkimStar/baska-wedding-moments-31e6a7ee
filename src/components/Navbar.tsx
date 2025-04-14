
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle between Bulgarian and English
  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  const menuItems = [
    { name: "НАЧАЛО", id: "home" },
    { name: "ЗА МЕН", id: "about" },
    { name: "ГАЛЕРИЯ", id: "gallery" },
    { name: "ОТЗИВИ", id: "testimonials" },
    { name: "РЕСТОРАНТ", id: "restaurant" },
    { name: "ЛИМУЗИНА", id: "limousine" },
    { name: "КОНТАКТИ", id: "contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled 
          ? theme === "dark" 
            ? "bg-gradient-to-r from-[#1A1F2C]/90 to-[#221F26]/90 shadow-md backdrop-blur-md" 
            : "bg-gradient-to-r from-[#F9F4EC]/90 to-[#F0E6D8]/90 shadow-md backdrop-blur-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className={cn(
            "flex items-center space-x-2 transition-colors duration-300",
            scrolled 
              ? theme === "dark" ? "text-white" : "text-black" 
              : "text-white"
          )}
        >
          <img 
            src="/logo.png" 
            alt="Baska Production Logo" 
            className="h-16 w-auto transition-transform hover:scale-105"
          />
        </a>
        
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "navbar-link transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                theme === "dark"
                  ? scrolled 
                    ? "text-white/80 hover:text-white after:bg-white/60" 
                    : "text-white/90 hover:text-white after:bg-white/60"
                  : scrolled 
                    ? "text-black/80 hover:text-black after:bg-black/60" 
                    : "text-white/90 hover:text-white after:bg-white/60"
              )}
            >
              {t(item.name)}
            </button>
          ))}
        </div>
        
        {/* Language and Dark Mode Toggles */}
        <div className="hidden md:flex items-center ml-6 space-x-2">
          {/* Language Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className={cn(
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : scrolled
                  ? "text-black/80 hover:text-black hover:bg-black/10"
                  : "text-white/90 hover:text-white hover:bg-white/20"
            )}
            onClick={toggleLanguage}
          >
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">{language === 'bg' ? 'Switch to English' : 'Превключи на български'}</span>
          </Button>
          
          {/* Dark Mode Toggle */}
          <Toggle 
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className={cn(
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : scrolled
                  ? "text-black/80 hover:text-black hover:bg-black/10"
                  : "text-white/90 hover:text-white hover:bg-white/20"
            )}
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">
              {theme === "dark" ? t("Светъл режим") : t("Тъмен режим")}
            </span>
          </Toggle>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className={cn(
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : scrolled
                  ? "text-black/80 hover:text-black hover:bg-black/10"
                  : "text-white/90 hover:text-white hover:bg-white/20"
            )}
            onClick={toggleLanguage}
          >
            <Globe className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          
          {/* Mobile Dark Mode Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className={cn(
              theme === "dark"
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : scrolled
                  ? "text-black/80 hover:text-black hover:bg-black/10"
                  : "text-white/90 hover:text-white hover:bg-white/20"
            )}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="z-50 relative p-2 touch-manipulation cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "w-6 h-6 transition-all duration-300",
                theme === "dark" ? "text-white" : scrolled ? "text-gray-800" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "w-6 h-6 transition-all duration-300",
                theme === "dark" ? "text-white" : scrolled ? "text-gray-800" : "text-white"
              )} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 z-40 transform transition-all duration-500 ease-in-out backdrop-blur-lg",
          theme === "dark" 
            ? "bg-gradient-to-b from-[#1A1F2C]/95 to-[#221F26]/95" 
            : "bg-gradient-to-b from-[#F9F4EC]/95 to-[#F0E6D8]/95",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-xl font-medium transition-all duration-300 flex items-center group",
                  theme === "dark" ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"
                )}
              >
                <span>{t(item.name)}</span>
                <ChevronRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
