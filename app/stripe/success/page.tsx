import { CheckCheck } from "lucide-react";
import Link from "next/link";


export default function SuccessStrip() {
    return (
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-500 w-16 h-16 mx-auto my-6"/>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-center font-semibold text-gray-700">Payment Done!</h3>
                    <p className="text-gray-600 my-2">Thank you for Purchase Me hope you enjoy it.</p>
                    <p className="">Have a great day!</p>

                    <button  className="bg-blue-900/80 rounded-full px-4 mt-4 font-extrabold text-2xl  ">
                        <Link href="/">Go Back</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}