import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
    }
  };

  const toggleMobileMenu = () => {
    // Implementation of toggleMobileMenu function
  };

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
            src="/baska-wedding-moments-31e6a7ee/lovable-uploads/5adf8171-bcd8-4e70-a1c4-8cd4a6500980.png" 
            alt="Baska Production Logo" 
            className="h-16 w-auto"
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          {[
            { name: "НАЧАЛО", id: "home" },
            { name: "ЗА МЕН", id: "about" },
            { name: "ГАЛЕРИЯ", id: "gallery" },
            { name: "ОТЗИВИ", id: "testimonials" },
            { name: "КОНТАКТИ", id: "contact" }
          ].map((item) => (
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
            className="lg:hidden z-50 relative p-2 touch-manipulation"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-800 transform transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-gray-800 transform transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-gray-800 transform transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
