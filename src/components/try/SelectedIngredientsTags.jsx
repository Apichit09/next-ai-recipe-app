import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const SelectedIngredientsTags = ({ selected, toggleSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {selected.length === 0 ? (
        <span className="text-gray-400 italic">ยังไม่ได้เลือกวัตถุดิบ</span>
      ) : (
        selected.map((item, i) => (
          <div 
            key={i}
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md animate-fadeIn"
            data-aos="zoom-in"
            data-aos-delay={i * 50}
          >
            <span>{item}</span>
            <button onClick={() => toggleSelect(item)} aria-label="Remove ingredient">
              <FaTimesCircle className="text-white/80 hover:text-white" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedIngredientsTags;
