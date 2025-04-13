"use client"
import Image from "next/image";
import bghome from "../../../assets/bghome.png"
import { useCart } from "../context/context";
export default function Cart() {
    const {cart, removeFromCart, calculateTotal } = useCart()
    async function checkoutButton(){
        try{
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart }),
              });
        
              const data = await response.json();
        
              if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;
              } else {
                console.error("Erro ao criar sessão de checkout:", data);
              }
        }catch(error){
            console.log('erro ao iniciar checkout', error)
        }
    }
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
                    <div className="flex justify-around items-center w-100 text-center border-b-1 border-b-gray-200">
                        <Image src={product.imageURL} height={100} width={100} alt="" />
                        <div className="flex flex-col gap-1 items-center text-center justify-center ">
                            <p className="text-green-700 font-bold">{product.name}</p>
                            <p className="text-blue-500 font-extralight">R${(product.price).toFixed(2)}</p>
                            <p className="text-blue-500 font-extralight">{product.quantity}{'  '}{product.quantity==1?'item':'itens'}</p>
                            <button onClick={()=>removeFromCart(product.id)} className="bg-indigo-200 rounded-lg w-20 h-8 text-indigo-700 font-semibold cursor-pointer">Remover</button>
                        </div>
                    </div>
                ))}
                <div>Total: R$ {calculateTotal()}</div>

                <button onClick={checkoutButton} className="flex justify-center items-center gap-2 font-bold text-white bg-black h-13 rounded-bl-2xl rounded-br-2xl  shadow-md hover:bg-gray-800 transition duration-300">
                    Fazer pagamento
                </button>
            </div>
        </div>
    )
}