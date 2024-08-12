import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            placeholder="Shipping Address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="payment">
            Payment Details
          </label>
          <input
            type="text"
            id="payment"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Credit Card Number"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
