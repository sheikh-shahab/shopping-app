import Image from "next/image";
import { WomenProduct } from "../../public/assets";

export default function Women() {
  return (
    <div className=" mb-12">
      <div className="lg:grid lg:grid-cols-3  md:grid md:grid-cols-3 md:gap-x-8 lg:gap-8 ml-12 shadow-sm  mr-12  rounded-lg  border-slate-600">
        {WomenProduct.map((item, index) => {
          return (
            <div key={index} className="group relative">
              <div className="aspect-square w-full   rounded-lg bg-black group-hover:opacity-55 ">
                <Image
                  className="w-[400px] h-[300px]  mt-16"
                  src={item.women_image}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
                <span className="flex justify-center bg-black text-white rounded-lg text-3xl">
                  {item.women_name}
                </span>

                <span className="flex justify-center rounded-lg text-2xl bg-black font-extrabold text-red-800">
                  ${item.women_price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
