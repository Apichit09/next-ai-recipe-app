import React from 'react';
import { MdRestaurantMenu, MdKitchen } from 'react-icons/md';

const SelectBox = ({ label, value, onChange, options, icon, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2 items-center gap-1">
        {icon}
        {label}
      </label>
      
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 transition-colors shadow-sm bg-white"
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
