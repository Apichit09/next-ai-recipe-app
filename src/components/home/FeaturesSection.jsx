import React from 'react';
import FeatureCard from './FeatureCard';
import { FaUtensils, FaMagic, FaClock } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800" data-aos="fade-up">
          <span className="relative inline-block">
            ทำไมต้องใช้ AI แนะนำเมนูอาหาร?
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <FeatureCard 
            icon={<FaUtensils className="text-4xl text-teal-500" />}
            title="ใช้วัตถุดิบที่มีอยู่"
            description="ไม่ต้องออกไปซื้อของเพิ่ม ใช้วัตถุดิบที่มีอยู่ในบ้านให้เกิดประโยชน์สูงสุด"
            delay="0"
          />
          <FeatureCard 
            icon={<FaMagic className="text-4xl text-blue-500" />}
            title="เมนูที่หลากหลาย"
            description="AI สามารถแนะนำเมนูได้หลากหลาย ทั้งอาหารไทยและนานาชาติตามความต้องการ"
            delay="150"
          />
          <FeatureCard 
            icon={<FaClock className="text-4xl text-cyan-500" />}
            title="ประหยัดเวลา"
            description="ได้ไอเดียอาหารอย่างรวดเร็ว พร้อมวิธีทำแบบละเอียดโดยใช้เวลาไม่กี่วินาที"
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
