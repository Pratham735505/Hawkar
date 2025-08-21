import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      city: "Mumbai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
     
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
     
    },
    {
      id: 3,
      name: "Mohammed Ali",
      city: "Bangalore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
     
    },
    {
      id: 4,
      name: "Anita Patel",
      city: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Testimonials
          </h1>
          
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center"
            >
              {/* Circular Image - Even Larger Size */}
              <div className="w-40 h-40 md:w-48 md:h-48 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-lg"
                />
              </div>
              
              {/* Name and City */}
              <h3 className="text-black text-xl md:text-2xl font-bold text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-base md:text-lg text-center mb-4">
                {testimonial.city}
              </p>
              
              {/* Rating Stars */}
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;