import Image from "next/image";
import logo from "../../assets/logo.svg"
import Google from "../../assets/google.png"
import bghome from "../../assets/bghome.png"
import classic from "../../assets/products/Classic.png"
import { Star, Basket } from "@phosphor-icons/react/dist/ssr";
export default function Home() {
  return (
    <>
    <div className="grid gap-20">
      <div className="flex justify-around items-center">
        <Image src={logo} width={100} height={100} alt=""></Image>
        <div className="flex gap-1">
          <button className="flex justify-center items-center gap-1 bg-green-100 text-gray-500 h-10 w-50 cursor-pointer rounded-lg" type="submit">
            Logar com o Google <Image height={25} width={25} src={Google} alt="" />
          </button>
          <a href="/cart" className="flex justify-center items-center gap-1 bg-black text-gray-500 h-10 w-10 cursor-pointer rounded-lg" type="submit">
            <Basket size={27} color="#ffff" weight="fill" />
          </a>
        </div>

      </div>
      <div className="mt-8 flex justify-around items-center">
        <div className="items-center grid gap-10">
          <p className="text-green-800 font-extrabold text-7xl">Good Coffee</p>
          <p className="text-gray-500 font-medium text-7xl">Good Moods</p>
          <p className="font-normal text-2xl w-100">“To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”</p>
        </div>
        <Image src={bghome} quality={100} height={500} width={500} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="grid gap-2 justify-center items-center grid-cols-3 w-215">
          <div className="flex items-center bg-emerald-50 rounded-lg w-70">
            <Image src={classic} width={100} height={100} alt="" />
            <div className="grid gap-2">
              <p className="font-bold text-green-700">Coffee Classic</p>
              <p className="flex gap-1">Description <span className="rounded-lg w-12 flex items-center justify-center bg-amber-50">5.0<Star size={15} weight="fill" /></span></p>
              <div className="flex gap-1 items-center">
                <span className="font-bold text-emerald-950">R$10,00</span>
                <button className="bg-black text-blue-50 rounded-lg w-25 h-8 cursor-pointer">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
