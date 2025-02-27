import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import WishlistButton from './WishlistButton';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-800 to-orange-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="VSHome Logo" 
                className="h-16 w-auto" 
              />
              <span className="text-2xl font-serif italic text-white tracking-wider border-b-2 border-orange-400">
                VSHomes
              </span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-white hover:text-orange-200 transition">
              Products
            </Link>
            <div className="flex items-center space-x-4">
              <WishlistButton />
              <CartButton />
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-white hover:text-orange-200 transition"
              >
                <LogIn size={20} />
                <span>Login</span>
              </Link>
              <Link 
                to="/register" 
                className="flex items-center gap-2 text-white hover:text-orange-200 transition"
              >
                <UserPlus size={20} />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-200 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
    </nav>
  );
}