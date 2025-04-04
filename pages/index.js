import { useState } from "react";

const dataB = [
  {
    id: 1,
    name: "Өнгө солих",
    href: "/ungusolih"
  },
  {
    id: 2,
    name: "Нэр өгөх",

    href: "/neruguh"
  },
  {
    id: 3,
    name: "Ангийн карт",
    href: "/angiincard"
  },
  {
    id: 4,
    name: "клик тоолох",
    href: "/clicktooloh"
  },
]

export default function Home() {
  const [isColumn, setIsColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filter = dataB.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  console.log(filter);
  

  return (
    
    <div
      className="h-fit w-screen pt-10 pb-10 flex flex-col items-center"
      
    >
      <div class="box-border z-40 fixed top-0 right-0 left-0 backdrop-blur-sm w-384 h-24 border-2 p-6 rounded-xl ">
<p className="text-center mt-1 font-bold font-style: italic text-4xl"> 11B DELGERMURUN</p>
</div>
      <div className="h-20"></div>
      <div
        className="m-10 grid gap-10 transition-all duration-500 ease-in-out"
      >
        {filter.length > 0 ? (
          filter.map((element, index) => (
            <div
              key={index}
              className="p-5 mb-10 flex flex-col transition duration-150 ease-in-out border-2 border-solid drop-shadow-lg shadow-[0_10px_20px_rgba(107,_33,_168,_0.7)]  bg-purple-700 border-purple-700 gap-5 rounded-4xl 
                 transform hover:scale-115 hover:bg-purple-900 hover:border-purple-900 active:scale-95 group"
            >
              <a href={element.href}>
                <div>
                  <div className="flex flex-row justify-evenly pb-2">
                    <p className="text-2xl text-white">{element.name}</p>
                  </div>
                  
                </div>
                <img
                  src={element.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md rounded-lg"
                />
                
              </a>
            </div>
          ))
        ) : (
          <p className="text-white text-2xl text-center col-span-full">
            ungusolih
          </p>
        )}
      </div>
    </div>
  );
}