import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItems } from '../components/Cart/CartItems';
import { CartSummary } from '../components/Cart/CartSummary';
import { EmptyCart } from '../components/Cart/EmptyCart';

export function Cart() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}