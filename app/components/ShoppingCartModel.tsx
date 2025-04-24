"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Checkout from "./Checkout";


export default function ShoppingCartModel() {
    const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart();
   async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try{
      const result = await redirectToCheckout();
      if(result?.error){
        console.log("result");
      }
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <Sheet  open={shouldDisplayCart} onOpenChange={()=> handleCartClick()}>
      
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          
        </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-4 flex-1 overflow-y-auto">
              <ul className="my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">You dont have any item</h1>
                ) : (

                <>
              {Object.values(cartDetails ?? {}).map((entry)=> (
                  <li key={entry.id} className="flex py-6">
                  <div className="h-24 w-24 rounded-md border border-gray-200 flex-shrink-0 overflow-hidden">
                    <Image src={entry.image as string} alt="" width={100} height={100}/>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{entry.name}</h3>
                        <p className="ml-4">${entry.price}</p>

                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">QTY: {entry.quantity}</p>

                      <div className="flex">
                        <button type="button" className="font-medium text-blue-950 hover:text-red-950" onClick={()=> removeItem(entry.id)}>Remove</button>
                        </div>
                    </div>
                  </div>
                  </li>
              ))}
              </>
                )}
              </ul>
            </div>

            <div className="border-1 border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-800">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-900">Shipping and taxes are calculated at checkout.</p>
            
            <div className="mt-6">
              <button className="w-full bg-blue-950 text-white text-xl" onClick={handleCheckoutClick}>Checkout </button>
            </div>

            <div className="flex justify-center text-center text-sm text-gray-500 ">
              <p className="mt-4">OR{" "}
                <button className="font-medium text-blue-700 hover:text-blue-800/80" onClick={()=> handleCartClick()}>Continue Shopping</button>
              </p>
            </div>
            </div>
          </div>
      </SheetContent>
    </Sheet>
  );
}
