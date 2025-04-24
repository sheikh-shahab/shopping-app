 import { useShoppingCart } from "use-shopping-cart"

 export interface ProductCart {
     name: string,
     price: number,
     image: any,
     currency: string,
     price_id: string,
    
 }

 export default function AddToBag({ name, price, image, currency,price_id}: ProductCart) {
     const {addItem, handleCartClick }= useShoppingCart();
     const product = {
         name: name,
         price: price,
         image: image,
         currency: currency,
         price_id: price_id

         }
  return (
         <div>
             <button onClick={()=>{addItem(product), handleCartClick()}}>Add to Bag</button>
         </div>
     )
 }



