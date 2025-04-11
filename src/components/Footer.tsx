
import React from 'react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container mx-auto px-6">
        <div className="py-8 text-center">
          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-4">BASKA PRODUCTION</h3>
            <p className="text-sm">Сватбен фотограф</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { name: "Начало", id: "home" },
              { name: "Галерия", id: "gallery" },
              { name: "Отзиви", id: "testimonials" },
              { name: "Контакти", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm hover:underline"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mb-6">
            <a href="#" className="p-2 rounded-full bg-black text-white hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-gray-600">
            © 2025 Baska Production. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
