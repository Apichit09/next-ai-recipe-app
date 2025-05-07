import React from 'react';

const FormInput = ({ label, placeholder, value, onChange, type = 'text', textarea = false }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-medium mb-2">{label}</label>}
      
      {textarea ? (
        <textarea 
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-colors resize-none"
        />
      ) : (
        <input 
          type={type}
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-colors"
        />
      )}
    </div>
  );
};

export default FormInput;
