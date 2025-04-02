import Image from "next/image";
import logo from "../../assets/logo.svg"
import Google from "../../assets/google.png"
import bghome from "../../assets/bghome.png"
export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center">
        <Image src={logo} width={100} height={100} alt=""></Image>
        <button className="flex justify-center items-center gap-1 bg-green-100 text-gray-500 h-10 w-50 cursor-pointer rounded-lg" type="submit">
          Logar com o Google <Image height={25} width={30} src={Google} alt=""/>
        </button>
      </div>
      <div className="mt-8 flex justify-around items-center">
        <div className="items-center grid gap-10">
          <p className="text-green-800 font-extrabold text-7xl">Good Coffee</p>
          <p className="text-gray-500 font-medium text-7xl">Good Moods</p>
          <p className="font-normal text-2xl w-100">“To inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.”</p>
        </div>
        <Image src={bghome} quality={100} height={500} width={500} alt=""/>
      </div>
    </>
  );
}
