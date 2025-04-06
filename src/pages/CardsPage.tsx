import React from 'react';
import CardGrid from '../components/CardGrid';

function CardsPage() {
  return (
    <div className="pt-16">
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Hope Cards Collection</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Each card represents a child's dream and your opportunity to make a difference in their life.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CardGrid />
      </div>
    </div>
  );
}

export default CardsPage;