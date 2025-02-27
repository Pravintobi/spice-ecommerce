import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogNavigation({ onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <>
      {hasPrevious && (
        <button 
          onClick={onPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full border-2 border-orange-800 text-orange-800 flex items-center justify-center hover:bg-orange-800 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {hasNext && (
        <button 
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full border-2 border-orange-800 text-orange-800 flex items-center justify-center hover:bg-orange-800 hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </>
  );
}