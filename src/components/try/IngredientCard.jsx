import React from 'react';
import Image from "next/image";
import { FaUtensils, FaPlusCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const IngredientCard = ({ ingredient, index, isSelected, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative group rounded-xl transition-all duration-300 border flex flex-col items-center overflow-hidden shadow-sm hover:shadow-md
        ${isSelected 
          ? "border-teal-500 ring-2 ring-teal-500/20" 
          : "border-gray-200 hover:border-teal-200"
        }`}
      data-aos="fade-up"
      data-aos-delay={index % 10 * 30}
    >
      <div className="relative w-full h-24 sm:h-28 bg-gray-50">
        {ingredient.image_url ? (
          <>
            {/* Use a local placeholder image as fallback */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
              <FaUtensils className="text-2xl text-teal-300" />
            </div>
            <Image 
              src={ingredient.image_url}
              alt={ingredient.name}
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
            <FaUtensils className="text-2xl text-teal-300" />
          </div>
        )}
        
        {/* Selected overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 to-blue-500/40 flex items-center justify-center">
            <div className="bg-white rounded-full p-1 shadow-md">
              <FaCheckCircle className="text-xl text-teal-500" />
            </div>
          </div>
        )}
        
        {/* Add/Remove badge */}
        <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transform transition-transform duration-300 
          ${isSelected 
            ? "bg-gradient-to-r from-teal-500 to-blue-500" 
            : "bg-white group-hover:scale-110"
          }`}>
          {isSelected ? (
            <FaTimesCircle className="text-xs text-white" />
          ) : (
            <FaPlusCircle className="text-xs text-teal-500" />
          )}
        </div>
      </div>
      
      <div className={`w-full py-2 px-2 text-center ${isSelected ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white" : "bg-white text-gray-800"}`}>
        <span className="text-sm truncate block">{ingredient.name}</span>
      </div>
    </button>
  );
};

export default IngredientCard;
