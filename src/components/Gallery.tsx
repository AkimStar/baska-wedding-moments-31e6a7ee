import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from './LanguageProvider';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, src: "/gallery/gallery-1.webp", alt: "Сватбен момент — Baska Production" },
  { id: 2, src: "/gallery/gallery-2.webp", alt: "Сватбен момент — Baska Production" },
  { id: 3, src: "/gallery/gallery-3.webp", alt: "Сватбен момент — Baska Production" },
  { id: 4, src: "/gallery/gallery-4.webp", alt: "Сватбен момент — Baska Production" },
  { id: 5, src: "/gallery/gallery-5.webp", alt: "Сватбен момент — Baska Production" },
  { id: 6, src: "/gallery/gallery-6.webp", alt: "Сватбен момент — Baska Production" },
  { id: 7, src: "/gallery/gallery-7.webp", alt: "Сватбен момент — Baska Production" },
  { id: 8, src: "/gallery/gallery-8.webp", alt: "Сватбен момент — Baska Production" },
  { id: 9, src: "/gallery/gallery-9.webp", alt: "Сватбен момент — Baska Production" },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;

    const newIndex = direction === "prev"
      ? (currentIndex - 1 + galleryItems.length) % galleryItems.length
      : (currentIndex + 1) % galleryItems.length;

    setSelectedImage(galleryItems[newIndex].id);
  };

  const selectedImageData = selectedImage !== null ? galleryItems.find(item => item.id === selectedImage) : null;

  return (
    <section id="gallery" className="section-padding bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="flex flex-col items-center text-center mb-16">
          <span className="caption-text">{t('gallery_subtitle')}</span>
          <h2 className="heading-2">{t('gallery_title')}</h2>
        </div>

        {/* Strict CSS Grid - PERFECT alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4 lg:gap-6 w-full max-w-7xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-muted"
              onClick={() => openLightbox(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover img-hover-scale"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white uppercase tracking-[0.2em] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                   View
                 </span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage !== null && selectedImageData &&
          ReactDOM.createPortal(
            <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="absolute top-6 right-6 z-50">
                 <button onClick={closeLightbox} className="text-foreground/70 hover:text-foreground transition-colors p-2">
                  <X className="w-8 h-8 font-light" />
                </button>
              </div>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-4 transition-colors z-50 hidden md:block"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-6xl px-4 md:px-24 h-full max-h-[80vh] flex items-center justify-center">
                <img 
                  src={selectedImageData.src} 
                  alt={selectedImageData.alt} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground p-4 transition-colors z-50 hidden md:block"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-10 w-full text-center px-6 border-t border-border max-w-lg pt-6">
                <p className="font-playfair text-xl text-foreground">
                  {selectedImageData.alt}
                </p>
                <div className="flex justify-center md:hidden gap-12 mt-6">
                   <button onClick={() => navigateImage("prev")} className="text-foreground/70"><ChevronLeft className="w-6 h-6" /></button>
                   <button onClick={() => navigateImage("next")} className="text-foreground/70"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>
            </div>,
            document.body
          )
        }
      </div>
    </section>
  );
};

export default Gallery;
