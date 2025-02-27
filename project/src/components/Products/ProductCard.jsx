import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/currency';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

export function ProductCard({ product }) {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  const isInWishlist = wishlistState.items.some(item => item.id === product.ProductID);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id: product.ProductID } });
      toast.success('Removed from wishlist');
    } else {
      wishlistDispatch({
        type: 'ADD_TO_WISHLIST',
        payload: {
          id: product.ProductID,
          name: product.Name,
          price: product.price,
          image: product.image,
        },
      });
      toast.success('Added to wishlist');
    }
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.ProductID,
        name: product.Name,
        price: product.price,
        quantity: 1,
      },
    });
    toast.success('Added to cart');
  };

  return (
    <Link to={`/products/${product.ProductID}`} className="group block">
      <div className="relative overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ${
            isInWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image || 'https://via.placeholder.com/300'}
            alt={product.Name}
            className="w-full h-full object-cover transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
          />
          {/* Price Tag */}
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {product.Name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(product.rating || 0)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600">({product.reviews?.length || 0})</span>
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="w-full bg-orange-600 text-white py-2 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-orange-700"
          >
            <ShoppingCart size={18} />
            Quick Add
          </button>
        </div>
      </div>
    </Link>
  );
}
