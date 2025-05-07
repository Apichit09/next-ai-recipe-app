import React from 'react';
import Image from "next/image";

const TestimonialCard = ({ quote, author, role, image, delay }) => (
  <div 
    className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl shadow hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500 relative overflow-hidden group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="absolute top-0 right-0 bg-teal-50 w-20 h-20 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="mb-6 relative z-10 flex">
      {image && (
        <div className="mr-4 w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-teal-100">
          <Image src={image} alt={author} width={48} height={48} className="object-cover" />
        </div>
      )}
      <div>
        <p className="font-medium text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic mb-4 relative z-10">"{quote}"</p>
  </div>
);

export default TestimonialCard;
