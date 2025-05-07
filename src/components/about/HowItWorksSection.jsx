import React from 'react';
import { FaRobot, FaCode } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gray-800 relative" data-aos="fade-up">
            <span className="relative">
              วิธีการทำงานของ AI
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            ระบบ AI ของเราใช้เทคโนโลยีการเรียนรู้เชิงลึกเพื่อวิเคราะห์วัตถุดิบและแนะนำเมนูที่เหมาะสม
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="0">
            <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaRobot className="text-3xl text-teal-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">การเรียนรู้ของ AI</h3>
            <p className="text-gray-600">
              AI ของเราเรียนรู้จากฐานข้อมูลสูตรอาหารจำนวนมาก ทำให้สามารถแนะนำเมนูที่หลากหลายได้อย่างแม่นยำ
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="150">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaCode className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">เทคโนโลยีล้ำสมัย</h3>
            <p className="text-gray-600">
              เราใช้เทคโนโลยี Machine Learning และ Natural Language Processing เพื่อเข้าใจวัตถุดิบและความต้องการของผู้ใช้
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-cyan-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <MdUpdate className="text-3xl text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">อัพเดตสม่ำเสมอ</h3>
            <p className="text-gray-600">
              ระบบของเราได้รับการอัพเดตสม่ำเสมอด้วยสูตรอาหารใหม่ๆ และปรับปรุงการแนะนำให้แม่นยำยิ่งขึ้น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
