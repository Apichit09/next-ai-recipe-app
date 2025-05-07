import React from 'react';
import { FaSearch } from "react-icons/fa";
import IngredientCard from './IngredientCard';

const IngredientGrid = ({ filteredIngredients, searchTerm, selected, toggleSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {filteredIngredients.length > 0 ? (
        filteredIngredients.map((ing, index) => (
          <IngredientCard
            key={ing.id}
            ingredient={ing}
            index={index}
            isSelected={selected.includes(ing.name)}
            onToggle={() => toggleSelect(ing.name)}
          />
        ))
      ) : searchTerm ? (
        <div className="col-span-full text-center py-12 text-gray-500">
          <div className="mb-3 text-gray-400">
            <FaSearch className="text-4xl mx-auto opacity-30" />
          </div>
          <h3 className="text-xl font-medium mb-2">ไม่พบวัตถุดิบที่ค้นหา</h3>
          <p>ลองค้นหาด้วยคำอื่น หรือเลือกจากรายการที่มี</p>
        </div>
      ) : (
        <div className="col-span-full text-center py-12 text-gray-500">
          <div className="animate-spin h-8 w-8 mx-auto mb-3 border-2 border-teal-500 border-t-transparent rounded-full"></div>
          กำลังโหลดรายการวัตถุดิบ...
        </div>
      )}
    </div>
  );
};

export default IngredientGrid;
