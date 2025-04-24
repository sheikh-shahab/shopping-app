import Image from "next/image";
import Coat from '../../public/coat.jpg';
import Kids from '../../public/kids.jpg';
import Ladies from '../../public/ladies.jpg'


// export default function New(){
//     return (
//         <div className="mb-12">
//             <div className="grid justify-center text-3xl lg:gap-y-4 mt-24">
//                 <h1 className="mx-24 text-lg text-red-700">LATEST NEWS </h1>
                
//                 <h2 className="lg:font-extrabold text-center"> Fashion New Trends</h2>
//             </div>
//             <div className="">
//                 <div className="lg:grid lg:grid-cols-3   shadow-black mt-12 ">
//                 <Image src={Coat} alt="" width={500} height={500} className="ml-12 w-[400px] h-[300px]"></Image>
//                 <Image src={Kids} alt="" width={500} height={500} className="ml-12 w-[400px] h-[300px]"></Image>
                
//                 <Image src={Ladies} alt="" width={500} height={500} className="ml-12 w-[400px] h-[300px]"></Image>
//                 </div>
//                 <div className="relative lg:flex lg:flex-col lg:mx-24 bg-white -mt-12 shadow-sm border border-slate-200 rounded-lg w-72">
//                 <div className=" mb-0 ml-12 border-b border-slate-200 pt-3 pb-2 px-1 space-y-2">
//                   <h3 className="mt-2">15 oct 2024</h3>
//                   <p className="lg:max-w-sm font-extrabold ">New collections are now available, check out our latest fashion brands.</p>
//                     <br/>
//                   <a href="#" className="text-red-700  underline ">Read More</a>
//                   </div>
//                 </div>

//                 <div className="relative flex flex-col lg:left-[550px]  bg-white lg:-mt-48 shadow-sm border border-slate-200 rounded-lg w-72">
//                 <div className=" mb-0 ml-12 border-b   border-slate-200 pt-3 pb-2 px-1">
//                   <h3 className="mt-2">15 oct 2024</h3>
//                   <p className="max-w-sm font-extrabold mt-2">New collections are now available, check out our latest fashion brands.</p>
//                   <br/>
//                   <a href="#" className="text-red-700  underline">Read More</a>
//                   </div>
//                 </div>

//                 <div className="relative flex flex-col lg:left-[1000px]  bg-white lg:-mt-48 shadow-sm border border-slate-200 rounded-lg w-72">
//                 <div className=" mb-0 ml-12 border-b   border-slate-200 pt-3 pb-2 px-1">
//                   <h3 className="mt-2">15 oct 2024</h3>
//                   <p className="max-w-sm font-extrabold mt-2">New collections are now available, check out our latest fashion brands.</p>
//                   <br/>
//                   <a href="#" className="text-red-700  underline">Read More</a>
//                   </div>
//                 </div>

//             </div>


//            </div>
//     )
// }

{/* <Image src={Kids} alt="" width={325} height={145} className="ml-12"></Image>
<Image src={Ladies} alt="" width={270} height={100} className="mr-24"></Image> */}



export default function New() {
  return (
    <div className="bg-white min-h-screen mb-24">
      <div className="text-center py-10 mt-12">
        <h2 className="text-red-500 font-semibold">LATEST NEWS</h2>
        <h1 className="text-4xl font-bold mt-2">Fashion New Trends</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 lg:px-20">
        
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <Image
            src={Coat}
            alt="Curling irons"
            className="w-full h-48 "
          />
          <div className="p-4">
            <p className="text-gray-600 text-sm">16 February 2020</p>
            <h3 className="text-xl font-semibold mt-2">
            New collections are now available, check out our latest fashion brands.
            </h3>
            <a
              href="#"
              className="text-blue-500 font-semibold mt-2 inline-block underline"
            >
              READ MORE
            </a>
          </div>
        </div>

      
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden ">
          <Image
            src={Kids}
            alt="Eternity Bands"
            className="w-full h-48 "
          />
          <div className="p-4">
            <p className="text-gray-600 text-sm">21 February 2020</p>
            <h3 className="text-xl font-semibold mt-2">
            New collections are now available, check out our latest fashion brands.
            </h3>
            <a
              href="#"
              className="text-blue-500 font-semibold mt-2 inline-block underline"
            >
              READ MORE
            </a>
          </div>
        </div>


        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <Image
            src={Ladies}

            alt="Sunglasses"
            className="w-full h-48 "
          />
          <div className="p-4">
            <p className="text-gray-600 text-sm">28 February 2020</p>
            <h3 className="text-xl font-semibold mt-2">
            New collections are now available, check out our latest fashion brands.
            </h3>
            <a
              href="#"
              className="text-blue-500 font-semibold mt-2 inline-block underline"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
