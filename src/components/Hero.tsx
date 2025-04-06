import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80"
          alt="Children drawing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Cards that Create Change
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Purchase beautiful cards designed by children in need. Every card supports a child's education and future.
        </p>
        <Link 
          to="/cards"
          className="bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-600 transition inline-block"
        >
          Shop Cards
        </Link>
      </div>
    </div>
  );
}

export default Hero;