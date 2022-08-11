import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebookF, faInstagram, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
function Contact() {
  return (
    <div className='w-screen h-48 md:h-56  border-white border-t-2 bg-gradient-to-r from-teal-100 to-rose-100 ' id="contact">
        <div className='mt-10 p-5 h-28 text-lg space-x-8 md:space-x-16 flex flex-row '>
            <h3 className='p-3 text-2xl md:text-5xl'>Contact Me</h3>
            <a href='https://www.facebook.com/rishab.bhatt.969'><FontAwesomeIcon icon={faFacebookF} className='h-8 w-8 mt-2 ml-5 md:h-14 md:w-14 md:mt-1 rounded-full bg-inherit shadow-md hover:bg-blue-500 p-2 hover:text-white'  /></a>
            <a href=''><FontAwesomeIcon icon={faDiscord} className='h-8 w-8 p-2 mt-2 ml-5 md:h-14 md:w-14 md:mt-1 rounded-full bg-inherit shadow-md hover:bg-indigo-500 hover:text-white' /></a>
            <a href='https://www.instagram.com/rishibhatt.007/'><FontAwesomeIcon icon={faInstagram} className='h-8 w-8 p-2 mt-2 ml-5 md:h-14 md:w-14 md:mt-1  rounded-full bg-inherit shadow-md hover:bg-pink-600 hover:text-white' /></a>
            <a href='https://www.linkedin.com/in/rishab-bhatt-7ba7111ab/'><FontAwesomeIcon icon={faLinkedin} className='h-8 w-8 p-2 mt-2 ml-5 md:h-14 md:w-14 md:mt-1  rounded-full bg-inherit shadow-md hover:bg-blue-600 hover:text-white' /></a>
            <a href='https://medium.com/@bhattrishu24'><FontAwesomeIcon icon={faMediumM} className='h-8 w-8 p-2 mt-2 ml-5 rounded-full md:h-14 md:w-14 md:mt-1  bg-inherit shadow-md hover:bg-black hover:text-white ' /></a>    
        </div>
        <footer className='md:mt-8 pb-3'>
            <p className='text-center'> Made with ❤️ </p>
        </footer>
        
        
    </div>
  )
}

export default Contact