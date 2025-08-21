import React, { useState, useEffect } from "react";

const Why = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Different text content for the carousel
  const textContent = [
    {
      title: "The perfect match for your daily shopping",
      description: "One stop destination for all offline needs through online means. Your everyday need from raw fruits & vegetables, dining to clothing items, at your very door step or curbside. Experience convenience like never before with our comprehensive shopping solution."
    },
    {
      title: "Fresh Quality at Your Doorstep",
      description: "From farm-fresh vegetables to premium quality products, we ensure everything meets the highest standards. Our quality control team carefully selects each item to guarantee freshness and excellence in every delivery to your home."
    },
    {
      title: "Fast & Reliable Service",
      description: "Quick delivery within hours, not days. Our efficient logistics network ensures your essentials reach you on time, every time. Track your orders in real-time and enjoy the convenience of reliable, professional service."
    },
    {
      title: "Unbeatable Prices & Variety",
      description: "Competitive pricing with regular discounts and offers. Browse through thousands of products across multiple categories - groceries, fashion, electronics, and home essentials - all at prices that won't break your budget."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % textContent.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [textContent.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full py-8 px-4">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold font-['Montserrat'] leading-tight">
          Why Us ?
        </h2>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image */}
          <div className="flex justify-center items-center p-4 z-10 bg-transparent">
            <img
              src="t.jpg"
              alt="Logo"
              className="max-w-full md:h-4/5 md:w-4/5"
            />
          </div>

          {/* Text Card - Overlapping */}
          <div className="relative -mt-10 w-80 bg-zinc-300 rounded-[10px] p-6 flex flex-col z-0">
            <div className="flex flex-col gap-4">
              <h3 className="text-black text-lg font-bold font-sans leading-tight transition-all duration-500">
                {textContent[currentSlide].title}
              </h3>
              <p className="text-black text-sm font-normal font-sans leading-relaxed transition-all duration-500">
                {textContent[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:items-center md:px-8 lg:px-12">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="t.jpg"
              alt="Logo"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          {/* Text Card */}
          <div className="bg-zinc-300 rounded-[10px] p-6 lg:p-8">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-black text-xl lg:text-2xl xl:text-3xl font-bold font-sans leading-tight transition-all duration-500">
                {textContent[currentSlide].title}
              </h3>
              <p className="text-black text-sm lg:text-base xl:text-lg font-normal font-sans leading-relaxed transition-all duration-500">
                {textContent[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {textContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-6 md:w-8 bg-black'
                  : 'w-2 md:w-3 bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-600 text-xs md:text-sm">
            {currentSlide + 1} / {textContent.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Why;