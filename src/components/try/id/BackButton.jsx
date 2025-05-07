import React from 'react';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="mb-6" data-aos="fade-right">
      <Link href="/try" className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors">
        <FaArrowLeft className="mr-2" /> กลับไปหน้าเลือกเมนู
      </Link>
    </div>
  );
};

export default BackButton;
