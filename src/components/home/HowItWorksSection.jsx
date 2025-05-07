import React from 'react';
import StepCard from './StepCard';
import { MdRestaurantMenu } from "react-icons/md";

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-8 md:p-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center">
            <MdRestaurantMenu className="text-teal-500 mr-3" />
            วิธีการใช้งาน
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-6">
            <StepCard 
              number="1"
              title="เลือกวัตถุดิบ"
              description="ระบุวัตถุดิบที่คุณมี ยิ่งละเอียดยิ่งดี ช่วยให้ AI แนะนำเมนูได้ตรงกับความต้องการ"
            />
            <div className="hidden md:flex text-4xl text-blue-300 items-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
            </div>
            <StepCard 
              number="2"
              title="AI วิเคราะห์"
              description="ระบบจะวิเคราะห์และค้นหาสูตรอาหารที่เหมาะสมกับวัตถุดิบที่คุณมีอยู่"
            />
            <div className="hidden md:flex text-4xl text-blue-300 items-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
            </div>
            <StepCard 
              number="3"
              title="รับคำแนะนำ"
              description="รับเมนูอาหารพร้อมวิธีทำที่ละเอียด ส่วนผสม และเคล็ดลับการทำอาหารทันที"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
