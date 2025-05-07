import React from 'react';
import { MdArrowForward, MdRestaurantMenu, MdEgg } from 'react-icons/md';

const RelationshipVisualizer = ({ recipeId, recipesList, ingredientId, ingredientsList }) => {
  const selectedRecipe = recipesList.find(r => r.id === parseInt(recipeId));
  const selectedIngredient = ingredientsList.find(i => i.id === parseInt(ingredientId));
  
  // จะแสดงผลเฉพาะเมื่อเลือกทั้งเมนูและวัตถุดิบแล้ว
  if (!selectedRecipe || !selectedIngredient) return null;
  
  return (
    <div className="my-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-blue-100">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2 border-l-4 border-purple-500">
          <MdRestaurantMenu className="text-2xl text-purple-500" />
          <span className="font-medium">{selectedRecipe.name}</span>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-md">
            <MdArrowForward className="text-white" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2 border-l-4 border-blue-500">
          <MdEgg className="text-2xl text-blue-500" />
          <span className="font-medium">{selectedIngredient.name}</span>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-600 mt-3">
        เมนู "{selectedRecipe.name}" จะใช้วัตถุดิบ "{selectedIngredient.name}"
      </p>
    </div>
  );
};

export default RelationshipVisualizer;
