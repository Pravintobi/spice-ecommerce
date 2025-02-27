import React, { useState } from 'react';

export function ProductGallery({ images = [], productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="mb-4 w-[400px] h-[400px] mx-auto rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-[400px] mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? 'border-orange-500' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
