import React from 'react';
import { ShoppingBag, Heart, Mail } from 'lucide-react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Your Cards</h3>
            <p className="text-gray-600">
              Browse our collection of unique cards designed by children around the world
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Support a Child</h3>
            <p className="text-gray-600">
              Your purchase directly supports the child artist's education and well-being
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive Their Thanks</h3>
            <p className="text-gray-600">
              Get a personal thank you letter from the child your purchase supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;