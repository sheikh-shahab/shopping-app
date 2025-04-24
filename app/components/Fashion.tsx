
import fashionImage from '../../public/men fashion1.jpg';
import Image from 'next/image';
import watchImage from '../../public/men watch.jpg';
import shoesImage from '../../public/men shoes.jpg';
 

export default function Fashion() {
  return (
    <div className="bg-white lg:mb-32  md:mb-4">
     
      <div className="container mx-auto px-4 py-8">
       

    
        <div className="">
       
          <div className="lg:flex lg:flex-col  lg:items-end  ">
            <div className="relative md:flex md:justify-end md:mr-8">
              <Image
                src={fashionImage} 
                alt="Clothing"
                width={400}
                height={200}
               
                className="rounded-lg  lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] "
              />
              
            </div>
            <h2 className="lg:-mt-56 text-3xl w-56 font-semibold lg:mr-[550px] md:-mt-56 md:ml-12">Clothing Collection 2024 <br/><span className='font-thin text-lg underline'>SHOP NOW</span></h2>
            
          </div>

          <div className="lg:flex lg:flex-col lg:items-start lg:mt-44 md:mt-64">
            <div className="relative lg:ml-12">
              <Image
                src={watchImage} 
                alt="Sunglasses"
                width={400}
                height={400}
                
                className="rounded-lg  lg:h-[500px] lg:w-[500px]  mt-4"
              />
            </div>
            <h2 className="mt-4 text-3xl font-semibold lg:ml-28 ">Men Watch <br/><span className='text-lg font-thin underline'>SHOP NOW</span></h2>
          </div>

          <div className="lg:flex lg:flex-col lg:items-end lg:-mt-8 md:-mt-4">
            <div className="relative md:flex md:justify-end ">
              <Image
                src={shoesImage} 
                alt="Shoes"
                width={400}
                height={200}
             
                className="rounded-lg lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] mt-4"
              />
            </div>
            <h2 className="lg:mb-24 text-3xl font-semibold lg:mr-[480px] w-56 lg:-mt-56 md:mt-12 md:ml-96">Shoes Spring 2024 <br/><span className='text-lg font-thin underline'>SHOP NOW</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}



