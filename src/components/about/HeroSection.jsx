import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            เกี่ยวกับ AI Recipe
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            นวัตกรรมใหม่ที่จะเปลี่ยนประสบการณ์การทำอาหารของคุณ ด้วยการแนะนำเมนูอาหารจากวัตถุดิบที่คุณมี
          </p>
        </div>
        
        <div className="mt-10 relative" data-aos="zoom-in" data-aos-delay="200">
          <div className="w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/about-hero.png"
              alt="AI Recipe Concept" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 to-blue-600/30 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl max-w-lg text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">ค้นพบเมนูใหม่ทุกวัน</h2>
                <p className="text-white/90">AI ของเราพร้อมช่วยคุณในการค้นหาเมนูอาหารที่สร้างสรรค์และอร่อย</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
