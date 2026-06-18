import React from 'react'
import { useState } from 'react'
import filter from '../assets/filter.svg'

function Search() {
     const [activeTab, setActiveTab] = useState('quick');
  return (
    <div className="w-280 max-w-4l mx-auto p-6">
     
      <div className="bg-[#1e4b75] rounded-2xl p-8 shadow-lg border border-blue-900/30">
        
        
        <div className="relative flex border-b border-gray-400/30 mb-6">
          
         
          <button
            onClick={() => setActiveTab('quick')}
            className={`w-1/2 pb-3 text-center text-lg font-semibold transition-colors duration-200 relative ${
              activeTab === 'quick' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Quick Search
            
            {activeTab === 'quick' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 rounded-full" />
            )}
          </button>

         
          <button
            onClick={() => setActiveTab('advanced')}
            className={`w-1/2 pb-3 text-center text-lg font-semibold transition-colors duration-200 relative ${
              activeTab === 'advanced' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}>
            Advanced Search
          
            {activeTab === 'advanced' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 rounded-full" />
            )}
          </button>
          
        </div>

        <div className="transition-all duration-300">
          {activeTab === 'quick' ? (
         
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, topic, or location..."
                className="w-full px-6 py-4 text-gray-700 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-base md:text-lg"
              />
            </div>
          ) : (
            
            <div className='flex gap-2'>
              <select  className='bg-white text-[#1e4b75] w-50 py-2 px-1 rounded ml-3' name="" id="">
                <option value="default">Choose Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
              <select  className='bg-white text-[#1e4b75] w-50 py-2 px-1 rounded ml-3' name="" id="">
                <option value="default">Choose City</option>
                <option value="Chennai">chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Kochi">Kochi</option>
              </select>
              <select  className='bg-white text-[#1e4b75] w-50 py-2 px-1 rounded ml-3'  id="">
                <option value="default">Choose Topic</option>
                <option value="Accounts">Accounts</option>
                <option value="Banking">Banking</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
              <select className='bg-white text-[#1e4b75] w-50 py-2 px-1  ml-3 rounded' name="" id="">
                <option value="default">Choose Month</option>
                <option value="Janary">Janary</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
              </select>
              
              <button className='flex font-bold bg-red-500 py-3 px-2 w-50 ml-3 rounded hover:w-51 hover:bg-red-700 items-center text-center'><img src={filter} alt="" /> Search</button>
              
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Search