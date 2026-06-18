import React from 'react'
import img1 from '../assets/img1.webp'
import location from '../assets/location.svg'
import calendar from '../assets/calendar.svg'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import rarrow from '../assets/right-arrow.svg'

function Upcoming() {
  const conf =[
    {
      "id":1,
      "img": img1,
      "text":'International conference on Machine learning Big data management Cloud and Computing (ICMBDC)',
      "date":'01 Aug, 2026',
      "location":'Saitama',
    },
    { 
      "id":2,
      "img": img2,
      "text":'International Conference on Machine Learning and Chat GPT (ICMLCG)',
      "date":'11 Aug, 2026',
      "location":'Bangkok',
    },
    { 
      "id":3,
      "img": img3,
      "text":'International Conference on Linguistics and English Literature Linguistics (ICLELL)',
      "date":'25 Nov, 2026',
      "location":'Hanoi',
    },
    { 
      "id":4,
      "img": img4,
      "text":'International Conference on Recent Advances in Medical, Medicine and Health Sciences (ICRAMMHS)',
      "date":'10 Sep, 2026',
      "location":'Belgrade',
    },
    { 
      "id":5,
      "img": img1,
      "text":'World Congress on Emerging Trends in Artificial Intelligence (WCETAI)',
      "date":'16 Sep, 2026',
      "location":'New York',
    },
    { 
      "id":6,
      "img": img2,
      "text":'International Multidisciplinary Conference on Education, Research, Innovation, and Management (IMCERIM-2026)',
      "date":'27 Jul, 2026',
      "location":'Seoul',
    },
  ]
  return (
    <div className='text-[#0b3c68]'>
        <div className='text-3xl font-bold text-center p-10'>Upcoming International Conferences 2026</div>
        <div className='px-30  flex flex-wrap gap-6'>
        {conf.map((confs)=>{
          return(
        
        <div className='w-80 bg-gray-100 rounded-xl relative'key={confs.id}>
            <div className='p-5'>
                <img className='rounded-xl w-70 h-30' src={confs.img} alt="" />
            </div>
            <div className='p-5  font-bold'>{confs.text}</div>
            <div className='px-5 py-1'>
              <div className='flex pl-2 py-1 rounded bg-gray-300 text-black w-65'><img className='pr-2' src={calendar} alt="" />{confs.date}</div>
            </div>
            <div className='px-5 py-1'>
              <div className='flex pl-2 py-1 rounded bg-gray-300 text-black w-65'><img className='pr-2' src={location} alt="" />{confs.location}</div>
            </div>
            <div>
               <span className="w-full h-[3px] bg-gray-700 rounded-full" />
            </div>
           
            <div className='pl-50 py-7'>
              <button className='bg-[#0b3c68] text-white px-3 py-1 font-semibold rounded absolute '>Details</button>
            </div>
        </div>
        
          )
        })}
            </div>
            <center>
               <div className='py-10 w-full justify-center'><button className='flex bg-[#0b3c68] text-white w-60 pl-7 rounded-3xl font-bold py-2'>View All Conferences <img className='pl-2 w-8' src={rarrow} alt="" /></button></div>
            </center>
            </div>
  )
}

export default Upcoming