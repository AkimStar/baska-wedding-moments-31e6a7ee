import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';
import { useLanguage } from './LanguageProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const menuItems = [
    { name: t("nav_home"), id: "home" },
    { name: t("nav_about"), id: "about" },
    { name: t("nav_gallery"), id: "gallery" },
    { name: t("nav_testimonials"), id: "testimonials" },
    { name: t("nav_restaurant"), id: "restaurant" },
    { name: t("nav_limousine"), id: "limousine" },
    { name: t("nav_contact"), id: "contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-700 px-6 py-4",
        scrolled 
          ? "bg-gradient-to-r from-[#F9F4EC]/90 to-[#F0E6D8]/90 shadow-soft backdrop-blur-md dark:from-[#181B22]/90 dark:to-[#23262e]/90 dark:shadow-black/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className={cn(
            "flex items-center space-x-2 transition-colors duration-300",
            scrolled ? "text-black dark:text-white" : "text-white"
          )}
        >
          <img 
            src="/logo.png" 
            alt="Baska Production Logo" 
            className="h-16 w-auto transition-transform hover:scale-105 duration-500"
          />
        </a>
        
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "navbar-link transition-all duration-500 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left",
                scrolled 
                  ? "text-black/80 hover:text-black dark:text-white/90 dark:hover:text-white after:bg-black/60 dark:after:bg-white/60" 
                  : "text-white/90 hover:text-white after:bg-white/60"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        {/* Theme and Language toggle buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Language Toggle (desktop) */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "ml-auto mr-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-ultra transition-colors duration-300 hover:text-accent hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full",
              scrolled ? 'text-black dark:text-white' : 'text-white',
              "border border-transparent hover:border-black/20 dark:hover:border-white/20"
            )}
            aria-label="Toggle language"
          >
            <span className="transition-opacity duration-200">{language === 'bg' ? 'BG' : 'EN'}</span>
          </button>
          {/* Theme Toggle (desktop) */}
          <Toggle 
            aria-label="Toggle dark mode" 
            className={cn(
              "ml-auto mr-4 p-2 transition-colors duration-300 hover:text-accent hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full",
              "border border-transparent hover:border-black/20 dark:hover:border-white/20"
            )}
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
          >
            {theme === 'dark' ? (
              <div className="relative">
                <Sun className={cn(
                  "w-5 h-5 transition-all duration-300 animate-scale-in",
                  scrolled ? "text-white" : "text-white"
                )} />
              </div>
            ) : (
              <div className="relative">
                <Moon className={cn(
                  "w-5 h-5 transition-all duration-300 animate-scale-in",
                  scrolled ? "text-black" : "text-white"
                )} />
                <Sparkles className={cn(
                  "absolute -top-1 -right-1 w-3 h-3 transition-all duration-300",
                  scrolled ? "text-black/70" : "text-white/70"
                )} />
              </div>
            )}
          </Toggle>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="z-50 relative p-2 touch-manipulation cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "w-6 h-6 transition-all duration-300",
                scrolled ? "text-gray-800 dark:text-white" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "w-6 h-6 transition-all duration-300",
                scrolled ? "text-gray-800 dark:text-white" : "text-white"
              )} />
            )}
          </button>

          {/* Mobile Menu with improved dark mode styling */}
          <div className={cn(
            "fixed top-0 left-0 w-screen h-screen z-50 transform transition-all duration-700 ease-in-out backdrop-blur-lg overflow-y-auto",
            theme === 'dark' 
              ? "bg-gradient-to-b from-[#0A0B0F]/95 to-[#121418]/95 dark-glass" 
              : "bg-gradient-to-b from-[#F9F4EC]/95 to-[#F0E6D8]/95 glass-effect",
            isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}>
            {/* X button inside overlay */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className={cn(
                "w-8 h-8 transition-all duration-300",
                theme === 'dark' ? "text-white" : "text-black"
              )} />
            </button>
            {/* Mobile-only language and theme toggles at the top left */}
            <div className="absolute top-8 left-6 flex flex-row items-center space-x-4 z-50">
              <button
                onClick={toggleLanguage}
                className={cn(
                  "px-3 py-1.5 text-base font-semibold uppercase tracking-ultra transition-colors duration-300 hover:text-accent hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full",
                  'text-black dark:text-white',
                  "border border-transparent hover:border-black/20 dark:hover:border-white/20"
                )}
                aria-label="Toggle language"
              >
                <span className="transition-opacity duration-200">{language === 'bg' ? 'BG' : 'EN'}</span>
              </button>
              <Toggle 
                aria-label="Toggle dark mode" 
                className={cn(
                  "p-2 transition-colors duration-300 hover:text-accent hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-full",
                  "border border-transparent hover:border-black/20 dark:hover:border-white/20"
                )}
                pressed={theme === 'dark'}
                onPressedChange={toggleTheme}
              >
                {theme === 'dark' ? (
                  <div className="relative">
                    <Sun className={cn(
                      "w-5 h-5 transition-all duration-300 animate-scale-in",
                      "text-white"
                    )} />
                  </div>
                ) : (
                  <div className="relative">
                    <Moon className={cn(
                      "w-5 h-5 transition-all duration-300 animate-scale-in",
                      "text-black"
                    )} />
                    <Sparkles className={cn(
                      "absolute -top-1 -right-1 w-3 h-3 transition-all duration-300",
                      "text-black/70"
                    )} />
                  </div>
                )}
              </Toggle>
            </div>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white text-xl font-medium transition-all duration-500 flex items-center group font-montserrat",
                    theme === 'dark' ? 'glow-text' : '',
                    "opacity-0 animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
