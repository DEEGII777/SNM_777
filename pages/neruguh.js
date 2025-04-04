import React,{ useState } from "react"; 
const useStateTask = () => {
    const [ner, setClick] = useState("Suragch");
    const [firstName, setFirstName] = useState('Suragch');
    return(
        <div className="bg-black h-screen flex justify-center">
        <div className="mt-10 w-96 bg-black h-screen flex flex-row justify-center justify-evenly">
            <p className="text-white text-2xl ml-2 font-bold">Name:</p>
            <div className="p-0 border-1 border-white h-7 rounded-md w-29">
                <input placeholder="Ner" className="text-white ml-2" onChange={e => setFirstName(e.target.value)}/>
            </div> 
            <p className="text-white ml-4 font-bold">Hi?</p>
            {firstName === '' ? (
            <p className="text-white ml-4 font-bold">Suragch?</p>
            ) : (
            <p className="text-white ml-4 font-bold">{firstName}?</p>
            )} 
        </div>
        </div>
    );
};

export default useStateTask; 