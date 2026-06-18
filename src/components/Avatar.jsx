import { useState } from "react";
import React from "react";
import avatar from '../assets/avatar.svg'
import { useNavigate } from "react-router-dom";

function Avatar() {
  const [open, setOpen] = useState(false);
  const navigate =useNavigate();

  return (
    <div className="relative ">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2"
      >
        <img className='w-8 hover:size-[35px]' src={avatar} alt="" />
      </button>
      

      {open && (
        <div className="absolute top-full left-0 w-40 bg-[#14558f] text-white shadow-xl rounded-lg p-6 z-50">
            <div className="bg-gray-200 text-[#0b3c68] rounded font-bold p-1 text-center"><button onClick={() => navigate("/login")}>Login</button></div>
            <div className="bg-gray-200 text-[#0b3c68] mt-2 rounded font-bold p-1 text-center"><button onClick={() => navigate("/signup")}>Sign up</button></div>
          
         
        </div>
      )}
    </div>
  );
}

export default Avatar;