import React, { useState, useEffect } from 'react'
import sun from '../assets/sun.svg'
import logo from '../assets/logo.webp'
import Search from './search'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import telegram from '../assets/telegram.svg'
import twitter from '../assets/twitter.svg'
import wiki from '../assets/wiki.svg'
import youtube from '../assets/youtube.svg'
import Detail from './Detail'
import Upcoming from './Upcoming'
import Cities from './Cities'
import Field from './Field'
import Login from './Login'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import avatar from '../assets/avatar.svg'
import Avatar from './Avatar'

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate();
 

  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
   
  return (
    <div className='w-full overflow-x-hidden'>           
            <div className={`flex py-7 justify-between px-85 items-center text-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b3c68]/80 backdrop-blur-md' : 'bg-[#0b3c68]'}`}>
            <button className=' absolute left-30'><img className='w-40 hover:w-41' src={logo} alt="" /></button>
            <button onClick={() => navigate("/")} className='font-bold hover:text-red-500'>Home</button>
            <button className='font-bold hover:text-red-500'>About</button>
            <button className='font-bold hover:text-red-500'>Contact</button>
            <button className='font-bold hover:text-red-500'>Subscribe</button>
            <button className='font-bold hover:text-red-500'>FAQ</button>
            <button className='font-bold hover:text-red-500'>Blog</button>
            <button className='font-bold hover:text-red-500'>Journals</button>
            <button className='font-bold hover:text-red-500'>Help</button>
            <button onClick={() => navigate("/login")} className='hover:bg-red-600 bg-red-500 rounded-3xl py-[7px] px-4 absolute right-40'>Login</button>
            <button className=' absolute right-30'><img className='w-7' src={sun} alt="" /></button>
            <Avatar/>
            
        
          </div>
         <div className='bg-[#0b3c68] h-143 w-full  text-gray-300 '>
        
       <div className='py-30 flex flex-col items-center'>
          <div className='text-5xl font-bold w-150 text-center'>
            All Conference Alert
          </div>
          <div>
            <Search/>
          </div>
          <div className='flex items-center gap-3 px-5 py-2 mt-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-lg" '>
            <button><img className='' src={facebook} alt="facebook" className='w-6' /></button>
            <button><img className='' src={twitter} alt="facebook" className='w-6' /></button>
            <button><img className='' src={linkedin} alt="facebook" className='w-6' /></button>
            <button><img className='' src={youtube} alt="facebook" className='w-6' /></button>
            <button><img className='' src={wiki} alt="facebook" className='w-6' /></button>
            <button><img className='' src={instagram} alt="facebook" className='w-6' /></button>
            <button><img className='' src={telegram} alt="facebook" className='w-6' /></button>
          </div>
        </div>
    </div>
    <Detail/>
    <Upcoming/>
    <Cities/>
    <Field/>
    <Footer/>
    </div>
   
  )
}

export default Hero