
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F6F2] to-[#F1EBE2]">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Restaurant />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
