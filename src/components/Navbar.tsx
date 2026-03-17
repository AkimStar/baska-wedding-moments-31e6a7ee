import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
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
    <>
      {/* Desktop Navigation */}
      <nav 
        className={cn(
          "fixed w-full z-50 transition-all duration-700",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4 shadow-sm" : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-700">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center group"
          >
            <img 
              src="/logo.png" 
              alt="Baska Production" 
              className={cn(
                "h-6 md:h-8 object-contain transition-all duration-500",
                scrolled 
                  ? (theme === 'dark' ? "brightness-0 invert" : "brightness-0")
                  : "brightness-0 invert"
              )} 
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "nav-link text-xs",
                  scrolled ? "text-foreground/80" : "text-white/90 after:bg-white hover:text-white"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {language === 'bg' ? 'EN' : 'BG'}
            </button>
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                scrolled ? "hover:bg-foreground/5 text-foreground/80 hover:text-primary" : "hover:bg-white/10 text-white/80 hover:text-white"
              )}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a 
              href="#contact" 
              className={cn(
                "hidden lg:inline-flex items-center justify-center px-6 py-2 rounded-full font-montserrat text-xs tracking-widest font-medium transition-all duration-300",
                scrolled 
                  ? "bg-foreground text-background hover:bg-foreground/80" 
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              {t('nav_book_now')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
             <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "p-2 transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-8"
      )}>
         <div className="container mx-auto px-6 py-8 flex justify-between items-center">
             <img src="/logo.png" alt="Baska Production" className={cn("h-6 md:h-8 object-contain", theme === 'light' ? "brightness-0" : "brightness-0 invert")} />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X className="w-8 h-8 font-light" />
            </button>
         </div>

         <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-8 px-6">
            <div className="flex space-x-8 mb-4">
               <button
                  onClick={toggleLanguage}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
                >
                  {language === 'bg' ? 'Switch to English' : 'Превключи на Български'}
               </button>
            </div>
            
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-playfair text-3xl sm:text-4xl hover:text-primary transition-colors duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, color 0.3s ease'
                }}
              >
                {item.name}
              </button>
            ))}

            <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-10 py-4 border border-foreground text-foreground font-montserrat text-sm tracking-widest uppercase mt-8 hover:bg-foreground hover:text-background transition-colors"
              >
                {t('nav_book_now')}
              </a>
         </div>
      </div>
    </>
  );
};

export default Navbar;
