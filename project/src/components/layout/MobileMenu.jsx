import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function MobileMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden bg-[#FF6B6B] pb-4"
    >
      <div className="px-4 pt-2 pb-3 space-y-1">
        <SearchBar className="mb-4" />
        <Link
          to="/products"
          className="block text-white hover:text-[#90BE6D] transition py-2"
        >
          Products
        </Link>
        <Link
          to="/wishlist"
          className="block text-white hover:text-[#90BE6D] transition py-2"
        >
          Wishlist
        </Link>
        <Link
          to="/cart"
          className="block text-white hover:text-[#90BE6D] transition py-2"
        >
          Cart
        </Link>
      </div>
    </motion.div>
  );
}