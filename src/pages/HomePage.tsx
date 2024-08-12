import React from 'react';
import Carousel from '../components/Carousel';
import SmartSearch from '../components/SmartSearch';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto pt-20 p-4">
        {/* Hero Section */}
        <section className="hero bg-blue-500 text-white p-10 rounded-lg shadow-lg mb-10 transition-transform duration-500 transform hover:scale-105">
          <h2 className="text-4xl font-bold">Welcome to the Bead Store</h2>
          <p className="mt-4">Discover beautiful beads and unique commodities!</p>
          <button className="mt-6 bg-white text-blue-500 py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700 hover:text-white">
            Shop Now
          </button>
        </section>

        {/* Smart Search */}
        <section className="mb-10">
          <SmartSearch />
        </section>

        {/* Carousel Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
          <Carousel />
        </section>

        {/* Featured Products Section */}
        <section className="featured-products">
          <h3 className="text-2xl font-bold mb-4">Other Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                <h4 className="text-lg font-bold">Product {index + 1}</h4>
                <p className="text-gray-600 mt-2">$19.99</p>
                <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;