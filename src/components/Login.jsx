import { useState , useEffect } from 'react';
import React from "react";
import google from '../assets/google.svg'
import logo from '../assets/logo.webp'
import { useNavigate } from 'react-router-dom';
function Login() {
   const [isScrolled, setIsScrolled] = useState(false)
   const navigate=useNavigate();

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
    <div>

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
                  <button onClick={() => navigate("/signup")} className='hover:bg-red-600 bg-red-500 rounded-3xl py-[7px] px-4 absolute right-40'>Sign up</button>
                  </div>

      <div className="min-h-screen flex items-center justify-center bg-[#0b3c68]">



      <div className="bg-[#14558f] p-8 rounded-3xl text-white shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-2">Welcome Guest</h1>
        <p className="text-white mb-6">Sign in to your dashboard</p>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"/>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input type="password" placeholder="********" className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"
          />
        </div>

     
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
          Sign In
        </button>

        <p className="text-center my-4 text-white">or</p>

        <button className="w-full border p-3 flex text-center gap-2 rounded-lg">
         <img className="ml-15" src={google} alt="" /> Sign in with Google
        </button>

    
        <div className="flex justify-between mt-6 text-sm">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>

          <p className="text-red-500">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;