import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/currency';
import { useCart } from '../../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-hot-toast';

export function SpiceCard({ id, name, price, imageSrc, onSale }) {
  const { dispatch } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigation
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        name,
        price,
        image: imageSrc,
        quantity: 1,
        weight: '250gm'
      }
    });
    toast.success('Added to cart!');
  };

  return (
    <Link to={`/products/${id}`} className="group relative">
      <div className="flex flex-col items-center transition-all duration-500 ease-out hover:-translate-y-2">
        <div className="relative mb-6">
          {onSale && (
            <div className="absolute -top-3 -right-3 z-10">
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Sale
              </span>
            </div>
          )}
          <div className="relative w-44 h-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 transform -rotate-6 transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute inset-1 rounded-full bg-white shadow-inner" />
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:shadow-[0_20px_35px_rgba(234,88,12,0.25)]">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center relative">
          <h3 className="text-xl font-medium text-orange-900 mb-2 transition-colors duration-300 group-hover:text-orange-700">
            {name}
          </h3>
          <div className="relative">
            <p className="text-lg font-semibold bg-gradient-to-r from-orange-900 to-orange-800 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
              {formatCurrency(price)}
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleQuickAdd}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-orange-600 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-orange-700"
      >
        <ShoppingCart size={16} />
        Quick Add
      </button>
    </Link>
  );
}