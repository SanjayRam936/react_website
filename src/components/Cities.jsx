import React from 'react'
import rarrow from '../assets/right-arrow.svg'


function Cities() {
    const cities =[
        {
            "id":1,
            "city":' Abu Dhabi',
        },
        {
            "id":2,
            "city":' Bali',
        },
        {
            "id":3,
            "city":'Bangalore',
        },
        {
            "id":4,
            "city":' Bangkok',
        },
        {
            "id":5,
            "city":' Chennai',
        },
        {
            "id":6,
            "city":'Beijing',
        },
        {
            "id":7,
            "city":'Delhi',
        },
        {
            "id":8,
            "city":'Mumbai',
        },
        {
            "id":9,
            "city":'Singapore',
        },
        {
            "id":10,
            "city":'Tokyo',
        },
        {
            "id":11,
            "city":' Abu Dhabi',
        },
        {
            "id":12,
            "city":' Bali',
        },
        {
            "id":13,
            "city":'Bangalore',
        },
        {
            "id":14,
            "city":' Bangkok',
        },
        {
            "id":15,
            "city":' Chennai',
        },
        {
            "id":16,
            "city":'Beijing',
        },
        {
            "id":17,
            "city":'Delhi',
        },
        {
            "id":18,
            "city":'Mumbai',
        },
        {
            "id":19,
            "city":'Singapore',
        },
        {
            "id":20,
            "city":'Tokyo',
        },

    ]
  return (
    <div>
        <div className='text-3xl mb-7 text-[#0b3c68] text-center font-bold'>Conference Cities</div>
        <div className='py-3 flex flex-wrap gap-5 px-30'>
        {cities.map((city)=>{
            return(
                
                <div className='bg-gray-100 text-[#0b3c68] font-semibold shadow-black w-45 py-3 text-center rounded-xl'key={city.id}>
                    {city.city}
                </div>
                
            )
        })}
        </div>
        <center>
         <div className='py-10 w-full justify-center'><button className='flex bg-[#0b3c68] text-white w-45 pl-7 rounded-3xl font-bold py-2'>More Places <img className='pl-2 w-8' src={rarrow} alt="" /></button></div>
        </center>
    </div>
    
  )
}

export default Cities