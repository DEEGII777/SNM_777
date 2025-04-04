import { Geist, Geist_Mono } from "next/font/google";
import React , {useState} from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [click, setClick] = useState();
  let ner = "    DELGERMURUN";
  return (
    // REACT USESTATE HOOK 
    <div className="w-full h-[1000px] bg-black flex justify-center items-center flex-col">
      <a href="/"><div className="bg-white text-black absolute top-2 left-2 p-4 rounded-lg">BACK</div></a>
      <button className="text-white border-white border-4 rounded-lg p-2 mb-5 text-2xl shadow-lg shadow-white" onClick={() => setClick((ner) => !ner)}>CLICK</button>
      <div className="flex flex-row">
        <p className="text-white text-3xl" >CLICK COUNT: {click} </p>
        <p className="text-white text-3xl ml-2">{click == true ? ner:"_______________"}</p>
      </div>
    </div>
  );
}