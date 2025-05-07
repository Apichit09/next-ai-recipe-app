import React from 'react';

const FeatureCard = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-teal-100 group-hover:to-blue-100">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
