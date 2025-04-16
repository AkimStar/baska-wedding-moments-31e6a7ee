import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useLanguage } from './LanguageProvider';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample gallery items - in a real app these would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Сватбена двойка в градина",
    categories: ["all", "outdoor"]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Булка с букет",
    categories: ["all", "intimate"]
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1595407753234-0882f1e77954?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Сватбена церемония",
    categories: ["all", "outdoor"]
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Младоженци танцуват",
    categories: ["all", "indoor"]
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Булченски пръстен",
    categories: ["all", "intimate", "indoor"]
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3", 
    alt: "Приготвяне на булката",
    categories: ["all", "intimate"]
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Сватбени детайли",
    categories: ["all", "indoor"]
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Младоженци в природата",
    categories: ["all", "outdoor", "mountain"]
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1731515672817-0491d19c9f19?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Сватбен прием",
    categories: ["all", "city"]
  }
];

const Gallery = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    // Simulate loading delay for smoother transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    // Staggered animation for gallery items
    if (!isLoading) {
      const timer = setInterval(() => {
        setAnimatedItems(prev => {
          const nextIndex = prev.length;
          if (nextIndex >= filteredImages.length) {
            clearInterval(timer);
            return prev;
          }
          return [...prev, filteredImages[nextIndex].id];
        });
      }, 100);

      return () => clearInterval(timer);
    } else {
      setAnimatedItems([]);
    }
  }, [isLoading]);

  const categories = [
    { id: "all", name: t("gallery_all") },
    { id: "outdoor", name: t("gallery_outdoor") },
    { id: "intimate", name: t("gallery_intimate") },
    { id: "city", name: t("gallery_city") },
    { id: "mountain", name: t("gallery_mountain") }
  ];

  const filteredImages = galleryItems.filter(item => 
    item.categories.includes(activeCategory)
  );

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
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === "prev") {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  // Find the selected image details
  const selectedImageData = selectedImage !== null 
    ? galleryItems.find(item => item.id === selectedImage) 
    : null;

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white/60 to-cream/60 backdrop-blur-sm dark:from-black/40 dark:to-darkBg/60">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-4 font-playfair">
          {t('gallery_title')}
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 font-montserrat">
          {t('gallery_subtitle')}
        </p>
        
        {/* Category filter with enhanced styling */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm transition-all duration-500 font-montserrat tracking-wide shadow-sm hover:shadow-md",
                activeCategory === cat.id
                  ? "bg-black text-white dark:bg-white dark:text-black transform scale-105" // Selected button - contrast in both modes
                  : "bg-[#f8f1e7] text-gray-800 hover:bg-[#f0e6d8] dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Gallery grid with enhanced animations and styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((item) => (
            <div 
              key={item.id}
              className={cn(
                "gallery-item rounded-lg overflow-hidden cursor-pointer shadow-elegant hover:shadow-soft transition-all duration-700 transform opacity-0",
                animatedItems.includes(item.id) ? "animate-fade-in-up opacity-100" : "",
                isLoading ? "opacity-0" : ""
              )}
              onClick={() => openLightbox(item.id)}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/80 dark:bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span className="text-sm font-medium font-montserrat text-black dark:text-white">
                      {t('gallery_view')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Lightbox with animations and improved controls */}
        {selectedImage !== null && selectedImageData && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 z-0" onClick={closeLightbox}></div>
            
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="relative max-w-5xl w-full animate-scale-in">
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt} 
                className="max-h-[85vh] max-w-full w-auto h-auto mx-auto object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white font-montserrat text-center">
                  {selectedImageData.alt}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
