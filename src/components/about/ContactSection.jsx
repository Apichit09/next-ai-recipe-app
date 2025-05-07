import React from 'react';
import { FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white/50 rounded-t-3xl">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">
            ติดต่อเรา
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            มีคำถามหรือข้อเสนอแนะใดๆ ไม่ต้องลังเล ติดต่อเราได้ตามช่องทางด้านล่าง
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:contact@airecipe.com" 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 group"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-3 text-white">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">อีเมล</h3>
              <p className="text-teal-600 group-hover:text-blue-600 transition-colors">contact@airecipe.com</p>
            </div>
          </a>
          
          <a 
            href="https://github.com/ai-recipe" 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 group"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-3 text-white">
              <FaGithub className="text-2xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">GitHub</h3>
              <p className="text-teal-600 group-hover:text-blue-600 transition-colors">github.com/ai-recipe</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
