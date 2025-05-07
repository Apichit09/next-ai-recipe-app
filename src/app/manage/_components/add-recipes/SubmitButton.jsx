import React from 'react';
import { MdSave } from 'react-icons/md';

const SubmitButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full md:w-auto"
    >
      <MdSave className="text-xl" />
      บันทึกเมนูอาหาร
    </button>
  );
};

export default SubmitButton;
