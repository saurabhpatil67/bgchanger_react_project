import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"  style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
           
           <button 
           onClick={() => setColor("red")}
           className='outline-none px-4 bg-red-600 rounded-2xl text-white shadow-2xl cursor-pointer'>Red</button>

           <button 
           onClick={() => setColor("green")}
           className='outline-none px-4 bg-green-600 rounded-2xl text-white shadow-2xl cursor-pointer'>Green</button>

           <button
           onClick={() => setColor("blue")}
           className='outline-none px-4 bg-blue-600 rounded-2xl text-white shadow-2xl cursor-pointer'>Blue</button>

           <button 
           onClick={() => setColor("yellow")}
           className='outline-none px-4 bg-amber-400 rounded-2xl text-white shadow-2xl cursor-pointer'>Yellow</button>

           <button 
           onClick={() => setColor("cyan")}
           className='outline-none px-4 bg-cyan-500 rounded-2xl text-white shadow-2xl cursor-pointer'>Cyan</button>

           <button
           onClick={() => setColor("fuchsia")}
           className='outline-none px-4 bg-fuchsia-700 rounded-2xl text-white shadow-2xl cursor-pointer'>Fuchsia</button>

           <button 
           onClick={() => setColor("indigo")}
           className='outline-none px-4 bg-indigo-700 rounded-2xl text-white shadow-2xl cursor-pointer'>Indigo</button>

           <button 
           onClick={() => setColor("lime")}
           className='outline-none px-4 bg-lime-600 rounded-2xl text-white shadow-2xl cursor-pointer'>Lime</button>

           <button 
           onClick={() => setColor("orange")}
           className='outline-none px-4 bg-orange-600 rounded-2xl text-white shadow-2xl cursor-pointer'>Orange</button>

           <button 
           onClick={() => setColor("aquamarine")}
           className='outline-none px-4 bg-sky-300 rounded-2xl text-white shadow-2xl cursor-pointer'>Aquamarine</button>

           <button 
           onClick={() => setColor("darkgray")}
           className='outline-none px-4 bg-gray-500 rounded-2xl text-white shadow-2xl cursor-pointer'>Gray</button>
           

           
        </div>
      </div>
    </div>

  )
}

export default App
