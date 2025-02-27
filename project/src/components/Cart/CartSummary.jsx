import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function CartSummary() {
  const { state } = useCart();
  const navigate = useNavigate();

  const subtotal = state.total;
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">₹{shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/checkout')}
        className="w-full mt-6 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
      >
        Proceed to Checkout
      </button>
      <button
        onClick={() => navigate('/products')}
        className="w-full mt-4 border border-orange-600 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-50 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
}