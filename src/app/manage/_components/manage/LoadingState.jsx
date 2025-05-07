import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center p-16 flex-col">
      <div className="relative">
        <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <div className="absolute top-0 left-0 animate-spin h-16 w-16 border-4 border-teal-500 border-b-transparent rounded-full" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="mt-6 text-gray-600 font-medium">กำลังโหลดข้อมูล...</p>
    </div>
  );
};

export default LoadingState;
