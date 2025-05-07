import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const RecipeCard = ({ recipe, index, selectedCount }) => {
  return (
    <Link 
      href={`/try/${recipe.id || recipe}`} 
      className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-100 hover:border-teal-200 shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="mb-4 w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
        <Image
          src={recipe.image_url || "/images/placeholder.png"}
          alt={recipe.name || recipe}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
        {recipe.name || recipe}
      </h3>
      
      {recipe.description ? (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{recipe.description}</p>
      ) : (
        <p className="text-gray-500 text-sm mb-4">คลิกเพื่อดูรายละเอียดเมนูและวิธีการทำอาหาร</p>
      )}
      
      <div className="mt-auto pt-3 flex justify-between items-center border-t border-gray-100">
        <span className="text-xs text-gray-400">วัตถุดิบที่เลือก {selectedCount} รายการ</span>
        <span className="text-teal-500 inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          ดูวิธีทำ <FaArrowRight className="ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default RecipeCard;
