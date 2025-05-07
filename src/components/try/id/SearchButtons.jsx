import React from 'react';
import { FaGoogle, FaYoutube } from "react-icons/fa";

const SearchButtons = ({ recipeName, onSearchGoogle, onSearchYoutube }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button 
        onClick={onSearchGoogle} 
        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-5 rounded-lg border border-gray-200 shadow-sm transition-colors duration-200"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <FaGoogle className="text-blue-500" />
        <span>ค้นหา "<span className="text-blue-600 font-semibold">วิธีทำ{recipeName}</span>" บน Google</span>
      </button>
      
      <button 
        onClick={onSearchYoutube} 
        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-5 rounded-lg border border-gray-200 shadow-sm transition-colors duration-200"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <FaYoutube className="text-red-500" />
        <span>ดูวิดีโอ "<span className="text-red-500 font-semibold">วิธีทำ{recipeName}</span>" บน YouTube</span>
      </button>
    </div>
  );
};

export default SearchButtons;
