"use client"
import Image from "next/image";
import bghome from "../../../assets/bghome.png"
import { useCart } from "../context/context";
export default function Cart() {
    const { cart } = useCart()
    console.log(cart)
    return (

        <div className="flex justify-around items-center text-center mt-10">
            <div className="flex flex-col items-center gap-6 mt-6">
                <Image src={bghome} height={500} width={500} alt="" />
                <p className="text-green-800 font-extrabold text-7xl">
                    Good Coffee
                </p>
                <p className="font-normal max-w-md text-gray-700">
                    “To inspire and nurture the human spirit–one person, one cup and
                    one neighborhood at a time.”
                </p>
            </div>
            <div className="grid justify-around text-center bg-gray-50 p-auto rounded-lg w-100 ">
                {cart.map((product) => (
                    <div className="flex justify-around items-center w-100 text-center">
                        <Image src={product.imageURL} height={100} width={100} alt="" />
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <nav className="flex gap-1">
                                <button className="bg-green-200 w-10 rounded-lg text-green-700 font-bold text-2xl cursor-pointer" type="submit">-</button>
                                <input className="border-0 rounded-lg text-center bg-gray-100 w-10 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" />
                                <button className="bg-green-200 w-10 rounded-lg text-green-700 font-bold text-2xl cursor-pointer" type="submit">+</button>
                            </nav>
                        </div>
                    </div>
                ))}

                <button className="flex justify-center items-center gap-2 font-bold text-white bg-black h-13   shadow-md hover:bg-gray-800 transition duration-300">
                    Fazer pagamento
                </button>
            </div>
        </div>
    )
}