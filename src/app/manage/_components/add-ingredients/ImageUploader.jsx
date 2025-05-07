import React from 'react';
import Image from "next/image";
import { MdImage, MdOutlineFileUpload } from 'react-icons/md';

const ImageUploader = ({ previewUrl, onFileChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">รูปภาพวัตถุดิบ</label>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className={`w-32 h-32 rounded-lg border-2 border-dashed flex items-center justify-center 
          ${previewUrl ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
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
          <label className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-all mb-2">
            <MdOutlineFileUpload className="text-xl" />
            <span>อัปโหลดรูปภาพ</span>
            <input 
              type="file" 
              accept="image/*" 
              onChange={onFileChange}
              className="hidden"
            />
          </label>
          <p className="text-sm text-gray-500">รองรับไฟล์ JPG, PNG (ไม่บังคับ)</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
