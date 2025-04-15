
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          ? "bg-gradient-to-r from-[#F9F4EC]/90 to-[#F0E6D8]/90 shadow-md backdrop-blur-md dark:from-[#1A1F2C]/90 dark:to-[#221F26]/90 dark:shadow-black/10" 
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
                scrolled 
                  ? "text-black/80 hover:text-black dark:text-white/90 dark:hover:text-white after:bg-black/60 dark:after:bg-white/60" 
                  : "text-white/90 hover:text-white after:bg-white/60"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        {/* Theme toggle button */}
        <div className="flex items-center">
          <Toggle 
            aria-label="Toggle dark mode" 
            className={cn(
              "ml-auto mr-4 p-2 rounded-full transition-all duration-300",
              scrolled 
                ? "bg-transparent hover:bg-black/10 dark:hover:bg-white/10" 
                : "bg-transparent hover:bg-white/20"
            )}
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className={cn(
                "w-5 h-5 transition-all duration-300 animate-scale-in",
                scrolled ? "text-white" : "text-white"
              )} />
            ) : (
              <Moon className={cn(
                "w-5 h-5 transition-all duration-300 animate-scale-in",
                scrolled ? "text-black" : "text-white"
              )} />
            )}
          </Toggle>

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

            {/* Mobile Menu */}
            <div className={cn(
              "fixed inset-0 bg-gradient-to-b from-[#F9F4EC]/95 to-[#F0E6D8]/95 dark:from-[#1A1F2C]/95 dark:to-[#221F26]/95 z-40 transform transition-all duration-500 ease-in-out backdrop-blur-lg",
              isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            )}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white text-xl font-medium transition-all duration-300 flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
