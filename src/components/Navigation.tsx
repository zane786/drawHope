import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

function Navigation() {
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Draw Hope</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
            <Link to="/cards" className="text-gray-600 hover:text-gray-900">Shop Cards</Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            <Link to="/#impact" className="text-gray-600 hover:text-gray-900">Our Impact</Link>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
              Donate Now
            </button>
            <button 
              className="relative p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}

export default Navigation;