import React from 'react';
import { FaUtensils } from "react-icons/fa";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-1 rounded-xl">
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <FaUtensils className="mr-3 text-teal-500" />
            วัตถุดิบ :
          </h2>
          
          <ul className="space-y-3">
            {ingredients.map((ing, i) => (
              <li key={i} className="flex items-start group" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="mr-3 w-5 h-5 rounded-full bg-teal-100 flex-shrink-0 flex items-center justify-center group-hover:bg-teal-200 transition-colors mt-1">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                </div>
                <span className="text-gray-700">{ing}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientsList;
