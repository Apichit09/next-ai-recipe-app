import React from 'react';
import Image from "next/image";
import { FaUtensils } from "react-icons/fa";

const RecipeImage = ({ imageUrl, recipeName }) => {
  return (
    <div className="md:w-2/5">
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={recipeName} 
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
            <FaUtensils className="text-5xl text-teal-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeImage;
