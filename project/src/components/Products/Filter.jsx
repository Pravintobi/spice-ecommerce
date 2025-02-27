import React from 'react';
import { PriceRangeFilter } from './PriceRangeFilter';
import { useFilter } from '../../context/FilterContext';

const categories = [
  'Pepper Powder',
  'Cooking Essentials',
  'Refund Oil',
  'Household',
  'Personal Care',
  'Clove'
];

const weights = ['250 gm', '500 gm', '1 kg', '2 kg', '3 kg'];
const brands = ['catch', 'Vedaka', 'Kesari', 'Eastern', 'Oskino'];

export function Filter() {
  const { state, dispatch } = useFilter();

  const handleCategoryChange = (category) => {
    dispatch({ type: 'TOGGLE_CATEGORY', payload: category });
  };

  const handleWeightChange = (weight) => {
    dispatch({ type: 'TOGGLE_WEIGHT', payload: weight });
  };

  const handleBrandChange = (brand) => {
    dispatch({ type: 'TOGGLE_BRAND', payload: brand });
  };

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-orange-900">Category</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={category}
                  checked={state.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor={category} className="ml-2 text-gray-600 hover:text-orange-600 cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <PriceRangeFilter />

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-orange-900">Shop By Weight</h3>
          <div className="space-y-2">
            {weights.map(weight => (
              <div key={weight} className="flex items-center">
                <input
                  type="checkbox"
                  id={weight}
                  checked={state.weights.includes(weight)}
                  onChange={() => handleWeightChange(weight)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor={weight} className="ml-2 text-gray-600 hover:text-orange-600 cursor-pointer">
                  {weight}
                </label>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}