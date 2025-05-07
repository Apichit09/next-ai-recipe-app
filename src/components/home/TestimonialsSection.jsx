import React from 'react';
import TestimonialCard from './TestimonialCard';
import { FaQuoteRight } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center" data-aos="fade-up">
          <FaQuoteRight className="text-teal-500 mr-3" />
          ผู้ใช้งานพูดถึงเรา
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="แค่บอกวัตถุดิบที่มี AI ก็แนะนำเมนูที่น่าทำมากๆ ทำตามแล้วอร่อยจริงๆ ช่วยให้การทำอาหารเป็นเรื่องสนุก"
            author="คุณนิภา"
            role="แม่บ้าน"
            image="/images/avatar/avatar1.png"
            delay="0"
          />
          <TestimonialCard 
            quote="ช่วยประหยัดเวลาคิดเมนู มีวัตถุดิบแค่ไม่กี่อย่างก็ทำอาหารอร่อยๆ ได้ สะดวกมากสำหรับคนทำงาน"
            author="คุณสมชาย"
            role="พนักงานออฟฟิศ"
            image="/images/avatar/avatar2.png"
            delay="150"
          />
          <TestimonialCard 
            quote="ชอบมากที่ได้เมนูแปลกใหม่ ที่ไม่เคยคิดมาก่อนว่าจะทำได้จากของที่มีอยู่ ได้ลองทำอาหารหลากหลายมากขึ้น"
            author="คุณวิภา"
            role="นักศึกษา"
            image="/images/avatar/avatar3.png"
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
