import React from 'react'
import { useState } from 'react';


function State() {
const [state, setColor] = useState("White")

  return (
    <>
    <div className={`min-h-screen flex flex-col items-center justify-center transition duration-500 `} style={{ backgroundColor:state}}>
    <h1 className="text-2xl font-bold mb-6">اضغط لتغيير لون الخلفية</h1>
    <div className="flex gap-4">
    <button onClick={()=> setColor("Red")} className="bg-red-600 text-white px-5 py-2 rounded">Red Background</button>
    <button onClick={()=> setColor("Blue")} className="bg-blue-600 text-white px-5 py-2 rounded">Blue Background</button>
    <button onClick={()=> setColor("Green")} className="bg-green-600 text-white px-5 py-2 rounded">Green Background</button>
    <button onClick={()=> setColor("Yellow")} className="bg-yellow-600 text-white px-5 py-2 rounded">Yellow Background</button>
    </div>
     </div>
    </>
    
  )
}


export default State