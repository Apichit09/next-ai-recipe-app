import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <span className="absolute -left-8 -top-8 text-7xl text-teal-300 opacity-30">❝</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                AI แนะนำเมนูอาหาร<br />จากวัตถุดิบที่คุณมี
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              ไม่รู้จะทำอะไรกิน? มีวัตถุดิบในตู้เย็นแต่คิดเมนูไม่ออก?<br />
              ให้ AI ของเราช่วยแนะนำเมนูอาหารที่คุณสามารถทำได้จากวัตถุดิบที่มีอยู่
            </p>
            <Link 
              href="/try" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              ทดลองใช้ฟรี <FaArrowRight className="ml-2 animate-pulse" />
            </Link>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="backdrop-blur-sm bg-white/20 p-3 rounded-2xl shadow-2xl transform transition-all duration-500 hover:translate-y-[-5px] group">
              <div className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-blue-600/30 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <Image
                  src="/images/recipe-hero.png"
                  alt="AI Recipe Recommendation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg hidden md:flex">
                <GiCookingPot className="text-4xl text-teal-500 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
