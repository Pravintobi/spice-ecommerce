import React, { createContext, useContext, useReducer } from 'react';
import { toast } from 'react-hot-toast';

const WishlistContext = createContext();

const initialState = {
  items: []
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      if (state.items.some(item => item.id === action.payload.id)) {
        toast.error('Already in wishlist!');
        return state;
      }
      toast.success('Added to wishlist!');
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case 'REMOVE_FROM_WISHLIST': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};