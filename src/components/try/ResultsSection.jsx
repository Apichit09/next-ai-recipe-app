import React from 'react';
import { MdOutlineFoodBank } from "react-icons/md";
import RecipeCard from './RecipeCard';

const ResultsSection = ({ results, selectedCount, onReset }) => {
  return (
    <section className="mb-12" data-aos="fade-up">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <MdOutlineFoodBank className="text-3xl mr-3 text-teal-500" />
          <h2 className="text-2xl font-bold text-gray-800">เมนูที่แนะนำจากวัตถุดิบของคุณ</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((menu, i) => (
              <RecipeCard 
                key={i}
                recipe={menu}
                index={i}
                selectedCount={selectedCount}
              />
            ))
          ) : (
            <div className="col-span-full bg-white p-8 rounded-xl text-center">
              <div className="mb-4 text-gray-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">ไม่พบเมนูที่เหมาะสม</h3>
              <p className="text-gray-500">ลองเปลี่ยนวัตถุดิบที่เลือก หรือเพิ่มวัตถุดิบอื่นๆ</p>
            </div>
          )}
        </div>
        
        {results.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">พบ {results.length} เมนูที่คุณสามารถทำได้จากวัตถุดิบที่เลือก</p>
            <button 
              onClick={onReset}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
            >
              กลับไปเลือกวัตถุดิบใหม่
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
