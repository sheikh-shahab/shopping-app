import desginImage from '../../public/design.png';
import Image from 'next/image';

export default function Desgin() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 mt-20 mb-12">
     
      <div className="grid  gap-4 md:w-1/2">
        <Image src={desginImage} alt="Fashion Grid" width={600} height={600} className="rounded-lg lg:w-[600] lg:h-[600] " />
      </div>
      
 
      <div className="md:w-1/2 text-center md:text-left md:pl-8 mt-4">
        <h1 className="text-4xl font-bold">Instagram</h1>
        <p className="text-gray-600 mt-4 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi quibusdam
          consequatur, magnam quo fugit commodi nemo aut possimus eius.
        </p>
        <p className="text-red-500 font-bold text-4xl mt-4"># Male_Fashion</p>
      </div>
    </div>
  );
}
