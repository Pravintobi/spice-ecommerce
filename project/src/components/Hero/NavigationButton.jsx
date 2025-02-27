import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavigationButtons({ onPrev, onNext }) {
  const handlePrevClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onPrev();
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onNext();
  };

  return (
    <>
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
          bg-white/90 hover:bg-white p-3 rounded-full shadow-lg
          transition-all duration-200 hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-orange-600" size={24} />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20
          bg-white/90 hover:bg-white p-3 rounded-full shadow-lg
          transition-all duration-200 hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Next slide"
      >
        <ChevronRight className="text-orange-600" size={24} />
      </button>
    </>
  );
}