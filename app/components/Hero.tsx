"use client";


import Link from "next/link";

import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { Typewriter } from "react-simple-typewriter";

export default  function Hero() {
  
  return (
    <section className="mx-auto sm:max-w-2xl px-4 sm:pb-6 lg:max-w-7xl  lg:px-8 bg-gray-800">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 lg:flex w-full lg:flex-col justify-center sm:mb-12 lg:mb-0 md:w-1/3 lg:pb-24 lg:pt-40 md:pb-24 ">
          <h1 className="mb-8 lg:text-5xl md:mt-24 lg:-mt-24  font-bold text-gray-400 sm:text-7xl md:mb-8 md:text-3xl ">
            Top fashion for Top price!
           
          </h1>
          <p className="max-w-md leading-relaxed text-yellow-400 xl:text-lg">
          <Typewriter words={["we sell only the most exclusive and high quality products for you, we are the best so come and shop with us"]} loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={500}
            />
           
          </p>
          <div className="mt-12">
          <button className="text-2xs uppercase  gap-x-2  text-white rounded-lg px-8 py-2 bg-black">Shop Now</button>
          </div> 
        </div>
        <div className="mb-12 lg:flex w-full md:mb-16 md:w-2/3 sm:w-1/12">
          <div className="relative lg:left-10 top-12 z-10 -ml-12 overflow-hidden rounded-lg  shadow-black  md:left-2 md:top-16 lg:ml-0 sm:ml-8">
           <ImageSlider/>
          </div>

          <div className="overflow-hidden rounded-lg bg-blue-800 shadow-lg b">
           
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-0 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border ">
          <Link
            href={'/men'}
            className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-black active:bg-gray-200"
          >
            MEN
            
          </Link>
          <Link
            href="/women"
            className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-black active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/kids"
            className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-black active:bg-gray-200"
          >
            Kids
          </Link>
        </div>
      </div>
    </section>
  );
}
