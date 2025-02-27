import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-900 to-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About VSHomes</h3>
            <p className="text-orange-200 mb-4">
              Bringing authentic flavors to your kitchen with our premium collection of spices and traditional products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-orange-200 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-orange-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-orange-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-orange-300" />
                <span className="text-orange-200">123 Spice Street, Flavor City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-orange-300" />
                <span className="text-orange-200">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-orange-300" />
                <span className="text-orange-200">info@vshomes.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-orange-300" />
                <span className="text-orange-200">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-orange-200 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-orange-800 border border-orange-700 text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-800">
          <p className="text-center text-orange-300">
            © {new Date().getFullYear()} VSHomes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}