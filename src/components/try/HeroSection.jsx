import React from 'react';
import SelectedIngredientsTags from './SelectedIngredientsTags';

const HeroSection = ({ selected, toggleSelect }) => {
  return (
    <section className="mb-12 text-center py-8" data-aos="fade-up">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
        เลือกวัตถุดิบของคุณ
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        เลือกวัตถุดิบที่มีอยู่ในครัว และให้ AI แนะนำเมนูอาหารที่คุณสามารถทำได้
      </p>
      
      <SelectedIngredientsTags selected={selected} toggleSelect={toggleSelect} />
    </section>
  );
};

export default HeroSection;
