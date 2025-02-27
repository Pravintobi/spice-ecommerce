import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useProduct } from '../../hooks/useProducts';

export function ProductHeader() {
  const { id } = useParams();
  const { product } = useProduct(id);

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <ChevronRight size={16} />
          <Link to="/products" className="hover:text-orange-600">Products</Link>
          <ChevronRight size={16} />
          <span className="text-orange-600">{product?.name || 'Product Details'}</span>
        </div>
      </div>
    </div>
  );
}
