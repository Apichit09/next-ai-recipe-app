"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import TeamSection from "@/components/about/TeamSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import CTASection from "@/components/about/CTASection";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-kanit bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <HeroSection />
      <MissionSection />
      <HowItWorksSection />
      <TeamSection />
      <FeaturesSection />
      <CTASection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}
