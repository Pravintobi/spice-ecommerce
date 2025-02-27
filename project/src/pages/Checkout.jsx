import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { PaymentOptions } from '../components/Checkout/PaymentOptions';
import { PaymentForm } from '../components/Checkout/PaymentForm';

export function Checkout() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  const subtotal = state.total;
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#EDEBE9]  py-8"  >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-600 tracking-wide mb-6" style={{color:'#dd2100'}}>Checkout</h1>
        {/* <h1
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-600 tracking-wide mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Checkout
        </h1> */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="flex-1 space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.weight}`} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-500 ml-2">x {item.quantity}</span>
                        <span className="text-sm text-gray-500 ml-2">({item.weight})</span>
                      </div>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600">Shipping</span>
                      <span>₹{shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-4 text-lg font-medium">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-lg shadow p-6">
                <PaymentOptions
                  selectedMethod={paymentMethod}
                  onSelect={setPaymentMethod}
                />
                <div className="mt-6">
                  <PaymentForm paymentMethod={paymentMethod} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-orange-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
