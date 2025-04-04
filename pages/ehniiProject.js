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
      <div className="h-20"></div>
      <div
        className="m-10 grid gap-10 transition-all duration-500 ease-in-out"
      >
        {filter.length > 0 ? (
          filter.map((element, index) => (
            <div
              key={index}
              className="p-5 mb-10 flex flex-col border-3 border-solid border-blue-600 gap-5 rounded-xl 
                 transform hover:scale-105 active:scale-95 group"
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