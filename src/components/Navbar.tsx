
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
        "fixed w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled 
          ? "bg-gradient-to-r from-[#F9F4EC] to-[#F0E6D8] shadow-sm backdrop-blur-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className={cn(
            "flex items-center space-x-2 transition-colors duration-300",
            scrolled ? "text-black" : "text-white"
          )}
        >
          <img 
            src="/logo.png" 
            alt="Baska Production Logo" 
            className="h-16 w-auto"
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "navbar-link transition-all duration-300 hover:scale-105",
                scrolled ? "text-black/80 hover:text-black" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="z-50 relative p-2 touch-manipulation cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 transform transition-all duration-300",
                scrolled ? "bg-gray-800" : "bg-white",
                isMobileMenuOpen && "rotate-45 translate-y-2.5"
              )}></span>
              <span className={cn(
                "w-full h-0.5 transform transition-all duration-300",
                scrolled ? "bg-gray-800" : "bg-white",
                isMobileMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "w-full h-0.5 transform transition-all duration-300",
                scrolled ? "bg-gray-800" : "bg-white",
                isMobileMenuOpen && "-rotate-45 -translate-y-2.5"
              )}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={cn(
            "fixed inset-0 bg-gradient-to-r from-[#F9F4EC] to-[#F0E6D8] z-40 transform transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black/80 hover:text-black text-xl font-medium transition-colors duration-300"
                >
                  {item.name}
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
