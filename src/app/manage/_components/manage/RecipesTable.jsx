import React from 'react';
import Image from 'next/image';
import { MdDelete, MdRestaurantMenu, MdImage } from 'react-icons/md';

const RecipesTable = ({ recipes, getIngredients, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <MdRestaurantMenu className="text-2xl" /> เมนูอาหาร <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{recipes.length}</span>
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">ID</th>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">รูป</th>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">ชื่อเมนู</th>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">วัตถุดิบที่ใช้</th>
              <th className="p-3 text-right text-gray-600 font-medium text-sm">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map(r => (
              <tr key={r.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="p-3 text-center text-gray-500">{r.id}</td>
                <td className="p-3">
                  {r.image_url ? (
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border border-gray-200">
                      <Image 
                        src={r.image_url} 
                        alt={r.name} 
                        fill 
                        className="object-cover transition-transform hover:scale-110 duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                      <MdImage className="text-gray-400 text-2xl" />
                    </div>
                  )}
                </td>
                <td className="p-3">
                  <div className="font-medium text-teal-600">{r.name}</div>
                  {r.description && <p className="text-xs text-gray-500 mt-1">{r.description}</p>}
                </td>
                <td className="p-3">
                  {getIngredients(r.name) ? (
                    <div className="flex flex-wrap gap-1">
                      {getIngredients(r.name).split(',').map((ing, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {ing.trim()}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">ไม่มีวัตถุดิบ</span>
                  )}
                </td>
                <td className="p-3 text-right">
                  <button 
                    onClick={() => onDelete("recipes", r.id)} 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
            
            {recipes.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">ไม่พบข้อมูลเมนูอาหาร</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipesTable;
