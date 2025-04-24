import { useState } from "react";
import Image from "next/image";
import AddIcon from '../../public/add green icon.webp';
import RemoveIcon from '../../public/red icon.webp';
import Minus from '../../public/minus.png';

const Quantity = ({initialQuantity = 1, onChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    
    // const handleChange = (event) => {
    //     const newQuantity = parseInt(event.target.value, 10) || 0; // Convert input to a number
    //     setQuantity(newQuantity); // Update local state
    //     if (onChange) {
    //       onChange(newQuantity); // Trigger the onChange callback
    //     }
    //   };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        if(onChange) onChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            if(onChange) onChange(quantity - 1);
        }
    };


return (
    <div className="flex flex-1 gap-x-1  text-white">
        {/* <button onClick={handleDecrement} className=" text-4xl">-</button> */}
        <Image src={Minus} onClick={handleDecrement} className="bg-white" alt="" width={20} height={20}></Image>
        <span className="text-xl">{quantity}</span>
        <Image src={AddIcon} onClick={handleIncrement} alt="" width={20} height={15}></Image>
        {/* <button onClick={handleIncrement} className="text-4xl">+</button> */}
    </div>
)
}

export default Quantity;