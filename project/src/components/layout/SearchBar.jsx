import React from 'react';
import { Search } from 'lucide-react';
import { useFilter } from '../../context/FilterContext';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ className = '' }) {
  const { state, dispatch } = useFilter();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim();
    dispatch({ type: 'SET_SEARCH', payload: searchTerm });
    
    // Navigate to products page if we're not already there
    if (!window.location.pathname.includes('/products')) {
      navigate('/products');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={state.search}
        onChange={handleSearch}
        placeholder="Search products..."
        className="w-full px-4 py-2 pl-10 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
}