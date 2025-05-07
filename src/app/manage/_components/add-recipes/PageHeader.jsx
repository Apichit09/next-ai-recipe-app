import React from 'react';
import Link from "next/link";
import { MdArrowBack, MdRestaurantMenu } from 'react-icons/md';

const PageHeader = () => {
  return (
    <div className="mb-8">
      <Link 
        href="/manage" 
        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors mb-4 w-fit"
      >
        <MdArrowBack className="text-lg" />
        <span>กลับไปหน้าจัดการ</span>
      </Link>
      
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-lg shadow-md">
          <MdRestaurantMenu className="text-2xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">เพิ่มเมนูอาหาร</h1>
          <p className="text-gray-600 text-sm">กรอกข้อมูลเมนูอาหารใหม่เพื่อเพิ่มในระบบ</p>
        </div>
      </div>
      <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mt-3 rounded-full"></div>
    </div>
  );
};

export default PageHeader;
