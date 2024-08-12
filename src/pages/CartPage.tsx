import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 px-4">
            <h4 className="text-lg font-bold">Product Name</h4>
            <p className="text-gray-600">$19.99</p>
          </div>
          <div>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">Total: $19.99</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
