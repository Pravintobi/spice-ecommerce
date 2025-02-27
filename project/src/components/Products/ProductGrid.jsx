import React, { useState, useEffect } from 'react';
import { Grid, List } from 'lucide-react';
import { useFilter } from '../../context/FilterContext';
import { filterProducts } from '../../utils/filterProducts';
import { ProductCard } from './ProductCard';
import axios from 'axios';

export function ProductGrid() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { state, dispatch } = useFilter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await axios.get('https://spice-ecommerce-2.onrender.com/productdetails/getAllProduct');


        const formattedProducts = response.data.map(product => ({
          ...product,
          image: product.image || 'https://via.placeholder.com/300', // Fallback for missing images
        }));
        setAllProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = filterProducts(allProducts, state);
    setFilteredProducts(filtered);
  }, [allProducts, state]);

  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Grid size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <List size={20} />
            </button>
            <span className="text-gray-600">
              {state.search
                ? `Found ${filteredProducts.length} products for "${state.search}"`
                : `Showing ${filteredProducts.length} products`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by</span>
            <select
              className="border rounded-lg px-2 py-1"
              value={state.sortBy}
              onChange={(e) => dispatch({ type: 'SET_SORT', payload: e.target.value })}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.ProductID} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
