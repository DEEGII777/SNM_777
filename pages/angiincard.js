import { useState } from "react";

const dataB = [
  {
    id: 21,
    firstname: "erdenebold",
    lastname: "12_bold",
    job: "President of NIGERIA",
    height: 150,
    age:21,
    image: " ",
    items: "Surron , Astro world"
  },
  {
    id: 1,
    firstname: "Tuvshu",
    lastname: "Exy_sh",
    job: "Student",
    alive: true,
    height: 180,
    age:21,
    image: " ",
    items: "PC , Iphone12"
  },
  {
    id: 2,
    firstname: "temuulen",
    lastname: "Temuulen_bozo",
    job: "Student",
    alive: true,
    height: 100,
    age:17,
    image: " ",
    items: " Surron , Crown210"
  },
  {
    id: 3,
    firstname: "Khangarid",
    lastname: "xangrd_",
    job: "Student",
    alive: true,
    height: 180,
    age:17,
    image: " ",
    items: "Surron , hole"
  },
  {
    id: 4,
    firstname: "Munhbaysgalan",
    lastname: "Munhbaysgalan",
    job: "Student",
    alive: true,
    height: 169,
    age:17,
    image: " ",
    items: "Talaria , Iphone16"
  },
  {
    id: 5,
    firstname: "Siilen",
    lastname: "Lvor66",
    job: "Student",
    alive: true,
    height: 100,
    age:17,
    image: " ",
    items: "snack , food"
  },
  {
    id: 6,
    firstname: "Nomio",
    lastname: "Kylie",
    job: "Student",
    alive: true,
    height: 160,
    age:16,
    image: " ",
    items: "steve , Jordan4"
  },
  {
    id: 7,
    firstname: "Munhnaran",
    lastname: "Muna",
    job: "Student",
    alive: true,
    height: 147,
    age:17,
    image: " ",
    items: "Mac , iphone"
  },
  {
    id: 8,
    firstname: "Erdenejargal",
    lastname: "Erdenejargal",
    job: "Student",
    alive: true,
    height: 199,
    age:17,
    image: " ",
    items: "IPHONE"
    
  },
  {
    id: 9,
    firstname: "Chinbiligt",
    lastname: "Chinblgt",
    job: "Student",
    alive: true,
    height: 173,
    age:17,
    image: " ",
    items: "Iphone , Glasses"
  },
  {
    id: 10,
    firstname: "Badraa",
    lastname: "Blatz_",
    job: "Student",
    alive: true,
    height: 165,
    age:16,
    image: " ",
    items: "Ultra bee , Bicycyle"
  },
  {
    id: 11,
    firstname: "Gunbileg",
    lastname: "Gunbe",
    job: "Student",
    alive: true,
    height: 177,
    age:16,
    image: " ",
    items: "Mac , beard"
  },
  {
    id: 12,
    firstname: "Undrah",
    lastname: "senkaa",
    job: "Student",
    alive: true,
    height: 178,
    age:17,
    image: " ",
    items: "EXOTIC , glasses"
  },
  {
    id: 13,
    firstname: "Temuugee",
    lastname: "Temuugee",
    job: "Student",
    alive: true,
    height: 181,
    age:16,
    image: " ",
    items: "Iwatch , iphone"
  },
  {
    id: 14,
    firstname: "Ariunbayar",
    lastname: "Ariunbayar",
    job: "Student",
    alive: true,
    height: 170,
    age:16,
    image: " ",
    items: "Smartphone , Notebook"
  },
  {
    id: 15,
    firstname: "Ganerdene",
    lastname: "Gan erdene",
    job: "Student",
    alive: true,
    height: 163,
    age:17,
    image: " ",
    items: "Snack , adidas"
  },
  {
    id: 16,
    firstname: "Bilguuntugs",
    lastname: "Bill",
    job: "Student",
    alive: true,
    height: 160,
    age:21,
    image: " ",
    items: "Surron , Minori"
  },
  {
    id: 17,
    firstname: "jargal",
    lastname: "Nonchalant",
    job: "Student",
    alive: true,
    height: 173,
    age:16,
    image: " ",
    items: "jeans"
  },
  {
    id: 18,
    firstname: "Delgermurun",
    lastname: "The777snm",
    job: "Student",
    alive: true,
    height:777,
    age:17,
    image: " ",
    items: "TALARIA , everything"
  },
  
]

export default function Home() {
  const [isColumn, setIsColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filter = dataB.filter((item) => item.firstname.toLowerCase().includes(searchQuery.toLowerCase()))

  console.log(filter);
  
  return (
    <div className="bg-black h-fit w-screen pt-10 pb-10">
      <a href="/"><div className="bg-blue-600 text-white absolute top-10 left-10 p-4 rounded-lg">BACK</div></a>
      <div className="flex flex-row gap-4 ml-166 ">
        <input
          type="text"
          placeholder="Name"
          className="text-blue-600 border-dashed border-blue-600 bg-gray-800 border-2 text-blue-600 p-2 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-gray-800 border-dashed border-blue-600 border-2 w-fit p-3 rounded-xl text-White transition-all duration-300 
          hover:scale-105 active:scale-95"
          onClick={() => setIsColumn(!isColumn)}
        >
          Column
        </button>
      </div>

      <div
        className={`m-3 grid gap-10 transition-all duration-500 ease-in-out ${
          isColumn ? "grid-cols-1" : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {filter.length > 0 ? (
          filter.map((element, index) => (
            <div
              key={index}
              className={`relative shadow-[0_10px_20px_rgba(37,_99,_235,_0.7)] p-5 mb-10 flex flex-col border-3 border-solid border-blue-600 gap-5 rounded-xl 
                 transform hover:scale-105 active:scale-95 group
                ${isColumn ? "w-196 mx-auto w-x-400 flex-row" : "w-96"}`}
            >
              <img
                src={element.image}
                className={`rounded-lg 
                
                ${isColumn ? "w-80 h-40 h-60 object-cover" : "w-80 h-40"}`}
              />
              <img
                src={element.image}
                className={`absolute inset-0 w-full h-full object-cover opacity-30 blur-md rounded-lg
                ${isColumn ? "w-80 h-40 h-60 object-cover" : "w-80 h-40"}`}
              />
              <div>
                <div className="flex flex-row justify-evenly pb-2">
                  <p className="text-2xl text-white">{element.firstname}</p>
                  <p className="text-2xl text-white">{element.lastname}</p>
                </div>
                <p className="text-2xl text-white">{element.job}</p>
                <div className="text-2xl text-white flex gap-2">
                <div className="font-bold text-gray-400">Items:</div>
                  <p className="text-2xl text-gray-400">{element.items}</p>
                </div>
                
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-90 rounded-lg">
              <div>
                <div className="flex flex-row justify-evenly pb-2">
                  <p className="text-2xl text-white">{element.firstname}</p>
                  <p className="text-2xl text-white">{element.lastname}</p>
                </div>
                <p className="text-2xl text-white">{element.job}</p>
                <div className="text-2xl text-white flex gap-2">
                <p className="text-xl font-bold">Age: {element.age}</p>
                  <p className="text-xl font-bold">Height: {element.height} cm</p>
                
              </div>
              <div className="font-bold text-xl text-white">Items:</div>
                  <p className="text-2xl text-gray-200">  {element.items}</p>
                  
                </div>
                </div>
            </div>
          ))
        ) : (
          <p className="text-white text-4xl text-center col-span-full">
            Baidagguudeee hu
          </p>
        )}
      </div>
    </div>
  );
}
