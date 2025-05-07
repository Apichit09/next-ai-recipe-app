import React from 'react';
import Image from 'next/image';
import { MdDelete, MdImage, MdFoodBank } from 'react-icons/md';

const IngredientsTable = ({ ingredients, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <MdFoodBank className="text-2xl" /> วัตถุดิบ <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{ingredients.length}</span>
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">ID</th>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">รูป</th>
              <th className="p-3 text-left text-gray-600 font-medium text-sm">ชื่อ</th>
              <th className="p-3 text-right text-gray-600 font-medium text-sm">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(i => (
              <tr key={i.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="p-3 text-center text-gray-500">{i.id}</td>
                <td className="p-3">
                  {i.image_url ? (
                    <div className="relative h-14 w-14 rounded-md overflow-hidden border border-gray-200">
                      <Image 
                        src={i.image_url} 
                        alt={i.name} 
                        fill 
                        className="object-cover transition-transform hover:scale-110 duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="h-14 w-14 bg-gray-100 rounded-md flex items-center justify-center">
                      <MdImage className="text-gray-400 text-2xl" />
                    </div>
                  )}
                </td>
                <td className="p-3 font-medium">{i.name}</td>
                <td className="p-3 text-right">
                  <button 
                    onClick={() => onDelete("ingredients", i.id)} 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
            
            {ingredients.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-500">ไม่พบข้อมูลวัตถุดิบ</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IngredientsTable;
