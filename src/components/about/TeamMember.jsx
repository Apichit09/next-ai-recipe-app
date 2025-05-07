import React from 'react';
import Image from "next/image";

const TeamMember = ({ name, role, image, delay }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative h-80">
      <Image 
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-teal-600">{role}</p>
    </div>
  </div>
);

export default TeamMember;
