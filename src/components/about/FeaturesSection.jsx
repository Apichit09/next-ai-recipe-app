import React from 'react';
import FeatureCard from './FeatureCard';
import { FaUsers } from "react-icons/fa";
import { MdSecurity, MdFoodBank } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">
            คุณสมบัติเด่น
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            AI Recipe มาพร้อมกับคุณสมบัติที่ทำให้การทำอาหารเป็นเรื่องสนุกและง่ายขึ้น
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MdFoodBank className="text-3xl text-teal-500" />}
            title="แนะนำเมนูที่หลากหลาย"
            description="แนะนำเมนูอาหารได้หลากหลาย ทั้งอาหารไทยและอาหารนานาชาติ"
            delay="0"
          />
          <FeatureCard
            icon={<FaUsers className="text-3xl text-blue-500" />}
            title="รองรับผู้ใช้ทุกระดับ"
            description="ไม่ว่าคุณจะเป็นมือใหม่หรือเชฟมืออาชีพ ระบบของเราใช้งานได้ง่ายสำหรับทุกคน"
            delay="150"
          />
          <FeatureCard
            icon={<MdSecurity className="text-3xl text-cyan-500" />}
            title="ปลอดภัยและเชื่อถือได้"
            description="ระบบของเราได้รับการออกแบบให้มีความปลอดภัยและให้คำแนะนำที่เชื่อถือได้"
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
