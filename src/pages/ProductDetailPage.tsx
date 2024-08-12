import React from 'react';

const ProductDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="h-80 bg-gray-200 rounded-lg mb-4"></div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-3xl font-bold mb-4">Product Name</h2>
          <p className="text-gray-600 mb-4">$19.99</p>
          <p className="mb-6">Detailed description of the product goes here. Include all relevant details, materials used, size, etc.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
