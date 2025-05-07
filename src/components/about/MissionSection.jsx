import React from 'react';
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-full p-5 w-20 h-20 flex items-center justify-center text-white mb-6 shadow-lg">
                <FaLightbulb className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                วิสัยทัศน์ของเรา
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI Recipe เกิดจากแนวคิดที่ต้องการแก้ปัญหาที่หลายคนเผชิญ: มีวัตถุดิบในตู้เย็นแต่ไม่รู้จะทำอาหารอะไร เราสร้างระบบ AI ที่สามารถแนะนำเมนูอาหารที่เหมาะสมกับวัตถุดิบที่คุณมี
              </p>
              <p className="text-gray-700 leading-relaxed">
                เป้าหมายของเราคือการลดการสูญเสียอาหาร ประหยัดเวลาในการคิดเมนู และสร้างประสบการณ์การทำอาหารที่สนุกและสร้างสรรค์สำหรับทุกคน
              </p>
            </div>
            <div className="md:w-1/2 relative" data-aos="fade-left">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border-8 border-white">
                <Image 
                  src="/images/mission.png" 
                  alt="Our Mission" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
