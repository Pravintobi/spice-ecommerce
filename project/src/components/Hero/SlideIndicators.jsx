import React from 'react';

export default function SlideIndicators({ total, current, onChange }) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition ${
            index === current ? 'bg-white' : 'bg-white bg-opacity-50'
          }`}
        />
      ))}
    </div>
  );
}