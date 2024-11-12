import { useState } from "react";

  function NumberCounter(){
    const [count , setCount] = useState(1)
    return(
        <div className="bg-black text-white h-[500px] flex justify-center items-center">
        <div className="flex flex-row gap-5 items-center">
        <button className="bg-red-500 text-5xl p-5" onClick={()=>setCount(0)}>
            -
        </button>
        <p className="text-5xl text-white"> {count}</p>
        <button className="bg-red-500 text-5xl p-5" onClick={()=>setCount(count+5)}>
            +
        </button>
        </div>
        </div>
    )
}

export default NumberCounter;