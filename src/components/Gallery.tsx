
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

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
    src: "https://images.unsplash.com/photo-1525328557782-aec4d9b769de?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
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
    src: "https://images.unsplash.com/photo-1583939411023-c22e67fc0322?auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Сватбен прием",
    categories: ["all", "city"]
  }
];

const categories = [
  { id: "all", name: "Всички" },
  { id: "outdoor", name: "На открито" },
  { id: "intimate", name: "Интимни" },
  { id: "city", name: "Градски" },
  { id: "mountain", name: "Планински" }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    <section id="gallery" className="section-padding bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-10">Магията в кадри</h2>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm transition-colors duration-300",
                activeCategory === cat.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div 
              key={item.id}
              className="gallery-item rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(item.id)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <img 
              src={selectedImageData.src} 
              alt={selectedImageData.alt} 
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
            
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
