import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

export default function WishlistButton() {
  const { state } = useWishlist();

  return (
    <Link to="/wishlist" className="relative text-white hover:text-[#90BE6D] transition">
      <Heart size={24} />
      {state.items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#90BE6D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {state.items.length}
        </span>
      )}
    </Link>
  );
}