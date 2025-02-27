import React from 'react';

interface SpiceCardProps {
  name: string;
  price: number;
  imageSrc: string;
  onSale?: boolean;
}

export function SpiceCard({ name, price, imageSrc, onSale }: SpiceCardProps) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative mb-4">
        {onSale && (
          <span className="absolute -top-2 -right-2 bg-orange-700 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Sale
          </span>
        )}
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <h3 className="text-xl font-medium text-orange-900 text-center mb-1 group-hover:text-orange-700 transition-colors">
        {name}
      </h3>
      <p className="text-lg font-medium text-gray-900">${price.toFixed(2)}</p>
    </div>
  );
}