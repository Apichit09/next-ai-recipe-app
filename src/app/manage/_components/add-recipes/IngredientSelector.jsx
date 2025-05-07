import React from 'react';

const IngredientSelector = ({ value, onChange, ingredientsList }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">วัตถุดิบที่ใช้</label>
      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
        <input 
          value={value} 
          onChange={onChange}
          placeholder="ระบุ ID วัตถุดิบ คั่นด้วยเครื่องหมายคอมม่า (เช่น 1,2,3)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-colors mb-3"
        />
        
        <div className="text-sm text-gray-600 mb-2">รายการวัตถุดิบที่มีในระบบ</div>
        
        <div className="max-h-40 overflow-y-auto bg-white border border-gray-200 rounded-md p-2">
          <table className="w-full text-sm">
            <thead className="text-xs text-gray-700 bg-gray-100">
              <tr>
                <th className="px-2 py-1 text-left">ID</th>
                <th className="px-2 py-1 text-left">ชื่อวัตถุดิบ</th>
              </tr>
            </thead>
            <tbody>
              {ingredientsList.map(ingredient => (
                <tr key={ingredient.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-2 py-1 font-medium">{ingredient.id}</td>
                  <td className="px-2 py-1">{ingredient.name}</td>
                </tr>
              ))}
              {ingredientsList.length === 0 && (
                <tr>
                  <td colSpan="2" className="px-2 py-4 text-center text-gray-500">ไม่พบข้อมูลวัตถุดิบ</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-1">เลือก ID วัตถุดิบและคั่นด้วยเครื่องหมายคอมม่า (,)</p>
    </div>
  );
};

export default IngredientSelector;
