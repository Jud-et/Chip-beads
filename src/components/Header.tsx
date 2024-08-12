import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">Bead Store</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
            <li><Link to="/shop" className="text-gray-600 hover:text-blue-500">Shop</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link></li>
            <li><Link to="/cart" className="text-gray-600 hover:text-blue-500">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
