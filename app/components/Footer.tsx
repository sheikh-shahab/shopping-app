import Image from "next/image";
import Logo1 from '../../public/paypal.png';
import logo2 from '../../public/visa.png';
import logo3 from '../../public/stripe.png';
import logo4 from '../../public/payonner.png';
import logo5 from '../../public/master.png'
import Link from "next/link";


export default function Footer () {
    return (
     
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We provide the best products at the most affordable prices. Our mission is to make shopping easy and reliable.
          </p>
          <div className="flex justify-start gap-4  mt-10 ">
                 <Image src={Logo1} alt="" width={200} height={200} className="w-[50px] h-[30px]"></Image>
                 <Image src={logo2} alt="" width={200} height={200}  className="w-[50px] h-[30px]"></Image>
                 <Image src={logo3} alt="" width={200} height={200}  className="w-[50px] h-[30px]"></Image>
                 <Image src={logo4} alt="" width={200} height={200}  className="w-[50px] h-[30px]"></Image>
                 <Image src={logo5} alt="" width={200} height={200}  className="w-[50px] h-[30px]"></Image>
                 </div>
        </div>

        
        <div className="lg:ml-12">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-400">Men</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Teens</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-400">FAQ</Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/returns" className="hover:text-gray-400">Returns</Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-400">Shipping</Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-gray-400">Support</Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Get updates on new arrivals and special offers.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-md text-gray-900"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SF COMMERCE. All rights reserved.</p>
      </div>
    </footer>
       
    )
}