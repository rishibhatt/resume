import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchBlog = () => {

    const [blog,setBlog] = useState([])
    useEffect (() => {
        fetchData();
    },[]) ;
        
    
    const fetchData = () => {
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bhattrishu24")
        .then((response) => {
            console.log(response.data.items);
            setBlog(response.data.items)
        } )
    }
    return(
        <div id="blog">
        <h1 className="mt-10 text-4xl  font-extrabold text-center md:text-6xl" >Blogs</h1>
       
        <div className="flex-column md:flex">{
        blog.map((value) => {
            return(
                
                    <div className="max-w-sm rounded mt-10 mb-10 mx-auto shadow-lg md:max-w-lg md:mt-15">
                        <img className="w-full" src={value.thumbnail} alt={value.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{value.title}</div>
                            <p className="text-gray-700 text-base truncate">
                                {value.description}
                            </p>
                        </div>
                        
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value.categories[0]}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value.categories[1]}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value.categories[2]}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value.categories[3]}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value.categories[4]}</span>
                
                        </div>
                        <div className="px-6 pb-3">
                            <a className = "underline text-blue-600 hover:text-blue-800 cursor-pointer " href={value.link}>Read Full Article</a>
                        </div>
                    </div>
                
            );
        })
       }</div> 
        </div>
    );
}
export default FetchBlog;

