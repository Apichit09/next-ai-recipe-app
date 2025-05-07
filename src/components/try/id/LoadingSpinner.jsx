import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col font-kanit">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-teal-500 border-t-transparent rounded-full"></div>
      </div>
      <Footer />
    </div>
  );
};

export default LoadingSpinner;
