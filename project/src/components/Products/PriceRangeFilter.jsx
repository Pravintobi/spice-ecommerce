import React from 'react';
import { useFilter } from '../../context/FilterContext';

const priceRanges = [
  { id: 'price-1', min: 0, max: 299, label: '₹0 - ₹299' },
  { id: 'price-2', min: 300, max: 499, label: '₹300 - ₹499' },
  { id: 'price-3', min: 500, max: 699, label: '₹500 - ₹699' },
  { id: 'price-4', min: 700, max: 999, label: '₹700 - ₹999' },
  { id: 'price-5', min: 1000, max: Infinity, label: '₹1000+' }
];

export function PriceRangeFilter() {
  const { state, dispatch } = useFilter();

  const handlePriceChange = (range) => {
    dispatch({ 
      type: 'TOGGLE_PRICE_RANGE', 
      payload: range 
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-orange-900">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range) => (
          <div key={range.id} className="flex items-center">
            <input
              type="checkbox"
              id={range.id}
              checked={state.priceRange.some(p => p.id === range.id)}
              onChange={() => handlePriceChange(range)}
              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />
            <label
              htmlFor={range.id}
              className="ml-2 text-gray-600 hover:text-orange-600 cursor-pointer"
            >
              {range.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}