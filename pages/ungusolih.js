import React,{ useState } from "react"; 
const useStateTask = () => {
    const [color , setColor] = useState("black");
    return(
        <div className = {`flex flex-col justify-center items-center space-x-4 w-full h-screen bg-${color}-800`}>
            <p className="font-bold text-2xl text-center">UNGU SOLIH</p>
            {color == "red" ? (
              <>
              <button className="border rounded-2xl  flex bg-red-800 w-23 py-4 px-6 m-5 h-10 drop-shadow-lg shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)] justify-center items-center"
              onClick={() => {
                  setColor( color == "red" ? "black" : "red");
                  
              }}>
                  RED
              </button>
              </>
            ) : color == "green" ?(
              <><button className="border rounded-2xl flex bg-green-800 w-23 py-4 px-6 m-5 drop-shadow-lg shadow-[0_10px_20px_rgba(0,_128,_0,_0.7)] justify-center items-center h-10"
              onClick={() => {
                  setColor(color == "green" ? "black" : "green");
                  
              }}>
                  GREEN
              </button></>
            ):color == "blue"?(
              <>
            <button className="border rounded-2xl flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 drop-shadow-lg shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)] justify-center items-center"
            onClick={() => {
                setColor(color == "blue" ? "black" : "blue");
                
            }}>
                BLUE
            </button></>
            ):(
              <><button className="border rounded-2xl flex bg-red-800 w-23 py-4 px-6 m-5 h-10 drop-shadow-lg shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)] justify-center items-center"
              onClick={() => {
                  setColor("red");
                  
              }}>
                  RED
              </button>
              <button className="border rounded-2xl  flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 drop-shadow-lg shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)] justify-center items-center"
              onClick={() => {
                  setColor("blue");
                  
              }}>
                  BLUE
              </button>
              <button className="border rounded-2xl drop-shadow-lg shadow-[0_10px_20px_rgba(0,_128,_0,_0.7)] flex bg-green-800 w-23 py-4 px-6 m-5 justify-center items-center h-10"
              onClick={() => {
                  setColor("green");
                  
              }}>
                  GREEN
              </button></>
            )
}
        </div>
    );
};

export default useStateTask;