import React from 'react';
import { MdDashboard } from 'react-icons/md';

const PageHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-3 rounded-lg shadow-md">
          <MdDashboard className="text-2xl text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">แผงจัดการข้อมูล</h1>
      </div>
      <p className="text-gray-600 ml-12">จัดการวัตถุดิบและเมนูอาหารในระบบ</p>
      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-teal-400 mt-2 ml-12 rounded-full"></div>
    </div>
  );
};

export default PageHeader;
