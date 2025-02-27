import React from 'react';
import { formatCurrency } from '../../utils/currency';

interface SpiceCardProps {
  name: string;
  price: number;
  imageSrc: string;
  onSale?: boolean;
}

export function SpiceCard({ name, price, imageSrc, onSale }: SpiceCardProps) {
  return (
    <div className="group relative">
      <div className="flex flex-col items-center transition-all duration-500 ease-out hover:-translate-y-2">
        <div className="relative mb-6">
          {onSale && (
            <div className="absolute -top-3 -right-3 z-10">
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Sale
              </span>
            </div>
          )}
          <div className="relative w-44 h-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 transform -rotate-6 transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute inset-1 rounded-full bg-white shadow-inner" />
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(234,88,12,0.2)]">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center relative">
          <h3 className="text-xl font-medium text-orange-900 mb-2 transition-colors duration-300 group-hover:text-orange-700">
            {name}
          </h3>
          <div className="relative">
            <p className="text-lg font-semibold bg-gradient-to-r from-orange-900 to-orange-800 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
              {formatCurrency(price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}