
import { kidsProduct } from "../../public/assets";

import Image from "next/image";

export default function kids({}) {
  return (
    <div className="mb-24  w-full h-full">
      <div className="lg:grid lg:grid-cols-3 md:gap-8 md:grid md:grid-cols-3  ml-12 shadow-sm  mr-12  rounded-full  border-slate-600">
        {kidsProduct.map((item, index) => {
          return (
            <div key={index} className="group relative">
              <div className="aspect-square w-full   rounded-lg bg-black group-hover:opacity-55 ">
                <Image
                  className="w-[400px] h-[300px]  mt-16"
                  src={item.kids_image}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
                <span className="flex justify-center bg-black text-white rounded-lg text-2xl">
                  {item.kids_name}
                </span>

                <span className="flex justify-center rounded-lg text-3xl bg-black font-extrabold text-red-800">
                  ${item.kids_price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
