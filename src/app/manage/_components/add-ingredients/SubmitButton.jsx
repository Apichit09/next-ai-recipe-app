import React from 'react';
import { MdSave } from 'react-icons/md';

const SubmitButton = ({ onClick, isDisabled = false }) => {
  return (
    <button 
      onClick={onClick}
      disabled={isDisabled} 
      className={`${
        isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600'
      } text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto`}
    >
      <MdSave className="text-xl" />
      บันทึกวัตถุดิบ
    </button>
  );
};

export default SubmitButton;
