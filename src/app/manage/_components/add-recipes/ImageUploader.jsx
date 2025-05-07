import React from 'react';
import Image from "next/image";
import { MdImage, MdOutlineFileUpload } from 'react-icons/md';

const ImageUploader = ({ previewUrl, onFileChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">รูปภาพเมนูอาหาร</label>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className={`w-32 h-32 rounded-lg border-2 border-dashed flex items-center justify-center 
          ${previewUrl ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'}`}
        >
          {previewUrl ? (
            <div className="relative w-full h-full">
              <Image 
                src={previewUrl} 
                alt="ตัวอย่างรูปภาพ" 
                fill
                className="object-cover rounded-lg" 
              />
            </div>
          ) : (
            <MdImage className="text-4xl text-gray-400" />
          )}
        </div>
        
        <div>
          <label className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-all mb-2">
            <MdOutlineFileUpload className="text-xl" />
            <span>เลือกรูปภาพ</span>
            <input 
              type="file" 
              accept="image/*" 
              onChange={onFileChange}
              className="hidden"
            />
          </label>
          <p className="text-sm text-gray-500">รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 5MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
