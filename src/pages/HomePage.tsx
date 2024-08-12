import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-800">Bead Store</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="hero bg-blue-500 text-white p-10 rounded-lg shadow-lg mb-10">
          <h2 className="text-4xl font-bold">Welcome to the Bead Store</h2>
          <p className="mt-4">Discover beautiful beads and unique commodities!</p>
          <button className="mt-6 bg-white text-blue-500 py-2 px-4 rounded">Shop Now</button>
        </section>

        <section className="featured-products">
          <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Placeholder for product items */}
            <div className="bg-white p-4 rounded-lg shadow-lg">Product 1</div>
            <div className="bg-white p-4 rounded-lg shadow-lg">Product 2</div>
            <div className="bg-white p-4 rounded-lg shadow-lg">Product 3</div>
            <div className="bg-white p-4 rounded-lg shadow-lg">Product 4</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
