import Image from "next/image";
import { MenProduct } from "../../public/assets";

export default function Men() {
  return (
    <div className="mb-24  w-full h-full">
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 ml-12 shadow-sm md:gap-x-8 lg:gap-x-12 mr-12  rounded-full  border-slate-600">
        {MenProduct.map((item, index) => {
          return (
            <div key={index} className="group relative">
              <div className="aspect-square w-full   rounded-lg bg-black group-hover:opacity-55 ">
                <Image
                  className="w-[400px] h-[300px]  mt-16"
                  src={item.men_image}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
                <span className="flex justify-center bg-black text-white rounded-lg text-2xl">{item.men_name}</span>
                
                <span className="flex justify-center rounded-lg  bg-black font-extrabold text-red-800">${item.men_price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
