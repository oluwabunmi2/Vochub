import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-full">
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
      <select className="p-3 rounded-full border border-gray-300 focus:outline-none">
        <option value="">Filter by category</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Business">Business</option>
      </select>
    </div>
  );
}

export default SearchBar;