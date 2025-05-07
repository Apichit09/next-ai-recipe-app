import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-500/5 to-blue-500/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">
            ทีมผู้พัฒนา
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            ทีมของเราประกอบด้วยผู้เชี่ยวชาญด้านเทคโนโลยี AI และผู้มีความหลงใหลในอาหาร
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember 
            name="อภิชิต เชื้อหงษ์" 
            role="UX/UI Designer"
            image="/images/team3.png"
            delay="0"
          />
          <TeamMember 
            name="ณภัทร สมบัติหอม" 
            role="AI Engineer"
            image="/images/team1.png"
            delay="150"
          />
          <TeamMember 
            name="ภูวนัย เพราะไธสง" 
            role="Backend Engineer"
            image="/images/team2.png"
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
