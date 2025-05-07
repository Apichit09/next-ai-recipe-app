import React from 'react';

const StepCard = ({ number, title, description }) => (
  <div 
    className="bg-gradient-to-br from-blue-50 to-teal-50 p-7 rounded-2xl shadow hover:shadow-xl transition-all duration-300 w-full md:w-1/3 border border-white/50"
    data-aos="fade-up"
    data-aos-delay={(parseInt(number) - 1) * 150}
  >
    <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg">
      {number}
    </div>
    <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default StepCard;
