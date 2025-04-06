import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart } from 'lucide-react';
import CardGrid from './components/CardGrid';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CardsPage from './pages/CardsPage';
import QAPage from './pages/QAPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HowItWorks />
                
                <section id="shop" className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Cards</h2>
                    <CardGrid limit={4} />
                  </div>
                </section>

                <section id="impact" className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      <div className="p-6">
                        <div className="text-4xl font-bold text-rose-500 mb-2">1,000+</div>
                        <div className="text-gray-600">Children Supported</div>
                      </div>
                      <div className="p-6">
                        <div className="text-4xl font-bold text-rose-500 mb-2">$50,000</div>
                        <div className="text-gray-600">Donations Raised</div>
                      </div>
                      <div className="p-6">
                        <div className="text-4xl font-bold text-rose-500 mb-2">5,000+</div>
                        <div className="text-gray-600">Cards Sold</div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/faq" element={<QAPage />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App