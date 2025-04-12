
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b from-[#F9F4EC] via-[#F0E6D8] to-[#E6D7C3]">
        <About />
        <Gallery />
        <Testimonials />
        <Restaurant />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
