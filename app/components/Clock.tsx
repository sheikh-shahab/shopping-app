// "use client";

// import React, { useState, useEffect } from 'react';

// const Clock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatNumber = (number: any) => {
//     return number.toString().padStart(2, '0');
//   };

//   const hours = formatNumber(time.getHours());
//   const minutes = formatNumber(time.getMinutes());
//   const seconds = formatNumber(time.getSeconds());
//   const date = time.toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   return (
//     <div className="  flex items-center justify-center">
//       <div className=" p-4 rounded-2xl shadow-2xl">
//         <div className="flex flex-col items-center lg:space-y-4 md:space-y-2">
//           {/* Time Display */}
//           <div className="flex items-center lg:space-x-4 md:space-x-1">
//             {/* Hours */}
//             <div className="bg-gray-800 p-2 rounded-lg">
//               <div className="lg:text-3xl md:text-2xl font-bold text-white font-mono">
//                 {hours}
//               </div>
//               <div className="text-xs  text-gray-400 text-center mt-1">
//                 HOURS
//               </div>
//             </div>

//             <div className="text-black text-5xl md:text-2xl font-bold animate-pulse">:</div>

//             {/* Minutes */}
//             <div className="bg-gray-800 p-2 rounded-lg">
//               <div className="lg:text-3xl md:text-xl font-bold text-white font-mono">
//                 {minutes}
//               </div>
//               <div className="text-xs text-gray-400 text-center mt-1">
//                 MINUTES
//               </div>
//             </div>

//             <div className="text-black text-5xl md:text-2xl font-bold animate-pulse">:</div>

//             {/* Seconds */}
//             <div className="bg-gray-800 p-2 rounded-lg">
//               <div className="lg:text-3xl md:text-xl font-bold text-white font-mono">
//                 {seconds}
//               </div>
//               <div className="text-xs text-gray-400 text-center mt-1">
//                 SECONDS
//               </div>
//             </div>
//           </div>

//           {/* Date Display */}
//           {/* <div className="bg-gray-800 px-6 py-2 rounded-lg">
//             <div className="text-xl text-gray-300 font-mono">
//               {date}
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clock;