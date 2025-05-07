import React from 'react';
import { MdSave } from 'react-icons/md';

const SaveButton = ({ onClick, disabled }) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
      } text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto`}
    >
      <MdSave className="text-xl" />
      บันทึกความสัมพันธ์
    </button>
  );
};

export default SaveButton;
