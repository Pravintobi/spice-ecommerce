import React from 'react';
import { Filter } from '../components/Products/Filter';
import { ProductGrid } from '../components/Products/ProductGrid';
import { ProductHeader } from '../components/Products/ProductHeader';

export function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Filter />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}