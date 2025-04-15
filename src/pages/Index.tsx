import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Restaurant from '../components/Restaurant';
import Limousine from '../components/Limousine';
import Footer from '../components/Footer';

const Index = () => {
  // Removed loading state and related code

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b from-[#F9F4EC] via-[#F0E6D8] to-[#E6D7C3] dark:from-[#23262e] dark:via-[#2a2d36] dark:to-[#2d2f36]">
        <About />
        <Gallery />
        <Testimonials />
        <Restaurant />
        <Limousine />
        <Contact />
        <Footer />
      </div>
      
      {/* Animated cursor effect */}
      <div id="cursor-fx" className="fixed w-8 h-8 rounded-full border border-black/20 dark:border-white/20 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
        mixBlendMode: 'difference'
      }}></div>
      
      {/* Initialize cursor effect script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.getElementById('cursor-fx');
            if (!cursor) return;
            
            document.addEventListener('mousemove', (e) => {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
              cursor.style.opacity = '1';
            });
            
            document.addEventListener('mousedown', () => {
              cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            });
            
            document.addEventListener('mouseup', () => {
              cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
            
            document.querySelectorAll('a, button').forEach((el) => {
              el.addEventListener('mouseenter', () => {
                cursor.style.width = '32px';
                cursor.style.height = '32px';
                cursor.style.borderColor = document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)';
              });
              
              el.addEventListener('mouseleave', () => {
                cursor.style.width = '24px';
                cursor.style.height = '24px';
                cursor.style.borderColor = document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
              });
            });
            
            document.addEventListener('mouseleave', () => {
              cursor.style.opacity = '0';
            });
          });
        `
      }} />
    </div>
  );
};

export default Index;
