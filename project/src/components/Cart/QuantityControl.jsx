import React from 'react';
import { Minus, Plus } from 'lucide-react';

export function QuantityControl({ quantity, onIncrease, onDecrease, min = 1, max = 99 }) {
  return (
    <div className="flex items-center border rounded-full">
      <button
        onClick={() => quantity > min && onDecrease()}
        className={`w-8 h-8 flex items-center justify-center transition-colors ${
          quantity <= min ? 'text-gray-300' : 'hover:text-orange-500'
        }`}
        disabled={quantity <= min}
      >
        <Minus size={16} />
      </button>
      <span className="w-12 text-center">{quantity}</span>
      <button
        onClick={() => quantity < max && onIncrease()}
        className={`w-8 h-8 flex items-center justify-center transition-colors ${
          quantity >= max ? 'text-gray-300' : 'hover:text-orange-500'
        }`}
        disabled={quantity >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}