import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { QuantityControl } from './QuantityControl';
import { formatCurrency } from '../../utils/currency';
import { toast } from 'react-hot-toast';

export function CartItems() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
      toast.success('Item removed from cart');
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    toast.success('Item removed from cart');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      {state.items.map((item) => (
        <div 
          key={`${item.id}-${item.weight}`} 
          className="flex items-center border-b last:border-0 pb-6 last:pb-0"
        >
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6 flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.weight}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <QuantityControl
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
              />
              <span className="font-medium text-lg">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}