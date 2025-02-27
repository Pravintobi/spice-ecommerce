import React, { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();

const initialState = {
  search: '',
  categories: [],
  weights: [],
  priceRange: [],
  brands: [],
  sortBy: 'featured'
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'TOGGLE_CATEGORY':
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter(cat => cat !== action.payload)
          : [...state.categories, action.payload]
      };
    case 'TOGGLE_WEIGHT':
      return {
        ...state,
        weights: state.weights.includes(action.payload)
          ? state.weights.filter(w => w !== action.payload)
          : [...state.weights, action.payload]
      };
    case 'TOGGLE_PRICE_RANGE':
      return {
        ...state,
        priceRange: state.priceRange.some(p => p.id === action.payload.id)
          ? state.priceRange.filter(p => p.id !== action.payload.id)
          : [...state.priceRange, action.payload]
      };
    case 'TOGGLE_BRAND':
      return {
        ...state,
        brands: state.brands.includes(action.payload)
          ? state.brands.filter(b => b !== action.payload)
          : [...state.brands, action.payload]
      };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
}

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};