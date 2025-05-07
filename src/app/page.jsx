"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-kanit bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed -top-32 -left-32 w-64 h-64 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="fixed top-1/3 -right-32 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="fixed -bottom-32 -left-32 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      
      <Navbar />
      
      {/* Home Page Sections */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
}