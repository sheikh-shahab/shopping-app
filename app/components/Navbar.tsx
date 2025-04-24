// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ShoppingBag } from "lucide-react";
// import { useShoppingCart } from "use-shopping-cart";

// const Links = [
//   { name: "Home", href: "/" },
//   { name: "Men", href: '/men' },
//   { name: "Women", href: "/women" },
//   { name: "Teens", href: "/Teens" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//     const {handleCartClick} = useShoppingCart();
//   return (
//     <header className="mb-8 border-b">
//       <div className="flex items-center justify-between mx-auto sm:max-w-2xl px-4 sm:px-4 lg:max-w-7xl">
//         <Link href="/">
//           <h1 className="lg:text-4xl font-bold sm:text-sm">
//             SF<span className="text-blue-800">Commerce</span>
//           </h1>
//         </Link>

//         <nav className=" gap-12 lg:flex sm:flex-none 2xl:ml-16 sm:hidden md:hidden">
//                     {Links.map((link,idx)=>(
//                         <div key={idx}>
//                     {pathname === link.href ?(
//                         <Link href={link.href} className="text-lg font-semibold text-primary">
//                            {link.name}
//                         </Link>
//                     ):(
//                         <Link href={link.href}  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-blue-900">
//                             {link.name}
//                         </Link>
//                     )}
//                         </div>
                        
//                     ))}

//                 </nav>

//         {/* <nav className="hiddden space-x-12 lg:flex 2xl:ml-16">
//           <ul className="text-lg font-semibold text-primary">
//             <Link href="/">Home</Link>
//             <Link href='/men'>Men</Link>
//             <Link href="/women">Women</Link>
//             <Link href="/teen">Teen</Link>
//           </ul>
//         </nav> */}

//         <div className="flex divide-x border-r sm:border-1 hover:bg-gray-300">
//           <button onClick={()=> handleCartClick()} className="flex flex-col gap-y-1.5 h-4 w-4 sm:h-20 sm:w-20 md:h-12 md:w-12 rounded-none">
//             <ShoppingBag />
//             <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// {/* <nav>
//   <ul>
//     <Link href="/">Home</Link>
//     <Link href="/">Men</Link>
//     <Link href="/">Women</Link>
//     <Link href="/">Teen</Link>
//   </ul>
// </nav>; */}



"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-xl font-bold">
        
                  
        
          <h1 className="lg:text-xl font-bold sm:text-sm text-red-600">
          <Typewriter words={["SF SHOPPING MALL"]} loop={5}
                    
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={500}
                    />
            {/* SF<span className="text-blue-800"> SHOPPING MALL</span> */}
           </h1>
          
        </Link>

        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/men" className="hover:text-gray-400">Men</Link>
          <Link href="/women" className="hover:text-gray-400">Women</Link>
          <Link href="/kids" className="hover:text-gray-400">Kids</Link>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-4 space-y-4 text-center"
        >
          <Link href="/" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/men" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Men</Link>
          <Link href="/women" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Women</Link>
          <Link href="/kids" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Kids</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
