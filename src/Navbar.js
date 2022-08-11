import React, { useState } from "react";


const Navbar = () => {
    const [theme, setTheme] = useState('🌞')
    const [mode,setMode] = useState('light')
    
   const toggleBtn = () => {
    if(theme == '🌞')
    {
        setTheme('🌙')
        setMode('dark')
        
    }
    else
    {
        setTheme('🌞')
        setMode('light')
        
    }
   }
    
    return(
        <nav className="flex flex-row top-0  border-b-2 border-black sticky backdrop-blur white dark:bg-gray-500 text-black">
            <div className="font-bold font-Rye m-5 p-3 text-3xl " >
                <a href="#" className="underline decoration-4 underline-offset-4 drop-shadow-lg shadow-slate-900 decoration-black-500">Rishab</a>
            </div>
            <div className="pt-1 md:pr-6 text-lg font-serif ml-8 mt-5 md:m-5 md:scroll-ml-64 md:space-x-8 w-screen text-right">
                <a href="#main" className="p-3">Home</a>
                <a href = "#blog" className="p-3">Blogs</a>
                <a href="#contact" className="p-3">Contact</a>
                <button className="p-3 w-10 border-l-2 text-xl" onClick={toggleBtn}>{theme}</button>
            </div>
        </nav>
    );
}

export default Navbar;