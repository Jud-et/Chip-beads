import React from 'react';

const CartSummary: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Cart Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Product Name</span>
        <span>$19.99</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Product Name</span>
        <span>$29.99</span>
      </div>
      <div className="border-t border-gray-300 mt-4 pt-2">
        <div className="flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">$49.98</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
