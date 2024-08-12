import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Adjust this to the number of slides you have

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="slides flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Replace the placeholders with real product content */}
        {Array(totalSlides).fill(null).map((_, index) => (
          <div key={index} className="min-w-full h-64 bg-gray-200 flex items-center justify-center">
            <h3 className="text-2xl font-bold">Product {index + 1}</h3>
          </div>
        ))}
      </div>
      <div className="indicators absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array(totalSlides).fill(null).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
