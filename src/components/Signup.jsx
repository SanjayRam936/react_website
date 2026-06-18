import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.webp'

function Signup() {

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
                          
                          </div>

        <div className="h-screen flex text-white justify-center items-center bg-[#0b3c68]">
      <div className=" bg-[#14558f] p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
         className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Phone No"
          className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded"
        />

        <select  className="w-full border bg-white text-[#0b3c68] p-2 mb-3 rounded" name="" id="">
                <option value="default">Choose College</option>
                <option value="Chennai">Prathyusha Engineering College</option>
                <option value="Mumbai">SRM</option>
                <option value="Kolkata">RMK</option>
                <option value="Kochi">REC</option>
              </select>

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}

         <Link className="text-red-500 ml-2" to='/login'>Login</Link>
            
          
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Signup;