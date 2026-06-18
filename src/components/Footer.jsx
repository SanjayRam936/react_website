import React from 'react'
import logo from '../assets/logo.webp'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import telegram from '../assets/telegram.svg'
import twitter from '../assets/twitter.svg'
import wiki from '../assets/wiki.svg'
import youtube from '../assets/youtube.svg'
import location from '../assets/location.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'

function Footer() {
  return (
    <div className='bg-[#0b3c68] mt-5 text-white'>
        <div className='bg-[#0b3c68] flex mt-5 text-white'>
        <div className='w-55 ml-35 py-10 text-gray-400'>
            <img className='w-40 pb-5' src={logo} alt="" />
            The leading global platform for academics, researchers, and professionals to discover and register for, and promote conferences worldwide.
        </div>
        <div className='px-15 text-gray-400 py-10'>
           <h1 className='text-xl text-gray-100 font-semibold'>Quick Links</h1> <br /> 
           <h1 className='pb-3'>About</h1>
           <h1 className='pb-3'>Terms Of Use</h1>
           <h1 className='pb-3'>Cookie Policy</h1>
           <h1 className='pb-3'>Privacy Policy</h1>
           <h1 className='pb-3'>Conference Alerts</h1>
           <h1 className='pb-3'>Subscribe</h1>
           <h1 className='pb-3'>Verification Policy</h1>
           <h1 className='pb-3'>Think. Check. Attend</h1>
           <h1 className='pb-3'>Sitemap</h1>
           <h1 className='pb-3'>Careers</h1>
        </div>
        <div className='px-15 text-gray-400 py-10'>
           <h1 className='text-xl text-gray-100 font-semibold'>Browse</h1> <br /> 
           <h1 className='pb-3'>Contact Us</h1>
           <h1 className='pb-3'>F.A.Q.</h1>
           <h1 className='pb-3'>Help</h1>
           <h1 className='pb-3'>Blog</h1>
           <h1 className='pb-3'>Conference Partner</h1>
           <h1 className='pb-3'>Journals</h1>
           <h1 className='pb-3'>All Events</h1>
           <h1 className='pb-3'>Webinar</h1>
        </div>
        <div className='px-15 text-gray-400 w-100 py-10'>
           <h1 className='text-xl text-gray-100 font-semibold'>Get in Touch</h1> <br /> 
           <h1 className='pb-3 flex gap-1'><img src={location} alt="" />Block-A, ITR Building, Khandagiri, Bhubaneswar, Odisha 751030</h1>
           <h1 className='pb-3 flex gap-1'><img src={mail} alt="" />Email For support & sales info@allconferencealert.com</h1>
           <h1 className='pb-3 flex gap-1'><img src={phone} alt="" />+91 8093243939</h1>
           <h1 className='pb-3 flex gap-1'><img src={facebook} alt="" /> Facebook</h1>
           <h1 className='pb-3 flex gap-1'><img src={twitter} alt="" />Twitter</h1>
           <h1 className='pb-3 flex gap-1'><img src={linkedin} alt="" />Linkedin</h1>
           <h1 className='pb-3 flex gap-1'><img src={youtube} alt="" />youtube</h1>
           <h1 className='pb-3 flex gap-1'><img src={wiki} alt="" />wikipedia</h1>
           <h1 className='pb-3 flex gap-1'><img src={instagram} alt="" />instagram</h1>
           <h1 className='pb-3 flex gap-1'><img src={telegram} alt="" />telegram</h1>
        </div>
        
    </div>
        <div className="w-full border-t border-white/20"></div>
        <div className='flex justify-between'>
            <div className='p-10'>© 2026 All Conference Alert. All Rights Reserved.</div>
            <div className='p-6'>
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
    </div>
    
  )
}

export default Footer