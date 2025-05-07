import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-16 px-4 mb-8">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
          
          <div className="relative py-16 px-8 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
              พร้อมสัมผัสประสบการณ์ใหม่แล้วหรือยัง?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              ลองใช้งาน AI Recipe และค้นพบเมนูอาหารใหม่ๆ ที่คุณสามารถทำได้จากวัตถุดิบที่มีอยู่
            </p>
            <Link 
              href="/try" 
              className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-medium rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              เริ่มใช้งานเลย <FaArrowRight className="ml-2" />
            </Link>
            
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full blur-xl opacity-50"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
