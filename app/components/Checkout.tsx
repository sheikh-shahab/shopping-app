

import { useShoppingCart } from "use-shopping-cart"

export interface ProductCart {
    name: string,
    price: number,
    image: any,
    currency: string,
    price_id: string,
      id: string
   
}

export default function Checkout({ name, price, image, currency, id,price_id}: ProductCart) {
    const {checkoutSingleItem }= useShoppingCart();

    function buyNow(priceId: string){
        checkoutSingleItem(priceId);
    }
    const product = {
        name: name,
        price: price,
        image: image,
        currency: currency,
          id: id,
        
        price_id: price_id,

        }
    return (
        <div>
            <button onClick={()=>{buyNow(product.price_id)}}>Checkout</button>
        </div>
    )
}




