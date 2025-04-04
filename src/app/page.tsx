'use client'
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Google from "../../assets/google.png";
import bghome from "../../assets/bghome.png";
import classic from "../../assets/products/Classic.png";
import icechocolate from "../../assets/products/iceChocolate.svg";
import icematcha from "../../assets/products/icedMatcha.svg";
import icetea from "../../assets/products/iceTea.svg";
import iceship from "../../assets/products/IcedShip.svg";
import { toast, ToastContainer } from "react-toastify";
import { ReactNode, useState, createContext } from "react";
import { Star, Basket } from "@phosphor-icons/react/dist/ssr";
import { useCart } from "./context/context";
import { useRouter } from "next/navigation";
export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  imageURL: any;
  quantity: number;
}
const initialProduct: Products[] = [
  { id: 1, name: "Café Tradicional", description: "Good Coffee", quantity: 1, price: 10.80, imageURL: classic },
  { id: 2, name: "ice Chocolate", description: "Good Coffee", quantity: 1, price: 12.40, imageURL: icechocolate },
  { id: 3, name: "ice Matcha", description: "Good Coffee", quantity: 1, price: 13.50, imageURL: icematcha },
  { id: 4, name: "ice Tea", description: "Good Coffee", quantity: 1, price: 7.40, imageURL: icetea },
  { id: 5, name: "ice Ship", description: "Good Coffee", quantity: 1, price: 10.50, imageURL: iceship },
];
export default function Home() {
  const [products, setProducts] = useState<Products[]>(initialProduct);
  const{cart, AddToCart}=useCart();
  const router = useRouter();

  function handleClick() {
    router.push('/cart'); // não dá pra passar `state`, só via URL ou storage
  }
  function handleIncrease(id: number) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };
  function handleDecrease(id: number) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  return (
    <div className="grid gap-20">
      <div className="flex justify-around items-center">
        <Image src={logo} width={100} height={100} alt="" />
        <div className="flex gap-1">
          <button className="flex justify-center items-center gap-1 bg-green-100 text-gray-500 h-10 w-50 cursor-pointer rounded-lg" type="submit">
            Logar com o Google <Image height={25} width={25} src={Google} alt="" />
          </button>
          <a  onClick={handleClick} className="flex justify-center items-center gap-1 bg-black text-gray-500 h-10 w-10 cursor-pointer rounded-lg">
            <Basket size={27} color="#ffff" weight="fill" />
          </a>
        </div>
      </div>

      <div className="mt-8 flex justify-around items-center">
        <div className="items-center grid gap-10">
          <p className="text-green-800 font-extrabold text-7xl">Good Coffee</p>
          <p className="text-gray-500 font-medium text-7xl">Good Moods</p>
          <p className="font-normal text-2xl w-100">
            “To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”
          </p>
        </div>
        <Image src={bghome} quality={100} height={500} width={500} alt="" />
      </div>

      <div className="flex justify-center">
        <div className="grid gap-2 justify-center items-center grid-cols-3 w-215">
          {products.map((product) => (
            <div key={product.id} className="flex items-center bg-emerald-50 rounded-lg w-70 h-45">
              <Image src={product.imageURL} width={100} height={100} alt="" />
              <div className="grid gap-2">
                <p className="font-bold text-green-700">{product.name}</p>
                <p className="flex gap-1 items-center">
                  {product.description}
                  <span className="rounded-lg w-12 h-10 flex items-center justify-center bg-amber-50">
                    5.0 <Star size={15} weight="fill" />
                  </span>
                </p>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-emerald-950">QTD:</span>
                  <nav className="flex gap-1">
                    <button onClick={() => handleDecrease(product.id)} className="bg-green-200 w-10 rounded-lg text-green-700 font-bold text-2xl cursor-pointer">-</button>
                    <input
                      type="number"
                      value={product.quantity}
                      readOnly
                      min={1}
                      className="border-0 rounded-lg text-center bg-gray-100 text-green-600 w-10 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <button onClick={() => handleIncrease(product.id)} className="bg-green-200 w-10 rounded-lg text-green-700 font-bold text-2xl cursor-pointer">+</button>
                  </nav>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-emerald-950">R${product.price.toFixed(2)}</span>
                  <button onClick={() => AddToCart(product, product.quantity)} className="bg-black text-blue-50 rounded-lg w-25 h-8 cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}