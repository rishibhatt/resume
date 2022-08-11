import React from "react";
import Resume from './Rishab2022.pdf'
import Vector from './Vector.png'
const Main = () => {
    return(
        <div className="container  mr-0 flex flex-col md:flex-row w-full" id="main" >
            <div className="flex-1 ml-4 rounded-md border border-black  mt-12 shadow-xl  " >
            
                <h1 className="p-5 mt-3 mx-0 text-2xl text-center md:text-6xl md:w-50 md:text-left md:pt-16  ">Hey 👋 , My name is <span className="font-bold">Rishab Bhatt</span> & I am a software dev.</h1>
                <a href={Resume}>
                    <button className="rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-pink-600 hover:to-fuchsia-600 ml-4 mt-2 mb-2 text-white  p-3 md:h-15 md:text-3xl md:p-4 md:bottom-2 hover:shadow-lg hover:shadow-black-500/50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">View Resume</button>  </a>
            </div>
            
            <div className="ml-3  mt-4   flex-1">
                <img src={Vector} className="pt-5" />
            </div>
        </div>  
    )
}
export default Main;