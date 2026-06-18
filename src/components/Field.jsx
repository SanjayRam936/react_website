import React from 'react'


function Field() {
  const Field =[
        {
            "id":1,
            "Field":'Business'
        },
        {
            "id":2,
          
            "Field":'Health'
        },
        {
            "id":3,
         
            "Field":'Mathmatics'
        },
        {
            "id":4,
            "Field":'Engineering',
        },
        {
            "id":5,
            "Field":'Physics',
           
        },
        {
            "id":6,
            "Field":'Social',
            
        },
        {
            "id":7,
            "Field":'Education',
         
        },
        {
            "id":8,
            "Field":'Law',
           
        },
        {
            "id":9,
            "Field":'Environment',
           
        },
        {
            "id":10,
            "Field":'Webinar',
            
        },
    ]
  return (
    <div>
        <div className='text-3xl mb-7 text-[#0b3c68] text-center font-bold'>Research Areas</div>
        <div className='py-3 flex flex-wrap gap-5 px-30'>
        {Field.map((Field)=>{
            return(
                
                <div className='bg-gray-100 text-[#0b3c68] font-semibold shadow-black w-45 py-7 text-center rounded-xl'key={Field.id}>
                    {Field.Field}
                </div>
                
            )
        })}
        </div>
        </div>
  )
}

export default Field