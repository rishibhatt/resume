import { useState } from 'react';
import './App.css';
import Contact from './Contact';
import FetchBlog from './FetchBlog';
import Main from './Main';
import Navbar from './Navbar';


function App() {

  
  return (
    
    <div className='App scroll-smooth	 h-screen bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gray-500 overflow-auto'>
      <Navbar />
      <Main />
      <FetchBlog />
      <Contact />
    </div>
  );
}

export default App;
