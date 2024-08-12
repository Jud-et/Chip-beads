import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <h4 className="text-lg font-bold mb-2">Product Name</h4>
      <p className="text-gray-600 mb-2">$19.99</p>
      <button className="bg-blue-500 text-white py-1 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
