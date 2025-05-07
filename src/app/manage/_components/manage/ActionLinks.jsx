import React from 'react';
import Link from 'next/link';
import { MdAdd, MdFoodBank, MdRestaurantMenu, MdLink } from 'react-icons/md';

const ActionButton = ({ href, icon, text, color }) => (
  <Link 
    href={href}
    className={`flex items-center gap-2 px-5 py-3 ${color} text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const ActionLinks = () => {
  return (
    <div className="mb-12 flex flex-col sm:flex-row gap-4">
      <ActionButton 
        href="/manage/add-ingredients" 
        icon={<MdAdd />} 
        text="เพิ่มวัตถุดิบ" 
        color="bg-blue-500 hover:bg-blue-600"
      />
      <ActionButton 
        href="/manage/add-recipes" 
        icon={<MdRestaurantMenu />} 
        text="เพิ่มเมนูอาหาร" 
        color="bg-teal-500 hover:bg-teal-600"
      />
      <ActionButton 
        href="/manage/add-recipe-ingredients" 
        icon={<MdLink />} 
        text="ผูกเมนู ↔ วัตถุดิบ" 
        color="bg-purple-500 hover:bg-purple-600"
      />
    </div>
  );
};

export default ActionLinks;
