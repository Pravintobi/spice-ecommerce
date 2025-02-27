import React from 'react';

export function ProductInfo({ product }) {
  console.log('Product received:', product.Name);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-gray-900">{product.Name || 'Product Name'}</h1>
      <p className="text-lg text-gray-700">{product.description || 'No description available.'}</p>
      <p className="text-2xl font-bold text-orange-600">
        ₹{product.price ? product.price.toFixed(2) : 'Price not available'}
      </p>
      <div className="space-y-2">
        <p className="text-gray-500">Category: <span className="text-gray-700">{product.category || 'N/A'}</span></p>
        {/* <p className="text-gray-500">Stock: <span className={`text-${product.stock > 0 ? 'green' : 'red'}-600`}>
          {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
        </span></p> */}
      </div>
      <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
