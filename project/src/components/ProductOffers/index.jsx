import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'lemon-pickle',
    title: 'Lemon Pickle',
    discount: '10% Off',
    image: 'https://img.freepik.com/free-photo/homemade-delicious-apricot-jam-with-fresh-apricot-fruits_114579-10052.jpg?w=740'
  },
  {
    id: 'mango-pickle',
    title: 'Mango pickle',
    discount: '5% Off',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-adjika-different-spices-small-bawls-grey-background_140725-136599.jpg?w=740'
  },
  {
    id: 'mutton-masala',
    title: 'mutton masala',
    discount: '5% Off',
    image: 'https://img.freepik.com/free-photo/turkish-chig-kofte-with-meat-herbs_114579-3653.jpg?w=740'
  },
  {
    id: 'black-urad',
    title: 'black urad powder',
    discount: '10% Off',
    image: 'https://img.freepik.com/free-photo/sesame-black-cumin-seeds-glass-cups_114579-69969.jpg?w=740'
  }
];

export function ProductOffers() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          {/* Featured Product */}
          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://img.freepik.com/free-photo/flat-lay-asian-food-ingredients-mix-frame_23-2148377558.jpg?w=740"
              alt="Best Kerala Spices"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 flex flex-col justify-end">
              <h2 className="text-white text-4xl font-bold mb-2">Best Spices</h2>
              <p className="text-white/90 text-xl mb-4">FROM THE HIGH RANGE</p>
              <Link
                to="/products"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-fit"
              >
                SHOP NOW →
              </Link>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="relative h-[195px] rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <p className="text-white text-lg">Up to</p>
                    <h3 className="text-white text-2xl font-bold mb-2">{product.discount}</h3>
                    <p className="text-white text-xl mb-3">{product.title}</p>
                    <Link
                      to="/products"
                      className="inline-block bg-white text-gray-800 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition"
                    >
                      SHOP NOW →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}