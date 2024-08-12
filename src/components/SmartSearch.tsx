import React, { useState } from 'react';

const SmartSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  const products = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const results = products.filter(product =>
      product.toLowerCase().includes(searchQuery)
    );

    setFilteredResults(results);
  };

  return (
    <div className="relative mb-10">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
          {filteredResults.length ? (
            filteredResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {result}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SmartSearch;
