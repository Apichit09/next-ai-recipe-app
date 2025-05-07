import React from 'react';
import { MdLabelOutline } from 'react-icons/md';

const IngredientNameInput = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">ชื่อวัตถุดิบ</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MdLabelOutline className="text-gray-400 text-xl" />
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="ระบุชื่อวัตถุดิบ เช่น กระเทียม, พริกขี้หนู, หอมหัวใหญ่"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
        />
      </div>
      <p className="text-sm text-gray-500 mt-1">* จำเป็นต้องระบุชื่อวัตถุดิบ</p>
    </div>
  );
};

export default IngredientNameInput;
