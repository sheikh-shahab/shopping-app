"use client";

import Link from "next/link";
import Image from "next/image";
import watchImage from "../../public/men watch.jpg";
import menShoes from "../../public/men shoes.jpg";
import menShirt from "../../public/men fashion1.jpg";
import womenShirt from "../../public/women.jpg";
import womenSuit from "../../public/ladies2.jpg";
import Perfume from "../../public/perfumes 2.jpg";
import makeup from "../../public/women makeup.jpg";
import Bag from "../../public/ladies bag.jpg";
import Star1 from "../../public/stars1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { ProductList } from "../../public/assets";
import { useState } from "react";
import Quantity from "./Quantity";
import AddToBag from "./AddToBag";


export default function Newest({}) {
    const [quantity, setQuantity]= useState(1);

    const handleQuantityChange = (newQuantity: number)=>{
      setQuantity(newQuantity)
    }
  return (
    

    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl  lg:px-8">
      <div className="flex justify-between items-center">
                <h2 className="lg:text-2xl font-bold tracking-tight">Our Newest Product</h2>
                <Link href="" className="flex items-center gap-x-2 lg:text-2xl">See All <FaArrowRightLong /></Link>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:justify-center  lg:gap-x-8 md:grid md:grid-cols-4 md:gap-x-4  ">
        {ProductList.map((item, index) => {
          return (
            < div key={index} className="group relative">
                <div className="aspect-square w-full   rounded-lg bg-gray-300 group-hover:opacity-55 ">
              <Image 
              className="w-[400px] h-[300px]  mt-16"
                src={item.product_image}
                alt=""
                width={500}
                height={500}
              ></Image>
              
            
              <h1 className="font-extrabold mt-2">{item.product_name}</h1>
              <Image src={Star1} alt="" width={100} height={200}></Image>
              <span className="font-extrabold text-red-700">
                ${item.product_price}
              </span>
              
              <br/>
              <div className=" lg:px-2 lg:w-44 sm:w-24 flex lg:flex-1 mt-2 lg:gap-x-2 md:w-36 md:px-2 md:flex-2 md:rounded-lg  rounded-full text-white bg-black">
              
              <AddToBag
                currency="USD"
               
                image={item.product_image}
                name={item.product_name}
                price={item.product_price}
                key={item.id}
                price_id={item.price_id}
                
                
              />
              <button className=" ">
             <span><Quantity  initialQuantity={1} onChange={handleQuantityChange}/></span> 
              </button>
              </div>
              {/* <Quantity  initialQuantity={1} onChange={handleQuantityChange}/> */}
              {/* <AddToBag currency="USD" image={item.product_image} name={item.product_name} price={item.product_price}/> */}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

