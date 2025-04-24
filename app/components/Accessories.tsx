'use client';

import { useEffect, useState } from 'react';

export default function Accessories() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 57, seconds: 57 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row  bg-purple-100 p-6">
      
      <div className="w-full md:w-1/4 text-4xl font-medium space-y-6 mt-8 lg:ml-12 md:ml-12 ">
        <p>Perfume hot</p>
        <p>Variety collection</p>
        <p>Accessories</p>
      </div>
      
      
      <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center gap-6">
        
        <div className="relative">
          <img src="/perfumes 2.jpg" alt="Perfume" className="w-64 h-64 object-cover rounded-lg lg:ml-12 md:ml-8" />
      
        </div>
        
      
        <div className="space-y-4 lg:ml-32 mt-8 md:ml-4">
          <p className="text-red-500 font-semibold">Deal of the week</p>
          <h2 className="text-2xl font-bold">Multi perfumes</h2>
          <p className="text-lg">Good quality of products</p>
          
          
          <div className="flex gap-2 bg-white p-4  shadow-lg rounded-lg text-center">
            <div className="lg:px-4 lg:py-2 md:px-2 md:py-2 bg-gray-800 text-white rounded-lg">
              <p className="lg:text-lg md:text-sm font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="lg:text-xs ">HOURS</p>
            </div>
            <div className="lg:px-4 lg:py-2 bg-gray-800 text-white rounded-lg">
              <p className="lg:text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="lg:text-xs">MINUTES</p>
            </div>
            <div className="lg:px-4 lg:py-2 bg-gray-800 text-white rounded-lg">
              <p className="lg:text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="lg:text-xs">SECONDS</p>
            </div>
          </div>
          
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Shop Now</button>
        </div>
      </div>
    </div>
  );
}
