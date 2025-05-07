import React from 'react';
import { FaSearch, FaUtensils } from "react-icons/fa";
import IngredientGrid from './IngredientGrid';

const SearchIngredientsSection = ({ 
  searchTerm,
  setSearchTerm,
  filteredIngredients,
  selected,
  toggleSelect,
  handleSearch,
  isLoading
}) => {
  return (
    <section className="mb-12" data-aos="fade-up" data-aos-delay="100">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-teal-100 rounded-full opacity-20"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
        
        <div className="relative z-10">
          {/* Search Input */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input 
              type="text"
              placeholder="ค้นหาวัตถุดิบ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
            />
          </div>
          
          {/* Ingredients Grid */}
          <IngredientGrid 
            filteredIngredients={filteredIngredients} 
            searchTerm={searchTerm}
            selected={selected}
            toggleSelect={toggleSelect}
          />
          
          {/* Selected Count */}
          {selected.length > 0 && (
            <div className="text-center mb-6 text-sm text-gray-600">
              คุณได้เลือกวัตถุดิบไปแล้ว <span className="font-medium text-teal-600">{selected.length}</span> รายการ
            </div>
          )}
          
          {/* Search Button */}
          <div className="flex justify-center">
            <button 
              onClick={handleSearch} 
              disabled={isLoading || selected.length === 0}
              className={`flex items-center px-8 py-3 rounded-xl font-medium shadow-lg transition-all duration-300 transform
                ${selected.length > 0
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-xl hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                  กำลังค้นหา...
                </>
              ) : (
                <>
                  <FaUtensils className="mr-2" />
                  แนะนำเมนู
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchIngredientsSection;
