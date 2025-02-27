import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductInfo } from '../components/ProductDetail/ProductInfo';
import { ProductHeader } from '../components/ProductDetail/ProductHeader';
import { ProductGallery } from '../components/ProductDetail/ProductGallery';
import { ProductDescription } from '../components/ProductDetail/ProductDescription';
import { useProduct } from '../hooks/useProducts';
import { Toaster } from 'react-hot-toast';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <ProductHeader productName={product.Name} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 gap-8">
            <ProductGallery images={product.images} productName={product.Name} />
            <ProductInfo product={product} />
          </div>
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
}
