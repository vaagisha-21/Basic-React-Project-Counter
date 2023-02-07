import './App.css';
import { useState } from "react";

function App1(){
    const [counter, setCounter] = useState(0);

    const incrementer = () =>{
        // setCounter(count + 1);
        setCounter((prev) => prev + 1);  
        // It is better to use this notation as it will always compute on the prev state value only 
        // otherwise it might be possible that counter value didn't update bt increment has been performed. 
    }

    const decrementer = () =>{
        setCounter((prev) => prev - 1);
    }

    return(
        <div className="bg-slate-500 h-screen p-8">
            <div className='container w-1/2 absolute top-20 left-80 rounded-lg'>
                <p className='text-center text-8xl text-white p-6 mt-8 font-serif'>Counter </p>
                <p className='text-center text-8xl text-white font-sans pb-10'>{counter}</p>
                <div className='flex items-center justify-center p-8 mb-8'>
                    <button 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-2xl py-2 px-4 border rounded-l" 
                        onClick={decrementer}>
                        Decrement
                    </button>
                    <button 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-2xl py-2 px-4 border" 
                        onClick={()=>{setCounter(count => {return count = 0});}}>
                        Reset
                    </button>
                    <button 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-2xl py-2 px-4 border rounded-r" 
                        onClick={incrementer}>
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App1;