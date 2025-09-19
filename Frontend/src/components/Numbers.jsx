import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Numbers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample story data
  const stories = [
    {
      id: 1,
      title: "Our Beginning",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 2,
      title: "500+ clients served",
      images: [
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Our Impact",
      images: [
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Future Vision",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
      ]
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentStory = stories[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Buttons */}
      <div className="flex justify-center pt-8 pb-6">
        <div className="flex space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Header with Story Number */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          <span className="text-8xl md:text-9xl font-black">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Numbers Tell our story
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 mt-2">
          {currentStory.title}
        </h3>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Images Container */}
        <div className="flex flex-col space-y-8">
          {currentStory.images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 ease-in-out hover:shadow-2xl"
              style={{
                transform: `20px`,
              }}
            >
              <img
                src={image}
                alt={`Story ${currentSlide + 1} - Image ${index + 1}`}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-12 pb-12 space-x-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border-2 border-gray-300 hover:border-black transition-colors duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-black" />
        </button>
        
        <div className="flex space-x-2">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-black'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full border-2 border-gray-300 hover:border-black transition-colors duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default Numbers;
