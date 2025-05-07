import React from 'react';

const FeatureCard = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex justify-center mb-5 bg-gradient-to-br from-teal-50 to-blue-50 w-16 h-16 rounded-full mx-auto items-center shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default FeatureCard;
