import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

export function Wishlist() {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleRemoveFromWishlist = (id) => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
    toast.success('Removed from wishlist');
  };

  const handleAddToCart = (item) => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, quantity: 1, weight: '250gm' }
    });
    toast.success('Added to cart');
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-6">
            <Heart size={40} className="text-orange-600" />
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Start adding your favorite items to the wishlist!</p>
          <Link
            to="/products"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistState.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-6">
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-red-500 transition-colors"
                >
                  <Heart size={20} className="fill-current" />
                </button>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
              <p className="text-orange-600 font-medium mb-4">₹{item.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}