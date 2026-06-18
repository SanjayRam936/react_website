import React from 'react'

function Detail() {
  return (
    <div className='flex px-30 py-20 gap-5'>
        <div className='w-150'>
            <div className='text-[#0b3c68] text-4xl font-bold'>International Conferences 2026</div>
            <br />
            <div>
            <p>With AllConferenceAlert, explore the <b>list of International Conferences 2026 </b>across multiple disciplines, including science, technology, medicine, business, education, engineering, and more. Discover <b>global events</b> happening in various countries and browse conferences by subject, location, and month to find the most relevant opportunities for your academic and professional goals.</p>
            <br />
            <p> What is Conference?</p>
            <br />
            <p><b>Conferences</b> are professional academic meetings that bridge gaps between industry scholars, experts, and researchers from diverse fields, offering a platform to share viewpoints, present research papers, and engage in meaningful academic discussions.</p> 
            <br />
            <p>How can I find Upcoming Conferences in my field?</p>
            <br />
            <p> We make it simple for you to find <b>Upcoming Conferences</b> that match your interests. You can search by subject area, country, city, or specific month. Our advanced filtering options allow you to narrow down results quickly so you can focus only on conferences that align with your research or career objectives.</p>
            <br />
            <button className='text-[#0b3c68]'>View more
                 <span className="hover:absolute bottom-0 left-0 hover:w-full hover:h-[3px] hover:bg-[#0b3c68] hover:rounded-full" />
            </button>
            </div>
        </div>
        <div className=''>
            <div className='bg-gradient-to-r from-[#062846] to-[#2d6fa9] text-white rounded-2xl py-4 w-100 pr-40 pl-3 '> 
              <div className='flex'>
                <h1 className='text-3xl font-bold'>50k+</h1>
                <button className='text-black bg-yellow-400 font-semibold px-5 py-1 text-[12px] 
                absolute right-39 rounded-2xl'>Active
                </button>
                </div>       
            <h1 className='font-semibold'>Live Conferences Right Now</h1>
           <h1 className='text-[11px] py-3'>Join researchers from 150+ countries</h1>
            </div>
            <div className='w-100 mt-3 flex gap-3 justify-between '>
                 <div>
                    <div className='bg-gray-100 border-gray-700 shadow-gray-700 w-50 rounded-2xl py-3 pr-5 pl-3 '> 
              <div className='flex'>
                <h1 className='text-3xl font-bold'>1M+</h1>
                </div>       
            <h1 className='font-semibold'>Monthly Visitors</h1>
           <h1 className='text-[11px] py-3'>+23% from last month</h1>
            </div>
                 </div>
                 <div>
                    <div className='bg-gray-100 shadow-gray-700 rounded-2xl py-3 w-50 pr-5 pl-3 '> 
              <div className='flex'>
                <h1 className='text-3xl font-bold'>330+</h1>
                </div>       
            <h1 className='font-semibold'>Diverse Topics</h1>
           <h1 className='text-[11px] py-3'>AI, Medicine, Engineering</h1>
            </div>
                 </div>
            </div>
            <div className='w-100 mt-3 flex gap-3 justify-between'>
                 <div>
                    <div className='bg-gray-100  shadow-gray-700 rounded-2xl py-3 pr-5 w-50 pl-3 '> 
              <div className='flex'>
                <h1 className='text-3xl font-bold'>150+</h1>
                </div>       
            <h1 className='font-semibold'>Countries Represented</h1>
           <h1 className='text-[11px] py-3'>Countries Represented</h1>
            </div>
                 </div>
                 <div>
                    <div className='bg-gray-100 shadow-gray-700 rounded-2xl w-50 py-3 pr-5 pl-3 '> 
              <div className='flex'>
                <h1 className='text-3xl font-bold'>100k+</h1>
                </div>       
            <h1 className='font-semibold'>Expert Speakers</h1>
           <h1 className='text-[11px] py-3'>World‑renowned faculty</h1>
            </div>
                 </div>
            </div>
           

        </div>
    </div>
  )
}

export default Detail