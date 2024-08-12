import React from 'react';
import ProductCard from '../components/ProductCard';

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-6">Shop All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(8).fill(null).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
